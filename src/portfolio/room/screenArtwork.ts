import type { SectionScreen } from "./sectionScreens";

export const screenImages = new Map<string, HTMLImageElement>();
const FONT = "Geist, 'Helvetica Neue', Arial, sans-serif";

function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
}

export function drawScreen(canvas: HTMLCanvasElement, card: SectionScreen, section: string, index: number) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const styles = getComputedStyle(document.documentElement);
  const token = (name: string) => styles.getPropertyValue(name).trim();
  const bg = token("--screen-background"), fg = token("--screen-foreground"), accent = token("--screen-accent"), muted = token("--screen-muted"), chip = token("--screen-chip");
  const W = canvas.width, H = canvas.height, pad = 52;
  ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = accent; ctx.fillRect(0, 0, 10, H);

  // Header: tag pill + index
  const tag = (card.tag || section).toUpperCase();
  ctx.font = `700 24px ${FONT}`;
  const tw = ctx.measureText(tag).width + 36;
  ctx.fillStyle = chip; roundRect(ctx, pad, 40, tw, 44, 22); ctx.fill();
  ctx.fillStyle = accent; ctx.fillText(tag, pad + 18, 71);
  ctx.fillStyle = muted; ctx.font = `600 24px ${FONT}`; ctx.textAlign = "right";
  ctx.fillText(String(index + 1).padStart(2, "0"), W - pad, 71); ctx.textAlign = "left";

  const lines = (text: string, y: number, size: number, weight: number, maxWidth: number, maxLines = 6) => {
    ctx.font = `${weight} ${size}px ${FONT}`;
    let line = "", row = 0;
    for (const paragraph of text.split("\n")) {
      for (const word of paragraph.split(" ")) {
        const next = line ? `${line} ${word}` : word;
        if (ctx.measureText(next).width > maxWidth && line) {
          if (row < maxLines) ctx.fillText(line, pad, y + row * size * 1.3);
          row++; line = word;
        } else line = next;
      }
      if (row < maxLines) ctx.fillText(line, pad, y + row * size * 1.3);
      row++; line = "";
    }
    return y + row * size * 1.3;
  };

  const image = card.image ? screenImages.get(card.image) : undefined;
  if (image) {
    const top = 108, areaH = H - top - 110;
    const scale = Math.min((W - 2 * pad) / image.naturalWidth, areaH / image.naturalHeight);
    const w = image.naturalWidth * scale, h = image.naturalHeight * scale;
    ctx.drawImage(image, (W - w) / 2, top + (areaH - h) / 2, w, h);
    ctx.fillStyle = fg; lines(card.title, H - 62, 34, 700, W - pad * 2 - 50, 1);
  } else {
    ctx.fillStyle = fg;
    const bottom = lines(card.title, 168, 62, 800, W - pad * 2, 2);
    if (card.text) {
      const [org, ...rest] = card.text.split("\n");
      ctx.fillStyle = accent; const next = lines(org ?? "", bottom + 18, 44, 700, W - pad * 2, 1);
      if (rest.length) { ctx.fillStyle = fg; lines(rest.join(" "), next + 12, 40, 500, W - pad * 2, 5); }
    }
  }

  const icons = (card.icons || []).map(u => screenImages.get(u)).filter(Boolean) as HTMLImageElement[];
  icons.forEach((img, i) => {
    const s = 64, x = pad + i * (s + 22), y = H - s - 44;
    ctx.fillStyle = chip; roundRect(ctx, x - 8, y - 8, s + 16, s + 16, 16); ctx.fill();
    const k = Math.min(s / img.naturalWidth, s / img.naturalHeight);
    ctx.drawImage(img, x + (s - img.naturalWidth * k) / 2, y + (s - img.naturalHeight * k) / 2, img.naturalWidth * k, img.naturalHeight * k);
  });
  if (card.url) { ctx.fillStyle = accent; ctx.font = `700 40px ${FONT}`; ctx.textAlign = "right"; ctx.fillText("↗", W - pad, H - 50); ctx.textAlign = "left"; }
}

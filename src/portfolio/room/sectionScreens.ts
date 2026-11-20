import { certificates, resumeUrl } from "../data";
import { originalMedia } from "../media";

export type ScreenSection = "skills" | "experience" | "certificates" | "contact";
export type SectionScreen = { title: string; text?: string; image?: string | undefined; icons?: string[]; tag?: string; url?: string };
export const screenSectionTitles: Record<ScreenSection, string> = {
  skills: "Skills & services", experience: "Experience", certificates: "Certificates", contact: "Contact",
};
const icon = (names: string[]) => names.map(n => originalMedia[`/skills/${n}.svg`]).filter(Boolean) as string[];
export function getSectionScreens(section: ScreenSection): SectionScreen[] {
  if (section === "skills") return [
    { tag: "Service", title: "Web applications", text: "Fast, responsive web apps and dashboards built end to end.", icons: icon(["react", "nextJS", "typescript", "tailwind"]) },
    { tag: "Service", title: "Mobile apps", text: "Cross-platform Flutter apps for Android and iOS with Firebase backends.", icons: icon(["firebase"]) },
    { tag: "Service", title: "Backend & APIs", text: "Node.js, Express and Laravel REST APIs with secure authentication.", icons: icon(["javascript", "docker"]) },
    { tag: "Skills", title: "Frontend", text: "HTML · CSS · JavaScript · TypeScript · React · Next.js · Tailwind · Vite", icons: icon(["html", "css", "javascript", "vitejs"]) },
    { tag: "Skills", title: "Databases", text: "MongoDB · PostgreSQL · MySQL · Firebase", icons: icon(["mongoDB", "postgresql", "firebase"]) },
    { tag: "Skills", title: "Tools & design", text: "Git · Docker · Figma · Markdown · WordPress", icons: icon(["git", "docker", "figma", "markdown"]) },
  ];
  if (section === "experience") return [
    { tag: "Present", title: "System Software Developer", text: "INSA\nBuilding mobile and web applications, software development and data protection." },
    { tag: "2025 – now", title: "WordPress Developer", text: "Sefastreamline Agency\nLalibela Eco Trekking, Village Speciality Coffee and Care Clinic. Themes, plugins, performance and SEO." },
    { tag: "2025", title: "Cybersecurity Summer Camp", text: "INSA\nData Privacy Compliance Checker with Python, Streamlit and NLP: PII detection and anonymization." },
    { tag: "2025", title: "IT Graduate", text: "Wolkite University\nInformation Technology. Student representative and Dina Mart final-year project." },
  ];
  if (section === "certificates") return certificates.map(c => ({ title: c.title, image: c.image, url: c.link }));
  return [
    { tag: "Email", title: "ezadinbadru55@gmail.com", text: "Best way to reach me", url: "mailto:ezadinbadru55@gmail.com" },
    { tag: "Phone", title: "+251 940 715 427", text: "Addis Ababa, Ethiopia · open to remote work", url: "tel:+251940715427" },
    { tag: "Resume", title: "Download my CV", text: "PDF · Ezadin Badiru", url: resumeUrl },
    { tag: "GitHub", title: "More of my work", text: "github.com/ezadin2", url: "https://github.com/ezadin2" },
    { tag: "LinkedIn", title: "Ezadin Badiru", text: "Let's connect", url: "https://www.linkedin.com/in/ezadinbadru/" },
  ];
}

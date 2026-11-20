const model = { url: "/__l5e/assets-v1/49978666-6243-4349-b757-a0e3a9b6560f/room.glb" };
const titleFont = { url: "/__l5e/assets-v1/df2f7719-85b1-4fc3-8b31-707004a1416b/unione.json" };
const subtitleFont = { url: "/__l5e/assets-v1/ce900694-4e24-4b1c-9687-c3f0a00ffaf8/helvatica.json" };
const screenVideo = { url: "/__l5e/assets-v1/bc4ed7dd-dd98-44b6-98a1-88cc237e156a/arcane.mp4" };
const logo = { url: "/__l5e/assets-v1/09fe304f-6c57-42b6-b1de-4a11d9c02553/logo-e.png" };
const adminAndMobile = { url: "/__l5e/assets-v1/49b9b6dd-6e0f-4752-a642-f1bef1eaa8b5/adminandmobile.jpg" };
const proshop = { url: "/__l5e/assets-v1/08ab2fe7-0bfb-43c2-b7bb-c85954cc5685/proshop.png" };
const myTeachers = { url: "/__l5e/assets-v1/572cbc81-e1ed-46fc-a776-f4070698f5c2/project-myteachers.webp" };
const wholesale = { url: "/__l5e/assets-v1/2c2e01bc-a28c-42ee-9233-ecdf0d08b616/project-wholesale.jpg" };
const chatApp = { url: "/__l5e/assets-v1/8415a301-cf63-472c-92f8-b6195be54615/chatApp.jpg" };
const audio = { url: "/__l5e/assets-v1/a8ee44eb-d0d8-44be-ab58-33a360dc3359/audio.png" };

export const roomAssets = {
  model: model.url,
  titleFont: titleFont.url,
  subtitleFont: subtitleFont.url,
  screenVideo: screenVideo.url,
  logo: logo.url,
};

export const GITHUB_PROFILE = "https://github.com/ezadin2";
export type RoomProject = { image: string; url: string; mobileUrl?: string; imageOnly?: boolean };

export const roomProjects: RoomProject[] = [
  { image: adminAndMobile.url, url: "https://aregenkibet.web.app", mobileUrl: "https://adminpanel-bx43q6fid-ezadin-badrus-projects.vercel.app/", imageOnly: true },
  { image: proshop.url, url: "https://github.com/ezadin2/proshop-demo.git", imageOnly: true },
  { image: myTeachers.url, url: "https://abuanwar072.github.io/Flutter-Responsive-Admin-Panel-or-Dashboard/", imageOnly: true },
  { image: wholesale.url, url: "https://github.com/ezadin2/Flight-Booking-App-Flutter.git", imageOnly: true },
  { image: chatApp.url, url: "https://github.com/ezadin2/nextjs-setup", imageOnly: true },
  { image: audio.url, url: "https://github.com/ezadin2/Audio-player.git", imageOnly: true },
  { image: "/__l5e/assets-v1/20e88b95-10a2-4d36-94e3-a42dfc805c92/quran.png", url: "https://hasset-delivery-front-end-side.onrender.com/" },
  { image: "/__l5e/assets-v1/7a1f208d-c6b6-4e56-864a-2353e6318e80/techxpert.png", url: "https://techxpert-rental-market-place.vercel.app/" },
  { image: "/__l5e/assets-v1/c035a1c3-9d7f-4cbe-879a-d4ea37a54e0f/my-quran-onrender.png", url: "https://my-quran.onrender.com/" },
  { image: "/__l5e/assets-v1/d2a05979-a9f1-4b8f-be21-531b8873ef2a/qemer.png", url: "https://qemer-final-project.vercel.app/" },
  { image: "/__l5e/assets-v1/3a14f295-f721-47b6-95b8-05e8b00a9d1b/qemer-fb.png", url: "https://ezadin2.github.io/qemer_tech_project_facebookpage/" },
];

export const ROOM_PAGE_SIZE = 6;

const images = [
  { id: 3, path: "/media/memories/picture_3.jpg" },
  { id: 6, path: "/media/memories/picture_6.jpeg" },
  { id: 2, path: "/media/memories/picture_2.jpg" },
  { id: 1, path: "/media/memories/picture_1.jpg" },
  { id: 4, path: "/media/memories/picture_4.webp" },
  { id: 5, path: "/media/memories/picture_5.jpeg" },
  { id: 7, path: "/media/memories/picture_7.jpg" },
  { id: 8, path: "/media/memories/picture_8.jpg" },
];

const hobbiesMedia = [
  {
    id: 1,
    type: "image",
    src: "/media/hobbies/picture_1.jpg",
    alt: "hobby_img",
  },
  {
    id: 2,
    type: "video",
    src: "/media/hobbies/video_1.mp4",
    alt: "hobby_mp4",
  },
  {
    id: 3,
    type: "image",
    src: "/media/hobbies/picture_2.jpg",
    alt: "hobby_img",
  },
  {
    id: 4,
    type: "video",
    src: "/media/hobbies/video_2.mp4",
    alt: "hobby_mp4",
  },
  {
    id: 5,
    type: "image",
    src: "/media/hobbies/picture_3.jpg",
    alt: "hobby_img",
  },
  {
    id: 6,
    type: "video",
    src: "/media/hobbies/video_3.mp4",
    alt: "hobby_mp4",
  },
];

const selectableObjects = [
  {
    id: 1,
    title: "About Me",
    path: "/media/selectables/DesktopMonitor.jpg",
    mesh: "Cube016_4",
    color: "#5F6C75",
    textColor: "#1D1D1D",
  },
  {
    id: 2,
    title: "Employment",
    path: "/media/selectables/OfficeChair.jpg",
    mesh: "Cube054",
    color: "#4E3C4C",
    textColor: "#FAFAFA",
  },
  {
    id: 3,
    title: "Projects",
    path: "/media/selectables/CpuTower.jpg",
    mesh: "Screenshot_2024-12-03_010419_2",
    color: "#ACA9BB",
    textColor: "#1D1D1D",
  },
  {
    id: 4,
    title: "Certifications",
    path: "/media/selectables/BonsaiCase.jpg",
    mesh: "Cube100_1",
    color: "#FAFAFA",
    textColor: "#1D1D1D",
  },
  {
    id: 5,
    title: "Teams",
    path: "/media/selectables/Picture.jpg",
    mesh: "Cube112_1",
    color: "#272522",
    textColor: "#FAFAFA",
  },
  {
    id: 6,
    title: "Hobbies",
    path: "/media/selectables/MaroonVase.jpg",
    mesh: "Vase",
    color: "#412728",
    textColor: "#FAFAFA",
  },
  {
    id: 7,
    title: "Contact Me",
    path: "/media/selectables/BeanBag.jpg",
    mesh: "LargeBeanBag",
    color: "#9B5C44",
    textColor: "#1D1D1D",
  },
];

const aboutMeParaLines = [
  "Hello! I'm Chad Laban, a passionate Software Developer with a love for crafting subtle but impactful user experiences.",
  "In my recent role at 株式会社 ゴールドバリュークリエーション (Golden Value Creation), I worked on the Okimeguri project, handling both frontend and backend development tasks. I honed my skills in code implementation, debugging, and collaboration with fellow developers.",
  "Previously, at Capella BPO, I worked on client-side web applications using modern frameworks and created a test server for endpoint creation. Before that, at Giant International Software Station Inc., I handled feature requests and dashboard customizations, further diversifying my skill set.",
  "I value the camaraderie and support from my colleagues, which made every day an opportunity for growth and collaboration. My experience as a Software Analyst at Giant International Software Station enhanced my vocal confidence through customer support and reignited my passion for software development.",
  "I love learning from people and strive for quality outputs in my work. I enjoy working with teams and learning from them. Outside work, I play FPS and single-player games, cook meals, jog occasionally, and am starting a new hobby of reading books.",
  "I look forward to connecting with fellow professionals, sharing insights, and exploring opportunities to collaborate and learn. Feel free to reach out—I'm always up for a good tech discussion or a new project venture. Let's connect!",
];

export { images, hobbiesMedia, aboutMeParaLines, selectableObjects };

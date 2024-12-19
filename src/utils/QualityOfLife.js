const images = [
  { id: 3, path: "/media/memories/picture_3.jpg" },
  { id: 6, path: "/media/memories/picture_6.jpg" },
  { id: 2, path: "/media/memories/picture_2.jpeg" },
  { id: 1, path: "/media/memories/picture_1.jpg" },
  { id: 4, path: "/media/memories/picture_4.jpeg" },
  { id: 5, path: "/media/memories/picture_5.jpg" },
  { id: 7, path: "/media/memories/picture_7.jpg" },
  { id: 8, path: "/media/memories/picture_8.webp" },
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
  "I started my first tech career as a Software Analyst, I never really saw myself as a Software Developer or a Software Engineer back then...",
  "I was thinking that my code would be messy at that time. A few months in the company, there were internal software developers that reached out and...",
  "encouraged me to apply and try out as a Software Developer, they told me that everyone has potential and it would be a waste not to try. I was a bit skeptical...",
  "but went ahead and applied, I failed in my first try. Even after that they still encouraged me to apply for the next one. On my second try, I got in...",
  "I honestly struggled during the first weeks, but I was able to catch up and on the following months...",
  "I started to implement internal projects that were under my ownership, I then realized that I like what I'm doing and how interesting it is...",
  "I'll always remember my seniors and coworkers that contributed to my growth, they made a such an impact of who I am now in my professional career...",
  "I'm now working in the software industry for 3 years, and I'm still learning and understanding something new along the way...",
  "I look forward to connecting and explore opportunities to collaborate and learn. Feel free to reach out — Let's connect!",
];

export { images, hobbiesMedia, aboutMeParaLines, selectableObjects };

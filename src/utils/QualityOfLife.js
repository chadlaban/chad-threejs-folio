import * as THREE from "three";

const createVideoTexture = (src) => {
  const video = document.createElement("video");
  video.src = src;
  video.loop = true;
  video.muted = true;
  video.play();

  const videoTexture = new THREE.VideoTexture(video);
  videoTexture.minFilter = THREE.LinearFilter;
  videoTexture.magFilter = THREE.LinearFilter;
  videoTexture.format = THREE.RGBAFormat;

  return videoTexture;
};

const clickableArr = [
  { mesh: "LargeBeanBag", color: "#9B5C44" },
  { mesh: "OfficeChair", color: "#4E3C4C" },
  { mesh: "Screen001", color: "#5F6C75" },
  { mesh: "CpuTower", color: "#ACA9BB" },
  { mesh: "MirrorCase001", color: "#FFFFFF" },
  { mesh: "Vase", color: "#412728" },
  { mesh: "BeautifulMe", color: "#272522" },
];

const images = [
  { id: 4, path: "/images/memories/analyst_team.jpg" },
  { id: 7, path: "/images/memories/giant_encompass.jpeg" },
  { id: 8, path: "/images/memories/graduation.jpeg" },
  { id: 3, path: "/images/memories/prof_serv_1.jpg" },
  { id: 2, path: "/images/memories/prof_serv_2.jpg" },
  { id: 1, path: "/images/memories/self_1.jpg" },
  { id: 5, path: "/images/memories/valaks_analyst.webp" },
  { id: 6, path: "/images/memories/morning_shift.jpeg" },
];

export { createVideoTexture, clickableArr, images };

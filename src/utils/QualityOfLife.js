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

export { createVideoTexture, clickableArr };

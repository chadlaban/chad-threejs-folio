import * as THREE from "three";

export const createVideoTexture = (src) => {
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

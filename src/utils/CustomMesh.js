import * as THREE from "three";

// bloom effect on mesh
const addBloomEffect = (object) => {
  if (object && object.material) {
    const selectedColor = object.material.color;
    const hexColor = getColorHex(selectedColor);
    object.material.emissive = new THREE.Color(hexColor); // emissive color for bloom
    object.material.emissiveIntensity = 0.8; // intensity for bloom
  }
};

const removeBloomEffect = (object) => {
  object.material.emissive.set(0);
  object.material.emissiveIntensity = 0;
};

// convert the color to a hexadecimal string
const getColorHex = (color) => {
  const hexColor = color.getHex();
  return hexColor;
};

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

export { addBloomEffect, removeBloomEffect, getColorHex, createVideoTexture };

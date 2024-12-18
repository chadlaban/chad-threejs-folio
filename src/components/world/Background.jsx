import * as THREE from "three";

export const createGradientBackground = (scene) => {
  // canvas element for background
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const gradient = context.createLinearGradient(0, 0, 0, canvas.height);

  // color stops for gradient
  gradient.addColorStop(0, "#4d4f45");
  gradient.addColorStop(0.1, "#4d4e44");
  gradient.addColorStop(0.2, "#585149");
  gradient.addColorStop(0.3, "#686056");
  gradient.addColorStop(0.4, "#877c6c");
  gradient.addColorStop(0.5, "#968977");
  gradient.addColorStop(0.6, "#b6a58d");
  gradient.addColorStop(0.7, "#7a746a");
  gradient.addColorStop(1, "#75736f");

  // apply gradient
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const texture = new THREE.CanvasTexture(canvas);

  // texture as the scenes' background
  scene.background = texture;
};

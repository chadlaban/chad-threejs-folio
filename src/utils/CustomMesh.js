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
  object.material.emissive.set(0); // reset emissive color
  object.material.emissiveIntensity = 0; // reset emissive intensity
};

// convert the color to a hexadecimal string
const getColorHex = (color) => {
  const hexColor = color.getHex();
  return hexColor;
};

export { addBloomEffect, removeBloomEffect, getColorHex };

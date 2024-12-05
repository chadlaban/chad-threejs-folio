import * as THREE from "three";

class Light {
  constructor(scene) {
    this.scene = scene;

    // add to scene
    this.createAmbientLight();
    this.createDirectionalLight();
    this.createPointLight();
  }

  createAmbientLight() {
    // Ambient light (global)
    this.ambientLight = new THREE.AmbientLight(0xffeadb, 3); // Color and intensity
    this.scene.add(this.ambientLight);
  }

  createDirectionalLight() {
    // Directional light
    this.directionalLight = new THREE.DirectionalLight(0xefefdc, 2);
    this.directionalLight.position.set(6, 4, 3); // Position the light source
    this.directionalLight.castShadow = true; // Enable shadows

    // shadow settings
    this.directionalLight.shadow.bias = -0.002;
    this.directionalLight.shadow.mapSize.width = 2048;
    this.directionalLight.shadow.mapSize.height = 2048;
    this.directionalLight.shadow.camera.near = 0.5;
    this.directionalLight.shadow.camera.far = 50;

    this.scene.add(this.directionalLight);
  }

  createPointLight() {
    // PointLight for upper wall lighting
    this.upperPointLight = new THREE.PointLight(0x8174a0, 0.8, 0); // Color, intensity, distance
    this.upperPointLight.position.set(0, 0.6, 1.5); // Position the point light
    this.upperPointLight.castShadow = true; // Enable shadows for the point light
    this.upperPointLight.shadow.bias = -0.002;
    this.upperPointLight.shadow.mapSize.width = 2048; // Shadow resolution
    this.upperPointLight.shadow.mapSize.height = 2048;

    // PointLight2 for left wall lighting
    this.leftPointLight = new THREE.PointLight(0x8174a0, 0.4, 0);
    this.leftPointLight.position.set(-0.65, 0, 1.5);
    this.leftPointLight.castShadow = true;
    this.leftPointLight.shadow.bias = -0.002;
    this.leftPointLight.shadow.mapSize.width = 2048;
    this.leftPointLight.shadow.mapSize.height = 2048;

    this.scene.add(this.upperPointLight);
    this.scene.add(this.leftPointLight);
  }

  update() {
    // Optional update logic for animated lights
    this.upperPointLight.position.x = Math.sin(Date.now() * 0.001) * 0.3; // animate left to right
  }
}

export default Light;

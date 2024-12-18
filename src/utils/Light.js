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
    this.ambientLight = new THREE.AmbientLight(0xffeadb, 3); // color, intensity
    this.scene.add(this.ambientLight);
  }

  createDirectionalLight() {
    this.directionalLight = new THREE.DirectionalLight(0xefefdc, 2);
    this.directionalLight.position.set(6, 4, 3);
    this.directionalLight.castShadow = true;

    // shadow settings
    this.directionalLight.shadow.bias = -0.002;
    this.directionalLight.shadow.mapSize.width = 2048;
    this.directionalLight.shadow.mapSize.height = 2048;
    this.directionalLight.shadow.camera.near = 0.5;
    this.directionalLight.shadow.camera.far = 50;

    this.scene.add(this.directionalLight);
  }

  createPointLight() {
    const isMobile = () => window.matchMedia("(max-width: 640px)").matches;

    // PointLight for upper-middle wall lighting
    this.upperPointLight = new THREE.PointLight(0x8174a0, 1.5, 0); // color, intensity, distance
    isMobile()
      ? this.upperPointLight.position.set(-0.4, 0.8, 1.5)
      : this.upperPointLight.position.set(-1, 0.2, 1.5);
    this.upperPointLight.castShadow = true;
    this.upperPointLight.shadow.bias = -0.002;
    this.upperPointLight.shadow.mapSize.width = 2048; // shadow resolution
    this.upperPointLight.shadow.mapSize.height = 2048;

    // PointLight for lower-left wall lighting
    this.leftPointLight = new THREE.PointLight(0x8174a0, 1, 0);
    isMobile()
      ? this.leftPointLight.position.set(-1, 0.2, 1.5)
      : this.leftPointLight.position.set(-2, -0.4, 1.5);
    this.leftPointLight.castShadow = true;
    this.leftPointLight.shadow.bias = -0.002;
    this.leftPointLight.shadow.mapSize.width = 2048;
    this.leftPointLight.shadow.mapSize.height = 2048;

    this.scene.add(this.upperPointLight);
    this.scene.add(this.leftPointLight);
  }

  update() {
    // for light movements and etc.
  }
}

export default Light;

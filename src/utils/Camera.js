import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

class Camera {
  constructor(scene, canvas) {
    this.scene = scene;
    this.canvas = canvas;

    // placeholder for sizes
    this.sizes = {
      aspect: window.innerWidth / window.innerHeight,
      frustrum: 5,
    };

    this.createPerspectiveCamera();
    this.setOrbitControls();
  }

  createPerspectiveCamera() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(
      28, // FOV
      this.sizes.aspect,
      0.1, // clipping when near
      1000 // clipping when far
    );
    this.perspectiveCamera.position.set(12, 8, -12); // initial camera position
    this.scene.add(this.perspectiveCamera);
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
    this.controls.enableDamping = true;
    this.controls.enableZoom = true;

    // limit control - vertically and by rotation
    this.controls.maxPolarAngle = Math.PI / 2;
    this.controls.minPolarAngle = Math.PI / 4;
    this.controls.minAzimuthAngle = Math.PI / 2;
    this.controls.maxAzimuthAngle = -Math.PI / 0.9999;

    this.controls.maxDistance = 25; // maximum zoom distance
  }

  resize() {
    window.addEventListener("resize", () => {
      // Update sizes
      this.sizes.width = window.innerWidth;
      this.sizes.height = window.innerHeight;
      this.sizes.aspect = this.sizes.width / this.sizes.height;

      // Update camera aspect ratio and projection matrix
      this.perspectiveCamera.aspect = this.sizes.aspect;
      this.perspectiveCamera.updateProjectionMatrix();
    });
  }

  update() {
    this.controls.update();
  }
}

export default Camera;

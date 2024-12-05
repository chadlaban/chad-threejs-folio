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
    this.createOrthographicCamera();
    this.setOrbitControls();
  }

  createPerspectiveCamera() {
    this.perspectiveCamera = new THREE.PerspectiveCamera(
      28, // FOV
      this.sizes.aspect, // Aspect Ratio
      0.1, // Near Clipping Plane
      1000 // Far Clipping Plane
    );
    this.perspectiveCamera.position.set(12, 8, -12); // Initial camera position
    this.scene.add(this.perspectiveCamera);
  }

  createOrthographicCamera() {
    this.orthographicCamera = new THREE.OrthographicCamera(
      (-this.sizes.aspect * this.sizes.frustrum) / 2,
      (this.sizes.aspect * this.sizes.frustrum) / 2,
      this.sizes.frustrum / 2,
      -this.sizes.frustrum / 2,
      -50, // Near Clipping Plane
      50 // Far Clipping Plane
    );
    this.orthographicCamera.position.set(0, 5.65, 10);
    this.orthographicCamera.rotation.x = -Math.PI / 6;
    this.scene.add(this.orthographicCamera);
  }

  setOrbitControls() {
    this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
    this.controls.enableDamping = true; // Smooth movement
    this.controls.enableZoom = true; // Enable zooming

    // limit control - vertically and by rotation
    this.controls.maxPolarAngle = Math.PI / 2;
    this.controls.minPolarAngle = Math.PI / 4;
    this.controls.minAzimuthAngle = Math.PI / 2;
    this.controls.maxAzimuthAngle = -Math.PI / 0.9999;
  }

  resize() {
    // Update perspective camera on resize
    this.sizes.aspect = window.innerWidth / window.innerHeight;
    this.perspectiveCamera.aspect = this.sizes.aspect;
    this.perspectiveCamera.updateProjectionMatrix();

    // Update orthographic camera on resize
    this.orthographicCamera.left =
      (-this.sizes.aspect * this.sizes.frustrum) / 2;
    this.orthographicCamera.right =
      (this.sizes.aspect * this.sizes.frustrum) / 2;
    this.orthographicCamera.top = this.sizes.frustrum / 2;
    this.orthographicCamera.bottom = -this.sizes.frustrum / 2;
    this.orthographicCamera.updateProjectionMatrix();
  }

  update() {
    this.controls.update();
  }
}

export default Camera;

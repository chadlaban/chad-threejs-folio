import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import {
  addBloomEffect,
  removeBloomEffect,
  createVideoTexture,
} from "./CustomMesh";
import { selectableObjects } from "./QualityOfLife";
import videoPlaceholder2 from "../assets/videos/video-playthrough.mp4";

const initializeRenderer = (mountRef) => {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  mountRef.current.appendChild(renderer.domElement);
  return renderer;
};

const initializeComposer = (renderer, scene, camera) => {
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));

  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    3, // strength
    1, // radius
    0.2 // threshold
  );
  composer.addPass(bloomPass);
  return composer;
};

const moveCamera = (camera, targetObject) => {
  const targetPosition = new THREE.Vector3();
  targetObject.getWorldPosition(targetPosition);

  const distance = 10;

  const direction = new THREE.Vector3();
  camera.getWorldPosition(direction);
  direction.sub(targetPosition).normalize().multiplyScalar(distance);

  const finalCameraPosition = targetPosition.clone().add(direction);

  const duration = 1; // animation duration in seconds
  const startPosition = camera.position.clone();
  let startTime = null;

  const animateCamera = (time) => {
    if (!startTime) startTime = time;

    const elapsedTime = (time - startTime) / 1000;
    const progress = Math.min(elapsedTime / duration, 1);

    camera.position.lerpVectors(startPosition, finalCameraPosition, progress);

    // animating until target position
    if (progress < 1) {
      requestAnimationFrame(animateCamera);
    }
  };

  requestAnimationFrame(animateCamera);
};

const addMouseListeners = (camera, model, setSelectedMesh) => {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  let selectedObject = null;
  let isDragging = false;
  let startX = 0;
  let startY = 0;

  const isMobile = () => window.matchMedia("(max-width: 640px)").matches;

  window.addEventListener("mousedown", (event) => {
    startX = event.clientX;
    startY = event.clientY;
    isDragging = false;
  });

  window.addEventListener("mousemove", (event) => {
    if (
      Math.abs(event.clientX - startX) > 5 ||
      Math.abs(event.clientY - startY) > 5
    ) {
      isDragging = true;
    }
  });

  window.addEventListener("click", (event) => {
    if (isDragging) {
      isDragging = false;
      return;
    }

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(model.children);
    if (intersects.length > 0) {
      const clickedObject = intersects[0].object;

      if (selectableObjects.find((item) => item.mesh === clickedObject.name)) {
        setSelectedMesh(clickedObject.name);

        if (selectedObject !== clickedObject) {
          if (selectedObject) removeBloomEffect(selectedObject);
          selectedObject = clickedObject;
          addBloomEffect(selectedObject);
        } else {
          removeBloomEffect(clickedObject);
          selectedObject = null;
          setSelectedMesh(null);
        }

        // camera movement only occurs for larger resolution
        if (!isMobile()) {
          moveCamera(camera, clickedObject);
        }
      }
    }
  });
};

const clock = new THREE.Clock(); // tracking time

const processModel = (gltf) => {
  const model = gltf.scene;
  const animations = gltf.animations; // animations from GLTF

  const mixer = new THREE.AnimationMixer(model);

  // play all of them once
  if (animations && animations.length) {
    animations.forEach((animation) => {
      const action = mixer.clipAction(animation);
      action.setLoop(THREE.LoopOnce); // plays only once
      action.play();
      action.clampWhenFinished = true;
    });
  }

  // process the model
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());

  const isMobile = () => window.matchMedia("(max-width: 640px)").matches;

  isMobile()
    ? model.position.set(-center.x - 1.5, -center.y + 1.6, -center.z - 1)
    : model.position.set(-center.x - 2.5, -center.y + 1, -center.z - 1);

  const videoTexture2 = createVideoTexture(videoPlaceholder2);
  model.position.sub(center);

  model.traverse((child) => {
    if (child.isMesh) {
      child.material.depthWrite = true;
      child.material.metalness = 0.5;
      child.material.roughness = 0.5;
      child.castShadow = true;
      child.receiveShadow = true;

      if (child.name === "Cube100_1") {
        child.material = new THREE.MeshPhysicalMaterial({
          roughness: 0,
          color: 0xffffff,
          ior: 3,
          transmission: 1,
        });
      }

      if (child.name === "Cube037_5") {
        child.material = new THREE.MeshBasicMaterial({
          map: videoTexture2,
        });
      }
    }
  });

  return { model, mixer };
};

const startAnimationLoop = (light, cameraSetup, renderer, scene, mixer) => {
  const animate = () => {
    requestAnimationFrame(animate);
    light.update();
    cameraSetup.update();
    renderer.render(scene, cameraSetup.perspectiveCamera);

    // progress animations
    const deltaTime = clock.getDelta(); // time between last and current frame
    if (mixer) {
      mixer.update(deltaTime);
    }
  };
  animate();
};

const loadModel = (path, onLoad, onProgress, onError) => {
  // Draco Loader
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");

  // GLTFLoader and set the Draco loader
  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);

  loader.load(path, onLoad, onProgress, onError);
};

const resizeHandler = (renderer, camera) => {
  return () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };
};

export {
  addMouseListeners,
  processModel,
  startAnimationLoop,
  loadModel,
  initializeRenderer,
  initializeComposer,
  resizeHandler,
};

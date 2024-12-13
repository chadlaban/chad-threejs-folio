import "./assets/css/main.css";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import {
  loadModel,
  processModel,
  addMouseListeners,
  startAnimationLoop,
  initializeRenderer,
  initializeComposer,
  resizeHandler,
} from "./utils/Model";
import Camera from "./utils/Camera";
import Light from "./utils/Light";
import { createGradientBackground } from "./components/world/Background";
import { Loading } from "./components/ux/Loading";
import { DynamicBox } from "./components/ux/DynamicBox";
import Popover from "./components/ui/Popover";
import { Introduction } from "./components/ui/Introduction";
import videoPlaceholder1 from "./assets/videos/name-loading-static.mp4";

// TODO
// 1. Pages and contents using JSON data !80%
// 2. Details transitions and animations !60%
// 3. Responsiveness throughout all devices !30%
// 4. Blender animation (see tutorial)
// 5. Optimize and tests
// 6. Deploy using free hosting (Vercel?)

const App = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  //** Three Scene Start */
  const [isLoading, setLoading] = useState(true);
  const [selectedMesh, setSelectedMesh] = useState(null);
  const [progress, setProgress] = useState("");
  const mountRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  useEffect(() => {
    // Three Scene
    const scene = new THREE.Scene();
    createGradientBackground(scene);
    const renderer = initializeRenderer(mountRef);
    const light = new Light(scene);
    const cameraSetup = new Camera(scene, renderer.domElement);
    initializeComposer(renderer, scene, cameraSetup.perspectiveCamera);

    loadModel(
      "/models/3rd-portfolio.glb",
      (gltf) => {
        const model = processModel(gltf.scene);
        scene.add(model);

        addMouseListeners(
          cameraSetup.perspectiveCamera,
          model,
          setSelectedMesh
        );
        startAnimationLoop(light, cameraSetup, renderer, scene);

        setLoading(false);
      },
      (xhr) => {
        const percentage = `${Math.trunc((xhr.loaded / xhr.total) * 100)}`;
        setProgress(percentage);
        if (percentage === "100") console.warn("Assets has been loaded.");
      },
      (error) => {
        console.error("An error occurred while loading the model", error);
      }
    );

    // responsive model
    const handleResize = resizeHandler(renderer, cameraSetup.perspectiveCamera);
    window.addEventListener("resize", handleResize);

    // ref value copy
    const mountNode = mountRef.current;

    // cleanup on unmount
    return () => {
      scene.clear();
      if (mountNode) mountNode.removeChild(renderer.domElement);
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleVideoEnd = () => {
    setLoading(false);
  };
  //** Three Scene End */

  // scroll event - canvas element specific
  const handleWheel = (event) => {
    const canvas = document.querySelector("canvas");
    if (event.target === canvas) {
      if (event.deltaY < 0) {
        // zoom in
        setZoomLevel((prevZoom) => Math.min(prevZoom + 0.09, 3)); // max 3x
      } else {
        // zoom out
        setZoomLevel((prevZoom) => Math.max(prevZoom - 0.09, 1)); // min 1x
      }
      event.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="w-full h-screen flex text-customGray">
      <div>
        {isLoading && (
          <Loading
            videoSrc={videoPlaceholder1}
            onVideoEnd={handleVideoEnd}
            ref={videoRef}
            progress={progress}
          />
        )}
        {/* 3d object */}
        <div
          ref={mountRef}
          className={`opacity-0 transform scale-100 ${
            !isLoading
              ? "opacity-100 scale-100 transition-all duration-1000 ease-in-out"
              : ""
          }`}
        ></div>

        {/* pages as dynamic component */}
        {selectedMesh && <DynamicBox mesh={selectedMesh} />}
      </div>

      {zoomLevel && !isLoading <= 1.6999 && (
        <>
          {/* intro */}
          <Introduction zoomLevel={zoomLevel} />
          {/* instructions */}
          <div
            className={`absolute top-0 right-0 m-2 p-2 flex items-center mb-[700px] transition-transform duration-1000 ease-in-out ${
              isLoading === !isLoading
                ? "-translate-y-20 opacity-0"
                : "-translate-y-0 opacity-100"
            }`}
          >
            <Popover />
          </div>
        </>
      )}
    </div>
  );
};

export default App;

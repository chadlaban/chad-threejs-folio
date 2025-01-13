import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { selectableObjects } from "../../utils/QualityOfLife";
import MeshPage from "../../layout/MeshPage";

export const DynamicBox = ({ mesh }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [transitionDelay, setTransitionDelay] = useState(false);
  const object = selectableObjects.find((item) => item.mesh === mesh);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // delay background transition to avoid transition conflicts when component is mounted
    const timer = setTimeout(() => {
      setTransitionDelay(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // manually check resolution to apply CSS due to Tailwind conflict with Three canvas
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const handleChange = () => setIsSmallScreen(mediaQuery.matches);

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const dynamicStyles = {
    backgroundColor: object?.color || "#FAFAFA",
    transform: isMounted && mesh ? "translateX(0)" : "translateX(100%)",
    transition: transitionDelay ? "background-color 1s ease-in-out" : "none",
    ...(isSmallScreen
      ? { height: "35%", width: "100%" }
      : { height: "100%", width: "41.666667%" }),
  };

  // add ID for custom CSS
  const dynamicId =
    object.mesh === "Vase" ||
    object.mesh === "Cube112_1" ||
    object.mesh === "Cube100_1"
      ? "page"
      : "";

  return (
    <div
      id={dynamicId}
      className={`fixed bottom-0 right-0 z-50 opacity-95`}
      style={dynamicStyles}
    >
      <MeshPage mesh={object.mesh} />
    </div>
  );
};

DynamicBox.propTypes = {
  mesh: PropTypes.string.isRequired,
};

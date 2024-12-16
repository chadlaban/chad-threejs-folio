import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { selectableObjects } from "../../utils/QualityOfLife";
import MeshPage from "../../layout/MeshPage";

export const DynamicBox = ({ mesh }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [transitionDelay, setTransitionDelay] = useState(false);
  const object = selectableObjects.find((item) => item.mesh === mesh);

  useEffect(() => {
    setIsMounted(true);

    // delay background transition to avoid transition conflicts when component is mounted
    const timer = setTimeout(() => {
      setTransitionDelay(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="page"
      className={`fixed top-0 right-0 w-5/12 h-full z-50 transition-transform duration-1000 ease-in-out opacity-95 ${
        isMounted && mesh ? "translate-x-0" : "translate-x-full"
      } ${transitionDelay ? "transition-bg duration-1000 ease-in-out" : ""}`}
      // inline style due Tailwind unable to process dynamic bg-[] colors
      style={{
        backgroundColor: object?.color || "#FAFAFA",
      }}
    >
      <MeshPage mesh={object.mesh} />
    </div>
  );
};

DynamicBox.propTypes = {
  mesh: PropTypes.string.isRequired,
};

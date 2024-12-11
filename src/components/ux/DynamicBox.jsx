import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { clickableArr } from "../../utils/QualityOfLife";

export const DynamicBox = ({ mesh }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [transitionDelay, setTransitionDelay] = useState(false);
  const object = clickableArr.find((item) => item.mesh === mesh);

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
      className={`fixed top-0 right-0 w-1/3 h-full z-50 transition-transform duration-1000 ease-in-out ${
        isMounted && mesh ? "translate-x-0" : "translate-x-full"
      } ${transitionDelay ? "transition-bg duration-1000 ease-in-out" : ""}`}
      // inline style due Tailwind unable to process dynamic bg-[] colors
      style={{
        backgroundColor: object?.color || "#FAFAFA",
        opacity: 0.6,
      }}
    >
      <h2 className="text-white text-2xl p-4">Selected Object: {mesh}</h2>
    </div>
  );
};

DynamicBox.propTypes = {
  mesh: PropTypes.string.isRequired,
};

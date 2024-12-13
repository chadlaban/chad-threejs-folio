import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const Introduction = ({ zoomLevel }) => {
  const [transitionDelay, setTransitionDelay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransitionDelay(false);
    }, 8000); // delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="absolute inset-0 top-[100px] left-[200px] flex z-10 pointer-events-none overflow-hidden select-none"
      // inline due to conflicts with Tailwind
      style={{
        transform: `scale(${zoomLevel})`,
        transformOrigin: "center",
        transition: "transform 0.1s ease-out",
      }}
    >
      <div className="leading-none text-center mt-[600px]">
        <div className={`${transitionDelay ? "block" : "hidden"}`}>
          <span className="font-js text-5xl">Welcome to</span>
          <br />
          <span className="font-js text-5xl">my website!</span>
          <br />
        </div>
        <div
          className={`text-left transition-transform duration-1000 ease-in-out ${
            transitionDelay
              ? "translate-y-20 opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          <p className="font-js text-6xl">Chad Laban</p>
          <p className="font-nts text-4xl">ᜃ᜔ᜑᜇ᜔ ᜎᜊᜈ᜔</p>
          <p className="font-mt text-base pt-2 mt-2">
            Software Engineer | Web Developer
          </p>
        </div>
      </div>
    </div>
  );
};

Introduction.propTypes = {
  zoomLevel: PropTypes.number.isRequired,
};

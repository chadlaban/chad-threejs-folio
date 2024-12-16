import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { XCircleIcon, MenuAlt2Icon } from "@heroicons/react/solid";
import Guide from "./Guide";

export const Introduction = ({ zoomLevel, mesh }) => {
  const [transitionDelay, setTransitionDelay] = useState(true);
  const [guide, setGuide] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransitionDelay(false);

      const timer = setTimeout(() => setIsGlowing(true), 5000); // glow time

      return () => clearTimeout(timer);
    }, 8000); // delay

    return () => clearTimeout(timer);
  }, []);

  const togglePopover = () => {
    setGuide((prev) => !prev);
  };

  return (
    <>
      <div className="absolute m-3 p-3">
        <button onClick={togglePopover}>
          {guide ? (
            <XCircleIcon className={`h-8 w-8 fill-customWhite`} />
          ) : (
            <MenuAlt2Icon
              className={`h-8 w-8 z-100 fill-customGreen ${
                isGlowing ? "animate-glow" : ""
              }`}
            />
          )}
        </button>
        {guide && <Guide selectedMesh={mesh} />}
      </div>

      <div
        className="absolute bottom-24 left-64 flex z-10 overflow-hidden select-none"
        // inline due to conflicts with Tailwind
        style={{
          transform: `scale(${zoomLevel})`,
          transformOrigin: "center",
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="leading-none text-center">
          <div
            className={`font-js text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${
              transitionDelay ? "block" : "hidden"
            }`}
          >
            <span>Welcome to my</span>
            <br />
            <span>humble abode!</span>
            <br />
          </div>

          {zoomLevel <= 1.6999 && (
            <div
              className={`text-left transition-transform duration-1000 ease-in-out ${
                transitionDelay
                  ? "translate-y-20 opacity-0"
                  : "translate-y-0 opacity-100"
              }`}
            >
              <section>
                <p className="font-js text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  Chad Laban
                </p>
                <p className="font-nts text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  ᜃ᜔ᜑᜇ᜔ ᜎᜊᜈ᜔
                </p>
                <p className="font-mt pt-2 mt-2 text-sm sm:text-base md:text-lg lg:text-xl">
                  Software Engineer | Web Developer
                </p>
              </section>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Introduction.propTypes = {
  zoomLevel: PropTypes.number.isRequired,
  mesh: PropTypes.string,
};

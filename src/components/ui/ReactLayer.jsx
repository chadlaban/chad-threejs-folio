import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { XCircleIcon, MenuAlt2Icon } from "@heroicons/react/solid";
import Guide from "./Guide";

export const ReactLayer = ({ zoomLevel, mesh }) => {
  const [transitionDelay, setTransitionDelay] = useState(true);
  const [guide, setGuide] = useState(false);
  const [isGlowing, setIsGlowing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTransitionDelay(false);

      const timer = setTimeout(() => setIsGlowing(true), 5000); // glow time

      return () => clearTimeout(timer);
    }, 8000); // delay

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)"); // mobile breakpoint
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize();

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  const dynamicStyles = {
    bottom: isMobile ? "12%" : "6rem",
    left: isMobile ? "36%" : "16rem",
    transform: isMobile
      ? `translate(-50%, 50%) scale(${zoomLevel})`
      : `scale(${zoomLevel})`,
    transformOrigin: "center",
    transition:
      "transform 0.1s ease-out, bottom 0.1s ease-out, left 0.1s ease-out",
    zIndex: 1,
  };

  const togglePopover = () => {
    setGuide((prev) => !prev);
  };

  return (
    <>
      <div className="relative">
        {/* sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-80 backdrop-blur-sm bg-customWhite/30 p-4 transition-transform transform ${
            guide ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{
            zIndex: 50, // sidebar index
            width: window.innerWidth <= 640 ? "100%" : "20rem",
            height: window.innerWidth <= 640 ? "65%" : "",
          }}
        >
          <button onClick={togglePopover} className="text-customWhite">
            <XCircleIcon className="h-8 w-8" />
          </button>
          <div className="mt-4">
            <Guide selectedMesh={mesh} />
          </div>
        </div>

        {/* Main Content */}
        <div className="absolute top-3 left-3">
          {!guide && (
            <button onClick={togglePopover}>
              <MenuAlt2Icon
                className={`h-8 w-8 z-100 fill-customGray ${
                  isGlowing ? "animate-glow" : ""
                }`}
              />
            </button>
          )}
        </div>
      </div>

      {/* intro lines */}
      <div
        className="absolute bottom-24 left-64 flex z-10 overflow-hidden select-none"
        // inline due to conflicts with Tailwind
        style={dynamicStyles}
      >
        <div className="leading-none text-center">
          <div
            className={`transition-all duration-1000 ease-in-out font-js text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${
              transitionDelay
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            } overflow-hidden`}
          >
            <section>
              <p className="font-js text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                Welcome to my
              </p>
              <p className="font-js text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                humble abode!
              </p>
            </section>
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

ReactLayer.propTypes = {
  zoomLevel: PropTypes.number.isRequired,
  mesh: PropTypes.string,
};

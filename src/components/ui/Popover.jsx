import { useState, useEffect } from "react";
import { QuestionMarkCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import dragInstruction from "../../assets/videos/instructions/dragging.mp4";
import zoomInstruction from "../../assets/videos/instructions/zoom.mp4";
import clickInstruction from "../../assets/videos/instructions/click.mp4";
import Guide from "../ux/Guide";

const videoArr = [
  { video: dragInstruction, title: "Drag" },
  { video: zoomInstruction, title: "Zoom (Scroll Wheel)" },
  { video: clickInstruction, title: "Click" },
];

const Popover = () => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const [isGlowing, setIsGlowing] = useState(true);
  const [showElement, setShowElement] = useState(true);
  const [isFading, setFading] = useState(false);

  // instructions
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowElement(false);
    }, 9000);

    const fadeTimer = setTimeout(() => setFading(true), 7950); // fade-out

    return () => {
      clearTimeout(timer);
      clearTimeout(fadeTimer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsGlowing(false), 12000); // glow time
    return () => clearTimeout(timer);
  }, []);

  const togglePopover = () => {
    setIsPopoverVisible((prev) => !prev);
  };

  return (
    <div className="relative">
      {showElement ? (
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-4 transition-transform duration-1000 ease-in-out ${
            isFading ? "-translate-y-full" : "-translate-y-0"
          }`}
        >
          {videoArr.map((object, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-[#a3bf7c]/[.8] rounded-lg shadow-md p-2"
            >
              <p className="font-mt text-lg">{object.title}</p>
              <video
                autoPlay
                loop
                muted
                className="w-36 h-36 rounded-lg"
                src={object.video}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={`flex items-center gap-2`}>
          {/* popover btn */}
          <button onClick={togglePopover}>
            {!isPopoverVisible ? (
              <QuestionMarkCircleIcon
                className={`h-8 w-8 fill-[#a3bf7c] ${
                  isGlowing ? "animate-glow" : ""
                }`}
              />
            ) : (
              <XCircleIcon className="h-6 w-6 z-100 fill-[#fafafa]" />
            )}
          </button>

          {/* popover content */}
          {isPopoverVisible && <Guide videos={videoArr} />}
        </div>
      )}
    </div>
  );
};

export default Popover;

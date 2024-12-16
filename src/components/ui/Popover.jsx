import { useState, useEffect } from "react";
import dragInstruction from "../../assets/videos/instructions/dragging.mp4";
import zoomInstruction from "../../assets/videos/instructions/zoom.mp4";
import clickInstruction from "../../assets/videos/instructions/click.mp4";

const videoArr = [
  { video: dragInstruction, title: "Drag" },
  { video: zoomInstruction, title: "Zoom" },
  { video: clickInstruction, title: "Click" },
];

const Popover = () => {
  const [transition, setTransition] = useState(false);

  // instructions
  useEffect(() => {
    const transtitionTimer = setTimeout(() => {
      setTransition(true);
    }, 7950); // fade-out

    return () => {
      clearTimeout(transtitionTimer);
    };
  }, []);

  return (
    <>
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-4 py-4 transition-transform duration-1000 ease-in-out ${
          transition ? "-translate-y-full" : "-translate-y-0"
        }`}
      >
        {videoArr.map((object, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-customGreen/[.3] rounded-lg shadow-md py-2 px-4"
          >
            <p className="font-mt text-md font-medium">{object.title}</p>
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
    </>
  );
};

export default Popover;

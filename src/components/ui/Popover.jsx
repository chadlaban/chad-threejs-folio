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
    <div
      className={`absolute top-0 right-0 z-10 py-4 transition-all duration-1000 ease-in-out ${
        transition
          ? "-translate-y-full opacity-0"
          : "-translate-y-0 opacity-100"
      } overflow-hidden flex`}
      style={{
        height: window.innerWidth <= 640 ? "12rem" : "38rem",
        marginTop: window.innerWidth <= 640 ? "0" : "12rem",
        marginRight: window.innerWidth <= 640 ? "0" : "24rem",
        flexDirection: window.innerWidth <= 640 ? "row" : "column",
        gap: window.innerWidth <= 640 ? "0.5rem" : "1rem",
      }}
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
  );
};

export default Popover;

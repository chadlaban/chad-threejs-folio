import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import dragInstruction from "../../assets/videos/instructions/dragging.mp4";
import zoomInstruction from "../../assets/videos/instructions/zoom.mp4";
import clickInstruction from "../../assets/videos/instructions/click.mp4";

const videoInstructions = [
  { video: dragInstruction, title: "Drag" },
  { video: zoomInstruction, title: "Zoom" },
  { video: clickInstruction, title: "Click" },
];

const Guide = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const goToNextVideo = () => {
    if (currentVideoIndex < videoInstructions.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const goToPreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  return (
    <div className="absolute m-2 p-1 top-1 right-1 bg-[#a3bf7c]/[.8] rounded-lg">
      <div className="flex gap-2 items-center mt-6">
        <button
          onClick={goToPreviousVideo}
          className="p-1 rounded-full bg-[#fafafa] text-[#a3bf7c]"
          disabled={currentVideoIndex === 0}
        >
          <ChevronLeftIcon className="h-6 w-6" />
        </button>

        <div className="w-[240px]">
          {/* visual instruction */}
          <div className="mb-2">
            <video
              autoPlay
              loop
              className="rounded-lg"
              src={videoInstructions[currentVideoIndex].video}
            />
          </div>

          <div className="text-center mb-2">
            <h3 className="ph-m">
              {videoInstructions[currentVideoIndex].title}
            </h3>
          </div>
        </div>

        <button
          onClick={goToNextVideo}
          className="p-1 rounded-full bg-[#fafafa] text-[#a3bf7c]"
          disabled={currentVideoIndex === videoInstructions.length - 1}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Guide;

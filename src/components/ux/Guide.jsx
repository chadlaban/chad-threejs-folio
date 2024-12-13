import { useState } from "react";
import PropTypes from "prop-types";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const Guide = ({ videos }) => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const goToNextVideo = () => {
    if (currentVideoIndex < videos.length - 1) {
      setCurrentVideoIndex(currentVideoIndex + 1);
    }
  };

  const goToPreviousVideo = () => {
    if (currentVideoIndex > 0) {
      setCurrentVideoIndex(currentVideoIndex - 1);
    }
  };

  return (
    <div className="absolute mt-3 mr-3 p-1 top-0 right-0 bg-[#a3bf7c]/[.8] rounded-lg shadow-md">
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
              muted
              className="rounded-lg"
              src={videos[currentVideoIndex].video}
            />
          </div>

          <div className="text-center mb-2">
            <h3 className="font-mt text-xl">
              {videos[currentVideoIndex].title}
            </h3>
          </div>
        </div>

        <button
          onClick={goToNextVideo}
          className="p-1 rounded-full bg-[#fafafa] text-[#a3bf7c]"
          disabled={currentVideoIndex === videos.length - 1}
        >
          <ChevronRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

Guide.propTypes = {
  videos: PropTypes.array.isRequired,
};

export default Guide;

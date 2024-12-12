import { forwardRef } from "react";
import PropTypes from "prop-types";

export const Loading = forwardRef(({ videoSrc, onVideoEnd, progress }, ref) => {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="fixed inset-0 bg-[#000000] flex flex-col items-center justify-center z-20 space-y-4">
      <video
        ref={ref}
        src={videoSrc}
        className="w-[40%] h-[40%] object-cover"
        loop
        muted
        onEnded={onVideoEnd}
      />
      <div className="flex justify-center items-center relative">
        <svg className="w-24 h-24">
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="#FAFAFA"
            strokeWidth="4"
            fill="none"
            className="opacity-30"
          />
          <circle
            cx="24"
            cy="24"
            r={radius}
            stroke="#FAFAFA"
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-200"
          />
        </svg>
      </div>
    </div>
  );
});

Loading.displayName = "LoadingComponent";

Loading.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  progress: PropTypes.string.isRequired,
  onVideoEnd: PropTypes.func,
};

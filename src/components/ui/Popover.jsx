import { useState, useEffect } from "react";
import { QuestionMarkCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import Guide from "../ux/Guide";

const Popover = () => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);

  const [isGlowing, setIsGlowing] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsGlowing(false), 20000); // glow time
    return () => clearTimeout(timer);
  }, []);

  const togglePopover = () => {
    setIsPopoverVisible((prev) => !prev);
  };

  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        {/* popover btn */}
        <button onClick={togglePopover}>
          {!isPopoverVisible ? (
            <QuestionMarkCircleIcon
              className={`h-12 w-12 fill-[#a3bf7c] ${
                isGlowing ? "animate-glow" : ""
              }`}
            />
          ) : (
            <XCircleIcon className="h-6 w-6 fill-[#a3bf7c]" />
          )}
        </button>

        {/* popover content */}
        {isPopoverVisible && <Guide />}
      </div>
    </div>
  );
};

export default Popover;

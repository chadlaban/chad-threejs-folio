import { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { truncateText } from "../../utils/String";

const ExpandableString = ({ text, limit }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      {isExpanded ? text : truncateText(text, limit)}
      <button
        onClick={toggleExpand}
        className="font-js text-sm text-blue-500 ml-1 cursor-pointer"
      >
        {isExpanded ? (
          <>
            <ChevronUpIcon className="w-3 h-3" />
          </>
        ) : (
          <>
            <ChevronDownIcon className="w-3 h-3" />
          </>
        )}
      </button>
    </>
  );
};

ExpandableString.propTypes = {
  text: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
};

export default ExpandableString;

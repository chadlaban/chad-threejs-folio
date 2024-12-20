import { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { truncateText } from "../../utils/String";
import { motion } from "framer-motion";

const ExpandableString = ({ text, limit }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <motion.div>
      {/* displayed text by limit */}
      {!isExpanded && <p>{truncateText(text, limit)}</p>}

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: 1,
          height: isExpanded ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        {isExpanded ? <div>{text}</div> : <p>{""}</p>}
      </motion.div>

      {/* button trigger */}
      <motion.button
        onClick={toggleExpand}
        className="font-js text-sm text-customGray ml-1 cursor-pointer"
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
      </motion.button>
    </motion.div>
  );
};

ExpandableString.propTypes = {
  text: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
};

export default ExpandableString;

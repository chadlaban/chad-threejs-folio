import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export const SlideTransition = ({ children, index, delay = 200 }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`opacity-0 transform translate-x-10 transition duration-500 ease-out ${
        mounted ? `animate-slide-in` : ""
      }`}
      style={{ animationDelay: `${index * delay}ms` }}
    >
      {children}
    </div>
  );
};

SlideTransition.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  index: PropTypes.number,
  delay: PropTypes.number,
};

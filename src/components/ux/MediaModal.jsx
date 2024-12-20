import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { XCircleIcon } from "@heroicons/react/solid";

const MediaModal = ({ media, onClose }) => {
  const [visibile, setVisible] = useState(false);

  useEffect(() => {
    if (media) setVisible(true);
  }, [media]);

  const closeModal = () => {
    setVisible(false);
    setTimeout(onClose, 300); // delay
  };

  if (!media) return null;

  const isVideo = /\.(mp4|webm|ogg)$/i.test(media.path);

  return (
    <div
      className={`fixed inset-0 h-full bg-customGray/[.8] flex items-center justify-center ${
        visibile ? "opacity-100" : "opacity-0"
      } transition-opacity duration-300`}
      onClick={closeModal}
    >
      <div
        className={`relative bg-transparent p-6 transform ${
          visibile ? "scale-100" : "scale-95"
        } transition-all duration-300`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-customGray font-bold text-lg"
        >
          <XCircleIcon className={`h-8 w-8 fill-customWhite`} />
        </button>
        {isVideo ? (
          <video
            src={media.path}
            controls
            className="max-w-full max-h-screen object-contain rounded-lg shadow-lg"
          />
        ) : (
          <img
            src={media.path}
            alt={`media-${media.id}`}
            className="max-w-full max-h-screen object-contain rounded-lg shadow-lg"
          />
        )}
      </div>
    </div>
  );
};

MediaModal.propTypes = {
  media: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    path: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default MediaModal;

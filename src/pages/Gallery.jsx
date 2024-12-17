import { useState } from "react";
import { images } from "../utils/QualityOfLife";
import { SlideTransition } from "../components/ux/SlideTransition";
import MediaModal from "../components/ux/MediaModal";

export const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const openModal = (media) => {
    setSelectedMedia(media); // modal trigger - open
  };

  const closeModal = () => {
    setSelectedMedia(null); // modal trigger - close
  };

  const sortImgs = images.sort((a, b) => a.id - b.id);

  return (
    <>
      <div className="container mx-auto py-6 pl-6 pr-2">
        <h2 className="font-mt text-2xl text-customWhite font-semibold text-center mb-6">
          PEOPLE I&apos;VE WORKED WITH
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {sortImgs.map((src) => (
            <div
              key={src.id}
              className="relative flex items-center justify-center"
            >
              <SlideTransition key={src.id} index={src.id}>
                <img
                  src={src.path}
                  alt={`memory-${src.id}`}
                  className="w-[95%] h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(src)}
                />
              </SlideTransition>
            </div>
          ))}
        </div>
      </div>
      <MediaModal media={selectedMedia} onClose={closeModal} />
    </>
  );
};

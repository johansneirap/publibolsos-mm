import { useState } from 'react';
import Lightbox from 'react-spring-lightbox';
import ImageMosaic from './ImageMosaic/ImageMosaic';
import { mosaicImages } from './images';
import Header from "./ImageLightbox/components/Header";
import ArrowButton from "./ImageLightbox/components/ArrowButton";

const ImageGallery = () => {
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < mosaicImages.length &&
    setCurrentIndex(currentImageIndex + 1);

  return (
    <>
      <ImageMosaic 
        images={mosaicImages}
        handleClick={(e, { index }) => {
          setCurrentIndex(index);
          setIsLightboxOpen(true);
        }}
      />
      <Lightbox
        isOpen={isLightboxOpen}
        onPrev={gotoPrevious}
        onNext={gotoNext}
        images={mosaicImages}
        currentIndex={currentImageIndex}
        /* Add your own UI */
        renderHeader={() => (<Header
          galleryTitle="Revisa algunos de nuestros principales productos..."
          images={mosaicImages}
          currentIndex={currentImageIndex}
          onClose={()=> setIsLightboxOpen(false)}
        />)}
        // renderFooter={() => (<CustomFooter />)}
        renderPrevButton={({ canPrev }) => (<ArrowButton
          position="left"
          onClick={gotoPrevious}
          disabled={!canPrev}
        />)}
        renderNextButton={({ canNext }) => (
          <ArrowButton position="right" onClick={gotoNext} disabled={!canNext} />
        )}
        // renderImageOverlay={() => (<ImageOverlayComponent >)}

        /* Add styling */
        // className="cool-class"
        style={{ background: "rgb(0 0 0 / 90%)" }}

        /* Handle closing */
        onClose={()=> setIsLightboxOpen(false)}

        /* Use single or double click to zoom */
        // singleClickToZoom

        /* react-spring config for open/close animation */
        pageTransitionConfig={{
          from: { transform: "scale(0.75)", opacity: 0 },
          enter: { transform: "scale(1)", opacity: 1 },
          leave: { transform: "scale(0.75)", opacity: 0 },
          config: { mass: 1, tension: 320, friction: 32 }
        }}
      />
    </>
  );
};

export default ImageGallery;
import { useState, useEffect } from "react";
import Lightbox from "react-spring-lightbox";
import ImageMosaic from "./ImageMosaic/ImageMosaic";
import { mosaicImages } from "./images";
import Header from "./ImageLightbox/components/Header";
import ArrowButton from "./ImageLightbox/components/ArrowButton";
import { Box, Tab, Tabs, TabPanel } from "@mui/material";
import useIsMobileWindow from "../../hooks/useIsMobileWindow";

const imageCategories = [
  "mochilaMinera",
  "bolso",
  "portaTrompaBanano",
  "rescate",
  "mochilaUrbana",
];

const ImageGallery = () => {
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [value, setValue] = useState(0);
  const [isMobile, setIsMobile] = useState(true);
  const width = useIsMobileWindow();

  const filteredImages = mosaicImages.filter(
    (i) => i.type === imageCategories[value]
  );

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < mosaicImages.length &&
    setCurrentIndex(currentImageIndex + 1);

  useEffect(() => {
    setIsMobile(width);
  }, [width]);

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider", marginTop: "30px" }}>
        <Tabs
          variant="fullWidth"
          orientation={isMobile ? "vertical" : "horizontal"}
          sx={{
            "& .MuiTabs-flexContainer": {
              alignItems: "center",
            },
            "& .MuiTabs-indicator": {
              transition: "none",
            },
          }}
          value={value}
          onChange={handleChange}
          aria-label="tabs de categorias de productos"
        >
          <Tab label="Item Mochilas Mineras" />
          <Tab label="Item Bolsos" />
          <Tab label="Porta trompas y Bananos" />
          <Tab label="Rescate" />
          <Tab label="Mochilas Urbanas" />
        </Tabs>
      </Box>
      {/* <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
      <ImageMosaic
        images={filteredImages}
        handleClick={(e, { index }) => {
          setCurrentIndex(index);
          setIsLightboxOpen(true);
        }}
      />
      <Lightbox
        isOpen={isLightboxOpen}
        onPrev={gotoPrevious}
        onNext={gotoNext}
        images={filteredImages}
        currentIndex={currentImageIndex}
        /* Add your own UI */
        renderHeader={() => (
          <Header
            galleryTitle="Revisa algunos de nuestros principales productos..."
            images={filteredImages}
            currentIndex={currentImageIndex}
            onClose={() => setIsLightboxOpen(false)}
          />
        )}
        // renderFooter={() => (<CustomFooter />)}
        renderPrevButton={({ canPrev }) => (
          <ArrowButton
            position="left"
            onClick={gotoPrevious}
            disabled={!canPrev}
          />
        )}
        renderNextButton={({ canNext }) => (
          <ArrowButton
            position="right"
            onClick={gotoNext}
            disabled={!canNext}
          />
        )}
        // renderImageOverlay={() => (<ImageOverlayComponent >)}

        /* Add styling */
        // className="cool-class"
        style={{ background: "rgb(0 0 0 / 90%)" }}
        /* Handle closing */
        onClose={() => setIsLightboxOpen(false)}
        /* Use single or double click to zoom */
        // singleClickToZoom

        /* react-spring config for open/close animation */
        pageTransitionConfig={{
          from: { transform: "scale(0.75)", opacity: 0 },
          enter: { transform: "scale(1)", opacity: 1 },
          leave: { transform: "scale(0.75)", opacity: 0 },
          config: { mass: 1, tension: 320, friction: 32 },
        }}
      />
    </>
  );
};

export default ImageGallery;

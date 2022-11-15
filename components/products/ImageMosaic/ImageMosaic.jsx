import React from "react";
import PropTypes from "prop-types";
// import styled from "styled-components";
import Gallery from "react-photo-gallery";
import GridImage from "./components/GridImage";
import styles from './ImageMosaic.module.css'

const ImageMosaic = ({ images, handleClick }) => (
  <div className={styles['gallery-container']}>
    <Gallery
      columns={containerWidth => {
        let columns = 1;
        if (containerWidth >= 500) columns = 2;
        if (containerWidth >= 900) columns = 4;

        return columns;
      }}
      onClick={handleClick}
      photos={images}
      margin={6}
      direction="column"
      renderImage={GridImage}
    />
  </div>
);

ImageMosaic.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string.isRequired,
      caption: PropTypes.string.isRequired,
      height: PropTypes.number.isRequired,
      width: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired
    })
  ),
  handleClick: PropTypes.func.isRequired
};

export default ImageMosaic;

// const GalleryContainer = styled.div`
//   overflow-y: auto;
//   height: 100%;
//   max-height: calc(100% - 4em);
//   padding: 2em;
// `;

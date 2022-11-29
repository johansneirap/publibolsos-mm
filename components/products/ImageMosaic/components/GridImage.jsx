import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import styles from "./GridImage.module.css";
import Image from "next/image";

/**
 * A single image element in a masonry style image grid
 */
const GridImage = ({ key, index, left, top, photo, onClick }) => {
  const { height, width, src, alt, caption } = photo;
  return (
    <div
      className={styles["image-container"]}
      key={`${key}-${index}`}
      index={index}
      onClick={(e) => onClick(e, { index })}
      style={{ left, top, height, width }}
    >
      <div className={styles["overlay-container"]}>
        <Image
          loader={() => src}
          layout="fill"
          className={styles.image}
          src={src}
          alt={alt}
          caption={caption}
        />
        <div className={styles.caption}>
          <h4>{caption}</h4>
        </div>
      </div>
    </div>
  );
};

GridImage.propTypes = {
  key: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  containerHeight: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  photo: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
};

export default GridImage;

// const Caption = styled.div`
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   background-color: ${({ theme }) => theme.accentColor};
//   color: ${({ theme }) => theme.pageContentLinkHoverColor};
//   h4 {
//     text-align: center;
//     margin: 1em 0;
//   }
// `;

// const OverlayContainer = styled.div`
//   position: relative;
//   height: 100%;
//   overflow: hidden;
// `;

// const ImageContainer = styled.div`
//   transition: border-color 0.2s linear;
//   display: block;
//   position: absolute;
//   cursor: pointer;
//   border-width: 2px;
//   border-color: transparent;
//   border-style: solid;
//   :hover {
//     border-color: ${({ theme }) => theme.pageContentLinkHoverColor};
//   }
// `;

// const Image = styled.img`
//   width: inherit;
//   height: inherit;
//   position: absolute;
// `;

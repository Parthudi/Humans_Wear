import React, { useState } from 'react';
import { makeStyles} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    zoomerContainer: {
      position: 'relative',
      overflow: 'hidden',
      cursor: 'zoom-in',
      '&.zoomed': {
        cursor: 'zoom-out',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '200%', // Adjust this value for the zoom level
      },
    },
    zoomerImage: {
      display: 'block',
      width: '100%',
      height: 'auto',
      transition: 'visibility 0s, opacity 0.5s linear',
    },
    hidden: {
      visibility: 'hidden',
      opacity: 0,
    },
  }));

const ImageMagnify = ({ src, alt }) => {
    const classes = useStyle();
    const [isZoomed, setIsZoomed] = useState(false);
    const [zoomStyle, setZoomStyle] = useState({});
  
    const handleMouseEnter = () => {
      setIsZoomed(true);
      setZoomStyle((prevStyle) => ({
        ...prevStyle,
        backgroundImage: `url(${src})`,
      }));
    };
  
    const handleMouseMove = (e) => {
      const { left, top, width, height } = e.target.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setZoomStyle((prevStyle) => ({
        ...prevStyle,
        backgroundPosition: `${x}% ${y}%`,
      }));
    };
  
    const handleMouseLeave = () => {
      setIsZoomed(false);
      setZoomStyle({});
    };

  return (
    <div
      className={`${classes.zoomerContainer} ${isZoomed ? classes.zoomed : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={zoomStyle}
    >
      <img
        src={src}
        alt={alt}
        className={`${classes.zoomerImage} ${isZoomed ? classes.hidden : ''}`}
      />
    </div>
  );
};

export default ImageMagnify;
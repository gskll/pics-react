import React from "react";

const ImageList = (props) => {
  const images = props.images.map(({ urls, id, alt_description }) => {
    return <img src={urls.regular} key={id} alt={alt_description} />;
  });

  return <div>{images}</div>;
};

export default ImageList;

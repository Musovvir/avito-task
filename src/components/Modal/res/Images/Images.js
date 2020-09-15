import React from "react";
import { useSelector } from "react-redux";
import Image from "./res/Image/Image";

function Images() {
  const images = useSelector((state) => state.images);

  return images.map((image) => {
    return <Image key={image.id} image={image} />;
  });
}

export default Images;

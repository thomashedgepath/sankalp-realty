import React, { useState } from "react";
import { styled } from "frontity";

function ImageSection({ data }) {
  let urls = [];

  for (const [key, value] of Object.entries(data)) {

    if (value.url !== undefined) {
      urls.push(value.url);
    }
  }

  return (
    <>
      {urls.map((image, index) => {
        return <CardImage key={`image-${index}`} src={image}></CardImage>
      })}
    </>
  );
}

export default ImageSection;

const CardImage = styled.img`
  object-fit: cover;
  float: left;
  width: 250px;
  height: 250px;
  margin: -5px;
`;
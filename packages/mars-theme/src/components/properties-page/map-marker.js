import React, { useState } from "react";

import { Marker } from "react-map-gl";
import { styled } from "frontity";

const CustomMarker = styled.img`
  height: 50px;
  width: auto;
  z-index: 1;
  &:hover {
    transform: scale(1.5);
    transition: all 0.2s ease-in-out;
  }
`;

function MapMarker({ key, coordinates }) {
  const image_url =
    "https://wp.sankalprealty.us/wp-content/uploads/2020/12/sankalp-logo-marker.svg";

  return (
    <>
      {coordinates !== undefined ? (
        <Marker
          key={key}
          longitude={parseFloat(coordinates[1])}
          latitude={parseFloat(coordinates[0])}
          offsetLeft={-15}
          offsetTop={-45}
          style={{ "z-index": "1" }}
        >
          <CustomMarker src={image_url} />
        </Marker>
      ) : (
        <></>
      )}
    </>
  );
}

export default MapMarker;

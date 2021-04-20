import React, { useState } from "react";
import { connect, styled, Head } from "frontity";
import { Marker } from "react-map-gl";

const CustomMarker = styled.img`
  height: 50px;
  width: auto;
  z-index: 1;
  &:hover {
    transform: scale(1.5);
    transition: all 0.2s ease-in-out;
  }
`;

function MapMarker({ prop_id, coordinates, actions }) {
  const image_url =
    "https://wp.sankalprealty.us/wp-content/uploads/2020/12/sankalp-logo-marker.svg";

  const onClickHandler = () => {
    actions.theme.setSelectedPropertyID(prop_id)
    actions.theme.setSelectedPropertyCoordinates(coordinates)
  }

  return (
    <>
      {coordinates !== undefined ? (
        <Marker
          key={prop_id}
          longitude={parseFloat(coordinates[1])}
          latitude={parseFloat(coordinates[0])}
          offsetLeft={-15}
          offsetTop={-45}
          style={{ "z-index": "1" }}
        >
          <CustomMarker src={image_url} onClick={onClickHandler} />
        </Marker>
      ) : (
        <></>
      )}
    </>
  );
}

export default connect(MapMarker);

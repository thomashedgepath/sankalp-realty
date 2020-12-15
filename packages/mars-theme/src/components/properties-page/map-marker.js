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

function MapMarker(props) {
  const image_url =
    "https://wp.sankalprealty.us/wp-content/uploads/2020/12/sankalp-logo-marker.svg";

  return (
    <>
      {props.coordinates !== undefined ? (
        

            <Marker
              key={props.coordinates["id"].toString()}
              longitude={parseFloat(props.coordinates["lng"])}
              latitude={parseFloat(props.coordinates["lat"])}
              offsetLeft={-15}
              offsetTop={-45}
              style={{ "z-index": "1" }}
            >
              <CustomMarker
                src={image_url}
              />
            </Marker>
          
        
      ) : (
        <></>
      )}
    </>
  );
};

export default MapMarker;

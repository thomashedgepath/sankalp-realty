import React, { useState } from "react";

import { Marker } from "react-map-gl";
import { styled } from "frontity";

const CustomMarker = styled.img`
    height: auto;
    width: 100px;
    z-index: 1;
    &:hover {
      transform: scale(1.5);
      transition: all 0.2s ease-in-out;
    }
`;

function MapMarker(props) {
  const image_url =
    "http://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/The-Cannabis-Depot-Logo-1.svg";

  return (
    <>
      {props.coordinates !== undefined ? (
        

            <Marker
              key={props.coordinates["id"].toString()}
              longitude={parseFloat(props.coordinates["lng"])}
              latitude={parseFloat(props.coordinates["lat"])}
              offsetLeft={-40}
              offsetTop={-20}
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

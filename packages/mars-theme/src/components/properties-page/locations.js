import React, { useState } from "react";
import { connect, styled, Head } from "frontity";
import MapGL from "react-map-gl";
import MapMarker from "./map-marker";
import Link from "../link";

import { BrowserView, MobileView } from "react-device-detect";

const Locations = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  const accessToken =
    "pk.eyJ1IjoidGhvbWFzaGVkZ2VwYXRoIiwiYSI6ImNqNW83cXhsYjQyYnAyd25xbjdwbG1xbmoifQ.u8oSi903x7-iK9S0-lNuNg";

  const coordinates = {
    id: "store-1",
    lat: 33.114177,
    lng:  -96.808943,
  };

  const [viewport, setViewport] = useState({
    latitude: 33.16620971214782,
    longitude:  -96.79046653119435,
    zoom: 11.2,
    bearing: 0,
    pitch: 0,
  });

  return (
    <>
    <Head>
      <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
    </Head>
      {console.log(viewport)}
      <BrowserView>
        <SectionContainer key={"map-section"}>
        
        <DarkenOverlay></DarkenOverlay>
        <InfoContainer>
          <h1>Under construction.</h1>
          <p>Our website is still under construction. <br/>While you wait for us to finish, you can view our properties on CREXi.</p>
          <a href="https://www.crexi.com/properties?brokerage=Sankalp%20Realty" style={{color: "blue"}}>View our listings on CREXi.</a>
          <br/><br/>
        </InfoContainer>
          <MapGL
            {...viewport}
            width="100vw"
            height="80vh"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
            mapboxApiAccessToken={accessToken}
          >
            <MapMarker coordinates={coordinates} />
            {/* <InfoContainer>

            </InfoContainer> */}
          </MapGL>
          
        </SectionContainer>
      </BrowserView>

      <MobileView>
       {/* Work on this */}
       <p>This page is still under construction. Come back later to see our properties.</p>
      </MobileView>
    </>
  );
};

export default connect(Locations);

const SectionContainer = styled.div`
  position: relative;
  overflow: hidden;
  flex-wrap: none;
  width: 100vw;
  height: 100%;

  background-color: #f1f5f2;

  @media (max-width: 768px) {
    display: block;x
  }
`;

const InfoContainer = styled.div`
  position: absolute;
  z-index: 1001;
  float: center;
  text-align: center;
  font-size: 1.8vh;
  width: 50vw;
  min-width: 400px;
  height: auto;
  background-color: #f1f5f2;
  margin: 15vh 25vw;
  border-radius: 10px;
  padding: 1vw;

  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5));

  @media (max-width: 768px) {
    float: left;
    width: 100vw;
    min-width: 100vw;
    height: 90vh;
    margin: 0;
    padding: 0;
    border-radius: 0;

  }
`;

const DarkenOverlay = styled.div`
  position: absolute;
  background-color: black;

  width: 100vw;
  height: 100%;
  z-index: 1000;

  opacity: 0.7;

`;

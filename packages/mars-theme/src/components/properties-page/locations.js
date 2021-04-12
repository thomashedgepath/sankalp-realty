import React, { useState } from "react";
import { connect, styled, Head } from "frontity";
import MapGL, {NavigationControl} from "react-map-gl";
import MapMarker from "./map-marker";
import Link from "../link";

import { BrowserView, MobileView } from "react-device-detect";
import PropertiesSidebar from "./properties-sidebar";
import PropertiesCard from "./properties-card";

const Locations = ({ prop_coordinates }) => {
  const accessToken =
    "pk.eyJ1IjoidGhvbWFzaGVkZ2VwYXRoIiwiYSI6ImNqNW83cXhsYjQyYnAyd25xbjdwbG1xbmoifQ.u8oSi903x7-iK9S0-lNuNg";

  const [viewport, setViewport] = useState({
    latitude: 33.16620971214782,
    longitude: -96.79046653119435,
    zoom: 11.2,
    bearing: 0,
    pitch: 0,
  });

  return (
    <>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <BrowserView>
        <SectionContainer key={"map-section"}>
          <MapGL
            {...viewport}
            width="100%"
            height="80vh"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
            mapboxApiAccessToken={accessToken}
          >
          <NavControls/>
            {/* Iterate through all properties on the page to create map markers from given coordinates. */}
            {prop_coordinates.map(({ id, lat, lng }) => {
              return <MapMarker key={id} coordinates={[lat, lng]} />;
            })}
          </MapGL>
        </SectionContainer>
      </BrowserView>

      <MobileView>
        {/* Work on this */}
        <p>
          This page is still under construction. Come back later to see our
          properties.
        </p>
      </MobileView>
    </>
  );
};

export default connect(Locations);

const NavControls = styled(NavigationControl)`
  position: relative;
  float: right;
  margin: 10px;
`

const SectionContainer = styled.div`
  position: relative;
  overflow: hidden;
  flex-wrap: none;
  width: 100%;
  height: 100%;

  background-color: #f1f5f2;

  @media (max-width: 768px) {
    display: block;
  }
`;
const ScrollingContainer = styled.div`
   {
    grid-column-start: 1;
    display: fixed;
    float: right;
    width: 20vw;
    height: calc(100vh - 100px);
    overflow: visible;
  }
`;
const PropertyScrollWrapper = styled.ul`
   {
    width: 100%;
    overflow-y: scroll;
    overflow-x: visible;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;
const PropertiesContainer = styled.div`
  z-index: 1001;
  float: right;
  text-align: center;
  font-size: 1.8vh;
  width: 20vw;
  min-width: 500px;
  height: 100%;
  background-color: #f1f5f2;
  margin: 0vh 0vw;
  border-radius: 0px;

  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5));
`;

const InfoContainer = styled.div`
  float: center;
  position: relative;
  text-align: center;
  font-size: 1.8vh;
  width: 100%;

  height: auto;
  background-color: #f1f5f2;

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

// ##### From CCC Project

const PropertyPaper = styled.div`
   {
    -webkit-font-smoothing: antialiased;
    font-size: 0.875rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    list-style-type: none;
    box-sizing: inherit;
    overflow: hidden;
    -webkit-box-pack: center;
    justify-content: center;
    height: 100%;
    max-width: 100%;
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

    &:hover {
      transform: scale(1);
      transform-origin: center center;
      transition: all 0.2s ease-in-out;

      box-shadow: -3px 0 1px 0 rgba(255, 0, 0, 0.25),
        0 -3px 1px 0 rgba(255, 0, 0, 0.25), 3px 0 1px 0 rgba(255, 0, 0, 0.25),
        0 3px 1px 0 rgba(255, 0, 0, 0.25);
    }
    &.selected {
      border: #d20000;
      border-style: outset;
    }
  }
`;
const CardContainer = styled.div`
   {
    overflow: hidden;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
    height: 100%;
  }
`;
const CardImage = styled.img`
   {
    grid-column-start: 1;
    display: fixed;
    height: 100%;
    width: 100%;

    overflow: hidden;
    object-fit: cover;
    justify-content: center;
    object-position: center;
  }
`;
const CardContent = styled.div`
   {
    overflow: hidden;
    grid-column-start: 2;
    margin: 5px;
  }
`;
const CardHeader = styled.h2`
   {
    margin-top: 5px;
    margin-bottom: 5px;
    color: #d20000;
    text-transform: uppercase;
    font-size: 10pt;
    line-height: 1em;
  }
`;
const CardAddress = styled.h2`
   {
    margin: 0px;
    margin-bottom: 5px;
    line-height: 0.8em;
  }
`;
const CardSubAddress = styled.h3`
   {
    margin-top: 0px;
    margin-bottom: 5px;
    color: #b5acac;
    text-transform: uppercase;
    font-size: 10pt;
  }
`;

const ButtonDiv = styled.div`
   {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`;

const LinkButton = styled.button`
   {
    -webkit-font-smoothing: antialiased;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    letter-spacing: 0.01071em;
    text-align: left;
    box-sizing: inherit;
    display: inline-block;
    line-height: 1;
    vertical-align: baseline;
    margin: 0 5px 5px 0;
    background-image: none;
    padding: 0.5833em 0.833em;
    text-transform: none;
    font-weight: 700;
    border: 0 solid transparent;
    border-radius: 0.28571429rem;
    transition: background 0.1s ease;
    margin-left: 0;
    background-color: ${(props) => props.color ? props.color : "red"} !important;
    border-color: ${(props) => (props.color ? props.color : "red")} !important;
    color: ${(props) =>
      props.textColor ? props.textColor : "white"} !important;
    font-size: 0.78571429rem;
    text-transform: uppercase;
  }
`;

const TagLabel = styled.div`
   {
    -webkit-font-smoothing: antialiased;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    letter-spacing: 0.01071em;
    text-align: left;
    box-sizing: inherit;
    display: inline-block;
    line-height: 1;
    vertical-align: baseline;
    margin: 0 5px 5px 0;
    background-image: none;
    padding: 0.5833em 0.833em;
    text-transform: none;
    font-weight: 700;
    border: 0 solid transparent;
    border-radius: 0.28571429rem;
    transition: background 0.1s ease;
    margin-left: 0;
    background-color: ${(props) =>
      props.color ? props.color : "gray"} !important;
    border-color: ${(props) => (props.color ? props.color : "gray")} !important;
    color: ${(props) =>
      props.textColor ? props.textColor : "white"} !important;
    font-size: 0.78571429rem;
    text-transform: uppercase;
  }
`;

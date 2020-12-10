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

  const [viewport, setViewport] = useState({
    latitude: 38.31104378144779,
    longitude: -104.54853445752774,
    zoom: 11.277146958556951,
    bearing: 0,
    pitch: 0,
  });

  const coordinates = {
    id: "store-1",
    lat: 38.34285495814367,
    lng: -104.61804915573853,
  };

  return (
    <>
    <Head>
      <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
    </Head>
      {/* {console.log(viewport)} */}
      <BrowserView>
        <SectionContainer key={"map-section"}>
          <MapGL
            {...viewport}
            width="100vw"
            height="80vh"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
            mapboxApiAccessToken={accessToken}
          >
            <MapMarker coordinates={coordinates} />
            <InfoContainer>
              <StoreImage src="https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/Screen-Shot-2020-11-16-at-2.33.50-PM.jpg" />

              <div style={{ margin: "2.5vh 10px 5vh 10px" }}>
                <p>
                  <span
                    style={{ color: "#C2A878", textTransform: "uppercase" }}
                  >
                    Store Hours:
                  </span>
                  <br />
                  Monday - Sunday: 8:00am - 10:45pm
                  <br />
                  <br />
                  <span
                    style={{ color: "#C2A878", textTransform: "uppercase" }}
                  >
                    Address:
                  </span>
                  <br />
                  2440 North Interstate 25 <br />
                  Pueblo, Colorado 81008
                  <br />
                  <br />
                  <span
                    style={{ color: "#C2A878", textTransform: "uppercase" }}
                  >
                    Phone:
                  </span>
                  <br />
                  (719) 283-8017
                  <br />
                  <br />
                </p>
              </div>

              <Link link="https://g.page/cannabisdepotpueblo?share">
                <ButtonLogoContainer src="http://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/open-in-google.svg" />
              </Link>

              <Link link="https://maps.apple.com/?address=2440%20N%20Interstate%2025,%20Pueblo,%20CO%20%2081008,%20United%20States&auid=8479361006209806825&ll=38.342834,-104.618132&lsp=9902&q=The%20Cannabis%20Depot&_ext=ChoKBQgEEOIBCgQIBRADCgUIBhDfAQoECAoQABImKf09wmtDK0NAMfjvXjPpJ1rAOXsT6MdpLENAQQg2AIwtJ1rAUAM%3D">
                <ButtonLogoContainer src="http://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/open-in-apple.svg" />
              </Link>

              <Link link="https://weedmaps.com/dispensaries/cannabis-depot-2">
                <ButtonLogoContainer src="http://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/weedmaps.svg" />
              </Link>
            </InfoContainer>
          </MapGL>
        </SectionContainer>
      </BrowserView>

      <MobileView>
        <SectionContainer key={"store-info-section"}>
          <InfoContainer>
            <StoreImage src="https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/Screen-Shot-2020-11-16-at-2.33.50-PM.jpg" />

            <AddressContainer>
              <p>
                <span style={{ color: "#C2A878", textTransform: "uppercase" }}>
                  Store Hours:
                </span>
                <br />
                Monday - Sunday: 8:00am - 10:45pm
                <br />
                <br />
                <span style={{ color: "#C2A878", textTransform: "uppercase" }}>
                  Address:
                </span>
                <br />
                2440 North Interstate 25 <br />
                Pueblo, Colorado 81008
                <br />
                <br />
                <span style={{ color: "#C2A878", textTransform: "uppercase" }}>
                  Phone:
                </span>
                <br />
                (719) 283-8017
                <br />
                <br />
              </p>
            </AddressContainer>

            <Link link="https://g.page/cannabisdepotpueblo?share">
              <ButtonLogoContainer src="http://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/open-in-google.svg" />
            </Link>

            <Link link="https://maps.apple.com/?address=2440%20N%20Interstate%2025,%20Pueblo,%20CO%20%2081008,%20United%20States&auid=8479361006209806825&ll=38.342834,-104.618132&lsp=9902&q=The%20Cannabis%20Depot&_ext=ChoKBQgEEOIBCgQIBRADCgUIBhDfAQoECAoQABImKf09wmtDK0NAMfjvXjPpJ1rAOXsT6MdpLENAQQg2AIwtJ1rAUAM%3D">
              <ButtonLogoContainer src="http://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/open-in-apple.svg" />
            </Link>

            <Link link="https://weedmaps.com/dispensaries/cannabis-depot-2">
              <ButtonLogoContainer src="http://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/weedmaps.svg" />
            </Link>
          </InfoContainer>
        </SectionContainer>
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
  float: right;
  text-align: center;
  font-size: 1.8vh;
  width: 20%;
  min-width: 400px;
  height: 90%;
  background-color: #f1f5f2;
  margin: 20px;
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

const StoreImage = styled.img`
  width: 100%;
  height: 25vh;
  object-fit: cover;
  background-color: gray;
  border-radius: 10px;

  @media (max-width: 768px) {
    border-radius: 0;
    height: 40vh;
  }
`;

const ButtonLogoContainer = styled.img`
  display: inline;
  margin: 0 0 0.25vw 0;
  fill: white;
  background-size: contain;
  height: 4.4vh;
  width: 100%;
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.5));

  &:hover {
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5));
  }
`;

const AddressContainer = styled.div`
  margin: 2.5vh 10px 5vh 10px;

  @media (max-width: 768px) {
    margin: 2.5vh 10px 1vh 10px;
  }
`
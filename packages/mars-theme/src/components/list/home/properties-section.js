import React from "react";
import { connect, styled } from "frontity";
import Link from "../../link";
import ScrollAnimation from "react-animate-on-scroll";

const PropertiesSection = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const map_token =
    "pk.eyJ1IjoidGhvbWFzaGVkZ2VwYXRoIiwiYSI6ImNqNW83cXhsYjQyYnAyd25xbjdwbG1xbmoifQ.u8oSi903x7-iK9S0-lNuNg";

  return (
    <>
      <SectionContainer key={"location-section"}>
        {/* <ScrollAnimation animateOnce animateIn="fadeInLeft" duration={3}> */}
          <ContentContainer>
            <MapImage
              src={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/-96.8018,33.1422,11.59,0/1095x365@2x?access_token=${map_token}`}
            ></MapImage>
            <Link link="/our-properties"><ButtonImage src="https://wp.sankalprealty.us/wp-content/uploads/2020/12/view-properties.svg" /></Link>
          </ContentContainer>
        {/* </ScrollAnimation> */}
      </SectionContainer>
    </>
  );
};

export default connect(PropertiesSection);

const SectionContainer = styled.div`
  position: relative;
  overflow: hidden;
  flex-wrap: none;
  height: 40vh;
  width: 100vw;
  text-align: center;
  z-index: 1000;
`;

const ContentContainer = styled.div`
  display: flex;
  background-color: black;
  font-family: "Overpass", sans-serif;
  letter-spacing: -1.98px;
  height: 100%;

  @media (max-width: 768px) {
    display: block;
    letter-spacing: -0.5px;
  }
`;

const MapImage = styled.img`
  object-fit: cover;
  width: 100%;
  opacity: 0.4;
  ${
    "" /* mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0)); */
  }

  @media (max-width: 768px) {
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
`;

const ButtonImage = styled.img`
  position: absolute;
  top:15vh;
  left: 35vw;
  width: 30vw;
  object-fit: cover;
  cursor: pointer;
  
  &:hover{
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    
  }
`;

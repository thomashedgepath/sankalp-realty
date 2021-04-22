import React from "react";
import { connect, styled } from "frontity";
import Link from "../../link";
import ScrollAnimation from "react-animate-on-scroll";

const NumbersSection = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);
  const map_token =
    "pk.eyJ1IjoidGhvbWFzaGVkZ2VwYXRoIiwiYSI6ImNqNW83cXhsYjQyYnAyd25xbjdwbG1xbmoifQ.u8oSi903x7-iK9S0-lNuNg";

  return (
    <>
      <SectionContainer key={"location-section"}>
        {/* <ScrollAnimation animateOnce animateIn="fadeInLeft" duration={3}> */}
          <ContentContainer>
            <NumbersImage src={"http://wp.sankalprealty.us/wp-content/uploads/2021/04/Asset-3.svg"}></NumbersImage>
          </ContentContainer>
        {/* </ScrollAnimation> */}
      </SectionContainer>
    </>
  );
};

export default connect(NumbersSection);

const SectionContainer = styled.div`
  position: relative;
  overflow: visible;
  flex-wrap: none;
  height: 100%;
  width: 100vw;
  text-align: center;
  z-index: 1000;
`;

const ContentContainer = styled.div`
  display: flex;
  font-family: "Overpass", sans-serif;
  letter-spacing: -1.98px;
  height: 100%;

  @media (max-width: 768px) {
    display: block;
    letter-spacing: -0.5px;
  }
`;

const NumbersImage = styled.img`
  object-fit: cover;
  width: 100%;
  margin: -20vh 0 0 0;
  z-index: 1000;
  
  ${
    "" /* mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0)); */
  }

  @media (max-width: 768px) {
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  }
`;

const Text = styled.div`
 color: #000;
font-family: Overpass,sans-serif;
font-size: 2.2vw;
font-weight: 600;
line-height: 1.28571em;
margin: 20px 0 -20px 0;
padding: 0;
text-align: center;
`;

import React from "react";
import { connect, styled } from "frontity";
import { BrowserView, MobileView } from "react-device-detect";
import Link from "../../link";
import { Animated } from "react-animated-css";

const Hero = (props) => {
  // Get the data of the current list.
  //const data = props.state.source.get(props.state.router.link);

  return (
    <>
      <PageHero>
        <BrowserView>
          <BackgroundVideo
            loop="loop"
            muted
            autoPlay="autoplay"
            poster="https://wp.sankalprealty.us/wp-content/uploads/2020/12/Screen-Shot-2020-12-13-at-2.59.01-PM-scaled.jpg"
          >
            <source
              src="https://wp.sankalprealty.us/wp-content/uploads/2020/12/aerial-dallas-flying-over-freeway-traffic-camera-m-J2LACB8.webm"
              type="video/webm"
            />
            <source
              src="https://wp.sankalprealty.us/wp-content/uploads/2020/12/aerial-dallas-flying-over-freeway-traffic-camera-m-J2LACB8.mp4"
              type="video/mp4"
            />
          </BackgroundVideo>
        </BrowserView>

        <MobileView>
          <BackgroundImage src="https://wp.sankalprealty.us/wp-content/uploads/2020/12/Screen-Shot-2020-12-13-at-2.59.01-PM-scaled.jpg" />
        </MobileView>

        <BackgroundVideoContent>
          <HeroH1>Welcome to the country’s <span style={{color: "#7CD176"}}>fastest growing </span>commercial real estate market.</HeroH1><br/>
          <Divider />
        </BackgroundVideoContent>

        {/* <DownArrowBounce
          animationIn="bounce"
          animationOut="fadeOutDown"
          animationInDuration={1000}
          animationInDelay={3000}
          isVisible={true}

        >
          <svg length="auto" height="4vh" viewBox="0 0 364 200" version="1.1">
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="image" fill="#FFFFFF" fillRule="nonzero">
                <path
                  d="M332.287676,5.39253481 L181.805105,155.730419 L31.3225339,5.3743934 C24.148048,-1.79146447 12.5417278,-1.79146447 5.36724197,5.3743934 C-1.78908066,12.5402513 -1.78908066,24.1507551 5.36724197,31.316613 L168.818377,194.625607 L168.818377,194.625607 L168.818377,194.625607 C175.9747,201.791464 187.599183,201.791464 194.755506,194.625607 L358.206641,31.316613 C365.362964,24.1507551 365.362964,12.5221098 358.206641,5.35625198 C351.068482,-1.77332305 339.443998,-1.77332305 332.287676,5.39253481 Z"
                  id="Expand_More"
                ></path>
              </g>
            </g>
          </svg>
        </DownArrowBounce> */}
      </PageHero>
    </>
  );
};

export default connect(Hero);

const PageHero = styled.div`
  position: relative;
  overflow: hidden;
  background-color: black;
  width: 100vw;

`;

const BackgroundVideo = styled.video`
  position: absolute;
  object-fit: cover;
  object-position: 0 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.4;
  width: 100vw;
  height: 100%;

  video[poster] {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  video::-webkit-media-controls {
    display: none;
  }
`;

const BackgroundVideoContent = styled.div`
  position: relative;
  box-sizing: initial;
  align: center;
  text-align: left;
  width: 60vw;
  left: 0px;
  top: 0px;
  padding: 20vh 20vw;

  @media (max-width: 768px) {
    text-align: left;
    width: 90vw;
    margin: auto;
    padding: 5em 0 5em 0;
  }
`;

const BackgroundImage = styled.img`
  position: absolute;
  object-fit: cover;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.4;
  width: 100vw;
  height: 100%;
`;

const DownArrowBounce = styled(Animated)`
  position: fixed;
  margin: 0 45vw 0 45vw ;
  bottom: 15vw;
  width: 10vw;
  opacity: 0.3;
`;

const HeroH1 = styled.h1`
  color: #FFFFFF;
  font-size: 2.5em;
  letter-spacing: -0.02em;
  line-height: 1em;
  display: inline;
  font-family: "Overpass", sans-serif;
  font-weight: 700;
  margin: 0px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  font-style: italic;

  @media (max-aspect-ratio: 114/100) {
    text-align: left;

  }
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Divider = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    height: 4vw;
  }
  @media (max-aspect-ratio: 114/100) {
    display: block;
    height: 4vw;
  }
`;

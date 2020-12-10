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
            poster="https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/Screen_Shot_2020-10-27_at_8.24.45_PM_lpfgir-scaled.jpg"
          >
            <source
              src="https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/marijuana-plants-canopy-indoor-V5TYAEH_1_o8mlei.webm"
              type="video/webm"
            />
            <source
              src="https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/marijuana-plants-canopy-indoor-V5TYAEH_1_1.mp4"
              type="video/mp4"
            />
          </BackgroundVideo>
        </BrowserView>

        <MobileView>
          <BackgroundImage src="https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/Screen_Shot_2020-10-27_at_8.24.45_PM_lpfgir-scaled.jpg" />
        </MobileView>

        <BackgroundVideoContent>
          <HeroH1>Better Cannabis.</HeroH1>
          <Divider />
          <HeroH1Colored>Better Prices.</HeroH1Colored>
          <HeroH2>Pueblo, Colorado’s Favorite Dispensary.</HeroH2>

          <Link link="https://weedmaps.com/dispensaries/cannabis-depot-2">
            <HeroButtonMain variant="contained" color="primary">
              Order Online Now!
            </HeroButtonMain>
          </Link>

          <Link link="/locations/">
            <HeroButtonSecondary
              href="/directions"
              variant="contained"
              color="secondary"
            >
              Get directions
            </HeroButtonSecondary>
          </Link>
        </BackgroundVideoContent>

        <DownArrowBounce
          animationIn="bounce"
          animationOut="fadeOutDown"
          animationInDuration={1000}
          animationInDelay={3000}
          isVisible={true}

        >
          <svg width="auto" height="4vh" viewBox="0 0 364 200" version="1.1">
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="image" fill="#FFFFFF" fill-rule="nonzero">
                <path
                  d="M332.287676,5.39253481 L181.805105,155.730419 L31.3225339,5.3743934 C24.148048,-1.79146447 12.5417278,-1.79146447 5.36724197,5.3743934 C-1.78908066,12.5402513 -1.78908066,24.1507551 5.36724197,31.316613 L168.818377,194.625607 L168.818377,194.625607 L168.818377,194.625607 C175.9747,201.791464 187.599183,201.791464 194.755506,194.625607 L358.206641,31.316613 C365.362964,24.1507551 365.362964,12.5221098 358.206641,5.35625198 C351.068482,-1.77332305 339.443998,-1.77332305 332.287676,5.39253481 Z"
                  id="Expand_More"
                ></path>
              </g>
            </g>
          </svg>
        </DownArrowBounce>
      </PageHero>
    </>
  );
};

export default connect(Hero);

const BackgroundVideo = styled.video`
  position: absolute;
  object-fit: cover;
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

// const VideoOverlay = styled.div`
//     position: relative;
//     color: black;
//     background-color: rgba(0, 0, 0, 0.7);
//     opacity: 0.8;
//     width: 100vw;
//     height: 100%;

// `

const BackgroundVideoContent = styled.div`
  position: relative;
  align: center;
  text-align: center;
  width: 90%;
  left: 0px;
  top: 0px;
  padding: 25vh 5%;

  @media (max-width: 768px) {
    text-align: left;
    width: 75vw;
    margin: auto;
    padding: 15vw 5vw 10vw 5vw;
  }
  @media (max-aspect-ratio: 114/100) {
    text-align: left;
    width: 80vw;
    margin: 10vh 10px 0 10vw;
    padding: 0 0 0 0;
  }
`;

const DownArrowBounce = styled(Animated)`
  position: fixed;
  margin: auto;
  bottom: 1vw;
  width: 100%;
  opacity: 0.3;

  --animate-repeat: 2;
`;

const PageHero = styled.div`
  position: relative;
  overflow: hidden;
  background-color: black;
  width: 100%;
  height: 95vh;

  @media (max-width: 768px) {
    height: 95vh;
  }
  @media (max-aspect-ratio: 114/100) {
    height: 95vh;
  }
`;

const HeroH1 = styled.h1`
  color: #aaafe2;
  font-size: 6vw;
  letter-spacing: -3.91pt;
  display: inline;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  margin: 0px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-aspect-ratio: 114/100) {
    font-size: min(130px, 15vw);
    letter-spacing: -0.2vh;
    line-height: min(100px, 15vw);
    text-align: left;

  }
  @media (max-width: 768px) {
    font-size: 15vw;
    letter-spacing: 0.3vw;
    line-height: 10.75vw;
    text-align: left;
  }
`;

const HeroH1Colored = styled(HeroH1)`
  color: #c2a878;
`;

const HeroH2 = styled.h2`
  color: #f1f5f2;
  text-align: center;
  font-size: 2.5vw;
  letter-spacing: -1pt;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  font-weight: 500;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 4vw;
    letter-spacing: 0.05vw;
    text-align: left;
    margin: 2vw 0 0 0;
  }
  @media (max-aspect-ratio: 114/100) {
    font-size: 4vw;
    letter-spacing: 0.05vw;
    text-align: left;
    margin: 2vw 0 0 0;
  }
`;

const HeroButtonMain = styled.button`
  border: 2px;
  cursor: pointer;
  margin: 3vw 10px;
  display: inline-flex;
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  padding: 6px 16px;
  font-size: 1.5vw;
  width: auto;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  color: #fff;
  background-color: #6369d1;
  border-color: #6369d1;
  border-style: solid;

  &:hover {
    background-color: #3f51b5;
    border-color: #3f51b5;
  }
  @media (max-aspect-ratio: 114/100) {
    margin: 2.5vh auto 2vh auto;
    display: flex;
    width: 60vw;
    font-size: 4vw;
  }
  @media (max-width: 768px) {
    margin: 15vw auto 5vw auto;
    display: flex;
    width: 60vw;
    font-size: 4vw;
  }
`;
const HeroButtonSecondary = styled.button`
  border: 2px;
  cursor: pointer;
  margin: 3vw 10px;
  display: ${(props) => (props.mobile ? "block" : "inline-flex")};
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  padding: 6px 16px;
  font-size: 1.5vw;
  width: auto;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  color: #fff;
  background-color: rgba(0, 0, 0, 0);
  border-color: #fff;
  border-style: solid;

  &:hover {
    border-color: #6369d1;
  }

  @media (max-width: 768px) {
    margin: 0vw auto 10vw auto;
    display: flex;
    width: 60vw;
    font-size: 4vw;
  }
  @media (max-aspect-ratio: 114/100) {
    margin: 0vw auto 10vw auto;
    display: flex;
    width: 60vw;
    font-size: 4vw;
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

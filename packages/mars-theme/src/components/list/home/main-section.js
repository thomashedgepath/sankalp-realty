import React from "react";
import { connect, styled } from "frontity";
import ScrollAnimation from "react-animate-on-scroll";

const MainSection = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <>
      <SectionContainer key={"main-section"}>
        <ContentContainer>
          <LeftContent>
            <ScrollAnimation animateOnce animateIn="fadeInLeft" duration={3}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <PrimaryText>
                  <span style={{ color: "black" }}>At</span>
                  <span style={{ color: "#007A0F", fontStyle: "italic" }}>
                    {"The Cannabis Depot "}
                  </span>
                  <span style={{ color: "black" }}>
                    we are committed to providing safe, consistent, high quality
                    marijuana products at prices that can’t be beat.
                    <br />
                  </span>
                  <SecondaryText>
                    Navigating the countless marijuana products on the market
                    today can be challenging for first-timers and experienced
                    smokers alike. Our knowledgeable team is dedicated to
                    helping you find the right products for any situation.
                  </SecondaryText>
                  {/* <Divider />
                    <span style={{color: "#F60000"}}>Flower</span> / 
                    <span style={{color: "#F2A300"}}> Concentrates</span> / 
                    <span style={{color: "#3185FF"}}> Edibles</span> / 
                    <span style={{color: "#007A0F"}}> Pre-rolls</span> / 
                    <span style={{color: "#544482"}}> Topicals</span> / 
                    <span style={{color: "#F400A2"}}> Tinctures</span> / 
                    <span style={{color: "#7AD270"}}> THC and CBD</span> */}
                </PrimaryText>
              </div>
            </ScrollAnimation>
          </LeftContent>
          <RightContent>
            <ScrollAnimation animateOnce animateIn="fadeInRight" duration={3}>
              <StoreImage
                src={
                  "https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/12/IMG_0917-scaled.jpeg"
                }
              />
            </ScrollAnimation>
          </RightContent>
        </ContentContainer>
      </SectionContainer>
    </>
  );
};

export default connect(MainSection);

const SectionContainer = styled.div`
  position: relative;
  overflow: hidden;
  flex-wrap: none;
  width: 100%;
  background-color: #f1f5f2;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 100%;
  justify-content: space-evenly;
  justify-items: center;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;

  @media (max-width: 768px) {
    display: block;
  }
`;

const LeftContent = styled.div`
  grid-column-start: 1;
  width: 100%;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

const RightContent = styled.div`
  grid-column-start: 2;
  display: flex;
  width: 100%;

  @media (max-width: 768px) {
    margin: 0 5px 0 0;
  }
`;

const StoreImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  mask-image: linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0));

  @media (max-width: 768px) {
    mask-image: linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0));
  }
`;

const PrimaryText = styled.p`
  text-align: left;
  font-family: "Overpass", sans-serif;
  font-size: 2.25vw;
  color: #858585;
  letter-spacing: -1.98px;
  margin: 5vw;

  @media (max-width: 768px) {
    font-size: 6vw;
    margin: 10vw;
  }
`;

const SecondaryText = styled.span`
  text-align: left;
  font-family: "Overpass", sans-serif;
  font-size: 1.75vw;
  color: #858585;

  @media (max-width: 768px) {
    font-size: 5.5vw;
  }
`;
// const Divider = styled.div`
//   width: 100%;
//   height: 2vw;
// `;

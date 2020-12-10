import React from "react";
import { connect, styled } from "frontity";
import Link from "../../link";
import ScrollAnimation from "react-animate-on-scroll";

const LocationSection = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <>
      <SectionContainer key={"location-section"}>
        <ContentContainer>
          <ScrollAnimation animateOnce animateIn="fadeInLeft" duration={3}>
            <LeftContent>
              <StoreImage src="https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/12/Store-scaled.jpg"></StoreImage>
            </LeftContent>
          </ScrollAnimation>
          <ScrollAnimation animateOnce animateIn="fadeInRight" duration={3}>
          <RightContent>
            <PrimaryText>
              <span style={{ color: "black", fontWeight: 500 }}>
                Located along I-25 just minutes from downtown Pueblo.
                <br />
              </span>
              <span style={{ color: "#007A0F", fontStyle: "italic" }}>
                {" "}
                The Cannabis Depot{" "}
              </span>{" "}
              offers a great selection of marijuana products to meet your needs
              today!
              <br />
              <div
                style={{
                  color: "#003F8A",
                  fontStyle: "italic",
                  fontWeight: 700,
                  textAlign: "center",
                  margin: "20px",
                  textDecoration: "underline",
                }}
              >
                <Link link="/locations/">Get Directions</Link>
              </div>
            </PrimaryText>
          </RightContent>
          </ScrollAnimation>
        </ContentContainer>
      </SectionContainer>
    </>
  );
};

export default connect(LocationSection);

const SectionContainer = styled.div`
  position: relative;
  overflow: hidden;
  flex-wrap: none;
  height: 100%;
  width: 100%;
  text-align: center;
  z-index: 1000;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  grid-template-rows: 100%;
  justify-content: space-evenly;

  color: #007a0f;

  font-family: "Overpass", sans-serif;
  letter-spacing: -1.98px;
  

  @media (max-width: 768px) {
    display: block;
    letter-spacing: -0.5px;
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

  @media (max-width: 768px) {
    margin: auto;
    padding: 0px;
  }
`;

const RightContent = styled.div`
  grid-column-start: 2;
  display: flex;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2vw;
  margin: 10px;

  @media (max-width: 768px) {
    margin: 5vw;
    width: auto;
  }
`;

const StoreImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));

  @media (max-width: 768px) {
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
  }
`;

const PrimaryText = styled.div`
  text-align: left;
  font-family: "Overpass", sans-serif;
  font-size: 2.25vw;
  font-weight: 100;
  color: black;
  letter-spacing: -1.98px;
  margin: 10px;

  @media (max-width: 768px) {
    font-size: 6vw;
    margin: 6vw;
  }
`;

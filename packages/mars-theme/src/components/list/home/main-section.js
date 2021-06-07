import React from "react";
import { connect, styled } from "frontity";
import ScrollAnimation from "react-animate-on-scroll";

const MainSection = ({ state, actions }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <>
      <SectionContainer key={"main-section"}>
        <ContentContainer>
          <ScrollAnimation animateOnce animateIn="fadeInDown" duration={1}>
            <PrimaryText>
              Trusted Experience. <br /> Trusted Insight.
            </PrimaryText>
            <SecondaryText>
              We know what it takes to{" "}
              <span
                style={{ fontFamily: "Permanent Marker", color: "#4BA2AA" }}
              >
                get things done
              </span>{" "}
              in North Texas.
            </SecondaryText>
            <Button
              onClick={actions.theme.toggleContactModal}
              src="http://wp.sankalprealty.us/wp-content/uploads/2021/04/Start_outlines.svg"
            ></Button>
            <PText>
              Every decision in Real Estate is a big decision. Wether you are
              looking for an Investment Property, development ready land, or AG land our team will treat your goals like our
              own.
              <br />
              <br />
              <div style={{ textAlign: "center" }}>
                <TextContainer color="#F79837"> <a href={`/services#site-selection`}>Site Selection</a></TextContainer> /
                <TextContainer color="#0E9B49"> <a href={`/services#buyer-seller-representation`}>Buyer & Seller Representation</a></TextContainer> /
                <TextContainer color="#333332"> <a href={`/services#investment-sales`}>Investment Properties</a></TextContainer> /
                <TextContainer color="#2B4F77"> <a href={`/services#large-lands`}>Large Project Lands</a></TextContainer>
              </div>
            </PText>
          </ScrollAnimation>
        </ContentContainer>
      </SectionContainer>
    </>
  );
};

export default connect(MainSection);

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  justify-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  flex-wrap: none;
  width: 100%;
  background-color: #f1f5f2;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  justify-items: center;
  text-align: center;
  font-weight: 400;
  width: 90vw;
  margin: 5vw;
  max-width: 1200px;

  @media (max-width: 768px) {
    display: block;
    margin: 3em 0;
    max-width: 90vw;
  }
`;

const PrimaryText = styled.h1`
  text-align: left;
  font-family: "Overpass", sans-serif;
  font-size: 3em;
  color: #acacac;
  line-height: 0.9em;
  letter-spacing: -0.08em;
  margin: 0;
`;

const SecondaryText = styled.h2`
  font-family: "Overpass", sans-serif;
  font-size: 1em;
  color: black;
  text-align: left;
  font-weight: 600;
  margin: 0;

`;

const PText = styled.p`
  font-family: "Overpass", sans-serif;
  text-align: left;
  font-size: 0.9em;
  color: #858585;
  margin: 0;
`;

const Button = styled.img`
  width: 15em;
  max-width: 90vw;
  margin: 5vh 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const TextContainer = styled.span`
  ${"" /* text-transform: uppercase; */}
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  color: ${(props) => (props.color ? props.color : "#858585")};

  &:hover {
    text-decoration: underline;
  }

  ${'' /* @media (max-width: 768px) {
    display: inline;
    font-size: 6vw;
    letter-spacing: -0.5px;
  } */}
`;

import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import ContactForm from "./form";

const ContactPage = ({ state, actions, libraries }) => {
  return (
    <>
      <ContentContainer>
        <LeftContainer>
          <PrimaryText>Start your project today!</PrimaryText>
          {/* <SecondaryText>
              We know what it takes to <span style={{fontFamily: 'Permanent Marker', color: "#4BA2AA"}}>get things done</span> in North Texas.
            </SecondaryText> */}
          <PText>
            Tell us a little about your project and how we can help you meet
            your real estate goals.
          </PText>
        </LeftContainer>
        <RightContainer>
          <ContactForm />
        </RightContainer>
      </ContentContainer>
    </>
  );
};

export default connect(ContactPage);

// Layout

const ContentContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 2vh 2vh;
  text-align: right;

  width: 100%;
  height: 100%;
`;

const RightContainer = styled.div`
  align-items: center;
  justify-content: center;
  padding: 7.5vh 5vw 1.5vh 5vw;

  width: 50vw;
  height: 100%;
`;

const LeftContainer = styled(RightContainer)`
  align-items: right;
  justify-content: right;
  padding: 0 5vw 1.5vh 5vw;
`;

/// Text Styles

const PrimaryText = styled.h1`
  text-align: left;
  font-family: "Overpass", sans-serif;
  font-size: 6vw;
  color: #acacac;
  line-height: 8vh;
  letter-spacing: -0.5vw;
  margin: 0;
  

  @media (max-width: 768px) {
    font-size: 6vw;
    margin: 10vw;
  }
`;

const SecondaryText = styled.h2`
  font-family: "Overpass", sans-serif;
  font-size: 2.2vw;
  color: black;
  text-align: left;
  font-weight: 600;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 5.5vw;
  }
`;

const PText = styled.p`
  font-family: "Overpass", sans-serif;
  text-align: left;
  font-size: 1.75vw;
  color: #000;
  margin: 2vh 0 0 0;
  line-height: 1;

  @media (max-width: 768px) {
    font-size: 5.5vw;
  }
`;

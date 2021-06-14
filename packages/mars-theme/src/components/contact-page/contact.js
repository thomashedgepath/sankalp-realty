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
          <br/>
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

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const RightContainer = styled.div`
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 100%;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 2em 0 0 0;
  }
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
  font-size: 3em;
  color: #acacac;
  line-height: 1;
  letter-spacing: -0.05em;
  margin: 0;
`;


const PText = styled.p`
  font-family: "Overpass", sans-serif;
  text-align: left;
  font-size: 0.8em;
  color: #000;
  margin: 2vh 0 0 0;
  line-height: 1;
  letter-spacing: 0.35pt;

`;

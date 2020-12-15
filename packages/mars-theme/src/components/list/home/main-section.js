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
          <ScrollAnimation animateOnce animateIn="fadeInDown" duration={1}>
            <PrimaryText>
              Trusted Experience. <br /> Trusted Insight.
            </PrimaryText>
            <SecondaryText>
              We know what it takes to <span style={{fontFamily: 'Permanent Marker', color: "#4BA2AA"}}>get things done</span> in North Texas.
            </SecondaryText>
            <Button src="https://wp.sankalprealty.us/wp-content/uploads/2020/12/Start-Today.svg"></Button>
            <PText>
              Every decision in Real Estate is a big decision. Wether you are
              leasing your first Retail storefront, building your 100th
              Industrial development, or looking for quality tenants to fill
              your new Office building our team will treat your project like our
              own.<br/><br/>
              Site Selection / Planning & Development  / Investment / Project Leasing / Tenant Representation
            </PText>
          </ScrollAnimation>
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
  display: flex;
  justify-content: space-evenly;
  justify-items: center;
  text-align: center;
  font-weight: 400;
  padding: 5vh 15vw;
  

  @media (max-width: 768px) {
    display: block;
  }
`;

const PrimaryText = styled.h1`
  text-align: left;
  font-family: "Overpass", sans-serif;
  font-size: 6vw;
  color: #ACACAC;
  line-height: 8vh;
  letter-spacing: -0.5vw;
  margin:0;

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
  margin:0;

  @media (max-width: 768px) {
    font-size: 5.5vw;
  }
`;

const PText = styled.p`
  font-family: "Overpass", sans-serif;
  text-align: left;
  font-size: 1.75vw;
  color: #858585;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 5.5vw;
  }
`;
// const Divider = styled.div`
//   width: 100%;
//   height: 2vw;
// `;

const Button = styled.img`
  width: 30vw;
  margin: 5vh 0; 
  
  &:hover{
    transform: scale(1.1);
  }
`;

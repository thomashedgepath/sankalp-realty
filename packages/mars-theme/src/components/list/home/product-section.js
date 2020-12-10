import React from "react";
import { connect, styled } from "frontity";
import ScrollAnimation from "react-animate-on-scroll";
import Link from "../../link";

const ProductSection = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <>
      <SectionContainer key={"products-section"}>
        <ScrollAnimation animateOnce animateIn="slideInRight" duration={3}>
          <ContentContainer>
            <CircleSeparator />
            <Link link={"/products"} scrollToSection={"pre-rolls"}>
              <TextContainer color="#F60000">Flower</TextContainer>
            </Link>
            <CircleSeparator />
            <TextContainer color="#F400A2">
              <a href={`/products#thc-and-cbd`}>THC & CBD</a>
            </TextContainer>
            <CircleSeparator />
            <TextContainer color="#F2A300">
              <a href={`/products#concentrates`}>Concentrates</a>
            </TextContainer>
            <CircleSeparator />
            <TextContainer color="#7AD270">
              <a href={`/products#edibles`}>Edibles</a>
            </TextContainer>
            <CircleSeparator />
            <TextContainer color="#3185FF">
              <a href={`/products#pre-rolls`}>Pre-Rolls</a>
            </TextContainer>
            <CircleSeparator />
            <TextContainer color="#007A0F">
              <a href={`/products#vape-cartridges`}>Cartridges</a>
            </TextContainer>
            <CircleSeparator />
          </ContentContainer>
        </ScrollAnimation>
      </SectionContainer>
    </>
  );
};

export default connect(ProductSection);

const SectionContainer = styled.div`
  position: relative;
  overflow: hidden;
  flex-wrap: none;
  background-color: #6369d1;
  height: 100%;
  width: 100%;
  text-align: center;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1vw;
  }
`;
const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 2.5vw;

  margin: 0px;
  padding: 1vw;
  font-family: "Overpass", sans-serif;
  letter-spacing: -1.98px;

  @media (max-width: 768px) {
    display: inline;
    font-size: 10vw;
    letter-spacing: -0.5px;
    line-height: 8vw;
  }
`;
const TextContainer = styled.div`
  font-size: 2vw;
  width: auto;
  text-transform: uppercase;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    color: ${(props) => (props.color ? props.color : "white")};
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    display: inline;
    font-size: 6vw;
    letter-spacing: -0.5px;
  }
`;
const CircleSeparator = styled.div`
  height: 0.75vw;
  width: 0.75vw;
  border-radius: 50%;
  margin: 1vw;

  display: inline-block;
  background-color: white;

  @media (max-width: 768px) {
    height: 2vw;
    width: 2vw;
    border-radius: 50%;
    min-width: 10px;
    min-height: 10px;
    margin: auto 10px 5px 10px;
  }
`;

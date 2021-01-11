import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import { BrowserView, MobileView } from "react-device-detect";
import { product_data } from "./services-content";

const Products = ({ state }) => {
  return (
    <>
      <BrowserView>
        <SectionContainer key={"all-products-section"}>
          {product_data.map((product, index) => (
            <>
              {index % 2 == 0 ? (
                <>
                  <AnchorOffset id={product.slug} />
                  <ContentContainer key={product.slug}>
                    <LContent>
                      <ProductImage src={product.photo_url}></ProductImage>
                    </LContent>
                    <RContent>
                      <TextCard>
                        <PrimaryText>{product.name}</PrimaryText>
                        <SecondaryText dangerouslySetInnerHTML={product} />
                      </TextCard>
                    </RContent>
                  </ContentContainer>
                </>
              ) : (
                <>
                  <AnchorOffset id={product.slug} />
                  <ContentContainer key={product.slug}>
                    <LContent>
                      <TextCard>
                        <PrimaryText>{product.name}</PrimaryText>
                        <SecondaryText dangerouslySetInnerHTML={product} />
                      </TextCard>
                    </LContent>
                    <RContent>
                      <ProductImage src={product.photo_url}></ProductImage>
                    </RContent>
                  </ContentContainer>
                </>
              )}
            </>
          ))}
        </SectionContainer>
      </BrowserView>

      <MobileView>
        <SectionContainer key={"mobile-all-products-section"}>
          {product_data.map((product, index) => (
            <>
              <AnchorOffset id={product.slug} />
              <ContentContainer key={product.slug}>
                <LContent>
                  <ProductImage src={product.photo_url}></ProductImage>
                </LContent>
                <RContent>
                  <TextCard>
                    <PrimaryText>{product.name}</PrimaryText>
                    <SecondaryText dangerouslySetInnerHTML={product} />
                  </TextCard>
                </RContent>
              </ContentContainer>
            </>
          ))}
        </SectionContainer>
      </MobileView>
    </>
  );
};

export default connect(Products);

const AnchorOffset = styled.a`
  display: block;
  position: relative;
  top: -20vh;
  visibility: hidden;
  pointer-events: none;
`;

const SectionContainer = styled.div`
  position: relative;
  overflow: hidden;
  flex-wrap: none;
  width: 100vw;
  height: 100%;

  background-color: #f1f5f2;
`;

const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 40vw 40vw;
  justify-content: center;

  color: #007a0f;

  margin: 0;
  font-family: "Overpass", sans-serif;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    display: block;
    letter-spacing: -0.5px;
  }
`;

const LContent = styled.div`
  grid-column-start: 1;

  display: flex;

  font-weight: 500;
  text-align: left;
  font-size: 2vw;

  align-content: center;
  align-items: center;
  justify-content: center;

  background-color: none;

  @media (max-width: 768px) {
  }
`;

const RContent = styled(LContent)`
  grid-column-start: 2;
  display: flex;
  background-color: none;

  @media (max-width: 768px) {
  }
`;

const ProductImage = styled.img`
  width: 20vw;
  height: auto;
  object-fit: cover;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.5));
  margin: 2vh 0;

  @media (max-width: 768px) {
    height: 40vh;
  }
`;

const PrimaryText = styled.div`
  text-align: left;
  font-family: "Overpass", sans-serif;
  font-size: 4vh;
  font-weight: 300;
  color: black;
  letter-spacing: -1px;
  margin: 10px;

  @media (max-width: 768px) {
    font-size: 5vh;
    margin: 20px;
  }
`;

const SecondaryText = styled(PrimaryText)`
  font-size: 2vh;
  color: #858585;
  font-weight: 200;

  @media (max-width: 768px) {
    font-size: 5.5vw;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 2vw;
`;

const TextCard = styled.div`
  text-align: center;
  font-size: 1.8vh;
  width: 80%;
  background-color: white;
  margin: 20px;
  border-radius: 20px;
  padding: 1vw;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5));

  @media (max-width: 768px) {
    margin: -10vh 0 10px 0;
    width: 90%;
  }
`;

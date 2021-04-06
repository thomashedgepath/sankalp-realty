import React from "react";
import { connect, styled } from "frontity";
import {json} from '../property-data/master';

import slugify from '@sindresorhus/slugify';

const Property = ({ state, actions }) => {
  const listing_type = slugify(json[0].listing_type)
  const city = slugify(json[0].address.city)
  const state_code = slugify(json[0].address.state_code)
  const street_address = slugify(json[0].address.street_address)
  const id = slugify(`${json[0].id}`)

  

  const slug = `/property/${listing_type}/${state_code}/${city}/${street_address}/${id}` 

  const handleClick = (event) => {
    const x = Math.floor(Math.random() * 10)
    actions.router.set(slug)
    //  actions.router.set(`/property/${Math.floor(Math.random() * 10)}`)
  }

  

  return (
    <>
      
      {console.log(state.source)}
      <p>{state.router.link}</p>
      <button onClick={handleClick}>test</button>
    </>
  );
};

export default connect(Property);

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
  font-size: 4vw;

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
  border-left: 4px solid #2B4F77;

  @media (max-width: 768px) {
  }
`;

const ProductImage = styled.img`
  width: 20vw;
  height: auto;
  object-fit: cover;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.5));
  margin: 2vh 0;
  
  margin-left: ${(props) => (props.right ? "0" : "auto")};
  

  @media (max-width: 768px) {
    height: 40vh;
  }
`;

const PrimaryText = styled.div`
  text-align: left;
  font-family: "Overpass", sans-serif;
  font-size: 6vh;
  font-weight: 300;
  color: black;
  letter-spacing: -3pt;
  margin: 10px;
  line-height: 0.85;

  @media (max-width: 768px) {
    font-size: 5vh;
    margin: 20px;
  }
`;

const SecondaryText = styled(PrimaryText)`
  font-size: 3vh;
  color: #858585;
  font-weight: 200;
  line-height: 1.2;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 5.5vw;
  }
`;

const Circle = styled.div`
      width: 20px;
      height: 20px;
      background: #2B4F77;
      border-radius: 50%;
      margin-left: auto;
      margin-right: -12px;
      right: 0;
`;

const TextCard = styled.div`
  text-align: center;
  font-size: 1.8vh;
  width: 80%;
  ${'' /* background-color: white; */}
  margin: 20px;
  border-radius: 20px;
  padding: 1vw;
  ${'' /* filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5)); */}

  @media (max-width: 768px) {
    margin: -10vh 0 10px 0;
    width: 90%;
  }
`;

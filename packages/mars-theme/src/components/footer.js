import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Footer = (props) => {
  let logo_url =
    "https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/The-Cannabis-Depot-Logo-1.svg";

  return (
    <>
      <SectionContainer key={"footer-section"}>
       {console.log("Preview Deployment")}
        <ContentContainer>
          <Column1>
            <Logo src={logo_url} />
          </Column1>
          <Column2>
          <div style={{margin: "0 10px 0 10px"}}> 
            <p>
              <span style={{ color: "#C2A878", textTransform: "uppercase" }}>Address:</span>
              <br />
              <Link link="https://g.page/cannabisdepotpueblo?share">2440 North Interstate 25 <br />
              Pueblo, Colorado 81008
              </Link>
              <br />
              <br />
              <span style={{ color: "#C2A878", textTransform: "uppercase" }}>Phone:</span>
              <br />
              (719) 283-8017
              <br />
            </p>
          </div>
          </Column2>
          <Column3>
          <div style={{margin: "0 10px 0 10px"}}>
            <p><span style={{ color: "#C2A878", textTransform: "uppercase" }}>Store Hours:</span><br/> 
            Monday - Sunday: 8:00am - 10:45pm<br/><br/>
            <span style={{ color: "#C2A878", textTransform: "uppercase" }}>Reach Us:</span><br/></p>
            <SocialIcon id="facebook" src={"https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/facebook_yqifym.svg"} />
            <SocialIcon src={"https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/twitter_pdsiin.svg"} />
            <SocialIcon src={"https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/instagram_gzabzh.svg"} />
            <SocialIcon src={"https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/youtube_l1fr46.svg"} />
            <SocialIcon src={"https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/email_eoesbr.svg"} />
            
          </div>
          </Column3>
        </ContentContainer>
      </SectionContainer>
    </>
  );
};

export default connect(Footer);

// Main SectionContainer for the footer needs to match the bottom padding height from index.js
const SectionContainer = styled.div`
  position: absolute;
  bottom: 0;
  overflow: hidden;
  flex-wrap: none;
  background-color: #14281d;
  height: 25vh;
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
      height: 60vh;
    }
`;

const SocialIcon = styled.img`
  width: 2.5vw;
  max-width: 35px;
  height: auto;
  border-radius: 50px;
  margin: 5px 5px 0 0;

  @media (max-width: 768px) {
      width: 10vw;
      border-radius: 11vw;
      height: auto;
      margin: .7vw;
    }

`;

const Logo = styled.img`
  width: 15vw;
  max-width: 200px;
  height: auto;
  margin: 0 6vw 0 0;

  @media (max-width: 768px) {
    width: 40vw;
    margin: 0 0 0 0;
    align-content: left;
    align-items: left;
    justify-content: left;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  padding: 20px 20vw;
  justify-content: space-evenly;
  justify-items: center;
  text-align: center;

  color: #007a0f;

  font-family: 'Overpass', sans-serif;
  letter-spacing: -1.98px;

  @media (max-width: 768px) {
    letter-spacing: -0.5px;
    display: block;
    padding: 2vw;
  }
`;
const Column1 = styled.div`
  ${'' /* background-color: #007a0f; */}
  color: #fff;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
      width: 100vw;
      text-align: center;
      align-content: center;
      align-items: center;
      justify-content: center;

    }
`;
const Column2 = styled.div`
  ${'' /* background-color: #1e5436; */}
  
  height: auto;
  display: flex;
  align-content: left;
  align-items: left;
  justify-content: left;
  width: min(30vw, 280px);


  font-size: min(1.25vw, 16px);
  color: #f1f5f2;
  font-family: "Montserrat", sans-serif;
  letter-spacing: -0.88px;
  text-align: left;
  font-weight: 300;

  @media (max-width: 768px) {
      font-size: 4vw;
      width: 100vw;
      text-align: left;
      align-content: left;
      align-items: left;
      justify-content: left;

    }
`;
const Column3 = styled.div`
  ${'' /* background-color: #e39100; */}
  
  height: auto;
  display: flex;
  align-content: left;
  align-items: left;
  justify-content: left;
  width: min(30vw, 280px);

  font-size: min(1.25vw, 16px);;
  color: #f1f5f2;
  font-family: "Montserrat", sans-serif;
  letter-spacing: -0.88px;
  text-align: left;
  font-weight: 300;

  @media (max-width: 768px) {
      font-size: 4vw;
      width: 100vw;
      text-align: left;
      align-content: left;
      align-items: left;
      justify-content: left;
    }
  
`;

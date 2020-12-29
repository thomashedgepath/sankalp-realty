import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

const Footer = (props) => {
  let logo_url =
    "https://wp.sankalprealty.us/wp-content/uploads/2020/12/sankalp-logo-1.svg";

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
              <span style={{ color: "#FECB65", textTransform: "uppercase" }}>Address:</span>
              <br />
              <Link link="https://goo.gl/maps/4V61qdsbij9Ptvu16">
              8668 John Hickman Pkwy, Suite 906<br/>
              Frisco, TX 75034
              </Link>
              <br />
              <br />
              <span style={{ color: "#FECB65", textTransform: "uppercase" }}>Phone:</span>
              <br />
              (469) 712-6773
              <br />
            </p>
          </div>
          </Column2>
          <Column3>
          <div style={{margin: "0 10px 0 10px"}}>
            <p><span style={{ color: "#FECB65", textTransform: "uppercase" }}>Our Services:</span><br/> 
            Site Selection <br /> Planning & Development  <br /> Investment <br /> Project Leasing <br /> Tenant Representation
            
            </p>

            
          </div>
          </Column3>
          <Column4>
          <div style={{margin: "0 10px 0 10px"}}>
            <p>
            <span style={{ color: "#FECB65", textTransform: "uppercase" }}>Reach Us:</span><br/>
            </p>
            <Link link="https://www.linkedin.com/company/sankalp-realty-us"><SocialIcon src={"https://wp.sankalprealty.us/wp-content/uploads/2020/12/LinkedIn.svg"} /></Link>
            <Link link="https://www.youtube.com/channel/UC89YkukgRJcQUO3_4jo7-zQ"><SocialIcon src={"https://wp.sankalprealty.us/wp-content/uploads/2020/12/youtube.svg"} /></Link>
            <Link link="https://www.facebook.com/sankalprealtyus"><SocialIcon src={"https://wp.sankalprealty.us/wp-content/uploads/2020/12/facebook.svg"} /></Link>
            <a href="mailto:info@sankalprealty.us"><SocialIcon src={"https://wp.sankalprealty.us/wp-content/uploads/2020/12/email.svg"} /></a>

            
          </div>
          </Column4>
        </ContentContainer>
        <DisclaimerContainer>
          <DisclaimerText style={{textAlign: "center", color: "white", fontWeight: "500", textTransform: "uppercase"}}><Link link={'https://wp.sankalprealty.us/wp-content/uploads/2020/12/TREC_CPN.pdf'}>Texas Real Estate Commission Consumer Protection Notice</Link> |  <Link link={'https://wp.sankalprealty.us/wp-content/uploads/2020/12/IABS-MP.pdf'}>Texas Real Estate Commission Information About Brokerage Services</Link><br/><br/><br/></DisclaimerText>
          <DisclaimerText style={{textAlign: "left"}}>© 2020 Sankalp Realty, LLC   |   Website by LocalBrokerMarketing<br/></DisclaimerText>
          <DisclaimerText> The information contained herein was obtained from sources believed reliable; however, Sankalp Realty LLC makes no guarantees, warranties or representations as to the completeness or accuracy thereof. The information contained in this website is submitted subject to errors, omissions, change of price or conditions, prior sale or lease, or withdrawal without notice. </DisclaimerText>
          <DisclaimerText>Product name, logos, brands, and other trademarks featured or referred to in this website are the property of their respective trademark holders.</DisclaimerText>
        </DisclaimerContainer>
      </SectionContainer>
    </>
  );
};

export default connect(Footer);


// Main SectionContainer for the footer needs to match the bottom padding height from index.js
// Set footer height to automatically change both variables. 
export const footerHeight = "50vh"

const SectionContainer = styled.div`
  position: absolute;
  bottom: 0;
  overflow: hidden;
  flex-wrap: none;
  background-color: #1F4E4A;

  height: ${footerHeight};
  width: 100%;
  text-align: center;

  @media (max-width: 768px) {
      height: 60vh;
    }
`;

const ContentContainer = styled.div`
  display: flex;
  padding: 20px 10vw;
  justify-content: space-evenly;
  justify-items: center;
  text-align: center;
  border-top: 10px solid #F79837;
  color: #007a0f;
  font-family: 'Overpass', sans-serif;

  @media (max-width: 768px) {
    letter-spacing: -0.5px;
    display: block;
    padding: 2vw;
  }
`;


const Logo = styled.img` 
    width: 10vw;
    max-width: 80px;
    min-width:60px;
    margin: 1vw 2vw 1vw 3vw;
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));

  @media (max-width: 768px) {
    width: 40vw;
    margin: 0 0 0 0;
    align-content: left;
    align-items: left;
    justify-content: left;
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

 const DisclaimerText = styled.p`
  color: #ACACAC;
  text-align: left;
  font-weight: 200;
  font-size: min(1.25vw, 12px);

 `
 const DisclaimerContainer = styled.div`
  padding: 5vh 10vw;
 `

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
  width: min(30vw, 300px);


  font-size: min(1.25vw, 16px);
  color: #f1f5f2;
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
  width: min(30vw, 250px);

  font-size: min(1.25vw, 16px);;
  color: #f1f5f2;
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

const Column4 = styled.div`
  ${'' /* background-color: #e39100; */}
  
  height: auto;
  display: flex;
  align-content: left;
  align-items: left;
  justify-content: left;
  width: min(30vw, 280px);

  font-size: min(1.25vw, 16px);;
  color: #f1f5f2;
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

import React from "react";
import { connect, styled } from "frontity";
import ScrollAnimation from "react-animate-on-scroll";

const FavoritesSection = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <>
     <SectionContainer key={"favorites-section"}>
        <HeaderText>Customer Favorites</HeaderText>
        <ScrollAnimation animateOnce animateIn="fadeInRight" duration={3}>
        <ScrollContainer>
            <ScrollElement>
                <BrandContainer>
                    <BrandLogo src={"https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/harmony-extracts_c0ssae.png"} />
                    <ElementInner url={"https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/concentrates-img_plzqhd.png"} />
                </BrandContainer>
            </ScrollElement>

            <ScrollElement>
                 <BrandContainer>
                    <BrandLogo src={"https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/willies-logo_sp90bd.png"} />
                    <ElementInner url={"https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/willies-img_pxesjm.png"} />
                </BrandContainer>
            </ScrollElement>

            <ScrollElement>
                <BrandContainer>
                    <BrandLogo src={"https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/bakked-logo_zdpg9l.png"} />
                    <ElementInner url={"https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/bakked-img_tmkoxk-e1604979708291.png"} />
                </BrandContainer>
            </ScrollElement>

            <ScrollElement>
                <BrandContainer>
                    <BrandLogo src={"https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/open-logo_e2ybdo.png"} />
                    <ElementInner url={"https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/open-img_mbr6jq-e1604979761363.png"} />
                </BrandContainer>
            </ScrollElement>
            
            <ScrollElement />
            <ScrollElement />
            <ScrollElement />
            <ScrollElement />
        </ScrollContainer>
        </ScrollAnimation>
     </SectionContainer>
    </>
  );
};

export default connect(FavoritesSection);

const SectionContainer = styled.div`
    position: relative;
    overflow: hidden;
    flex-wrap: none;
    background-color: #F1F5F2;
    height: 100%;
    width: 100%;
    background-color: #F1F5F2;
    text-align: center;

`
const HeaderText = styled.p`
    text-align: left;
    font-family: 'Overpass', sans-serif;
    font-size: 3vw;
    color: #003F8A;
    letter-spacing: 1.25px;
    margin: 10px 0 0 5px;
    text-transform: uppercase;
    font-weight: 600;


    @media (max-width: 768px) {
        text-align: center;
        font-size: 8vw;
        letter-spacing: -1.25px;
    }
    
`

const ScrollContainer = styled.div`
    overflow: auto;
    white-space: nowrap;
    padding: 10px;
    position: relative;
    display: block;

    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    
    ::-webkit-scrollbar {
        display: none;
    }
`
const ScrollElement = styled.div`
    display: inline-block;
    overflow: hidden;
    background-color: #000;
    color: white;
    text-align: center;
    margin: 0 5px;
    text-decoration: none;
    width: 20vw;
    height: 20vw;
    border-radius: 14px;
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 1));

    @media (max-width: 768px) {
        width: 80vw;
        height: 50vw;
    }
`
const BrandContainer = styled.div`
    position: relative;
    background-image: url(${props => props.url ? props.url : ""});
    object-fit: cover;
    overflow: hidden;
    background-clip: content-box;
    width: 100%;
    height: 100%;
    
    /* Add the blur effect */
    
`
const BrandLogo = styled.img`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 1));
    width: 80%;  
    z-index: 2;
`

const ElementInner = styled.div`
    position: relative;
    background-image: url(${props => props.url ? props.url : ""});
    background-size: cover;
    overflow: hidden;
    background-clip: content-box;
    width: 100%;
    height: 100%;
    
    filter: brightness(60%);
`

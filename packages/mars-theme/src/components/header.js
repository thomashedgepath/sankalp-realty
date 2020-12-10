import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";


const Header = (props) => {
  let logo_url = "https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/The-Cannabis-Depot-Logo-1.svg"
  return (
    <>
      {/* {console.log(props.isMobile)} */}

        <HeaderContainer elevation={1}>
          <StyledToolbar>
            <LogoContainer style={{ flexGrow: 1 }}>
              <Link link="/">
                  <Logo src={logo_url} />
              </Link>
            </LogoContainer>
            <MobileMenu></MobileMenu>
            <Nav></Nav>
          </StyledToolbar>
        </HeaderContainer>
        
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);


const HeaderContainer = styled.header`
  font-size: 0.875rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  width: 100%;
  display: flex;
  z-index: 1100;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  top: 0;
  left: auto;
  right: 0;
  position: fixed;
  color: #fff;
  background-color: #14281D;
`;
const StyledToolbar = styled.div`
    font-size: 0.875rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.43;
    letter-spacing: 0.01071em;
    color: #fff;
    box-sizing: inherit;
    display: flex;
    position: relative;
    align-items: center;
    padding-left: 24px;
    padding-right: 24px;
    min-height: 64px;
    
    @media (max-width: 768px) {
      padding-left: 0px;
    }
`;

const LogoContainer = styled.div`
    width: auto;
    height: 75px;
    margin: 1em;

    @media (max-width: 768px) {
      height: 60px;
      margin: 5px;
    }
`;
const Logo = styled.img`
    width: 20vw;
    max-width: 380px;
    min-width:240px;
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));

    
`;

const NavItem = styled.div`

    margin: 0 0 0 0.8em;
    border-left: 1.5px solid #fff;
    height: 100%;
    width: auto;

    &:hover {
      border-left: 1.5px solid red;
    }
  
`;

const NavLink = styled.a`
   
    background-color: #000000;
    margin-left: 0.4em;
    border: none;
    font-size: 1.1em;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 700;
    line-height: 1.75;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: white;
    cursor:pointer;

    &:hover {
      color: white;
    }
  
`;

import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";

const Header = ({ state, libraries }) => {
  let logo_url =
    "https://wp.sankalprealty.us/wp-content/uploads/2020/12/sankalp-logo-1.svg";


  return (
    <>
      

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
  background-color: #1f4e4a;
  border-bottom: 10px solid #f79837;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  left: auto;
  letter-spacing: 0.01071em;
  line-height: 1.43;
  height: 12vh;
  position: fixed;
  right: 0;
  top: 0;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: 100%;
  z-index: 1100;
`;
const StyledToolbar = styled.div`
  align-items: center;
  box-sizing: inherit;
  color: #fff;
  display: flex;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  letter-spacing: 0.01071em;
  line-height: 1.43;
  min-height: 100px;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;

  @media (max-width: 768px) {
    padding-left: 0px;
  }
`;

const LogoContainer = styled.div`
  height: 100px;
  margin: 1em;
  width: auto;

  @media (max-width: 768px) {
    height: 60px;
    margin: 5px;
  }
`;
const Logo = styled.img`
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.6));
  max-width: 120px;
  min-width: 80px;
  width: 10vw;
  margin: 5px 0 0 0;
`;

const NavItem = styled.div`
  border-left: 1.5px solid #fff;
  height: 100%;
  margin: 0 0 0 0.8em;
  width: auto;

  &:hover {
    border-left: 1.5px solid red;
  }
`;

const NavLink = styled.a`
  background-color: #000000;
  border: none;
  color: white;
  cursor: pointer;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 1.1em;
  font-weight: 700;
  letter-spacing: 0.01em;
  line-height: 1.75;
  margin-left: 0.4em;
  text-transform: uppercase;

  &:hover {
    color: white;
  }
`;

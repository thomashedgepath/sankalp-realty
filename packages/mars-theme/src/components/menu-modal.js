import React from "react";
import { styled, connect } from "frontity";
import Link from "./link";

const MenuModal = ({ state }) => {
  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;

  return (
    <>
      <MenuOverlay>
      <MenuContent as="nav">
      <div style={{height: "3rem"}}></div>
        {isThereLinks &&
          menu.map(([name, link]) => (
            <>
            <MenuLink
              key={name}
              link={link}
              aria-current={state.router.link === link ? "page" : undefined}
            >
              {name}
              
            </MenuLink>
            </>
          ))}
      </MenuContent>
      </MenuOverlay>
    </>
  );
};

const MenuOverlay = styled.div`
  position: fixed;
  background-color: #1F4E4A;
  width: 100vw;
  height: 200vh;
  z-index: 9998;
  top: 0;
  left: 0;
`;

const MenuContent = styled.div`
  z-index: 9999;
  padding: 1rem 1rem 0 0;
`;

const MenuLink = styled(Link)`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 1.75rem;
  text-align: right;
  padding: 1rem 0;
  line-height: 1;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: yellow;
    font-weight: bold;
    /* border-bottom: 4px solid yellow; */
  }
`;

export default connect(MenuModal);

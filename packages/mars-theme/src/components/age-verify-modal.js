import React from "react";
import { connect, styled } from "frontity";

const AgeModal = ({ state, actions }) => {
  let logo_url =
    "https://thecannabisdepotco.localbrokermarketing.com/wp-content/uploads/2020/11/The-Cannabis-Depot-Logo-1.svg";

  return (
    <>
      <ModalContainer>
        <ContentContainer>
          {state.theme.didVerifyFail ? (
            <>
              <Text>
                <span style={{ fontSize: "8vw" }}>😔</span> <br />
                <span style={{ fontSize: "3vw" }}>
                  Come back when you're older, kid.
                </span>
              </Text>
            </>
          ) : (
            <>
              {" "}
              <Logo src={logo_url} />
              <Text>Are you at least 21 years old?</Text>
              <div style={{ display: "block" }}>
                <Button
                  onClick={actions.theme.toggleAgeVerified}
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.25)",
                  }}
                >
                  Yes
                </Button>

                <Button onClick={actions.theme.toggleDidVerifyFail}>No</Button>
              </div>
            </>
          )}
        </ContentContainer>
      </ModalContainer>
      <ModalDarken />
    </>
  );
};

export default connect(AgeModal);

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto auto;
  z-index: 1200;
  background-color: #007a0f;
  width: 80vw;
  height: 80vh;
  text-align: center;
  border-radius: 20px;
`;

const ContentContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 25vw;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));

  @media (max-width: 768px) {
    width: 50vw;
  }
`;

const Button = styled.div`
  border: 4px;
  cursor: pointer;
  margin: 1.5vw 10px;
  display: inline-flex};
  outline: 0;
  position: relative;
  align-items: center;
  user-select: none;
  vertical-align: middle;
  justify-content: center;
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
  padding: 6px 16px;
  font-size: 3vw;
  width: 10vw;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 500;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);
  color: #fff;
  background-color: rgba(0, 0, 0, 0.25);
  border-color: white;
  border-style: solid;

  &:hover {
      box-shadow: 0px 4px 2px -3px rgba(0,0,0,0.4),0px 4px 4px 0px rgba(0,0,0,0.28),0px 2px 10px 0px rgba(0,0,0,0.24);
    }
  }

  @media (max-width: 768px) {
    font-size: 4vw;
    border: 2px;
    border-color: white;
    border-style: solid;
    width: 20vw
  }
`;

const Text = styled.h1`
  color: white;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 4vw;
  letter-spacing: -1.98px;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.1));

  @media (max-width: 768px) {
    letter-spacing: 1px;
  }
`;

const ModalDarken = styled.div`
  position: absolute;
  top: -20vh;
  left: 0;
  width: 100vw;
  height: 120%;
  background-color: #007a0f;
  opacity: 0.75;
  z-index: 1101;
`;

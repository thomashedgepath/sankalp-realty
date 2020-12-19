import React from "react";
import { connect, styled } from "frontity";

const ContactFormModal = ({ state, actions, libraries }) => {
  
  const data = state.source.get("/contact");
  const contactForm = state.source.page[data.id];
  const Html2React = libraries.html2react.Component;
  

  return (
    <>
      <ModalContainer>
        <ContentContainer>
          {/* {state.theme.didVerifyFail ? (
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
          )} */}
          {console.log(contactForm)}
          <CloseButton onClick={actions.theme.toggleContactModal} src="https://wp.sankalprealty.us/wp-content/uploads/2020/12/clear-black-18dp.svg"></CloseButton>
          <div style={{marginTop: "20px" }}><Html2React html={contactForm.content.rendered} /></div>
          
          
        </ContentContainer>
      </ModalContainer>
      <ModalDarken />
    </>
  );
};

export default connect(ContactFormModal);

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto auto;
  z-index: 1200;
  background-color: #dfdfdf;
  width: 80vw;
  height: 80vh;
  text-align: center;
  border-radius: 20px;
`;

const ContentContainer = styled.div`
  position: relative;
  margin: 1vh 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


const ModalDarken = styled.div`
  position: absolute;
  top: -20vh;
  left: 0;
  width: 100vw;
  height: 120%;
  background-color: #737373;
  opacity: 0.75;
  z-index: 1101;
`;

const CloseButton = styled.img` 
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height:  40px;
  cursor: pointer;
`
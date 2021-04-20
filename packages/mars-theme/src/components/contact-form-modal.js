import React from "react";
import { connect, styled } from "frontity";
import ContactForm from "./contact-page/form";

const ContactFormModal = ({ state, actions, libraries }) => {
  const data = state.source.get("/contact");
  const contactForm = state.source.page[data.id];
  const Html2React = libraries.html2react.Component;

  return (
    <>
      <ModalContainer>
        <ContentContainer>
          <CloseButton
            onClick={actions.theme.toggleContactModal}
            src="https://wp.sankalprealty.us/wp-content/uploads/2020/12/clear-black-18dp.svg"
          ></CloseButton>
          <h3>Let us know about your project.</h3>
          <ContactForm />
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
  width: 40vw;
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
  height: 40px;
  cursor: pointer;
`;

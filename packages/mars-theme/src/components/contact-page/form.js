import React from "react";
import { connect, styled } from "frontity";

const ContactForm = ({ state, actions, libraries }) => {
  const data = state.source.get("/contact");
  const contactForm = state.source.page[data.id];
  const Html2React = libraries.html2react.Component;

  return (
    <>
      {/* {console.log(contactForm)} */}
      <ContentContainer>
        <div style={{ marginTop: "20px" }}>
          <Html2React html={contactForm.content.rendered} />
        </div>
      </ContentContainer>
    </>
  );
};

export default connect(ContactForm);

const ContentContainer = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin: 1vh 1vh;
  position: relative;
`;

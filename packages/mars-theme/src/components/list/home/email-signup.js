import React from "react";
import { connect, styled, decode } from "frontity";
import TextField from '@material-ui/core/TextField';



const EmailSignup = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <>
     <SectionContainer key={"email-signup-section"}>
       <ContentContainer>
       North Texas is growing fast. Join our mailing list to stay up to date.
        </ContentContainer>
        <InputContainer>
            <EmailInputField id="outlined-basic" fullWidth label="Enter your email to sign up!" variant="outlined" />
        </InputContainer>
     </SectionContainer>
    </>
  );
};

export default connect(EmailSignup);

const EmailInputField = styled(TextField)`
    display: inline-block;
    background-color: #F1F5F2;
    border-radius: 5px !important;
`
const InputContainer = styled.div`
    padding: 10px 10%;
    margin: 0 0 20px 0;

    @media (max-width: 768px) {
        padding: 10px 10%;
    }
`

const SectionContainer = styled.div`
    position: relative;
    overflow: hidden;
    flex-wrap: none;
    background-color: #2B4F77;
    height: 100%;
    width: 100%;
    text-align: center;
    filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));
    z-index: 1000;


`

const ContentContainer = styled.div`
    display: block;
    
    font-size: 2.5vw;
    color: #F3F3F3;
    text-transform: uppercase;
    margin: 0px;
    padding: 20px 0 5px 0;
    font-family: 'Overpass', sans-serif;
    letter-spacing: -1.98px;

    @media (max-width: 768px) {
        font-size: 6vw;
        letter-spacing: -0.5px;
    }
    

`

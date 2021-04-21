import React, { useState } from "react";
import { connect, styled, decode, Head } from "frontity";
import TextField from "@material-ui/core/TextField";
import jsonp from "jsonp";
import queryString from "query-string";
import * as EmailValidator from "email-validator";

const EmailSignup = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  const [email, setEmail] = useState("test@email.com");

  const handleEmailChange = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const subscribeToNewsLetter = (event) => {
    event.preventDefault();
    const formData = {
      EMAIL: email,
    };

    if (EmailValidator.validate(email) === true) {
      window.Email.send({
        SecureToken: "839e0b3b-0e7f-4245-8b52-f56c8d0de489", //SecureToken for login credentials generated on smtpjs.com
        To: "mp@sankalprealty.us",
        From: `${email}`,
        Subject: "New Email Subscriber",
        Body: `Please add ${email} to the mailing list.`,
      }).then(alert("Thanks for joining our mailing list!"));
    } else {
      alert("Try again. That email is invalid.");
    }
  };

  return (
    <>
      <Head>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Head>
      <SectionContainer key={"email-signup-section"}>
        <EmailForm>
          <SignupLabel>
            North Texas is growing fast. Join our mailing list to stay up to
            date.
          </SignupLabel>
          <EmailInputField
            error
            id="outlined-basic"
            as="input"
            label="Enter your email for updates."
            variant="outlined"
            onChange={handleEmailChange}
          />

          <SubmitButtonMain onClick={subscribeToNewsLetter}>
            Submit
          </SubmitButtonMain>
        </EmailForm>
      </SectionContainer>
    </>
  );
};

export default connect(EmailSignup);

const EmailInputField = styled(TextField)`
  background-color: #f1f5f2;
  border-radius: 5px !important;
  display: inline-block;
  width: 50%;

  @media (max-width: 768px) {
    width: 95%;
  }
`;
const EmailForm = styled.form`
  margin: 1.5vh;

  @media (max-width: 768px) {
    padding: 10px 10%;
  }
`;

const SectionContainer = styled.div`
  background-color: #2b4f77;
  filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.25));
  flex-wrap: none;
  height: 100%;
  overflow: hidden;
  position: relative;
  text-align: center;
  width: 100%;
  z-index: 1000;
`;

const SignupLabel = styled.h2`
  color: #f3f3f3;
  display: block;
  font-family: "Overpass", sans-serif;
  font-size: 2.5vw;
  letter-spacing: -1.98px;
  margin: 0;
  padding: 0px 0 5px;
  text-align: center;
  text-transform: uppercase;

  @media (max-width: 768px) {
    font-size: 6vw;
    letter-spacing: -0.5px;
  }
`;
const SubmitButtonMain = styled.button`
  -webkit-tap-highlight-color: transparent;
  background-color: #6369d1;
  border-color: #6369d1;
  border-radius: 4px;
  border-style: solid;
  border: 2px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.00938em;
  line-height: 1.1876em;
  margin: 0 10px;
  outline: 0;
  text-decoration: none;
  text-transform: uppercase;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  user-select: none;
  vertical-align: center;
  width: auto;
  padding: 18.5px;
  display: inline-flex;

  &:hover {
    background-color: #3f51b5;
    border-color: #3f51b5;
  }
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

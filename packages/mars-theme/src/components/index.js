import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Home from "./list/home/home";
import Footer from "./footer";
import Locations from "./properties-page/locations";
import Products from "./services-page/services";
import { footerHeight } from "../components/footer";
import ContactFormModal from "../components/contact-form-modal";
import ContactPage from './contact-page/contact.js';
import Property from './property-page/property';

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */

const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  const linkStartsWith = (linkRoot) => {
    if (data.link.substring(0, linkRoot.length) === linkRoot){
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Conditions must be met for contact modal */}
      <PageContainer>
        {state.theme.isContactModalOpen ? (
          <>
            <ContactFormModal />
          </>
        ) : (
          <></>
        )}

        {/* Add the header of the site. */}
        <HeadContainer>
          <Header />
        </HeadContainer>

        {/* Add the main section. It renders a different component depending
      on the type of URL we are in. */}

        <ContentWrap>
          <Main key={"main-container"}>
            <Switch>
              {/* {console.log(data)} */}
              <Property when={linkStartsWith("/properties/")} /> 
              <ContactPage when={data.link === "/contact/"} />
              <Products when={data.link === "/services/"} />
              <Loading when={data.isFetching} />
              <List when={data.isArchive} />
              <Post when={data.isPostType} />
              <PageError when={data.isError} />
            </Switch>
          </Main>
        </ContentWrap>

        <Footer />
      </PageContainer>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  * {
    @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"');
    @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css");
  }
  body {
    margin: 0;
    font-size: 1em;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  .text {
    min-height: 0vw;
  }

  .wpcf7-textarea {
    appearance: none;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 0;
    box-sizing: border-box;
    color: #666;
    cursor: text;
    display: inline-block;
    font-family: ProximaNova, -apple-system, system-ui, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 22.5px;
    list-style: outside none none;
    margin: 0;
    max-width: 100%;
    overflow: visible;
    padding: 10px 10px;
    transition: color 0.2s ease-in-out,
      background-color undefined undefined undefined,
      border undefined undefined undefined;
    vertical-align: middle;
    width: 100%;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    border-radius: 5px;
    resize: none;
  }
  }
  .wpcf7-submit {
    appearance: none;
    background-color: transparent;
    border: 1px solid #000;
    border-radius: 0;
    box-sizing: border-box;
    color: #222;
    cursor: pointer;
    display: inline-block;
    font-family: ProximaNova, -apple-system, system-ui, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 38px;
    list-style: outside none none;
    margin: 0;
    overflow: visible;
    padding: 0 30px;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.1s ease-in-out,
      background-color undefined undefined undefined,
      border-color undefined undefined undefined;
    vertical-align: middle;
  }

  .wpcf7-text {
    appearance: none;
    background-color: #fff;
    border: 1px solid #e5e5e5;
    border-radius: 0;
    box-sizing: border-box;
    color: #666;
    cursor: text;
    display: inline-block;
    font-family: ProximaNova, -apple-system, system-ui, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
    font-size: 15px;
    font-weight: 400;
    height: 40px;
    line-height: 22.5px;
    list-style: outside none none;
    margin: 2px;
    max-width: 100%;
    overflow: visible;
    padding: 0 10px;
    transition: color 0.2s ease-in-out,
      background-color undefined undefined undefined,
      border undefined undefined undefined;
    vertical-align: middle;
    width: 100%;
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding-left: 40px;
    border-radius: 5px;
  }

  .wpcf7-text:not(input) {
    line-height: 38px;
  }

  .wpcf7-text:focus {
    border-color: #1e87f0;
    outline: none;
  }

  .wpcf7-text:disabled {
    background-color: #f8f8f8;
    color: #999;
  }

  .wpcf7-text:placeholder {
    color: #999;
  }

  .form-name-field{
    background-image: url('http://wp.sankalprealty.us/wp-content/uploads/2020/12/account_circle-black-18dp.svg');
  }
  .form-email-field{
    background-image: url('http://wp.sankalprealty.us/wp-content/uploads/2020/12/alternate_email-black-18dp.svg');
  }
  .form-phone-field{
    background-image: url('http://wp.sankalprealty.us/wp-content/uploads/2020/12/call-black-18dp.svg');
  }
  .form-subject-field{
    background-image: url('http://wp.sankalprealty.us/wp-content/uploads/2020/12/business-black-18dp.svg');
  }
  .form-container{
    text-align: left;
    display: block;
  }
  .form-label{
    margin: 10px 0 5px 0;
    
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1f38c5;
`;

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );

  ${'' /* @media (max-width: 768px) {
    margin-top: 60px;
  } */}
`;

// Padding Bottom for Content Wrap needs to match footer height in footer.js
const ContentWrap = styled.div`
  padding-bottom: ${footerHeight};
  padding-top:12vh;

  @media (max-width: 768px) {
    padding-bottom: 60vh;
  }
`;
const PageContainer = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
`;

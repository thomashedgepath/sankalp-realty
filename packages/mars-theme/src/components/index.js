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
import Locations from "./locations/locations";
import Products from "./products/products";
import AgeModal from "../components/age-verify-modal";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */

const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />

      {/* Conditions must be met for age verification */}
      <PageContainer>
        {state.theme.isAgeVerified ? (
          <></>
        ) : (
          <>
            <AgeModal />
          </>
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
              <Locations when={data.link === "/locations/"} />
              <Products when={data.link === "/products/"} />
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
  margin-top: 100px;
  justify-content: center;
  background-image: linear-gradient(
    180deg,
    rgba(66, 174, 228, 0.1),
    rgba(66, 174, 228, 0)
  );

  @media (max-width: 768px) {
    margin-top: 60px;
  }
`;

// Padding Bottom for Content Wrap needs to match footer height in footer.js
const ContentWrap = styled.div`
  padding-bottom: 25vh;

  @media (max-width: 768px) {
    padding-bottom: 60vh;
  }
`;
const PageContainer = styled.div`
  position: relative;
  overflow: hidden;
  min-height: 100vh;
`;

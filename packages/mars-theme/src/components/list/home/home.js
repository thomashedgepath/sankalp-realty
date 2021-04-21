import React from "react";
import { connect } from "frontity";
import Hero from "./hero";
import MainSection from "./main-section";
import EmailSignup from "./email-signup";
import PropertiesSection from "./properties-section";
import NumbersSection from "./numbers-section";

const Home = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <>
      <Hero />

      <MainSection />
      
      <EmailSignup />
      
      <PropertiesSection />

      <NumbersSection />

    </>
  );
};
3
export default connect(Home);

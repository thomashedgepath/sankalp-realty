import React from "react";
import { connect, styled } from "frontity";
import Hero from "./hero";
import MainSection from "./main-section";
import EmailSignup from "./email-signup";
import PricesSection from "./prices-section";
import LocationSection from "./location-section";
import FavoritesSection from "./customer-favorites-section";
import ProductSection from "./product-section";
import { LazyLoadComponent } from "react-lazy-load-image-component";

const Home = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  return (
    <>
      <Hero />

      <MainSection />

      <ProductSection />

      <PricesSection />

      <LocationSection />

      <FavoritesSection />

      <EmailSignup />
    </>
  );
};
3
export default connect(Home);

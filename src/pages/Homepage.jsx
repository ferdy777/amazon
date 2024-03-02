import Hero from "../components/hero/Hero";
import Slider from "../components/Slider/Slider";
import Footer from "../components/Footer/Footer";
import Testimonials from "../components/Testimonials/Testimonials";
import Virtual from "../components/virtural/Virtual";
import Product from "../components/Products/Products";

import React from "react";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Slider />
      <Virtual />
      <Product />
      <Testimonials />
      <Footer />
    </>
  );
};

export default Homepage;

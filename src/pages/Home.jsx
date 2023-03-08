import React from "react";

// components
import Hero from "../components/Hero";
import Category from "../components/Category";
import About from "../components/About";
import Products from "../components/Products";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";

const Home = () => {
   return (
      <>
         <Hero />
         <Category />
         <About />
         <Products />
         <Banner />
         <Testimonials />
      </>
   );
};

export default Home;

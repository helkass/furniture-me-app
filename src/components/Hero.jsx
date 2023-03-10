import React from "react";

import hero_image from "../assets/hero-image.svg";
import vector from "../assets/vector-hero.svg";

import Container from "./comps/Container";

const Hero = () => {
   return (
      <section className="bg-primary py-20">
         <Container className="flex sm:justify-between justify-center items-center sm:flex-row flex-col">
            {/* left content */}
            <div className="flex flex-col sm:gap-5 capitalize sm:w-8/12 md:w-7/12 relative w-full sm:text-left text-center items-center sm:items-start gap-9">
               <h1 className="md:text-[44px] text-2xl xl:font-bold font-semibold xl:w-9/12 w-10/12 leading-normal">
                  design your <span className="text-third">interior</span> with
                  <span className="text-third"> modern</span> furniture.
               </h1>
               <p className="text-black/70 sm:w-8/12 w-11/12">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               </p>
               <button className="bg-third sm:h-[50px] h-[38px] capitalize rounded-md text-sm text-white w-44 flex items-center justify-center">
                  check out now
               </button>
               <img
                  src={vector}
                  className="w-1/2 absolute top-0 md:-translate-y-10 md:right-[25%] right-0"
               />
            </div>
            {/* right content */}
            <div className="flex sm:justify-end justify-center my-12 sm:m-0 items-center sm:9/12">
               <img
                  src={hero_image}
                  className="w-11/12 md:h-10/12 sm:h-9/12 sm:w-9/12 w-7/12 object-cover"
               />
            </div>
         </Container>
      </section>
   );
};

export default Hero;

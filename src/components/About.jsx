import React from "react";

import SectionTemplate from "./templates/SectionTemplate";

import image5 from "../assets/image5.svg";
import vector from "../assets/vector-about.svg";

const About = () => {
   return (
      <SectionTemplate title="about us" idSection="about">
         <div className="flex sm:gap-2 sm:flex-row flex-col sm:gap-5 gap-8 my-5 sm:w-11/12 w-full mx-auto">
            {/* left content */}
            <div className="flex items-center relative sm:w-1/2 w-full">
               <img src={image5} alt="img-sec-about" className="w-11/12" />
               <img
                  className="absolute -z-10 w-10/12 -left-[15%] translate-x-1/4"
                  src={vector}
                  alt="vec"
               />
            </div>
            {/* right content */}
            <div className="flex flex-col sm:text-left sm:justify-center text-center gap-4 sm:w-1/2 w-full my-10 sm:my-0">
               <h2 className="sm:text-[46px] text-[38px] font-semibold sm:w-8/12 w-full">
                  The Best <span className="text-third">Furniture</span>
               </h2>
               <p className="text-black/80">
                  Lorem Ipsum is simply dummy text of the printing and type
                  setting industry. Lorem Ipsum has been the industry's standard
                  dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make
               </p>
            </div>
         </div>
      </SectionTemplate>
   );
};

export default About;

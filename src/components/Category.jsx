import React from "react";
import SectionTemplate from "./templates/SectionTemplate";
import Image from "./comps/Image";

import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";

const images = [image1, image2, image3, image4];

const Category = () => {
   return (
      <SectionTemplate title="our categories" idSection="category">
         <div className="flex justify-between flex-nowrap gap-2 overflow-x-auto sm:w-10/12 w-full mx-auto">
            {images.map((image, idx) => (
               <Image src={image} key={idx} />
            ))}
         </div>
      </SectionTemplate>
   );
};

export default Category;

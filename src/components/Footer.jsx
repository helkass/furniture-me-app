import React from "react";
import Container from "./comps/Container";

const footerData = [
   {
      label: "products",
      items: ["platform", "pricing", "products"],
   },
   {
      label: "resource",
      items: ["blog", "testimonials"],
   },
];

const Footer = () => {
   return (
      <footer className="bg-third text-white py-12 mt-12">
         <Container className="flex sm:flex-row flex-col">
            <div className="sm:w-1/2 w-full flex flex-col gap-4">
               <h2 className="font-semibold w-9/12">
                  Furniture Me. is a store for interior designing for your home
               </h2>
               <span className="text-sm">
                  1604 Clearview Drive, Aurora, Colorado
               </span>
               <span className="text-sm my-5">
                  &copy; copyright furniture me. 2019
               </span>
            </div>
            <div className="sm:w-1/2 w-full flex gap-12 flex-wrap">
               {footerData.map((data, idx) => (
                  <div key={idx} className="flex flex-col gap-3 capitalize">
                     <p className="font-semibold my-2">{data.label}</p>
                     {data.items.map((item) => (
                        <span key={item} className="text-sm">
                           {item}
                        </span>
                     ))}
                  </div>
               ))}
            </div>
         </Container>
      </footer>
   );
};

export default React.memo(Footer);

import React from "react";

const TitleSection = ({ children }) => {
   return (
      <h2 className="font-semibold sm:text-[32px] text-[28px] capitalize leading-relaxed my-8 text-center">
         {children}
      </h2>
   );
};

export default TitleSection;

import React from "react";

const Container = ({ children, className }) => {
   return (
      <main className={`mx-auto container max-w-[1170px] px-2 ${className}`}>
         {children}
      </main>
   );
};

export default Container;

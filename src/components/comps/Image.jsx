import React from "react";

const Image = ({ src }) => {
   return (
      <div className="rounded-md bg-primary p-2 flex items-center justify-center bg-opacity-80 relative max-w-[270px] max-h-[270px]">
         <img
            className="object-contain block w-10/12 h-full"
            src={src}
            alt="image"
         />
      </div>
   );
};

export default Image;

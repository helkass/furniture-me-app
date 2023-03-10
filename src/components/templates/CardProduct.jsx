import React from "react";
import Image from "../comps/Image";

import { BsFillCartFill } from "react-icons/bs";

const format = (params) => {
   return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
   }).format(params);
};

const CardProduct = ({ image, title, desc, onClick, price }) => {
   return (
      <div className="flex flex-col rounded-md w-[270px] shadow-md">
         <Image src={image} />
         <div className="flex flex-col gap-3 font-semibold my-2 p-2">
            <h6 className="capitalize">{title}</h6>
            <span className="text-[14px] font-normal text-black/50">
               {desc}
            </span>
            <div className="flex justify-between text-third items-center">
               <span>{format(price)}</span>
               <button
                  onClick={onClick}
                  className="bg-primary rounded-md p-2 hover:bg-pink-50 hover:text-red-300">
                  <BsFillCartFill size={20} />
               </button>
            </div>
         </div>
      </div>
   );
};

export default CardProduct;

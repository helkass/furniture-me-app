import React from "react";
import { requestApi } from "../api/requestApi";

import CardProduct from "../components/templates/CardProduct";
import Container from "../components/comps/Container";
import Badge from "../components/comps/Badge";

import { BsFillLampFill, BsThreeDots } from "react-icons/bs";
import { GiTable } from "react-icons/gi";
import { BiChair } from "react-icons/bi";

const categories = ["chair", "table", "lamp", "others"];

const icon = [BiChair, GiTable, BsFillLampFill, BsThreeDots];

function Products() {
   const { data, loading, error } = requestApi();
   return (
      <section>
         <Container>
            <h1 className="text-center text-[28px] capitalize">
               your best your <span className="text-third">furniture</span>
            </h1>
            <div className="w-full overflow-x-hidden relative">
               <div className="flex sm:justify-center justify-start my-7 sm:gap-6 gap-3 py-3 overflow-x-auto">
                  {categories.map((cat, idx) => (
                     <Badge key={idx} title={cat} Icon={icon[idx]} />
                  ))}
               </div>
            </div>
            {/* actions */}
            {loading && (
               <div className="min-h-[350px] flex justify-center text-xl items-center">
                  <span className="">Loading...</span>
               </div>
            )}
            {error && (
               <div className="min-h-[350px] flex justify-center text-xl items-center">
                  <span className="text-red-500">Something went wrong!</span>
               </div>
            )}
            {/* end actions */}
            <div className="flex justify-evenly gap-6 flex-wrap my-12">
               {data?.map((product, idx) => (
                  <CardProduct
                     key={idx}
                     title={product.title}
                     image={product.image}
                     price={product.price}
                     desc={product.desc}
                  />
               ))}
            </div>
         </Container>
      </section>
   );
}

export default React.memo(Products);

import React from "react";

import CardProduct from "../components/templates/CardProduct";
import Container from "../components/comps/Container";
import Badge from "../components/comps/Badge";

import data from "../data/data";

import { BsFillLampFill, BsThreeDots } from "react-icons/bs";
import { GiTable } from "react-icons/gi";
import { BiChair } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/cartSlice";

const categories = ["chair", "table", "lamp", "others"];

const icon = [BiChair, GiTable, BsFillLampFill, BsThreeDots];

function Products() {
   const dispatch = useDispatch();
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
            <div className="flex justify-evenly gap-6 flex-wrap my-12">
               {data?.map((product, idx) => (
                  <CardProduct
                     key={idx}
                     onClick={() => dispatch(addCart(product))}
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

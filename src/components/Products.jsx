import React from "react";
import CardProduct from "./templates/CardProduct";
import SectionTemplate from "./templates/SectionTemplate";
import data from "../data/data";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/cartSlice";

const Products = () => {
   const dispatch = useDispatch();

   const addToCart = (data) => {
      dispatch(addCart(data));
   };
   return (
      <SectionTemplate title="our products" idSection="products">
         <div className="flex justify-evenly gap-6 flex-wrap">
            {data.slice(0, 7).map((product, idx) => (
               <CardProduct
                  key={idx}
                  onClick={() => addToCart(product)}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  desc={product.desc}
               />
            ))}
         </div>
         <Link to="/products" className="mx-auto my-12">
            <button className="text-white px-8 rounded-md py-2 bg-third w-max">
               See more
            </button>
         </Link>
      </SectionTemplate>
   );
};

export default Products;

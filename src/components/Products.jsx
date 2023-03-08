import React from "react";
import CardProduct from "./templates/CardProduct";
import SectionTemplate from "./templates/SectionTemplate";

import image1 from "../assets/image1.svg";
import image4 from "../assets/image4.svg";
import { Link } from "react-router-dom";

const products = [
   {
      image: image1,
      title: "chair relaxed",
      price: 13.5,
      desc: "Lorem Ipsum is simply",
   },
   {
      image: image4,
      title: "chair relaxed",
      price: 14.5,
      desc: "Lorem Ipsum is simply",
   },
   {
      image: image1,
      title: "chair relaxed",
      price: 15.5,
      desc: "Lorem Ipsum is simply",
   },
   {
      image: image4,
      title: "chair relaxed",
      price: 16.5,
      desc: "Lorem Ipsum is simply",
   },
];

const Products = () => {
   return (
      <SectionTemplate title="our products" idSection="products">
         <div className="flex justify-evenly gap-6 flex-wrap">
            {products.slice(0, 7).map((product, idx) => (
               <CardProduct
                  key={idx}
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

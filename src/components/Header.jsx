import React from "react";

import Container from "./comps/Container";

import {
   AiFillGoogleCircle,
   AiOutlineClose,
   AiFillShopping,
} from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
   const [active, setActive] = React.useState(false);
   const cart = useSelector((state) => state.cart);
   return (
      <header className="h-[60px] bg-primary">
         <Container className="justify-between flex items-center h-full relative">
            <h2 className="md:text-[26px] text-xl flex flex-nowrap font-semibold whitespace-nowrap">
               Furniture <span className="text-third">Me.</span>
            </h2>
            <nav
               className={`sm:flex md:w-1/3 sm:1/4 justify-between text-sm gap-3 hidden`}>
               {links.map((link, idx) => (
                  <Link
                     className="capitalize hover:text-third"
                     key={idx}
                     to={link.link}>
                     <span>{link.label}</span>
                  </Link>
               ))}
            </nav>
            <div className="flex gap-2">
               <Link to="/cart">
                  <button
                     className={`${
                        cart.cartItems.length < 0
                           ? "text-third"
                           : "bg-pink-100 text-red-300"
                     } flex sm:p-2 p-1 items-center rounded-md relative`}>
                     <span className="absolute text-sm -top-2 -right-2 bg-white rounded-full w-[20px] h-[20px]">
                        {cart.cartItems.length}
                     </span>
                     <AiFillShopping size={23} />
                  </button>
               </Link>
               <button className="text-third md:px-3 py-[2px] flex justify-between text-sm items-center gap-3 rounded-md md:bg-secondary min-w-18">
                  <AiFillGoogleCircle size={23} />
                  <span>Login</span>
               </button>
               <button
                  className="p-1 text-third sm:hidden"
                  onClick={() => setActive(!active)}>
                  <FaBars />
               </button>
            </div>
            {active && (
               <nav
                  className={`${
                     active ? "translate-y-0 " : "-translate-y-50"
                  } flex justify-evenly bg-secondary items-center z-50 h-[540px] left-0 right-0 top-0 transition backdrop-blur-md bg-opacity-50 duration-500 ease flex-col text-md sm:hidden absolute`}>
                  {links.map((link, idx) => (
                     <Link
                        onClick={() => setActive(false)}
                        className="capitalize hover:text-third"
                        key={idx}
                        to={link.link}>
                        <span>{link.label}</span>
                     </Link>
                  ))}
                  <button className="p-2" onClick={() => setActive(!active)}>
                     <AiOutlineClose size={20} />
                  </button>
               </nav>
            )}
         </Container>
      </header>
   );
};

const links = [
   {
      label: "home",
      link: "/",
   },
   {
      label: "about",
      link: "/about",
   },
   {
      label: "products",
      link: "/products",
   },
   {
      label: "contact us",
      link: "/contact",
   },
];

export default Header;

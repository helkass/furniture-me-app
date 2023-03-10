import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../components/comps/Container";
import { addCart, removeCarts, decreaseCart, remove } from "../redux/cartSlice";

import image6 from "../assets/image6.svg";

import { AiOutlineClose, AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BsFillCartXFill } from "react-icons/bs";

function Cart() {
   const cart = useSelector((state) => state.cart);
   const dispatch = useDispatch();
   console.log(cart.amount);

   React.useEffect(() => {}, [cart.amount]);
   return (
      <section>
         <Container>
            {/* cart navigate */}
            <div>
               <h2 className="border-b-2 py-2 text-xl">Cart Items</h2>
            </div>
            {cart.cartItems.length == 0 ? (
               <div className="w-full min-h-[320px] bg-red-50 my-4 rounded-xl text-red-500 text-xl flex gap-4 items-center justify-center">
                  cart is emty <BsFillCartXFill size={30} />
               </div>
            ) : (
               <>
                  <div className="flex flex-col">
                     {/* items */}
                     <div className="gap-2 grid grid-cols-5 place-items-center my-7 bg-gray-50 rounded-xl py-3">
                        <p>Image</p>
                        <p>Products name</p>
                        <p>Quantity</p>
                        <p>Remove</p>
                        <p>Sub Total</p>
                     </div>
                     {cart.cartItems?.map((cart) => (
                        <div className="gap-2 grid grid-cols-5 items-center place-items-center">
                           <img
                              src={cart.image}
                              alt="image-cart"
                              className="w-28"
                           />
                           <p className="capitalize">{cart.title}</p>
                           <div className="flex items-center justify-center gap-3 text-red-400">
                              <Button onClick={() => dispatch(addCart(cart))}>
                                 <AiOutlinePlus />
                              </Button>
                              <span>{cart.cartQuantity}</span>
                              <Button
                                 onClick={() => dispatch(decreaseCart(cart))}>
                                 <AiOutlineMinus />
                              </Button>
                           </div>
                           <Button onClick={() => dispatch(remove(cart))}>
                              <AiOutlineClose />
                           </Button>
                           <p>${cart.price * cart.cartQuantity}</p>
                        </div>
                     ))}
                  </div>

                  <button
                     onClick={() => dispatch(removeCarts())}
                     className=" py-2 px-7 bg-red-100 text-red-700 rounded my-7">
                     Clear Carts
                  </button>
               </>
            )}
            <div className="bg-primary rounded-xl mt-8 p-12 flex justify-between">
               <div className="sm:w-1/2 hidden sm:flex items-center">
                  <img src={image6} />
               </div>
               <div className="bg-secondary gap-4 p-5 rounded-xl flex flex-col sm:w-1/2 w-full">
                  <div className="flex justify-between">
                     <p>shipping</p>
                     <p>$7</p>
                  </div>
                  <div className="flex justify-between">
                     <p>Total</p>
                     <p>${cart.amount}</p>
                  </div>
                  <button className="bg-red-100 px-3 py-2">Checkout</button>
               </div>
            </div>
         </Container>
      </section>
   );
}

const Button = ({ children, onClick }) => {
   return (
      <button
         onClick={onClick}
         className="flex items-center justify-center w-[25px] h-[25px] text-red-400 bg-red-50 rounded">
         {children}
      </button>
   );
};

export default Cart;

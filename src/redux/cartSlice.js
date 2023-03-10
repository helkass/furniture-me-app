import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cartItems: [],
   amount: 0,
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addCart: (state, action) => {
         const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
         );
         // check if in cart exist the product
         if (itemIndex >= 0) {
            state.cartItems[itemIndex] = {
               ...state.cartItems[itemIndex],
               cartQuantity: state.cartItems[itemIndex].cartQuantity + 1,
            };
         } else {
            const tempProduct = {
               ...action.payload,
               cartQuantity: 1,
            };
            state.cartItems.push(tempProduct);
         }

         state.amount += state.cartItems.map(
            (item) => item.price * item.cartQuantity
         );
      },
      decreaseCart(state, action) {
         // find the index specifiec for action
         const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
         );

         if (state.cartItems[itemIndex].cartQuantity > 1) {
            state.cartItems[itemIndex].cartQuantity -= 1;
         } else if (state.cartItems[itemIndex].cartQuantity === 1) {
            // remove
            const nextCartItems = state.cartItems.filter(
               (item) => item.id !== action.payload.id
            );

            state.cartItems = nextCartItems;
         }

         state.amount -= state.cartItems.map(
            (item) => item.price * item.cartQuantity
         );
      },
      remove(state, action) {
         const newCartItems = state.cartItems.filter(
            (cartItem) => cartItem.id !== action.payload.id
         );

         state.cartItems = newCartItems;

         state.amount -= state.cartItems.map(
            (item) => item.price * item.cartQuantity
         );
      },
      removeCarts(state) {
         state.cartItems = [];
         localStorage.removeItem("cart");

         state.amount -= state.cartItems.map(
            (item) => item.price * item.cartQuantity
         );
      },
   },
});

export const { addCart, decreaseCart, removeCarts, remove } = cartSlice.actions;

export default cartSlice.reducer;

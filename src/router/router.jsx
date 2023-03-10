import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "../pages/Cart";

import Home from "../pages/Home";
import Products from "../pages/Products";

const Router = () => {
   return (
      <Routes>
         <Route path="/" axact element={<Home />} />
         <Route path="/*" element={<Navigate to="/" replace />} />
         <Route path="/products" element={<Products />} />
         <Route path="/cart" element={<Cart />} />
      </Routes>
   );
};

export default Router;

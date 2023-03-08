import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/Products";

const Router = () => {
   return (
      <Routes>
         <Route path="/" axact element={<Home />} />
         <Route path="/*" element={<Navigate to="/" replace />} />
         <Route path="/products" element={<Products />} />
      </Routes>
   );
};

export default Router;

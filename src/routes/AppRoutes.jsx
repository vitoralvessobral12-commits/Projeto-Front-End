import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Layout envolve todas as páginas com Header e Footer */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<ProductList />} />
        <Route path="/produto/:id" element={<ProductDetail />} />
      </Route>
    </Routes>
  );
}

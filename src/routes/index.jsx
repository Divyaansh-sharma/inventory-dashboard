import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ProductDetails from "../pages/Inventory/ProductDetails";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {/* Nested routes rendered inside <Outlet /> in MainLayout */}
        <Route path="inventory/:productId" element={<ProductDetails />} />
        <Route path="inventory/existing" element={<div>Existing Product</div>} />
        <Route path="inventory/new" element={<div>New Product</div>} />
      </Route>
    </Routes>
  );
}

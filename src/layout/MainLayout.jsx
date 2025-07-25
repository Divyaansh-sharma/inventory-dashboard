import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import InventoryBanner from "../components/InventoryBanner";
import ProductDetails from "../pages/Inventory/ProductDetails";
import ProductTrackingDetails from "../components/ProductTrackingDetails";
import ProductMetadataAttributes from "../components/ProductMetaAttributes";
import ProductDimensionPower from "../components/ProductDimentionPower";
import ProductFinancials from "../components/ProductFinancials";
import ProductVehicles from "../components/ProductVehicles";
import ProductAlternates from "../components/ProductAlternatives";
import ProductAccessories from "../components/ProductAccessories";
import ProductOptions from "../components/ProductOptions";
import ProductAssetManagement from "../components/ProductAssetManagement";

const MainLayout = () => {
  return (
    <Box display="flex" minHeight="100vh">
      <Sidebar />
      <Box flexGrow={1} display="flex" flexDirection="column">
        <Topbar />
              <InventoryBanner />
              <ProductDetails />
              <ProductTrackingDetails />
              <ProductMetadataAttributes />
              <ProductDimensionPower />
              <ProductFinancials />
              <ProductVehicles />
              <ProductAlternates />
              <ProductAccessories />
              <ProductOptions />
              <ProductAssetManagement/>
              
        <Box p={2} sx={{ backgroundColor: "#0a0a1a", flexGrow: 1 }}>
        </Box>
      </Box>
    </Box>
  );
};

export default MainLayout;

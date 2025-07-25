import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  useMediaQuery,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn"; // Money icon
import ProductFinancial from '../assets/ProductFinancials.png'
import Pencil from '../assets/pencil.png'
const ProductFinancials = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const financialData = {
    "Material Cost": "$175.23",
    "Labor Cost": "$291.46",
    "Process Cost": "$66.21",
    "Misc. Cost": "$15.49",
    "Last Price": "$1,875.23",
  };

  return (
    <Box
      sx={{
        backgroundColor: "#2e2e3e",
        borderRadius: 3,
        color: "#fff",
        p: 2,
        m: 2,
        boxShadow: 3,
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
        flexDirection={isMobile ? "column" : "row"}
      >
        <Box display="flex" alignItems="center" gap={1}>
          {/* <MonetizationOnIcon color="secondary" /> */}
          <img src={ProductFinancial} alt="" />
          <Typography variant="h6" fontWeight="bold">
            Product Financials
          </Typography>
        </Box>

        <Box display="flex" gap={1} mt={isMobile ? 1 : 0}>
          <IconButton sx={{ color: "#c69cfa" }}>
            {/* <EditIcon /> */}
            <img src={Pencil} alt="" />
          </IconButton>
          <IconButton color="inherit">
            <ExpandLessIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Grid of Financial Data */}
      <Grid container spacing={3}>
        {Object.entries(financialData).map(([label, value], index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Typography variant="body2" color="gray">
              {label}
            </Typography>
            <Typography variant="subtitle1" fontWeight="medium">
              {value}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductFinancials;

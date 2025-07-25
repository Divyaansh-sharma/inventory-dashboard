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
import StraightenIcon from "@mui/icons-material/Straighten"; // Dimension icon
import ProductDimention from '../assets/ProductDimention.png'
import Pencil from '../assets/pencil.png'
const ProductDimensionPower = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const data = {
    Height: "31.75 cm",
    Width: "52 cm",
    Depth: "19.5 cm",
    Weight: "63 kg",
    Voltage: "12 V",
    "Power Rating": "300 W",
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
          {/* <StraightenIcon color="secondary" /> */}
          <img src={ProductDimention} alt="" />
          <Typography variant="h6" fontWeight="bold">
            Product Dimension and Power
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

      {/* Data Grid */}
      <Grid container spacing={3}>
        {Object.entries(data).map(([label, value], index) => (
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

export default ProductDimensionPower;

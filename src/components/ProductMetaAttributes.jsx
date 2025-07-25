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
import StorageIcon from "@mui/icons-material/Storage";
import ProductMetaData from '../assets/ProductMetaData.png'
import Pencil from '../assets/pencil.png'
const ProductMetadataAttributes = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const metadata = {
    "Foot Type": "E-Z",
    "Foot Distance": "51.25cm, 52.75cm, 68.34cm",
    Technology: "SmartLED, Linear Super-LED, TRIO",
    Height: "17.8cm, 24.9cm, 32.4cm",
    Hardware: "22 AWG, 33 AWG, 37 AWG",
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
          {/* <StorageIcon color="secondary" /> */}
          <img src={ProductMetaData} alt="" />
          <Typography variant="h6" fontWeight="bold">
            Product Metadata Attributes
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

      {/* Attributes Grid */}
      <Grid container spacing={3}>
        {Object.entries(metadata).map(([key, value], index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Typography variant="body2" color="gray">
              {key}
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

export default ProductMetadataAttributes;

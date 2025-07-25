import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  useMediaQuery,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CategoryIcon from "@mui/icons-material/Category"; // Accessories icon

const ProductAccessories = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const accessories = [
    { name: "Dual", image: "/images/dual-accessory.png" },
    { name: "Hands free", image: "/images/handsfree-accessory.png" },
    { name: "Scanlock", image: "/images/scanlock-accessory.png" },
    { name: "Single", image: "/images/single-accessory.png" },
    { name: "Core-R", image: "/images/core-r-accessory.png" },
    { name: "Core S", image: "/images/core-s-accessory.png" },
    // Add more accessories if needed
  ];

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
          <CategoryIcon color="secondary" />
          <Typography variant="h6" fontWeight="bold">
            Product Accessories
          </Typography>
        </Box>

        <IconButton sx={{ color: "#c69cfa", mt: isMobile ? 1 : 0 }}>
          <EditIcon />
        </IconButton>
      </Box>

      {/* Accessories Grid */}
      <Grid
        container
        spacing={2}
        wrap={isMobile ? "wrap" : "nowrap"}
        sx={{
          overflowX: isMobile ? "auto" : "hidden",
          flexWrap: isMobile ? "wrap" : "nowrap",
        }}
      >
        {accessories.map((item, index) => (
          <Grid
            item
            key={index}
            xs={6}
            sm="auto"
            sx={{ minWidth: isMobile ? "45%" : "120px" }}
          >
            <Paper
              elevation={2}
              sx={{
                p: 1,
                backgroundColor: "#3a3a4d",
                color: "#fff",
                textAlign: "center",
                borderRadius: 2,
              }}
            >
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{
                  height: 60,
                  width: "100%",
                  objectFit: "contain",
                  mb: 1,
                }}
              />
              <Typography variant="body2">{item.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductAccessories;

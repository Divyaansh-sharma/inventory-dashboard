import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  useMediaQuery,
  Paper,
  Chip,
  TextField,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"; // Add icon
import ProductOption from '../assets/ProductOption.png'
import PlusIcon from '../assets/buttons (1).png'
const ProductOptions = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const [selectedColor, setSelectedColor] = useState(null);

  const colors = [
    "#9e2a2b", "#262b7f", "#8b66c2", "#d93e3f", "#f5b400"
  ];

  const dimensions = [
    { label: "12.4 H × 18.4 W", unit: "(cm)" },
    { label: "22.4 H × 28.4 W", unit: "(cm)" },
    { label: "42.4 H × 48.6 W", unit: "(cm)" }
  ];

  const controls = ["WeCan", "WeCanX"];

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
          <img src={ProductOption} alt="" />
          <Typography variant="h6" fontWeight="bold">
            Product Options
          </Typography>
        </Box>

        <IconButton sx={{ color: "#c69cfa", mt: isMobile ? 1 : 0 }}>
          {/* <EditIcon /> */}
          <img src={PlusIcon} alt="" />
        </IconButton>
      </Box>

      {/* Colors Section */}
      <Box mb={2}>
        <Typography variant="body1" color="gray">
          Colors*
        </Typography>
        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
          {colors.map((color, index) => (
            <Chip
              key={index}
              sx={{
                backgroundColor: color,
                cursor: "pointer",
                color: "#fff",
                "&:hover": {
                  opacity: 0.8,
                },
              }}
              onClick={() => setSelectedColor(color)}
              label={selectedColor === color ? "Selected" : ""}
            />
          ))}
        </Box>
      </Box>

      {/* Dimensions Section */}
      <Box mb={2}>
        <Typography variant="body1" color="gray">
          Dimensions*
        </Typography>
        <Box display="flex" gap={2} flexWrap="wrap">
          {dimensions.map((dim, index) => (
            <TextField
              key={index}
              variant="outlined"
              label={dim.label}
              size="small"
              sx={{ width: "120px" }}
              InputProps={{
                readOnly: true,
              }}
              helperText={dim.unit}
            />
          ))}
        </Box>
      </Box>

      {/* Control Section */}
      <Box mb={2}>
        <Typography variant="body1" color="gray">
          Control
        </Typography>
        <Box display="flex" gap={2}>
          {controls.map((control, index) => (
            <Button
              key={index}
              variant="outlined"
              sx={{
                backgroundColor: "#3a3a4d",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#4f4f6e",
                },
              }}
            >
              {control}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Add Product Option Button */}
      <Box textAlign="right">
        <IconButton
          sx={{ color: "#c69cfa" }}
          onClick={() => alert("Add product option clicked")}
        >
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProductOptions;

import React from "react";
import { Box, Typography, Breadcrumbs, Link, useTheme, useMediaQuery } from "@mui/material";
import Home from "../assets/Home.png";
import Rectangle from "../assets/Rectangle.png";
import SideArrow from '../assets/Frame.png';

const InventoryBanner = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, #7b83ff, #9ea6ff)",
        color: "#fff",
        px: { xs: 2, sm: 5 },
        py: { xs: 1, sm: 1.5 },
        display: "flex",
        alignItems: "center",
        gap: { xs: 1.5, sm: 2 },
        boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
        flexWrap: { xs: "wrap", sm: "nowrap" },
      }}
    >
      {/* Left Stick SideArrow Icon */}
      <Box display="flex" alignItems="center">
        <img
          src={SideArrow}
          alt="side arrow"
          style={{ height: isMobile ? "16px" : "20px",position:"relative",left:"-50px" }}
        />
      </Box>

      {/* Shared Home + Rectangles */}
      <Box display="flex" alignItems="center" position="relative">
        <img
          src={Home}
          alt="home icon"
          style={{ height: isMobile ? "28px" : "36px" }}
        />
        {/* Decorative Rectangles */}
        <img
          src={Rectangle}
          alt="rectangle"
          style={{
            position: "absolute",
            right: "10px",
            top: "14px",
            height: isMobile ? "12px" : "18px",
          }}
        />
        <img
          src={Rectangle}
          alt="rectangle"
          style={{
            position: "absolute",
            right: "15px",
            top: "19px",
            height: isMobile ? "12px" : "18px",
          }}
        />
      </Box>

      {/* Text Section */}
      <Box display="flex" flexDirection="column" gap="2px">
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{
            fontSize: { xs: "1rem", sm: "1.25rem" },
            lineHeight: 1,
            mb: 0,
          }}
        >
          Inventory
        </Typography>

        <Breadcrumbs
          separator="›"
          aria-label="breadcrumb"
          sx={{
            color: "#ccc",
            fontSize: { xs: "0.725rem", sm: "0.875rem" },
          }}
        >
          <Link underline="hover" color="#ccc" href="#">
            All Products
          </Link>
          <Typography color="#f78ea7">Surface Mount</Typography>
        </Breadcrumbs>
      </Box>
    </Box>
  );
};

export default InventoryBanner;

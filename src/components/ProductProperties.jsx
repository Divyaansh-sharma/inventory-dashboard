import React from "react";
import {
  Box,
  Typography,
  Grid,
  Chip,
  Avatar,
  Divider,
  useMediaQuery,
  IconButton,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EditIcon from "@mui/icons-material/Edit";
import HistoryIcon from "@mui/icons-material/History";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import QrCodeIcon from "@mui/icons-material/QrCode";
import ProductImage from '../assets/surfacemount.png'

const ProductProperties = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

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
          <InfoOutlinedIcon color="secondary" />
          <Typography variant="h6" fontWeight="bold">
            Product Base Properties
          </Typography>
        </Box>

        <Box display="flex" gap={1} mt={isMobile ? 1 : 0}>
          <IconButton color="inherit">
            <HistoryIcon />
          </IconButton>
          <IconButton color="inherit">
            <EditIcon />
          </IconButton>
          <IconButton color="inherit">
            <ExpandLessIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Main Grid */}
      <Grid container spacing={2}>
        {/* Image Section */}
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              bgcolor: "#1e1e2e",
              borderRadius: 2,
              p: 1,
              textAlign: "center",
            }}
          >
            <img
              src="https://via.placeholder.com/200x120.png?text=Product+Image"
              alt="product"
              style={{
                width: "100%",
                borderRadius: 8,
                objectFit: "cover", // Ensures image covers the area
              }}
            />
            <Typography variant="subtitle1" mt={1}>
              Surface Mount
            </Typography>
          </Box>
        </Grid>

        {/* Details Section */}
        <Grid item xs={12} sm={8}>
          <Grid container spacing={2}>
            {/* Left Column */}
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="gray">
                Inventory Class*
              </Typography>
              <Chip
                label="Pre Production"
                color="success"
                size="small"
                sx={{ mb: 1 }}
              />

              <Typography variant="body2" color="gray">
                Part Number*
              </Typography>
              <Typography>022134</Typography>

              <Typography variant="body2" color="gray">
                Line*
              </Typography>
              <Typography>Carbide</Typography>

              <Typography variant="body2" color="gray" mt={1}>
                QR Code
              </Typography>
              <Box
                mt={1}
                p={1}
                bgcolor="#1e1e2e"
                display="inline-block"
                borderRadius={1}
              >
                <QrCodeIcon sx={{ fontSize: 40 }} />
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="gray">
                SKU(ID)
              </Typography>
              <Typography>2876512</Typography>

              <Typography variant="body2" color="gray">
                Category*
              </Typography>
              <Typography>Lighting</Typography>

              <Typography variant="body2" color="gray">
                Series
              </Typography>
              <Typography>Surface Mount</Typography>

              <Typography variant="body2" color="gray" mt={1}>
                Product Type*
              </Typography>
              <Typography>Spare Part</Typography>

              <Typography variant="body2" color="gray">
                Family*
              </Typography>
              <Typography>Illumination</Typography>

              <Typography variant="body2" color="gray">
                Warranty
              </Typography>
              <Typography>
                05 Years{" "}
                <Typography component="span" color="#7dafff">
                  10WAR-02
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Divider sx={{ my: 2, bgcolor: "#444" }} />

      {/* Descriptions */}
      {[
        { title: "Description" },
        { title: "Long Description" },
        { title: "Marketing Description" },
      ].map((section, i) => (
        <Box key={i} mb={1.5}>
          <Typography
            variant="body2"
            color="gray"
            fontWeight="bold"
            gutterBottom
          >
            {section.title}
          </Typography>
          <Typography variant="body2" color="#ddd">
            Lorem ipsum dolor sit amet. Et molestiae fuga id consequatur quia
            qui aliquid volupta. Aut praesentium corrupti est consequatur
            eligendi rem ratione officia est consequuntur Quis ut sint unde.
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ProductProperties;

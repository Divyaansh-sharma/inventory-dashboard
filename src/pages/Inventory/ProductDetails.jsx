import React from "react";
import {
  Box,
  Typography,
  Grid,
  Chip,
  Avatar,
  Divider,
  IconButton,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import EditIcon from "@mui/icons-material/Edit";
import HistoryIcon from "@mui/icons-material/History";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import QrCodeIcon from "@mui/icons-material/QrCode";
import ProductImage from "../../assets/img1.png";
import ProductBasee from '../../assets/productbase.png'
import Pencil from '../../assets/pencil.png'
import ProductTracking from '../../assets/producttracking.png'
const ProductProperties = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2e2e3e",
        borderRadius: 3,
        color: "#fff",
        p: 2,
        m: 1,
        boxShadow: 3,
        maxWidth: "100%",
      }}
    >
      {/* Header */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        mb={2}
      >
        <Box display="flex" alignItems="center" gap={1} mb={{ xs: 1, sm: 0 }}>
                  {/* <InfoOutlinedIcon color="secondary" /> */}
                  <img src={ProductBasee} alt="" />
          <Typography
            variant="h6"
            fontWeight="bold"
            fontSize={{ xs: 16, sm: 20 }}
          >
            Product Base Properties
          </Typography>
        </Box>

        <Box display="flex" gap={1}>
          <IconButton color="inherit">
            <HistoryIcon fontSize="small" />
          </IconButton>
          <IconButton color="inherit">
                      {/* <EditIcon fontSize="small" /> */}
                      <img src={Pencil} alt="" />
          </IconButton>
          <IconButton color="inherit">
            <ExpandLessIcon fontSize="small" />
          </IconButton>
        </Box>
      </Box>

      {/* Main Content */}
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
              src={ProductImage}
              alt="product"
              style={{
                width: "100%",
                maxHeight: "200px",
                objectFit: "contain",
                borderRadius: 8,
              }}
            />
            <Typography variant="subtitle2" mt={1} fontSize={12}>
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
              <Typography fontSize={13}>022134</Typography>

              <Typography variant="body2" color="gray">
                Line*
              </Typography>
              <Typography fontSize={13}>Carbide</Typography>

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
                <QrCodeIcon sx={{ fontSize: 30 }} />
              </Box>
            </Grid>

            {/* Right Column */}
            <Grid item xs={12} sm={6}>
              <Typography variant="body2" color="gray">
                SKU(ID)
              </Typography>
              <Typography fontSize={13}>2876512</Typography>

              <Typography variant="body2" color="gray">
                Category*
              </Typography>
              <Typography fontSize={13}>Lighting</Typography>

              <Typography variant="body2" color="gray">
                Series
              </Typography>
              <Typography fontSize={13}>Surface Mount</Typography>

              <Typography variant="body2" color="gray" mt={1}>
                Product Type*
              </Typography>
              <Typography fontSize={13}>Spare Part</Typography>

              <Typography variant="body2" color="gray">
                Family*
              </Typography>
              <Typography fontSize={13}>Illumination</Typography>

              <Typography variant="body2" color="gray">
                Warranty
              </Typography>
              <Typography fontSize={13}>
                05 Years{" "}
                <Typography component="span" color="#7dafff">
                  10WAR-02
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ my: 2, bgcolor: "#444" }} />

      {/* Descriptions */}
      {["Description", "Long Description", "Marketing Description"].map(
        (title, i) => (
          <Box key={i} mb={1.5}>
            <Typography
              variant="body2"
              color="gray"
              fontWeight="bold"
              fontSize={13}
            >
              {title}
            </Typography>
            <Typography variant="body2" color="#ddd" fontSize={12}>
              Lorem ipsum dolor sit amet. Et molestiae fuga id consequatur quia
              qui aliquid volupta. Aut praesentium corrupti est consequatur
              eligendi rem ratione officia est consequuntur Quis ut sint unde.
            </Typography>
          </Box>
        )
      )}
    </Box>
  );
};

export default ProductProperties;

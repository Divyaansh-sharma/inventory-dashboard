import React from "react";
import {
  Box,
  Typography,
  Grid,
  IconButton,
  Paper,
  useMediaQuery,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ProductTracking from '../assets/producttracking.png'
import Pencil from '../assets/pencil.png'
const batchData = [
  { batch: "2873416", serial: "1124532" },
  { batch: "2873416", serial: "1124532" },
  { batch: "2873416", serial: "1124532" },
  { batch: "2873416", serial: "1124532" },
  { batch: "0903499", serial: "5524432" },
];

const ProductTrackingDetails = () => {
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
          {/* <AssignmentIcon color="secondary" /> */}
          <img src={ProductTracking} alt="" />
          <Typography variant="h6" fontWeight="bold">
            Product Tracking Details
          </Typography>
        </Box>

        <Box display="flex" gap={1} mt={isMobile ? 1 : 0}>
          <IconButton color="inherit">
            {/* <EditIcon /> */}
            <img src={Pencil} alt="" />
          </IconButton>
          <IconButton color="inherit">
            <ExpandLessIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Tracking Cards */}
      <Grid container spacing={2}>
        {batchData.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                backgroundColor: "#3a3a4d",
                  borderRadius: 2,
                color:"white"
              }}
            >
              <Typography variant="body2" color="#fff">
                Batch Number
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                {item.batch}
              </Typography>

              <Typography variant="body2" color="#fff" mt={1}>
                Serial Number
              </Typography>
              <Typography variant="subtitle1" fontWeight="bold">
                {item.serial}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductTrackingDetails;

import React from "react";
import {
  Box,
  Typography,
  IconButton,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  useMediaQuery,
  Button,
  Link,
  Avatar,
} from "@mui/material";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LaunchIcon from "@mui/icons-material/Launch";
import ImageIcon from "@mui/icons-material/Image";
import ProductAsset from '../assets/productAsset.png'
import Add from '../assets/buttons (1).png'


const ProductAssetManagement = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  const assetData = [
    {
      id: 1,
      image: "/images/front-view.png",
      info: "Front view",
      url: "https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2",
    },
    {
      id: 2,
      image: "/images/back-view.png",
      info: "Back View",
      url: "https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2",
    },
    {
      id: 3,
      image: "/images/top-view.png",
      info: "Top angle view",
      url: "https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2",
    },
    {
      id: 4,
      image: "/images/bottom-view.png",
      info: "Bottom angle View",
      url: "https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2",
    },
    {
      id: 5,
      image: "/images/left-view.png",
      info: "Left angle View",
      url: "https://Company.widen.net/s/hlwxsxtcjg/field-series-exploded-view-2",
    },
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
          {/* <ImageIcon color="secondary" /> */}
          <img src={ProductAsset} alt="" />
          <Typography variant="h6" fontWeight="bold">
            Product Asset Management
          </Typography>
        </Box>

        <IconButton sx={{ color: "#c69cfa", mt: isMobile ? 1 : 0 }}>
          {/* <AddCircleOutlineIcon /> */}
          <img src={Add} alt="" />
        </IconButton>
      </Box>

      {/* Table */}
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "#3a3a4d",
          borderRadius: 2,
          overflowX: "auto",
        }}
      >
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={cellStyle}>S.No.</TableCell>
              <TableCell sx={cellStyle}>Image</TableCell>
              <TableCell sx={cellStyle}>Image Info</TableCell>
              <TableCell sx={cellStyle}>Image URL</TableCell>
              <TableCell sx={cellStyle}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assetData.map((asset, index) => (
              <TableRow key={asset.id}>
                <TableCell sx={cellStyle}>{index + 1}</TableCell>
                <TableCell sx={cellStyle}>
                  <Avatar
                    src={asset.image}
                    alt={asset.info}
                    variant="square"
                    sx={{ width: 40, height: 40 }}
                  />
                </TableCell>
                <TableCell sx={cellStyle}>{asset.info}</TableCell>
                <TableCell sx={cellStyle}>
                  <Link
                    href={asset.url}
                    target="_blank"
                    rel="noopener"
                    underline="hover"
                    color="#c69cfa"
                  >
                    {asset.url} <LaunchIcon fontSize="small" />
                  </Link>
                </TableCell>
                <TableCell sx={cellStyle}>
                  <IconButton sx={{ color: "#c69cfa" }}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton sx={{ color: "#f87171" }}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const cellStyle = {
  color: "#fff",
  borderBottom: "1px solid #444",
  fontSize: "0.875rem",
};

export default ProductAssetManagement;

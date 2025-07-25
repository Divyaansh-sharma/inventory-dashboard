import React from "react";
import {
  Box,
  Typography,
  IconButton,
  Grid,
  useMediaQuery,
  Paper,
} from "@mui/material";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ProductVehicle from '../assets/vehicles.png'
import Pencil from '../assets/pencil.png'
const ProductVehicles = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  const vehicleData = [
    {
      id: 29,
      make: "BMW",
      model: "3 Series",
      year: 2025,
      trim: "M340i",
      description:
        "M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
    },
    {
      id: 26,
      make: "Toyota",
      model: "3 Series",
      year: 2025,
      trim: "T340i",
      description:
        "M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
    },
    {
      id: 29,
      make: "BMW",
      model: "3 Series",
      year: 2025,
      trim: "M340i",
      description:
        "M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
    },
    {
      id: 26,
      make: "Toyota",
      model: "3 Series",
      year: 2025,
      trim: "T340i",
      description:
        "M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
    },
    {
      id: 29,
      make: "BMW",
      model: "3 Series",
      year: 2025,
      trim: "M340i",
      description:
        "M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
    },
    {
      id: 26,
      make: "Toyota",
      model: "3 Series",
      year: 2025,
      trim: "T340i",
      description:
        "M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
    },
    {
      id: 29,
      make: "BMW",
      model: "3 Series",
      year: 2025,
      trim: "M340i",
      description:
        "M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
    },
    {
      id: 26,
      make: "Toyota",
      model: "3 Series",
      year: 2025,
      trim: "T340i",
      description:
        "M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
    },
    {
      id: 29,
      make: "BMW",
      model: "3 Series",
      year: 2025,
      trim: "M340i",
      description:
        "M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
    },
    {
      id: 26,
      make: "Toyota",
      model: "3 Series",
      year: 2025,
      trim: "T340i",
      description:
        "M340i 4dr Sedan (3.0L 6cyl Turbo gas/electric mild hybrid 8A)",
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
          {/* <DriveEtaIcon color="secondary" /> */}
          <img src={ProductVehicle} alt="" />
          <Typography variant="h6" fontWeight="bold">
            Product Vehicles
          </Typography>
        </Box>

        <IconButton sx={{ color: "#c69cfa", mt: isMobile ? 1 : 0 }}>
          <AddCircleOutlineIcon />
        </IconButton>
      </Box>

      {/* Table or Cards */}
      {isMobile ? (
        // Mobile Card Layout
        <Grid container spacing={2}>
          {vehicleData.map((vehicle, index) => (
            <Grid item xs={12} key={index}>
              <Paper
                sx={{
                  p: 2,
                  backgroundColor: "#3a3a4d",
                  color: "#fff",
                  borderRadius: 2,
                }}
              >
                <Typography variant="subtitle2" color="gray">
                  Identifier: {vehicle.id}
                </Typography>
                <Typography>
                  <strong>Make:</strong> {vehicle.make}
                </Typography>
                <Typography>
                  <strong>Model:</strong> {vehicle.model}
                </Typography>
                <Typography>
                  <strong>Year:</strong> {vehicle.year}
                </Typography>
                <Typography>
                  <strong>Trim:</strong> {vehicle.trim}
                </Typography>
                <Typography variant="body2" mt={1}>
                  {vehicle.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      ) : (
        // Desktop Table Layout
        <Box component="table" width="100%" sx={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              {[
                "Identifier",
                "Make",
                "Model",
                "Year",
                "Trim",
                "Trim Description",
              ].map((header, i) => (
                <th
                  key={i}
                  style={{
                    padding: "10px",
                    color: "#aaa",
                    textAlign: "left",
                    fontWeight: "normal",
                  }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {vehicleData.map((vehicle, index) => (
              <tr key={index} style={{ borderTop: "1px solid #555" }}>
                <td style={{ padding: "10px" }}>{vehicle.id}</td>
                <td style={{ padding: "10px" }}>{vehicle.make}</td>
                <td style={{ padding: "10px" }}>{vehicle.model}</td>
                <td style={{ padding: "10px" }}>{vehicle.year}</td>
                <td style={{ padding: "10px" }}>{vehicle.trim}</td>
                <td style={{ padding: "10px" }}>{vehicle.description}</td>
              </tr>
            ))}
          </tbody>
        </Box>
      )}
    </Box>
  );
};

export default ProductVehicles;

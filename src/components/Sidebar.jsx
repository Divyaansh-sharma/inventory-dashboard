import React, { useState, useEffect } from "react";
import HomeIcon from "../assets/HomeIcon.png";
import TickIcon from "../assets/Tick.png";
import Message from "../assets/Message.png";
import Profile from "../assets/Profile.png";
import Inventory from "../assets/Inventory.png";
import Followups from "../assets/Followups.png";
import PriceList from "../assets/PriceList.png";
import Leads from "../assets/Leads.png";
import Users from "../assets/Users.png";
import Products from "../assets/Products.png";
import Orders from "../assets/orders.png";

import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
} from "@mui/material";
import {
  Home,
  Inbox,
  Person,
  Inventory2,
  ExpandLess,
  ExpandMore,
  ListAlt,
  People,
  LocalOffer,
  CalendarMonth,
  ShoppingCart,
} from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const [openInventory, setOpenInventory] = useState(true); // Changed from false to true
  const [openAllProducts, setOpenAllProducts] = useState(true); // Changed from false to true

  useEffect(() => {
    const isInventory = location.pathname.startsWith("/inventory");

    if (isInventory) {
      setOpenInventory(true);

      if (
        location.pathname === "/inventory/new" ||
        location.pathname === "/inventory/existing" ||
        /^\/inventory\/[^/]+$/.test(location.pathname)
      ) {
        setOpenAllProducts(true);
      }
    } else {
      // Removed the lines that were closing the sections when not on inventory routes
      // setOpenInventory(false);
      // setOpenAllProducts(false);
    }
  }, [location.pathname]);

  return (
    <Box
      sx={{
        width: { xs: "60px", sm: "220px" },
        backgroundColor: "#0a0a1a",
        color: "#fff",
        minHeight: "100vh",
        transition: "all 0.3s ease",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          p: 2,
          fontWeight: "bold",
          fontSize: "1rem",
          letterSpacing: "1px",
          color: "#fff",
          textAlign: "left",
          fontFamily: "'Comic Neue', cursive", // or 'Permanent Marker', 'Pacifico', etc.
          display: { xs: "none", sm: "block" },
        }}
      >
        COMPANY LOGO
      </Typography>

      <List component="nav">
        <ListItemButton component={Link} to="/" selected={false}>
          <ListItemIcon sx={{ color: "#fff", width: "10px", minWidth: "35px" }}>
            <img
              src={HomeIcon}
              alt="Home-icon"
              style={{ position: "relative", left: "-5px" }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Home"
            sx={{ display: { xs: "none", sm: "block" } }}
            slotProps={{
              primary: {
                sx: {
                  fontSize: "0.85rem",
                  fontWeight: 400,
                },
              },
            }}
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "#fff", minWidth: "35px" }}>
            <img src={TickIcon} alt="" />
          </ListItemIcon>
          <ListItemText
            primary="My Tasks"
            sx={{ display: { xs: "none", sm: "block" } }}
            slotProps={{
              primary: {
                sx: {
                  fontSize: "0.85rem",
                  fontWeight: 400,
                },
              },
            }}
          />
          <Box
            sx={{
              ml: "auto",
              pr: { xs: 0, sm: 2 },
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
            }}
          >
            <ExpandMore />
          </Box>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "#fff", minWidth: "35px" }}>
            <img src={Message} alt="" />
          </ListItemIcon>
          <ListItemText
            primary="Inbox"
            sx={{ display: { xs: "none", sm: "block" } }}
            slotProps={{
              primary: {
                sx: {
                  fontSize: "0.85rem",
                  fontWeight: 400,
                },
              },
            }}
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "#fff", minWidth: "35px" }}>
            {/* <Person /> */}
            <img src={Profile} alt="" />
          </ListItemIcon>
          <ListItemText
            primary="Customer"
            sx={{ display: { xs: "none", sm: "block" } }}
            slotProps={{
              primary: {
                sx: {
                  fontSize: "0.85rem",
                  fontWeight: 400,
                },
              },
            }}
          />
          <Box
            sx={{
              ml: "auto",
              pr: { xs: 0, sm: 2 },
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
            }}
          >
            <ExpandMore />
          </Box>
        </ListItemButton>

        {/* Inventory Section */}
        <ListItemButton onClick={() => setOpenInventory(!openInventory)}>
          <ListItemIcon sx={{ color: "#fff", minWidth: "35px" }}>
            <img src={Inventory} alt="" />
          </ListItemIcon>
          <ListItemText
            primary="Inventory"
            sx={{ display: { xs: "none", sm: "block" } }}
            slotProps={{
              primary: {
                sx: {
                  fontSize: "0.85rem",
                  fontWeight: 400,
                },
              },
            }}
          />
          <Box
            sx={{
              ml: "auto", // pushes it to right only if space allows
              pr: { xs: 0, sm: 2 }, // remove padding on xs
              display: { xs: "none", sm: "flex" }, // hide arrow in mobile
              alignItems: "center",
            }}
          >
            {openInventory ? <ExpandLess /> : <ExpandMore />}
          </Box>
        </ListItemButton>

        <Collapse in={openInventory} timeout="auto" unmountOnExit>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <List component="div" disablePadding>
              <ListItemButton
                component={Link}
                to="/products/overview"
                selected={location.pathname === "/products/overview"}
                sx={{ pl: 4 }}
              >
                <ListItemText
                  primary="Overview"
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: "0.85rem",
                        fontWeight: 400,
                        pl: 3,
                      },
                    },
                  }}
                />
              </ListItemButton>

              <ListItemButton
                component={Link}
                to="/products/search"
                selected={location.pathname === "/products/search"}
                sx={{ pl: 4 }}
              >
                <ListItemText
                  primary="Product Search"
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: "0.85rem",
                        fontWeight: 400,
                        pl: 3,
                      },
                    },
                  }}
                />
              </ListItemButton>

              {/* All Products */}
              <ListItemButton
                onClick={() => setOpenAllProducts(!openAllProducts)}
                sx={{ pl: 4 }}
                selected={
                  location.pathname === "/products/existing" ||
                  location.pathname === "/products/new"
                }
              >
                <ListItemText
                  primary="All Products"
                  slotProps={{
                    primary: {
                      sx: {
                        fontSize: "0.85rem",
                        fontWeight: 400,
                        pl: 3,
                      },
                    },
                  }}
                />
                {openAllProducts ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>

              <Collapse in={openAllProducts} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    component={Link}
                    to="/products/new"
                    selected={location.pathname === "/products/new"}
                    sx={{ pl: 6 }}
                  >
                    <ListItemText
                      primary="New Product"
                      slotProps={{
                        primary: {
                          sx: {
                            fontSize: "0.85rem",
                            fontWeight: 400,
                            pl: 3,
                          },
                        },
                      }}
                    />
                  </ListItemButton>

                  <ListItemButton
                    component={Link}
                    to="/products/existing"
                    selected={
                      location.pathname === "/products/existing" ||
                      location.pathname === "/"
                    }
                    sx={{ pl: 6 }}
                  >
                    <ListItemText
                      primary="Existing Product"
                      slotProps={{
                        primary: {
                          sx: {
                            fontSize: "0.85rem",
                            fontWeight: 400,
                            pl: 3,
                          },
                        },
                      }}
                    />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Box>
        </Collapse>

        <ListItemButton>
          <ListItemIcon sx={{ color: "#fff", minWidth: "35px" }}>
            <img src={Followups} alt="" />
          </ListItemIcon>
          <ListItemText
            primary="Followups"
            sx={{ display: { xs: "none", sm: "block" } }}
            slotProps={{
              primary: {
                sx: {
                  fontSize: "0.85rem",
                  fontWeight: 400,
                },
              },
            }}
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "#fff", minWidth: "35px" }}>
            <img src={Orders} alt="" />
          </ListItemIcon>
          <ListItemText
            primary="Orders"
            sx={{ display: { xs: "none", sm: "block" } }}
            slotProps={{
              primary: {
                sx: {
                  fontSize: "0.85rem",
                  fontWeight: 400,
                },
              },
            }}
          />
          <Box
            sx={{
              ml: "auto",
              pr: { xs: 0, sm: 2 },
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
            }}
          >
            <ExpandMore />
          </Box>
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "#fff", minWidth: "35px" }}>
            <img src={Products} alt="" />
          </ListItemIcon>
          <ListItemText
            primary="Products"
            sx={{ display: { xs: "none", sm: "block" } }}
            slotProps={{
              primary: {
                sx: {
                  fontSize: "0.85rem",
                  fontWeight: 400,
                },
              },
            }}
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "#fff", minWidth: "35px" }}>
            <img src={Users} alt="" />
          </ListItemIcon>
          <ListItemText
            primary="Users"
            sx={{ display: { xs: "none", sm: "block" } }}
            slotProps={{
              primary: {
                sx: {
                  fontSize: "0.85rem",
                  fontWeight: 400,
                },
              },
            }}
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "#fff", minWidth: "35px" }}>
            <img src={Leads} alt="" />
          </ListItemIcon>
          <ListItemText
            primary="Leads"
            sx={{ display: { xs: "none", sm: "block" } }}
            slotProps={{
              primary: {
                sx: {
                  fontSize: "0.85rem",
                  fontWeight: 400,
                },
              },
            }}
          />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon sx={{ color: "#fff", minWidth: "35px" }}>
            <img src={PriceList} alt="" />
          </ListItemIcon>
          <ListItemText
            primary="Pricelist"
            sx={{ display: { xs: "none", sm: "block" } }}
            slotProps={{
              primary: {
                sx: {
                  fontSize: "0.85rem",
                  fontWeight: 400,
                },
              },
            }}
          />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;

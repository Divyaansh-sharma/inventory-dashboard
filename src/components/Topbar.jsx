import React from "react";
import {
  Box,
  IconButton,
  Avatar,
  Switch,
  Typography,
  Badge,
  Tooltip,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PublicIcon from "@mui/icons-material/Public";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import SearchIcon from "@mui/icons-material/Search"; 

const Topbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between" 
      alignItems="center"
      p={1.5}
      bgcolor="#0e0e1f"
      color="#fff"
    >
      {/* Left: Search Icon */}
      <Box display="flex" alignItems="center">
        <Tooltip title="Search">
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Right: All controls */}
      <Box display="flex" alignItems="center" >
        <Typography variant="body2">Theme</Typography>
        <Switch size="small" />

        <Tooltip title="Notifications">
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error" variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Tooltip>

        <Tooltip title="Language">
          <IconButton color="inherit">
            <PublicIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Tips">
          <IconButton color="inherit">
            <LightbulbOutlinedIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Profile">
          <IconButton>
            <Avatar
              src="https://i.pravatar.cc/40?img=3"
              alt="User"
              sx={{ width: 32, height: 32 }}
            />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Topbar;


import React from 'react';
import { Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import "../styles.css";

const Sidebar = () => {
  return (
    <Box className="sidebar">
      <List>
        <ListItemButton>
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary="Customers" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon><GroupIcon /></ListItemIcon>
          <ListItemText primary="Teams" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon><LogoutIcon /></ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Sidebar;


// Dashboard.js
import React, { useState } from 'react';
import { Tabs, Tab, Box, Grid, Card, CardContent, Typography, IconButton ,Button, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import Sidebar from './Sidebar';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AddIcon from '@mui/icons-material/Add';
 import Filter from './Filter';
 import VendorTable from './VendorTable';
 import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
 import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import "../styles.css"
import "./VendorTable.css"
const Dashboard = () => {
   // State to manage the currently selected tab (default is 'Normal View')
  const [tabIndex, setTabIndex] = useState(4); // Default to Normal View
  const [openDialog, setOpenDialog] = useState(false); //  State for the Add Customer dialog

  // Handler to switch between tabs
  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

// Handler for Export button
const handleExport = () => {
  // Placeholder function - add your export logic here
  alert('Export functionality is not yet implemented.');
};

  
 // Handler to open the Add Customer dialog
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  // Handler to close the Add Customer dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  // Handler for Add Customer form submission
  const handleAddCustomer = (event) => {
    event.preventDefault();
    // Add your logic to handle the form submission here
    alert('Customer added successfully!');
    handleCloseDialog();
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar component for navigation */}
       <Sidebar />
      <div className="content">
        
         {/* Customer Overview Header */}
         <div className="overview-header">
          <Typography variant="h4" className="overview-title">
            Customer Overview
          </Typography>

          {/* Export button in the header */}
          <Button
            variant="contained"
            color="primary"
            startIcon={<CloudUploadIcon />}
            className="export-button"
            onClick={handleExport} // Added onClick handler
          >
            Export
          </Button>
        </div>

         {/* Tabs for different views (Overview, General, List View, etc.) */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }} className="tabs-container">
          <Tabs value={tabIndex} onChange={handleTabChange} aria-label="dashboard tabs">
            <Tab label="Overview" />
            <Tab label="General" />
            <Tab label="List View" />
            <Tab label="Grid View" />
            <Tab label="Normal View" />
          </Tabs>
        </Box>

         {/* Tab content area */}
        <div className="tab-content">

           {/* Content for 'Normal View' tab */}
          {tabIndex === 4 && (
            <div className="normal-view">
              <Grid container spacing={3}>

                {/* Cards for Total Customers */}
                <Grid item xs={4}>
                  <Card>
                    <CardContent>
                    <PeopleIcon className="card-icon" />
                    <div className="card-details">
                      <Typography variant="h5">Total Customers</Typography>
                      <Typography variant="h4">21,877</Typography>
                      <Typography color="textSecondary">+18% vs last month</Typography>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>

                 {/* Card for Total Members */}
                <Grid item xs={4}>
                  <Card>
                    <CardContent>
                    <GroupIcon className="card-icon" />
                    <div className="card-details">
                      <Typography variant="h5">Total Members</Typography>
                      <Typography variant="h4">871</Typography>
                      <Typography color="error">-88% vs last month</Typography>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>

                {/* Card for Active Users */}
                <Grid item xs={4}>
                  <Card>
                    <CardContent>
                    <PersonIcon className="card-icon" />
                    <div className="card-details">
                      <Typography variant="h5">Active Users</Typography>
                      <Typography variant="h4">28</Typography>
                      
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>

              {/* Vendor Activity History */}
              <Box mt={3} className="vendor-activity-header">
                <Typography variant="h6">Vendor Activity History</Typography>
                <span>Here you can track your Vendor's Performance everydayas</span>

                 {/* Action buttons for filtering and adding customers */}
                <Box display="flex" justifyContent="space-between" mt={2}>
                  <Box display="flex" alignItems="center">
                  
                  </Box>
                  <Box>
                    <IconButton><FilterAltIcon />Filter</IconButton>
                    <IconButton onClick={handleOpenDialog}><AddIcon />Add Customer</IconButton>
                  </Box>
                </Box>
  
            </Box>
              <Filter/>
              <VendorTable/>
            </div>
          )}
        </div>
      </div>

       {/* Add Customer Dialog */}
       <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Add Customer</DialogTitle>
        <DialogContent>
          <form onSubmit={handleAddCustomer}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Customer Name"
              type="text"
              fullWidth
              variant="outlined"
              required
            />
            <TextField
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
              required
            />
            <DialogActions>
              <Button onClick={handleCloseDialog} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Add
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;

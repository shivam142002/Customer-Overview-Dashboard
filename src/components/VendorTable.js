import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,Checkbox, LinearProgress, Box, Typography  } from '@mui/material';
import "../styles.css"
const VendorTable = () => {
    const [vendors, setVendors] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchVendors = async () => {
            try {
                // Making an API call to fetch vendor data
                const response = await axios.get('https://demo-backend.durbin.co.in/get-all-dashboard-data');
              // const response =  axios.get('/get-all-dashboard-data')
                console.log(response.data.data); // Check the structure of the API response
                setVendors(response.data.data); // Access the "data" array inside the response
            } catch (error) {
                console.error('Error fetching vendors:', error);
                console.error('Error details:', error.response ? error.response.data : 'No response data');
        setError(error);
      } finally {
        setLoading(false);
      }
    };
     
    
        fetchVendors();     // Trigger the API call when the component mounts
    }, []);
     

    // Function to return color based on the vendor status
    const getStatusColor = (status) => {
        switch (status) {
            case 'Paid':
                return 'green';
            case 'Failed':
                return 'red';
            case 'Pending':
                return 'orange';
            default:
                return 'black';
        }
    };


    return (
        <TableContainer component={Paper}>
            <Table aria-label="vendor table">
                <TableHead>
                    <TableRow>
                    <TableCell>CheckBox</TableCell>
                        <TableCell>Company Name</TableCell>
                        <TableCell>Performance</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Last Checked</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Array.isArray(vendors) && vendors.length > 0 ? (
                        vendors.map((vendor, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <Checkbox />
                                </TableCell>

                                <TableCell>{vendor.companyName}</TableCell>
                               

                                <TableCell>
                                    <Box display="flex" alignItems="center">
                                        <Box width="100%" mr={1}>
                                            <LinearProgress variant="determinate" value={parseFloat(vendor.performance)} />
                                        </Box>
                                        <Box minWidth={35}>
                                            <Typography variant="body2" color="textSecondary">{`${vendor.performance}%`}</Typography>
                                        </Box>
                                    </Box>
                                </TableCell>
                                
                                <TableCell>{vendor.description}</TableCell>
                                <TableCell>{vendor.lastChecked}</TableCell>

                                <TableCell>{vendor.status}</TableCell>

                                <TableCell style={{ color: getStatusColor(vendor.status) }}>
                                    {vendor.status}
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={5} align="center">
                                No vendors available
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default VendorTable;



    



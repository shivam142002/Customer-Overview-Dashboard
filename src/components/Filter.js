
import React, { useState, useEffect } from 'react';
import { TextField, MenuItem, Chip, Box, List, ListItem, Button } from '@mui/material';
import "../styles.css"
const Filter = () => {
    const [inputValue, setInputValue] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [dateValue, setDateValue] = useState('');
    const [filterOptions, setFilterOptions] = useState([]);
    const [status, setStatus] = useState('');
    const predefinedItems = [
        'Blox', 
        'Brotha Platforms', 
        'Layerz Softwares', 
        'Linez Technologies', 
        'Planet X'
    ];

    // Handle changes in the input field
    const handleInputChange = (e) => {
        const value = e.target.value;

         // If the input is a number (assumed to be a date), set it as the date value
        if (!isNaN(value) && value) {
            setDateValue(value);
            setInputValue('');
        } else {
            setInputValue(value);
        }
    };

    // Filter predefined items based on current inputValue
    useEffect(() => {
        if (inputValue) {
            const filtered = predefinedItems.filter(item => 
                item.toLowerCase().includes(inputValue.toLowerCase())
            );
            setFilteredItems(filtered);
        } else {
            setFilteredItems([]);
        }
    }, [inputValue]);


    // Add selected item to the filter options
    const addFilterOption = (item) => {
        setFilterOptions([...filterOptions, item]);
        setInputValue('');
        setFilteredItems([]);
    };


    // Add selected date to the filter options
    const addDateFilter = () => {
        if (dateValue) {
            setFilterOptions([...filterOptions, `Date: ${dateValue}`]);
            setDateValue('');
        }
    };


    // Handle the status selection from the dropdown menu
    const handleStatusChange = (e) => {
        setStatus(e.target.value);
    };

    // Add selected status to the filter options
    const addStatusFilter = () => {
        if (status) {
            setFilterOptions([...filterOptions, `Status: ${status}`]);
            setStatus('');
        }
    };

    return (
        <Box className="filter">
            {/* Conditionally render a date input field if a date value is entered */}
            {dateValue ? (
                <TextField
                    type="date"
                    value={dateValue}
                    onChange={(e) => setDateValue(e.target.value)}  
                     className="filter-input"
              
                />
            ) : (
                // Otherwise render a text input field for general search
                <TextField
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Search Order"
                    className="filter-input"
                  
                />
            )}

           {/* Display a list of filtered items based on the input */}
            {filteredItems.length > 0 && (
                <List className="filtered-list">
                    {filteredItems.map(item => (
                        <ListItem 
                            key={item} 
                            button 
                            onClick={() => addFilterOption(item)}
                        >
                            {item}
                        </ListItem>
                    ))}
                </List>
            )}

           {/* Dropdown menu for selecting the status (Paid, Pending, Failed) */}
            <TextField
                select
                value={status}
                onChange={handleStatusChange}
                placeholder="Select Status"
                
                className="status-select"
              //  sx={{ marginBottom: '10px' }}
            >
                <MenuItem value="Paid">Paid</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Failed">Failed</MenuItem>
            </TextField>
            
            {/* Button to apply the selected filters */}
            <Button 
                variant="contained" 
                color="primary" 
                onClick={() => {
                    addStatusFilter();
                    addDateFilter();
                }}
                 className="apply-filter-btn"
              //  sx={{ marginBottom: '10px' }}
            >
                Apply Filter
            </Button>

            {/* <Box className="filter-options" sx={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap' }}> */}

            {/* Display the selected filter options as chips */}
            <Box className="filter-options">
                {filterOptions.map((option, index) => (
                    <Chip
                        key={index}
                        label={option}
                        onDelete={() => setFilterOptions(filterOptions.filter((_, i) => i !== index))}
                     //   sx={{ marginRight: '5px', marginBottom: '5px' }}
                         className="filter-chip"
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Filter;











// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Filter = () => {
//     const [inputValue, setInputValue] = useState('');
//     const [filteredItems, setFilteredItems] = useState([]);
//     const [dateValue, setDateValue] = useState('');
//     const [filterOptions, setFilterOptions] = useState([]);
//     const predefinedItems = [
//         { companyName: 'Blox', website: 'getblox.com' },
//         { companyName: 'Brotha Platforms', website: 'brotha.gg' },
//         { companyName: 'Layerz Softwares', website: 'layerz.io' },
//         { companyName: 'Linez Technologies', website: 'linez.tech' },
//         { companyName: 'Planet X', website: 'planetx.co' },
//     ];

//     useEffect(() => {
//         if (inputValue && isNaN(inputValue)) {
//             const filtered = predefinedItems.filter(item =>
//                 item.companyName.toLowerCase().includes(inputValue.toLowerCase())
//             );
//             setFilteredItems(filtered);
//         } else {
//             setFilteredItems([]);
//         }
//     }, [inputValue]);

//     const handleInputChange = (e) => {
//         const value = e.target.value;
//         if (!isNaN(value) && value) {
//             setDateValue(value);
//             setInputValue('');
//         } else {
//             setInputValue(value);
//         }
//     };

//     const addFilterOption = (item) => {
//         setFilterOptions([...filterOptions, item]);
//         setInputValue('');
//         setFilteredItems([]);
//     };

//     return (
//         <div className="filter">
//             <input
//                 type="text"
//                 value={inputValue}
//                 onChange={handleInputChange}
//                 placeholder="Search Order"
//             />
//             <select>
//                 <option value="paid">Paid</option>
//                 <option value="pending">Pending</option>
//                 <option value="failed">Failed</option>
//             </select>
//             <select>
//                 <option value="all-category">All Category</option>
//                 <option value="category1">Category 1</option>
//                 <option value="category2">Category 2</option>
//             </select>
//             <button className="filter-button">Filter</button>
//             {dateValue && (
//                 <input
//                     type="date"
//                     value={dateValue}
//                     onChange={(e) => setDateValue(e.target.value)}
//                     style={{ display: dateValue ? 'block' : 'none' }}
//                 />
//             )}
//             <div className="filtered-items">
//                 {filteredItems.map(item => (
//                     <div key={item.companyName} onClick={() => addFilterOption(item.companyName)}>
//                         <input type="checkbox" /> {item.companyName} ({item.website})
//                     </div>
//                 ))}
//             </div>
//             <div className="filter-options">
//                 {filterOptions.map((option, index) => (
//                     <span key={index} className="filter-option">{option}</span>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Filter;


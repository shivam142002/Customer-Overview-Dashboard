// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// src/App.js
// import React, { useState, useEffect } from 'react';
// import './App.css';

// const App = () => {
//   const [data, setData] = useState([]);
//   const [filter, setFilter] = useState('');
//   const [dateFilter, setDateFilter] = useState('');
//   const [filteredItems, setFilteredItems] = useState([]);
//   const [searchHistory, setSearchHistory] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('https://demo-backend.durbin.co.in/get-all-dashboard-data');
//       const result = await response.json();
//       setData(result);
//     };
//     fetchData();
//   }, []);

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     if (!isNaN(value) && value.trim() !== '') {
//       setDateFilter(value);
//       setFilter('');
//       setFilteredItems([]);
//     } else {
//       setFilter(value);
//       setDateFilter('');
//       const filtered = data.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
//       setFilteredItems(filtered);
//     }
//   };

//   const handleItemClick = (item) => {
//     setSearchHistory([...searchHistory, item]);
//     setFilter('');
//     setFilteredItems([]);
//   };

//   return (
//     <div className="app-container">
//       <h1>Vendor Activity History</h1>
//       <div className="search-container">
//         <input
//           type={dateFilter ? 'date' : 'text'}
//           value={dateFilter || filter}
//           onChange={handleInputChange}
//           placeholder="Search Order"
//         />
//         {dateFilter && <span className="filter-option">Selected Date: {dateFilter}</span>}
//       </div>
//       <ul className="filtered-items-list">
//         {filteredItems.map((item, index) => (
//           <li key={index} onClick={() => handleItemClick(item)}>
//             {item.name}
//           </li>
//         ))}
//       </ul>
//       <div className="selected-filters">
//         <h2>Selected Filters:</h2>
//         <ul>
//           {searchHistory.map((item, index) => (
//             <li key={index}>{item.name}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default App;



import React from 'react';
import Dashboard from './components/Dashboard';

const App = () => {
    return (
        <div className="app">
            <Dashboard />
        </div>
    );
};

export default App;
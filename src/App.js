import React, { useState } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

// local json data
import data from './arbs.json';

const GridData = () => {
  // Row Data: The data to be displayed.
  const rowData = data.arbitrage_data;

  // Column Definitions: Defines the columns to be displayed.
  const colDefs = [];
  const keys = Object.keys(data.arbitrage_data[0]);
  keys.forEach(key => colDefs.push({ field: key }));
  
  return (
    // wrapping container with theme & size
    <div
      className="ag-theme-quartz grid-wrapper" // applying the grid theme
    >
      <AgGridReact style={{ width: '100%', height: '100%' }}
        rowData={rowData}
        columnDefs={colDefs}
        pagination={true}
        paginationPageSize='10'
        paginationAutoPageSize={true}
      />
    </div>
  )
};

function App() {
  return (
    <div>
      <GridData />
    </div>
  );
}

export default App;

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
  // const colDefs = [];
  // automatically get column headers from json data
  // const keys = Object.keys(data.arbitrage_data[0]);
  // keys.forEach(key => colDefs.push({ field: key }));

  // manually define column headers
  const colDefs = [
    { field: "bet_placed", headerName: "Bet Placed", width: 120 }, 
    { field: "arb_percent", headerName: "Arb %", width: 100 },
    { field: "market", filter: true },
    { field: "game_id", hide: true },
    { field: "sport", filter: true, width: 120 },
    { field: "league", filter: true, width: 100 },
    { field: "home_team", headerName: "Home" },
    { field: "away_team", headerName: "Away" },
    { field: "start_date", headerName: "Date", width: 180 }, 
    { field: "best_price_home_name", hide: true },
    { field: "best_price_home_odd", hide: true },
    { field: "best_price_home_odd_books", hide: true },
    { field: "best_price_away_name", hide: true },
    { field: "best_price_away_odd", hide: true },
    { field: "best_price_away_odd_books", hide: true },
    { field: "oddsjam_price_home_odd", hide: true },
    { field: "oddsjam_price_away_odd", hide: true },
    { field: "type", hide: true },
    { field: "is_live", headerName: "Live", width: 60 }
  ];
  
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

import React, { useState } from 'react';
import './App.css';
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

const GridData = () => {
  // Row Data: The data to be displayed.
  const [rowData, setRowData] = useState([

  ]);

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
  ]);

  return (
    // wrapping container with theme & size
    <div
      className="ag-theme-quartz" // applying the grid theme
      style={{ height: 500 }} // the grid will fill the size of the parent container
    >
      <AgGridReact
        rowData={rowData}
        columnDefs={colDefs}
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

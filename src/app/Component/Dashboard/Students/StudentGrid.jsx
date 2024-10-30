"use client";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { useEffect, useState } from "react";

const StudentGrid = ({ students }) => {
  const [rowData, setRowData] = useState([]);
  // console.log(rowData);

  useEffect(() => {
    setRowData(students);
  }, [students]);

  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [20, 50, 100];

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "name", sortable: true, filter: true, floatingFilter: true },
    {
      field: "studentClass",
      sortable: true,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "studentSection",
      sortable: true,
      filter: true,
      floatingFilter: true,
    },
    { field: "roll", sortable: true, filter: true, floatingFilter: true },
    { field: "phone", sortable: true, filter: true, floatingFilter: true },
    {
      field: "parentsNumber",
      sortable: true,
      filter: true,
      floatingFilter: true,
    },
    {
      field: "admissionDate",
      sortable: true,
      filter: true,
      floatingFilter: true,
    },
  ]);

  return (
    <div className="ag-theme-quartz h-[330px] w-full">
      <AgGridReact
        rowData={rowData}
        pagination={pagination}
        paginationPageSize={paginationPageSize}
        paginationPageSizeSelector={paginationPageSizeSelector}
        columnDefs={colDefs}
      />
    </div>
  );
};

export default StudentGrid;

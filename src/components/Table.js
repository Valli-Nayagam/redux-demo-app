import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Table = () => {
    const [rowData] = useState([
        { firstName: 'emp1',lastName: 'LNid0', age: 21 },
        { firstName: 'emp2',lastName: 'LNid0', age: 22 },
        { firstName: 'emp3',lastName: 'LNid0', age: 23 },
        { firstName: 'emp4',lastName: 'LNid0', age: 24 },
        { firstName: 'emp5',lastName: 'LNid0', age: 25 },
    ]);

    const [columnDefs] = useState([
        { headerName: 'Action', field: 'action',cellRendererFramework:()=> <span><a href="">Edit</a> <a className="mr-2" href="">Delete</a></span> },
        { headerName: 'FirstName', field: 'firstName', checkboxSelection: true },
        { headerName: 'LastName', field: 'lastName' },
        { headerName: 'Age', field: 'age',cellStyle:(params) =>(params.value === 23 ? {border:"2px solid green"} : null) },
        {
            headerName: 'DOB', field: 'age',
            cellClass: (params) => (params.value === 23 ? "ownClass" : null),
            cellRendererFramework: (params) => <button onClick={()=>clickRenderEvent(params)} className="btn btn-sm w-100 btn-outline-secondary">Click</button>
        }
    ])
    const defaultOptions = {
        sortable: true, editable: true, filter: true, floatingFilter: true, flex: 1
    }
    let gridApi;
    const onGridReady = params => {
        gridApi = params.api
    }
    const onClickExport = () => {
        gridApi.exportDataAsCsv();
    }
    const clickRenderEvent = (params) => {
        alert(`FirstName: ${params.data.firstName} is clicked`);
        console.log(params);
    }
    return (
        <div className="container ml-1">
            <h3>Ag-Grid <button className="btn btn-danger" onClick={() => onClickExport()}>Export</button></h3>
            <div className="ag-theme-alpine w-100" style={{ height: 400 }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultOptions}
                    onGridReady={onGridReady}>
                </AgGridReact>
            </div>
            <h2>hi</h2>
        </div>
    );
    // const data = useState([
    //     { name: 'emp1', age: 25 },
    //     { name: 'emp2', age: 25 },
    //     { name: 'emp3', age: 25 },
    //     { name: 'emp4', age: 25 },
    //     { name: 'emp5', age: 25 },
    // ]);
    // const columns = useState([
    //     { headerName: 'Name', field: 'name' },
    //     { headerName: 'Age', field: 'age' }
    // ]);

    // return (
    //     <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
    //         <AgGridReact rowData={data} columsDefs={columns}></AgGridReact>
    //     </div>
    // )
}

export default Table

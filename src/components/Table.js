import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Table = () => {
    const [rowData] = useState([
        { firstName: 'emp1',lastName: 'LNid', age: 25 },
        { firstName: 'emp2',lastName: 'LNid', age: 25 },
        { firstName: 'emp3',lastName: 'LNid', age: 25 },
        { firstName: 'emp4',lastName: 'LNid', age: 25 },
        { firstName: 'emp5',lastName: 'LNid', age: 25 },
    ]);

    const [columnDefs] = useState([
        { headerName: 'firstName', field: 'firstName', checkboxSelection: true },
        { headerName: 'lastName', field: 'lastName' },
        { headerName: 'Age', field: 'age' }
    ])
    const defaultOptions = {
        sortable: true, editable: true, filter: true, floatingFilter: true, flex:1
    }
    return (
        <div className="container ml-1">
            <div className="ag-theme-alpine w-100" style={{ height: 400 }}>
                <AgGridReact
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={defaultOptions}>
                </AgGridReact>
            </div>
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

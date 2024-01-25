import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridActionsCellItem, GridToolbar } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import useStockCalls from '../service/useStockCalls';


export default function ProductTable() {
    const {products}= useSelector((state) => state.stock )
    const {deleteStock}= useStockCalls()
    const getRowId = (row) => row._id
    const columns = [
      { field: '_id', 
        headerName: '#', 
        flex:1.4, 
        headerAlign:"center" ,
        align: "center", 
        minWidht: "150px",
        sortable: false,
      },
      {
        field: 'categoryId',
        headerName: 'Category',
        flex:1,
        headerAlign:"center",
        align: "center",
        valueGetter: (props)=>{
          // console.log(props);
          return props.row?.categoryId?.name
     }
      },
      {
        field: 'brandId',
        headerName: 'Brand',
        flex:1.2,
        headerAlign:"center",
        align: "center",
        valueGetter: (props)=>props.row?.brandId?.name,
      },
      {
        field: 'name',
        headerName: 'Name',
        flex:1.5,
        align: "center",
        headerAlign:"center"
      },
    
      {
        field: 'quantity',
        headerName: 'Stock',
        type: 'number',
        flex:1.5,
        
        headerAlign:"center",
        align: "center",
      },
       {
          field: 'actions',
          type: 'actions',
          headerName: "Actions",
          headerAlign: "center",
          align: "center",
          getActions: (props) => [
              <GridActionsCellItem 
              icon={<DeleteForeverIcon/>} 
              onClick={() => deleteStock ("products", props.id)} 
              label="Delete" />,
            ]
          
           
        },
        
      
    ];
     
    
    return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
      autoHeight
        rows={products}
        columns={columns}
        pageSizeOptions={[5, 10 ,20, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}

import  Button   from '@mui/material/Button'
import  Typography   from '@mui/material/Typography'
import React from 'react'
import { useEffect, useState } from 'react'
import useStockCalls from '../service/useStockCalls'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import ProductModal from '../components/ProductModal'
import ProductTable from '../components/ProductTable'

const Products = () => {
  const {getStocks} = useStockCalls()
  const {products} = useSelector((state)=> state.stock)

  const [info, setInfo] =useState({
    
    "name": "",
    "phone": "",
    "address": "",
    "image": ""
  
})

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => 
  {setOpen(false);
    setInfo({"name": "","phone": "","address": "","image": ""})
  }

  useEffect(() => {
    // getFirms()
   
    getStocks("products")
    getStocks("categories")
    getStocks("brands")
   
  
  }, [])
  

  return (
    <div>
      <Typography variant='h4' color="error" mb={3}>
        Products
      </Typography>
      <Button variant='contained' onClick={handleOpen} sx={{ mb: 3 }}>New Products</Button>

      <ProductModal open={open} handleClose={handleClose} info={info} setInfo={setInfo}/>
      <ProductTable/>
      
    </div>
  )
}

export default Products
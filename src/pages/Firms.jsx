import  Button   from '@mui/material/Button'
import  Typography   from '@mui/material/Typography'
import React from 'react'
import { useEffect } from 'react'
import useStockCalls from '../service/useStockCalls'
import { useSelector } from 'react-redux'
import { Grid } from '@mui/material'
import FirmCard from '../components/FirmCard'
import FirmModal from '../components/FirmModal'

const Firms = () => {
  const {getStocks} = useStockCalls()
  const {firms} = useSelector((state)=> state.stock)
  useEffect(() => {
    // getFirms()
   
    getStocks("firms")
    
  
  }, [])
  
  console.log(firms);
  return (
    <div>
      <Typography variant='h4' color="error" mb={3}>
        Firms
      </Typography>
      <Button variant='contained'>New Firm</Button>

      <FirmModal/>

      <Grid container gap={3} mt={3}justifyContent={"center"} >
        {firms?.map((firm)=> (
          <Grid item key={firm._id}>
            <FirmCard  firm={firm}/>

          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Firms
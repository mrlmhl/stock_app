import  Button   from '@mui/material/Button'
import  Typography   from '@mui/material/Typography'
import React from 'react'
import { useEffect } from 'react'
import useStockCalls from '../service/useStockCalls'

const Firms = () => {
  const {getFirms} = useStockCalls()
 
  useEffect(() => {
    getFirms()
    
  }, [])
  
  return (
    <div>
      <Typography variant='h4' color="error" mb={3}>
        Firms
      </Typography>
      <Button variant='contained'>New Firm</Button>
    </div>
  )
}

export default Firms
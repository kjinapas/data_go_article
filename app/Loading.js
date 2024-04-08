import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
export default function Loading() {
  return (
    <Box sx={{ display: 'grid',placeItems:'center' }}>
    <CircularProgress />
    
    <div className='text-md'>กำลังโหลดข้อมูลจาก Api</div>
  </Box>
  )
}

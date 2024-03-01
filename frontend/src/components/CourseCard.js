import { Box } from '@mui/material'
import React from 'react'

const CourseCard = () => {
  return (
    <Box className='w-48 h-48 rounded-lg overflow-hidden shadow-sm shadow-slate-500'>
      <Box className='h-2/6 bg-primary'>
      </Box>
      <Box className='p-2'>
        <p className='text-2xl' style={{ fontFamily: 'MetropolisSemiBold'}}>COMP6080</p> 
        <p className='text-xs' style={{ fontFamily: 'MetropolisRegular'}}>Front-end Development</p> 
      </Box>
    </Box>
  )
}

export default CourseCard
import ApplicationCard from '@/components/ApplicationCard'
import { Box } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <Box className='p-8'>
      <Box className='h-1/6 mb-4'>
        <p
          className='text-4xl mt-4'
          style={{ fontFamily: 'MetropolisSemiBold' }}
        >
          Applications
        </p>
      </Box>
      <Box className=''>
        <ApplicationCard/>
      </Box>
    </Box>
  )
}

export default page
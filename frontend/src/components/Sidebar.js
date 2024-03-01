import React from 'react'
import Logo from '../logo.png'
import { Box, Button, Stack } from '@mui/material'

const Sidebar = () => {
  return (
    <div className='w-1/6 h-screen bg-slate-200 flex flex-wrap justify-center align-middle p-4 box-border'>
      <Stack className='justify-between' spacing={2}>
        <Box className='flex justify-center align-middle'>
          <img src={Logo} alt='Logo' className='w-16 h-16'/>
        </Box>
        <Box className='grow'>
          <Box className='flex flex-wrap justify-center'>
            <Button className='h-8'>Dashboard</Button>
            <Button className='h-8'>Groups</Button>
            <Button className='h-8'>Courses</Button>
            <Button className='h-8'>Reviews</Button>
          </Box>
        </Box>
      </Stack>
    </div>
  )
}

export default Sidebar
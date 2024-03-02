import ReviewCard from '@/components/ReviewCard'
import { Box, Rating, Stack } from '@mui/material'
import React from 'react'

const page = () => {
  const gradientStyle = {
    backgroundColor: 'rgb(86,63,231)',
    background: 'linear-gradient(90deg, rgba(86,63,231,1) 0%, rgba(149,71,254,1) 100%)',
  }
  return (
    <Box className='overflow-hidden'>
      <Box className='h-1/5 fixed w-full -z-10' sx={gradientStyle}>
      </Box>
      <Box className='p-8 h-screen box-border '>
        <Box className='h-1/6'>
          <p className='text-4xl mt-4 text-white' style={{ fontFamily: 'MetropolisSemiBold'}}>Your Profile</p>
          <p className='text-xs text-white' style={{ fontFamily: 'MetropolisRegular'}}>Your Full Name</p>
          <Box className='mt-7'>
            <Rating defaultValue={2.5} precision={0.1} size='large' readOnly/>     
          </Box>
        </Box>
        <Box className='flex h-5/6 mt-6 '>
          <Box className='w-1/3 '>
            <p className='text-2xl mb-2' style={{ fontFamily: 'MetropolisSemiBold' }}>Student Bio</p>
            <Box className='h-5/6 rounded-lg bg-whiteCustom mr-4 p-4 shadow-sm shadow-slate-500'>
              <p className='text-xs' style={{ fontFamily: 'MetropolisRegular'}}>Insert student bio here</p>
            </Box>
          </Box>
          <Box className='w-2/3'>
            <p className='text-2xl mb-2' style={{ fontFamily: 'MetropolisSemiBold' }}>Reviews</p>
            <Box className='h-5/6 mr-2 overflow-x-hidden overflow-y-auto'>
              <ReviewCard id={1000}/>
              <ReviewCard id={1000}/>
              <ReviewCard id={1000}/>
              <ReviewCard id={1000}/>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default page
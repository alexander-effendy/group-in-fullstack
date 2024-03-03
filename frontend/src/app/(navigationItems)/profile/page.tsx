"use client";

import EditProfileModal from '@/components/EditProfileModal';
import ReviewCard from '@/components/ReviewCard'
import { Box, Rating, Stack } from '@mui/material'
import React, { useState } from 'react'

const page = () => {
  const gradientStyle = {
    backgroundColor: 'rgb(86,63,231)',
    background: 'linear-gradient(90deg, rgba(86,63,231,1) 0%, rgba(149,71,254,1) 100%)',
  }
  const [modalVisible, setModalVisible] = useState(false);
  const handleEditProfile = () => {
    setModalVisible(true);
  }
  return (
    <Box className='overflow-hidden'>
      <EditProfileModal isOpen={modalVisible} closeModal={() => setModalVisible(false)}/>
      <Box className='h-28 fixed w-full -z-10' sx={gradientStyle}>
      </Box>
      <Box className='p-8 h-screen box-border '>
        <Box className='h-1/6'>
          <Stack direction='row' spacing={3}>
            <Box>
              <p className='text-4xl mt-4 text-white' style={{ fontFamily: 'MetropolisSemiBold'}}>Your Profile</p>
              <p className='text-xs text-white' style={{ fontFamily: 'MetropolisRegular'}}>Your Full Name</p>
            </Box>
            <Box className='flex items-center' onClick={handleEditProfile}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FFFFFF" className="w-6 h-6 hover:stroke-slate-400 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </Box>
          </Stack>
          <Box className='mt-3'>
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
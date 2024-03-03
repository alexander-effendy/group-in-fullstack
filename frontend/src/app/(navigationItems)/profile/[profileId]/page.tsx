'use client';

import ReviewCard from '@/components/ReviewCard'
import ReviewModal from '@/components/ReviewModal';
import { Box, Button, Rating } from '@mui/material'
import React, { useState } from 'react'

const Page = ({ params } : any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleCreateReview = () => {
    setModalVisible(true);
  }
  return (
    <Box className='overflow-hidden'>
      <ReviewModal isOpen={modalVisible} closeModal={() => setModalVisible(false)}/>
      <Box className='p-8 h-screen box-border '>
        <Box className='h-1/6'>
          <p className='text-4xl my3 text-black' style={{ fontFamily: 'MetropolisSemiBold'}}>Someone Else's Profile</p>
          <p className='text-xs text-black' style={{ fontFamily: 'MetropolisRegular'}}>Their Full Name</p>
          <Box className='mt-4 flex'>
            <Rating defaultValue={2.5} precision={0.1} size='large' readOnly/>     
            <Button className='bg-primary hover:bg-secondary text-xs h-fit ml-4' onClick={handleCreateReview}>
              <p className='text-white hover:text-primary' style={{ fontFamily: 'MetropolisRegular', fontSize: '0.65em' }}>Give Review</p>
            </Button>    
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

export default Page
import ReviewCard from '@/components/ReviewCard';
import { Box, Rating, Stack } from '@mui/material';
import React from 'react';

const page = () => {
  return (
    <Box className='overflow-hidden'>
      <Box className='h-36 fixed w-full z-10 bg-gradient-to-r from-primary to-[#9747FF] p-10'>
        <p
          className='text-4xl mt-4 text-white'
          style={{ fontFamily: 'MetropolisSemiBold' }}
        >
          My Profile
        </p>
        <p
          className='text-xs text-white'
          style={{ fontFamily: 'MetropolisRegular' }}
        >
          Your Full Name
        </p>
      </Box>
      <Box className='p-8 h-screen box-border mt-36'>
        <Box className='flex flex-col h-5/6 mt-1'>
          <Rating defaultValue={2.5} precision={0.1} size='large' readOnly />
          <Box className='flex flex-row mt-10'>
            <Box className='w-1/3'>
              <p
                className='text-2xl mb-2'
                style={{ fontFamily: 'MetropolisSemiBold' }}
              >
                Student Bio
              </p>
              <Box className='h-5/6 rounded-lg bg-whiteCustom mr-4 p-4 shadow-sm shadow-slate-500'>
                <p
                  className='text-xs'
                  style={{ fontFamily: 'MetropolisRegular' }}
                >
                  Insert student bio here
                </p>
              </Box>
            </Box>
            <Box className='w-2/3'>
              <p
                className='text-2xl mb-2'
                style={{ fontFamily: 'MetropolisSemiBold' }}
              >
                Reviews
              </p>
              <Box className='h-5/6 mr-2 overflow-x-hidden overflow-y-auto'>
                <ReviewCard id={1000} />
                <ReviewCard id={1000} />
                <ReviewCard id={1000} />
                <ReviewCard id={1000} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default page;

'use client';

import { Avatar, Box, Button, Stack } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const ApplicationCard = ({ params } : any) => {
  const handleAccept = () => {
    console.log('accept');
  }
  const handleReject = () => {
    console.log('reject');
  }
  const placeholderApplicantId = 1000;
  return (
    <Box className='rounded-lg bg-whiteCustom pl-4 pr-4 py-3 mb-6 shadow-sm shadow-slate-500 flex justify-between'>
      <Box className='flex items-center'>
        <Link href={`/profile/${placeholderApplicantId}`}>
          <Avatar className='cursor-pointer' variant='rounded'>AW</Avatar>
        </Link>
        <Box className='ml-3'>
          <p className='text-lg' style={{ fontFamily: 'MetropolisMedium '}}>Aidan Wibrata applied to your team!</p>
        </Box>
      </Box>
      <Box className='flex justify-end pb-2'>
        <Button className='bg-orangeCustom hover:bg-secondary mx-1' onClick={handleReject}>
          <p className='text-white hover:text-primary text-xs' style={{ fontFamily: 'MetropolisRegular' }}>Reject</p>
        </Button>
        <Button className='bg-primary hover:bg-secondary mx-1' onClick={handleAccept}>
          <p className='text-white hover:text-primary text-xs' style={{ fontFamily: 'MetropolisRegular' }}>Accept</p>
        </Button>
      </Box>
    </Box>
  )
}

export default ApplicationCard
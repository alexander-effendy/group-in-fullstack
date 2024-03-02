'use client'

import { Avatar, Box, Button, Stack } from '@mui/material'
import Link from 'next/link'
import React, { useState } from 'react'
import NotifModal from './NotifModal'

const GroupCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleApply = () => {
    setModalVisible(true);
  }
  const placeholderGroupLeaderId = 1000;

  return (
    <Box className='rounded-lg bg-whiteCustom pl-4 pr-4 pt-3 pb-2 mb-6 shadow-sm shadow-slate-500'>
      <NotifModal isOpen={modalVisible} closeModal={() => setModalVisible(false)}/>
      <Stack direction='row' spacing={1.5}>
        <Link href={`/profile/${placeholderGroupLeaderId}`}>
          <Avatar variant='rounded'>TL</Avatar>
        </Link>
        <Box>
          <p className='text-lg' style={{ fontFamily: 'MetropolisMedium '}}>Team Leader Name</p>
          <p className='text-xs text-slate-500 -mt-1' style={{ fontFamily: 'MetropolisSemiBold '}}>Group 3 - Leader</p>
          <p className='text-sm mt-2' style={{ fontFamily: 'MetropolisRegular' }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi numquam qui, temporibus beatae, officia enim repellendus odio totam quidem ipsum debitis amet voluptate velit provident nisi sed consectetur distinctio iusto.</p>
        </Box>
      </Stack>
      <Box className='flex justify-end pb-2'>
        <Button className='bg-primary hover:bg-secondary' onClick={handleApply}>
          <p className='text-white hover:text-primary text-xs' style={{ fontFamily: 'MetropolisRegular' }}>Apply</p>
        </Button>
      </Box>
    </Box>
  )
}

export default GroupCard
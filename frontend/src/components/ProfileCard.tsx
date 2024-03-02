import { Avatar, Box } from '@mui/material';
import React, {FC} from 'react';

interface ProfileCardProps {
  id: number;
  leader: boolean;
}

const ProfileCard: FC<ProfileCardProps> = ({ id, leader }) : JSX.Element => {
  return (
    <Box className='w-36 h-40 relative rounded-lg box-border overflow-hidden shadow-sm shadow-slate-500 flex justify-center'>
      {
        (leader) ? <p className='absolute'>👑</p> : <></>
      }
      <Avatar className='w-14 h-14 absolute right-1/2 top-1/3 translate-x-1/2 -translate-y-1/2 shadow-sm shadow-slate-500 bg-white text-slate-900'>AW</Avatar>
      <Box className='h-1/3 w-full bg-primary'>
      </Box>
      <Box className='h-2/3'>
      </Box>
      <Box className='absolute bottom-6 flex flex-wrap justify-center'>
        <p className='text-md w-full text-center mt-8 h-fit' style={{ fontFamily: 'MetropolisSemiBold' }}>Aidan Wibrata</p>
        <p className='text-xs' style={{ fontFamily: 'MetropolisThin' }}>4/5 ⭐</p>
      </Box>
    </Box>
  )
}

export default ProfileCard
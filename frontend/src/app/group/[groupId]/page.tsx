import { Box, Stack } from '@mui/material';
import React from 'react';
import Link from 'next/link';

const page = ({ params } : any) => {
  const groupName = 'Group Name';
  const courseCode = 'INFO2112';
  const maxSize = 5;
  const members = ['Aidan Wibrata', 'Ben Dover', 'Mike Cox Long'];
  const memberIds = ['001', '002', '003'];

  return (
    <Stack className='p-8 box-border'>
      <Box className='mb-8'>
        <p className='text-6xl' style={{ fontFamily: 'MetropolisSemiBold'}}>{`${groupName} - ${courseCode}`}</p>
        <Stack direction='row' className='p-1.5 my-4' spacing={1}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
        </Stack>
        <p className='md' style={{ fontFamily: 'MetropolisRegular'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, vel autem architecto veniam iure rem illo beatae temporibus eligendi laborum praesentium odio voluptatum, quod exercitationem cumque voluptatem esse assumenda? Necessitatibus?</p>
      </Box>
      <Box>
        <p className='text-5xl underline' style={{ fontFamily: 'MetropolisSemiBold'}}>{`Members`}</p>
        <Box className='p-3'>
          {members.map((member) => (
            <Box className='text-2xl mt-2 w-fit'>
              <Link href={`/profile/${memberIds[members.indexOf(member)]}`}>
                <p className='cursor-pointer hover:underline'>{`${members.indexOf(member) + 1}. ${member}`}</p>
              </Link>
            </Box>
          ))}
        </Box>
      </Box>
    </Stack>
  )
}

export default page
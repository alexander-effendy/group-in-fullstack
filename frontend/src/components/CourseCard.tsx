import { Box } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const CourseCard = () => {
  const placeholderId = 1000;
  return (
    <Box className='w-52 h-48 rounded-lg overflow-hidden shadow-sm shadow-slate-500 hover:cursor-pointer' >
      <Link href={`/course/${placeholderId}`}>
        <Box className='h-2/6 hover:h-1/2 transition-all ease-in-out bg-primary'>
        </Box>
        <Box className='p-2'>
          <p className='text-2xl' style={{ fontFamily: 'MetropolisSemiBold'}}>COMP1511</p> 
          <p className='text-xs hover:underline' style={{ fontFamily: 'MetropolisRegular'}}>Computer Programming Fundamentals</p> 
        </Box>
      </Link>
    </Box>
  )
}

export default CourseCard
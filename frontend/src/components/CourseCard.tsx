import { Box } from '@mui/material'
import React from 'react';
import Link from 'next/link';

interface CourseCardProps {
  courseId: string
}

const CourseCard: React.FC<CourseCardProps> = ({ courseId }) => {

  const getRandomColorValue = () => {
    return Math.floor(Math.random() * 256);
  }

  const color = `rgb(${getRandomColorValue()} ${getRandomColorValue()} ${getRandomColorValue()})`

  return (
    <Link href={`/course/${courseId}`} passHref>
      <Box className='w-52 h-48 rounded-lg overflow-hidden shadow-sm shadow-slate-500 hover:cursor-pointer' >
        <Box className='h-2/6 hover:h-1/2 transition-all ease-in-out' sx={{ backgroundColor: color}}>
        </Box>
        <Box className='p-2'>
          <p className='text-2xl' style={{ fontFamily: 'MetropolisSemiBold'}}>COMP6080</p> 
          <p className='text-xs' style={{ fontFamily: 'MetropolisRegular'}}>Front-end Development</p> 
        </Box>
      </Box>
    </Link>
  )
}

export default CourseCard
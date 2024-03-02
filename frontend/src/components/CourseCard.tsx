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
      <Box>
        
      </Box>
    </Link>
  )
}

export default CourseCard
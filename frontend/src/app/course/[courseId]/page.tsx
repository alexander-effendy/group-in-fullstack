import { Typography } from '@mui/material';
import React from 'react';
import Sidebar from '../../../components/Sidebar';

const page = ({ params }: any) => {
  return (
    <div className='flex'>
      <div className='p-10'>
        <Typography sx={{ fontSize: '2rem', fontWeight: 'bold' }}>
          {params.courseId}
        </Typography>
      </div>
    </div>
  );
};

export default page;

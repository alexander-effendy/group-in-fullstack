import React from 'react';
import Sidebar from '../../../components/Sidebar';
import GroupCard from '../../../components/GroupCard';
import CourseCard from '../../../components/CourseCard';
import { Box, Stack } from '@mui/material';

export default function page() {
  return (
    <>
      <div className='flex'>
        <Box className='w-5/6 right-px p-8'>
          <Box>
            <p
              className='text-4xl my-4'
              style={{ fontFamily: 'MetropolisMedium' }}
            >
              Groups
            </p>
          </Box>

          <Box>
            <Stack direction='row' spacing={2}>
              <GroupCard />
              <GroupCard />
              <GroupCard />
              <GroupCard />
            </Stack>
          </Box>
        </Box>
      </div>
    </>
  );
}

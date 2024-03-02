// import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import GroupCard from '../components/GroupCard';
import CourseCard from '../components/CourseCard';
import { Box, Stack } from '@mui/material';

export default function Home() {
  return (
    <div className='flex'>
      <Sidebar/>
      <Box className='w-5/6 right-px p-8'>
        <Box>
          <p className='text-4xl underline my-4' style={{ fontFamily: 'MetropolisMedium' }}>Your Courses</p>
          <Stack direction='row' spacing={2}>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
            <CourseCard/>
          </Stack>
        </Box>
        <Box>
          <p className='text-4xl underline my-4' style={{ fontFamily: 'MetropolisMedium' }}>Your Groups</p>
          <Stack direction='row' spacing={2}>
            <GroupCard/>
          </Stack>
        </Box>
      </Box>
    </div>
  );
}

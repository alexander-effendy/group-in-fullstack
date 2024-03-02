// import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import GroupCard from '../components/GroupCard';
import CourseCard from '../components/CourseCard';
import { Box, Stack, Grid } from '@mui/material';
import AddCourse from '@/components/AddCourse';

export default function Home() {
  return (
    <div className='flex'>
      <Sidebar/>
      <Box className='w-5/6 right-px p-8'>
        <Box>
          <p className='text-4xl underline my-4' style={{ fontFamily: 'MetropolisMedium' }}>Your Courses</p>
          <Grid container direction='row' spacing={2}>
            <Grid item xs={4} className='max-w-54'>
              <CourseCard courseId='COMP6080' />
            </Grid>
            <Grid item xs={4} className='max-w-54'>
              <CourseCard/>
            </Grid>
            <Grid item xs={4} className='max-w-54'>
              <CourseCard/>
            </Grid>
            <Grid item xs={4} className='max-w-54'>
              <CourseCard/>
            </Grid>
            <Grid item xs={4} className='max-w-54'>
              <CourseCard/>
            </Grid>
            <Grid item xs={4} className='max-w-54'>
              <AddCourse/>
            </Grid>
          </Grid>
        </Box>
        <Box className='mt-16'>
          <p className='text-4xl underline my-4' style={{ fontFamily: 'MetropolisMedium' }}>Your Groups</p>
          <Grid container direction='row' spacing={2}>
            <Grid item xs={4} className='max-w-54'>
              <GroupCard/>
            </Grid>
            <Grid item xs={4} className='max-w-54'>
              <GroupCard/>
            </Grid>
            <Grid item xs={4} className='max-w-54'>
              <GroupCard/>
            </Grid>
            <Grid item xs={4} className='max-w-54'>
              <GroupCard/>
            </Grid>
            <Grid item xs={4} className='max-w-54'>
              <GroupCard/>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

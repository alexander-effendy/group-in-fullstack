'use client';

import Sidebar from '../components/Sidebar';
import GroupCard from '../components/GroupCard';
import CourseCard from '../components/CourseCard';
import { Box, Stack, Grid } from '@mui/material';
import AddCourse from '@/components/AddCourse';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const coursesEnrolled = [
  {
    courseId: 'COMP6080',
    courseName: 'Frontend',
  },
  {
    courseId: 'COMP1511',
    courseName: 'Backend',
  },
];

export default function Home() {
  const router = useRouter();
  const [token, setToken] = useState('');

  useEffect(() => {
    let tokenCheck = localStorage.getItem('userToken');
    if (!tokenCheck) {
      router.push('/signin');
    } else {
      setToken(tokenCheck);
    }
  }, [router, setToken]); // include setToken and router in the dependency array if they are props or state

  return (
    <div className='flex'>
      <Sidebar />
      <Box className='ml-60 w-5/6 right-px p-8'>
        <Box>
          <p
            className='text-4xl underline my-4'
            style={{ fontFamily: 'MetropolisSemiBold' }}
          >
            Your Courses
          </p>
          <Grid container direction='row' spacing={2}>
            {coursesEnrolled.map((course, index) => (
              <Grid item xs={4} className='max-w-54' key={index}>
                <CourseCard
                  course={{
                    code: course.courseId,
                    name: course.courseName,
                  }}
                />
              </Grid>
            ))}

            <Grid item xs={4} className='max-w-54'>
              <AddCourse />
            </Grid>
          </Grid>
        </Box>
        <Box className='mt-16'>
          <p
            className='text-4xl underline my-4'
            style={{ fontFamily: 'MetropolisSemiBold' }}
          >
            Your Groups
          </p>
          <Grid container direction='row' spacing={2}>
            <Grid item xs={4} className='max-w-54'>
              <GroupCard />
            </Grid>
            <Grid item xs={4} className='max-w-54'>
              <GroupCard />
            </Grid>
            <Grid item xs={4} className='max-w-54'>
              <GroupCard />
            </Grid>
            <Grid item xs={4} className='max-w-54'>
              <GroupCard />
            </Grid>
            <Grid item xs={4} className='max-w-54'>
              <GroupCard />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

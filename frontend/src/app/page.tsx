'use client';

import Sidebar from '../components/Sidebar';
import GroupCard from '../components/GroupCard';
import CourseCard from '../components/CourseCard';
import { Box, Stack, Grid, Button } from '@mui/material';
import AddCourse from '@/components/AddCourse';
import React, { useState } from 'react';
import Modal from '../components/Modal';
import { useRouter } from 'next/navigation';

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
  const [modalVisible, setModalVisible] = useState(false);
  const handleAddCourse = () => {
    setModalVisible(true);
  };
  const router = useRouter();
  if (!localStorage.getItem('userToken')) {
    router.push('/signin');
  } else {
    router.push('/');
  }

  return (
    <div className='flex'>
      <Sidebar />
      <Box className='ml-60 w-5/6 right-px p-8'>
        <Box>
          <Modal
            isOpen={modalVisible}
            closeModal={() => setModalVisible(false)}
          />
          <p
            className='text-4xl my-4'
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
              <Button onClick={handleAddCourse}>
                <AddCourse />
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box className='mt-16'>
          <p
            className='text-4xl my-4'
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

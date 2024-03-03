'use client';

import Sidebar from '../components/Sidebar';
import GroupCard from '../components/GroupCard';
import CourseCard from '../components/CourseCard';
import { Box, Stack, Grid, Button } from '@mui/material';
import AddCourse from '@/components/AddCourse';
import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import { useRouter } from 'next/navigation';
import Vector1 from '@/assets/Vector-1.png';
import Vector2 from '@/assets/Vector-2.png';
import Image from 'next/image';
import { axiosInstanceWithAuth } from '../api/Axios';

interface Course {
  courseId: string;
  courseName: string;
}

export const coursesEnrolled = [
  {
    courseId: 'COMP6080',
    courseName: 'Frontend',
  },
  {
    courseId: 'COMP1511',
    courseName: 'Backend',
  },
  {
    courseId: 'COMP1511',
    courseName: 'Backend',
  },
  {
    courseId: 'COMP1511',
    courseName: 'Backend',
  },
];

export default function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [coursesEnrolled, setCoursesEnrolled] = useState<Course[]>([]);

  // fetch using axios
  const handleFetchCourses = async () => {
    try {
      await axiosInstanceWithAuth.get(`members/profile`)
        .then((res) => {
          console.log(res);
          if (coursesEnrolled.length === 4) {
            alert('Already 4');
          } else {
            console.log(`There are currently ${coursesEnrolled.length} courses enrolled.`);
          }
          
          setModalVisible(true);
        })
    } catch (error) {
      console.log(error);
    }
  }

  // const handleAddCourse = () => {
  //   // check if courses already 4
  //   if (coursesEnrolled.length === 4) {
  //     alert('Already 4');
  //   } else {
  //     console.log(`There are currently ${coursesEnrolled.length} courses enrolled.`);
  //   }
  //   setModalVisible(true);
  // };
  const router = useRouter();
  useEffect(() => {
    // This code now runs only on the client-side
    if (!localStorage.getItem('userToken')) {
      router.push('/signin');
    } else {
      router.push('/');
    }
  }, [router]);
  // if (!localStorage.getItem('userToken')) {
  //   router.push('/signin');
  // } else {
  //   router.push('/');
  // }

  return (
    <div className='flex'>
      <Sidebar />
      <Image
        src={Vector1}
        alt='Vector 1'
        className='right-0 -z-10 hidden lg:absolute lg:block'
      />
      <Image src={Vector2} alt='Vector 2' className='absolute left-52 -z-10' />
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
              <Button onClick={handleFetchCourses}>
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
            {/* <Grid item xs={4} className='max-w-54'>
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
            </Grid> */}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

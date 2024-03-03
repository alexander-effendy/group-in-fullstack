'use client';

import AddCourse from '@/components/AddCourse';
import CourseCard from '@/components/CourseCard';
import Modal from '@/components/Modal';
import { Box, Button, Grid } from '@mui/material';
import React, { useState } from 'react';

const exampleData = [
  {
    courseId: 'COMP6080',
    courseName: 'Frontend',
  },
  {
    courseId: 'COMP1511',
    courseName: 'Backend',
  },
];

const Page = (): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleAddCourse = () => {
    setModalVisible(true);
  };

  return (
    <>
      <div className='flex'>
        <Modal
          isOpen={modalVisible}
          closeModal={() => setModalVisible(false)}
        />
        <Box className='w-5/6 right-px p-8'>
          <Box>
            <p
              className='text-4xl my-4'
              style={{ fontFamily: 'MetropolisSemiBold' }}
            >
              Courses
            </p>
          </Box>

          <Box>
            <Grid
              container
              className='flex flex-wrap'
              direction='row'
              spacing={2}
            >
              {exampleData.map((course, index) => (
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
        </Box>
      </div>
    </>
  );
};

export default Page;

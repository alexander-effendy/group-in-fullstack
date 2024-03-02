import AddCourse from '@/components/AddCourse'
import CourseCard from '@/components/CourseCard'
import Sidebar from '@/components/Sidebar'
import { Box, Grid, Stack } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='flex'>
        <Box className='w-5/6 right-px p-8'>
          <Box>
            <p
              className='text-4xl my-4'
              style={{ fontFamily: 'MetropolisMedium' }}
            >
              Course
            </p>
          </Box>

          <Box>
          <Grid container className='flex flex-wrap' direction='row' spacing={2}>
            <Grid item xs={4} className='max-w-54'>
              {/* <CourseCard courseId='COMP6080' /> */}
            </Grid>
            <Grid item xs={4} className='max-w-54'>
              {/* <CourseCard courseId='COMP6080' /> */}
            </Grid>
            <Grid item xs={4} className='max-w-54'>
              {/* <CourseCard courseId='COMP6080' /> */}
            </Grid>
            {/* <Grid item xs={4} className='max-w-54'>
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
            </Grid> */}
            <AddCourse/>
          </Grid>
          </Box>
        </Box>
      </div>
    </>
  )
}

export default page
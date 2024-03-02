import Sidebar from '@/components/Sidebar'
import { Box, Stack } from '@mui/material'
import React from 'react'

const Reviews = () => {
  return (
    <>
      <div className='flex'>
        <Box className='w-5/6 right-px p-8'>
          <Box>
            <p
              className='text-4xl my-4'
              style={{ fontFamily: 'MetropolisMedium' }}
            >
              Reviews
            </p>
          </Box>

          <Box>
            <Stack spacing={2}>
            </Stack>
          </Box>
        </Box>
      </div>
    </>
  )
}

export default Reviews
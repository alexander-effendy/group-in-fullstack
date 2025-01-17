'use client';

import GroupPostCard from '@/components/GroupPostCard';
import PostModal from '@/components/PostModal';
import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

const Page = ({ params }: any): JSX.Element => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleNewPost = () => {
    setModalVisible(true);
  }
  return (
    <Box className='p-8'>
      <PostModal isOpen={modalVisible} closeModal={() => setModalVisible(false)} />
      <Box className='h-1/6 mb-4'>
        <p
          className='text-4xl mt-4'
          style={{ fontFamily: 'MetropolisSemiBold' }}
        >
          COMP1511
        </p>
        <p 
          className='text-xs text-wrap mt-1'
          style={{ fontFamily: 'MetropolisRegular'}}
        >
          {`COMP1511 - Computing Fundamentals`}
        </p>
      </Box>
      <Box className='h-max-2/3'>
        <GroupPostCard/>
        <GroupPostCard/>
        <GroupPostCard/>
      </Box>
      <Box className='h-1/6 flex justify-end'>
        <Stack className='w-fit h-fit flex justify-center items-center'>
          <Box 
            className='cursor-pointer' title='Make a post' onClick={handleNewPost}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-rounded-plus-filled hover:contrast-200" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#563FE7" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm0 6a1 1 0 0 0 -1 1v2h-2l-.117 .007a1 1 0 0 0 .117 1.993h2v2l.007 .117a1 1 0 0 0 1.993 -.117v-2h2l.117 -.007a1 1 0 0 0 -.117 -1.993h-2v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z" fill="#563FE7" stroke-width="0" />
            </svg>
          </Box>
          <p className='text-xs'>Make a post</p>
        </Stack>
      </Box>
    </Box>
  );
};

export default Page;

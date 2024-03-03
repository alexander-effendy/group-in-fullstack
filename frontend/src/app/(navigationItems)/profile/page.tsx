"use client"

import { axiosInstanceWithAuth } from '@/api/Axios';
import ReviewCard from '@/components/ReviewCard';
import { Box, Rating, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';

interface Review {
  review_id: number;
  reviewer_id: number;
  rating: number;
  comment: string;
  reviewee_id: number;
  reviewer_name: string;
  likes: number;
  dislikes: number;
}

interface Course {
  course_id: string;
  title: string;
  description: string | null;
}

interface Member {
  member_id: number;
  name: string;
  member_bio: string | null;
  reviews: Review[];
  courses: Course[];
}


const page = ({id}: {id: number}) => {
  const [data, setData] = useState({} as Member);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstanceWithAuth.get(`/members/profile`);
      const result = response.data as Member;
      setData(result);
    };

    fetchData();
  }, [])


  return (
    <Box className='overflow-hidden'>
      <Box className='h-36 fixed w-full z-10 bg-gradient-to-r from-primary to-[#9747FF] p-10'>
        <p
          className='text-4xl mt-4 text-white'
          style={{ fontFamily: 'MetropolisSemiBold' }}
        >
          My Profile
        </p>
        <p
          className='text-xs text-white'
          style={{ fontFamily: 'MetropolisRegular' }}
        >
          {data.name}
        </p>
      </Box>
      <Box className='p-8 h-screen box-border mt-36'>
        <Box className='flex flex-col h-5/6 mt-1'>
          <Rating defaultValue={2.5} precision={0.1} size='large' readOnly />
          <Box className='flex flex-row mt-10'>
            <Box className='w-1/3'>
              <p
                className='text-2xl mb-2'
                style={{ fontFamily: 'MetropolisSemiBold' }}
              >
                Student Bio
              </p>
              <Box className='h-5/6 rounded-lg bg-whiteCustom mr-4 p-4 shadow-sm shadow-slate-500'>
                <p
                  className='text-xs'
                  style={{ fontFamily: 'MetropolisRegular' }}
                >
                  Insert student bio here
                </p>
              </Box>
            </Box>
            <Box className='w-2/3'>
              <p
                className='text-2xl mb-2'
                style={{ fontFamily: 'MetropolisSemiBold' }}
              >
                Reviews
              </p>
              <Box className='h-5/6 mr-2 overflow-x-hidden overflow-y-auto'>
                <ReviewCard id={1000} />
                <ReviewCard id={1000} />
                <ReviewCard id={1000} />
                <ReviewCard id={1000} />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default page;

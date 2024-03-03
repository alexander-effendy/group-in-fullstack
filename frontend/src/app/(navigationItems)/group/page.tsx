'use client';
import React, { useEffect, useState } from 'react';
import GroupCard from '@/components/GroupCard';
import { Box, Grid, LinearProgress } from '@mui/material';
import { axiosInstanceWithAuth } from '@/api/Axios';

interface Group {
  course_id: string;
  group_id: number;
  group_leader: number;
  group_name: string;
  group_text: string;
  max_members: number;
}

export default function page() {
  const [data, setData] = useState([] as Group[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstanceWithAuth.get('/members/profile');
      const result = response.data.groups as Group[];
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, [])

  return loading ? (
    <LinearProgress/>
  ) : (
    <>
      <div className='flex'>
        <Box className='w-5/6 right-px p-8'>
          <Box>
            <p
              className='text-4xl my-4'
              style={{ fontFamily: 'MetropolisSemiBold' }}
            >
              Groups
            </p>
          </Box>

          <Box>
            {
              data?.map((group) => (
                <Box className='w-full'>
                  <GroupCard course_id={group.course_id} group_id={group.group_id} group_name={group.group_name} max_members={group.max_members}/>
                </Box>
              ))
            }
          </Box>
        </Box>
      </div>
    </>
  );
}

'use client';

import { Badge, Box, Grid, LinearProgress, Stack } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Sidebar from '@/components/Sidebar';
import ProfileCard from '@/components/ProfileCard';
import { axiosInstanceWithAuth } from '@/api/Axios';

const page = ({ params } : any) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const [groupName, setGroupName] = useState('');
  const [courseId, setCourseId] = useState('');
  const [groupDesc, setGroupDesc] = useState('');
  const [members, setMembers] = useState([]);
  const [numMembers, setNumMembers] = useState([]);
  const [missingMembers, setMissingMembers] = useState([] as number[]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosInstanceWithAuth.get(`/groups/${params.groupId}`);
      const result = response.data;
      setData(result);
      setLoading(false);
      setGroupName(result.group_name);
      setCourseId(result.course_id);
      setGroupDesc(result.group_text);
      setMembers(result.members);
      setNumMembers(result.members.length);

      const missingMembers = result.max_members - result.members.length;
      const placeholder = [];
      for (var i = 0; i < missingMembers; i++) {
        placeholder.push(1);
      }
      setMissingMembers(placeholder);
    };

    fetchData();
  }, [])

  return loading ? (
    <LinearProgress/>
  ) : (
    <Box className='flex'>
      <Stack className='w-5/6 p-8 box-border mt-4'>
        <Box className='mb-8'>
          <p className='text-5xl text-wrap' style={{ fontFamily: 'MetropolisSemiBold'}}>{`${groupName}`}</p>
          <p className='text-xs text-wrap mt-1' style={{ fontFamily: 'MetropolisRegular'}}>{courseId}</p>
          <Stack direction='row' className='p-1.5 my-4' spacing={1}>
            {members.map((member) => (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
              </svg>
            ))}
            {missingMembers.map((member) => (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            ))}
            <Box className='flex items-center'>
              <Box className='ml-8 cursor-pointer' title='Add a post'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-full icon icon-tabler icon-tabler-square-rounded-plus-filled" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#563FE7" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M12 2l.324 .001l.318 .004l.616 .017l.299 .013l.579 .034l.553 .046c4.785 .464 6.732 2.411 7.196 7.196l.046 .553l.034 .579c.005 .098 .01 .198 .013 .299l.017 .616l.005 .642l-.005 .642l-.017 .616l-.013 .299l-.034 .579l-.046 .553c-.464 4.785 -2.411 6.732 -7.196 7.196l-.553 .046l-.579 .034c-.098 .005 -.198 .01 -.299 .013l-.616 .017l-.642 .005l-.642 -.005l-.616 -.017l-.299 -.013l-.579 -.034l-.553 -.046c-4.785 -.464 -6.732 -2.411 -7.196 -7.196l-.046 -.553l-.034 -.579a28.058 28.058 0 0 1 -.013 -.299l-.017 -.616c-.003 -.21 -.005 -.424 -.005 -.642l.001 -.324l.004 -.318l.017 -.616l.013 -.299l.034 -.579l.046 -.553c.464 -4.785 2.411 -6.732 7.196 -7.196l.553 -.046l.579 -.034c.098 -.005 .198 -.01 .299 -.013l.616 -.017c.21 -.003 .424 -.005 .642 -.005zm0 6a1 1 0 0 0 -1 1v2h-2l-.117 .007a1 1 0 0 0 .117 1.993h2v2l.007 .117a1 1 0 0 0 1.993 -.117v-2h2l.117 -.007a1 1 0 0 0 -.117 -1.993h-2v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z" fill="#563FE7" stroke-width="0" />
                </svg>
                <p style={{ fontSize: '0.6em', fontFamily: 'MetropolisRegular' }}>
                  Add a post
                </p>
              </Box>
              <Box className='flex flex-wrap justify-center'>
                <Box className='w-full flex justify-center' title='Applications'>
                  <Link href={`/group/${params.groupId}/application`}>
                    <Badge color="secondary" variant="dot">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#563FE7" className="w-7 h-7 hover:fill-secondary cursor-pointer">
                        <path d="M19.906 9c.382 0 .749.057 1.094.162V9a3 3 0 0 0-3-3h-3.879a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H6a3 3 0 0 0-3 3v3.162A3.756 3.756 0 0 1 4.094 9h15.812ZM4.094 10.5a2.25 2.25 0 0 0-2.227 2.568l.857 6A2.25 2.25 0 0 0 4.951 21H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-2.227-2.568H4.094Z" />
                      </svg>
                    </Badge>
                  </Link>
                </Box>
                <p style={{ fontSize: '0.6em', fontFamily: 'MetropolisRegular' }}>
                  Applications
                </p>
              </Box>
            </Box>
          </Stack>
          <p className='text-3xl' style={{ fontFamily: 'MetropolisSemiBold'}}>Description</p>
          <p className='text-xs mt-2' style={{ fontFamily: 'MetropolisRegular'}}>{groupDesc}</p>
        </Box>
        <Box>
          <p className='text-3xl mt-2 mb-4' style={{ fontFamily: 'MetropolisSemiBold'}}>Members</p>
          <Stack direction='row'>
            {members.map((member) => (
              <Box className='mr-3'> 
                <Link href={`/profile/0`}>
                  <ProfileCard id={member} leader={true}/>
                </Link>  
              </Box>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  )
}

export default page
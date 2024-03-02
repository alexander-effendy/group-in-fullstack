'use client';

import React from 'react';
import logo from '../assets/GroupedIn.png';
import Image from 'next/image';
import SidebarButton from './SidebarComponents/SidebarButton';
import {
  HomeIcon,
  BookOpenIcon,
  UserGroupIcon,
  PencilSquareIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import profilePic from '../assets/profilePic.jpg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@mui/base';

import { useRouter } from 'next/navigation';

const user = {
  name: 'Alexander Effendy',
  imageUrl: profilePic,
};

const Sidebar = () => {
  const router = useRouter();
  const handleLogout = () => {
    router.push('/signin');
    localStorage.removeItem('userToken');
  }

  return (
    <div className='fixed flex flex-col w-60 bg-white items-center h-screen shadow-xl rounded-r-xl pt-10'>
      <div className='flex flex-col w-full items-center gap-1'>
        <Image src={logo} alt='GroupedIn' className='w-20 h-20' />
        <p
          className='tracking-widest text-md'
          style={{ fontFamily: 'RaisonneDemiBold' }}
        >
          GroupedIn.
        </p>
      </div>

      <div className='flex flex-col w-full gap-7 mt-20'>
        <SidebarButton href='/' Icon={<HomeIcon />} text='Dashboard' />
        <SidebarButton href='/course' text='Courses' Icon={<BookOpenIcon />} />
        <SidebarButton href='/group' text='Groups' Icon={<UserGroupIcon />} />
        <SidebarButton href='/review' text='Reviews' Icon={<PencilSquareIcon />} />
        <SidebarButton href='/profile' text='Profile' Icon={<UserIcon />} />
      </div>

      <Button 
        className='p-2 mb-5 text-white mt-auto bg-primary w-2/3 rounded-lg shadow-lg hover:bg-secondary hover:text-primary'
        onClick={handleLogout}
      >  
        Log out
      </Button>
    </div>
  );
};

export default Sidebar;

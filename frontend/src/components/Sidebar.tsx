import React, { useState, Fragment } from 'react';
import logo from '../assets/GroupedIn.png';
import Image from 'next/image';
import SidebarButton from './SidebarComponents/SidebarButton';
import {
  HomeIcon,
  BookOpenIcon,
  UserGroupIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline';
import profilePic from '../assets/profilePic.jpg';
import Link from 'next/link';

const user = {
  name: 'Alexander Effendy',
  imageUrl: profilePic,
};

const Sidebar = () => {
  return (
    <div className='flex flex-col w-60 bg-white items-center h-screen shadow-xl rounded-xl pt-10'>
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
      </div>

      <Link
        href='/profile'
        className='flex w-full justify-between items-center mt-auto py-5 px-5 hover:bg-gray-100 cursor-pointer'
      >
        <Image
          src={user.imageUrl}
          alt='Profile'
          className='w-8 h-8 rounded-full'
        />

        <p className='text-md'>{user.name}</p>
      </Link>
    </div>
  );
};

export default Sidebar;

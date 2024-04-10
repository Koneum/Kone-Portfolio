'use client'

import { Socials } from '@/constants'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { RiEditCircleLine } from "react-icons/ri";

// next router
import {useRouter, usePathname} from 'next/navigation';

// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';

  // nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'Skills', path: 'skills', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/myworks', icon: <HiViewColumns /> },
  {
    name: 'education',
    path: '/etude',
    icon: <RiEditCircleLine />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];
  
const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname;
  return (
    <nav className='flex flex-col items-center xl:justify-center gap-y-4 fixed h-max 
  bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen '
  >
    {/* inner */}
    <div
    className='flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40
    xl:px-0 h-[20px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full'
    >


      {navData.map((link, index) => {
        return(
        <Link
        className={` ${usePathname === pathname &&  'text-white'}
        relative flex items-center group hover:text-blue-500 transition-all duration-300`}
        href={link.path} key={index}
        >

        {/* tooltip */}
        <div className='absolute pr-14 right-0 hidden xl:group-hover:flex'>
          <div className='bg-white relative flex text-primary items-center p-[6px] rounded-[3px]'>
           <div className='text-[12px] leading-none font-semibold capitalize'>
           {link.name}
           </div>
           {/* triangle */}
        <div className='border-solid border-l-white border-l-8 border-y-transparent border-y-[6px]
        border-r-0 absolute -right-2'></div>
          </div>
        </div>

        {/* icon */}
        <div>
        {link.icon}
        </div>

        </Link>
        );
      })}
    </div>
  </nav>
    
  )
}

export default Navbar
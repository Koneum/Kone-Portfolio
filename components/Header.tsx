import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import {
    RiLinkedinLine ,
    RiInstagramLine,
    RiTelegramLine,
  } from 'react-icons/ri'

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
  <div className='container mx-auto'>
   <div className='flex flex-col lg:flex-row justify-between items-center gap-y-3 py-18'>
     {/* logo */}
     <Link href={'/'} className=' text-gray-200 flex flex-col lg:flex-row items-center  py-18'>
     <Image 
     src={'/logo-umbrella-01.png'}
     width={68}
     height={68}
     alt=''
     priority={true}
     /> Kone Moussa
     </Link>
     {/* social */}
     <div className=' flex items-center gap-x-5 text-lg'>
    <Link href={'https://www.linkedin.com/in/moussa-kone-profile/'} 
    className='text-gray-200 hover:white transition-all duration-300 '>

    <RiLinkedinLine />
    </Link>
    
    <Link href={'https://telegram.me/konemoussa_devop'} 
    className='text-gray-200 hover:white transition-all duration-300 '>

     <RiTelegramLine />
    </Link>
  </div>
   </div>
  </div>
</header>
  );
}

export default Header
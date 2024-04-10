import React from 'react'
import Link from 'next/link'

import {
    RiLinkedinLine ,
    RiTelegramLine,
  } from 'react-icons/ri'

import {
    RxGithubLogo,
} from 'react-icons/rx';

const Footer = () => {
  return (
    <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
        <div className='w-full flex flex-col items-center justify-center m-auto'>
            <div className='w-full h-full flex flex-row -items-center justify-around flex-wrap'>

                  {/* Community */}
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-center'>
                    <div className='font-bold text-[16px]'>Community</div>

                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <RxGithubLogo />
                        <span className='text-[15px] ml-[6px]'>Github</span>
                    </p>
                </div>

                 {/* Social Media */}
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-center'>
                    <div className='font-bold text-[16px]'>Socials</div>


                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                    <Link href={'https://www.linkedin.com/in/moussa-kone-profile/'} 
                        className='text-gray-200 hover:white transition-all duration-300 '>

                        <RiLinkedinLine />
                        </Link>
                    </p>

                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                    <Link href={'https://telegram.me/konemoussa_devop'} 
                          className='text-gray-200 hover:white transition-all duration-300 '>

                           <RiTelegramLine />
                          </Link>
                    </p>
                </div>

                 {/* About */}
                <div className='min-w-[200px] h-auto flex flex-col items-center justify-center'>
                    <div className='font-bold text-[16px]'>About</div>

                   <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        <Link href={'/contact'} className='text-[15px] ml-[6px]'>Start a project</Link>
                    </p>

                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                         <Link href={'/about'} className='text-[15px] ml-[6px]'>Learning about me</Link>
                    </p>

                    <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                        
                        <span className='text-[15px] ml-[6px]'>kone.moussa@umdynastie.net</span>
                    </p>
                </div>
            </div>

             <div className='mb-[20px] text-[15px] text-center'>
                &copy; Kone Moussa Porfolio 2024. All rights reserved
             </div>
        </div>
    </div>
  )
}

export default Footer
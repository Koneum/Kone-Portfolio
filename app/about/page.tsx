'use client'
import React from 'react'
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';
import Image from 'next/image';
import './about.css';

export default function page() {
  return (
    <div id='about'
    className=" h-full  flex flex-col md:flex-col gap-10 px-10
     pb-30 py-20 text-white"
    >
   <motion.div className='about text-white pb-30 py-20' >
    <motion.div
    variants={fadeIn('down', 0.2)}
    initial='hidden'
    animate='show'
    exit='hidden'
    >
    <div className='flex flex-col gap-6 mt-6 text-6xl
      font-bold text-white max-w-[600px] w-auto h-auto'
       >
               <span>
                About <span className='text-transparent bg-clip-text
                bg-gradient-to-r from-purple-500 to-cyan-500'>
                    {" "} ME{" "}  </span>
                </span>
            </div>
    </motion.div>
    

    <motion.div 
    variants={fadeIn('right', 0.2)}
    initial='hidden'
    animate='show'
    exit='hidden'
    className='about-img'
    >
      <Image 
      src={'/koneImg.png'}
      alt=''
      width={300}
      height={300}
      />
      <span className='circle-spin'></span>
    </motion.div>

    <motion.div
    variants={fadeIn('left', 0.2)}
    initial='hidden'
    animate='show'
    exit='hidden'
    className='about-content'
    >
      <h3 className='text-[20px] font-bold'>Frontend & Backend Developer</h3>
      <p>I am a junior fullstack developer, 
        I have skills in frontend and backend dev, particularly on CM WordPress 
        and environments like Flutter and React Native for mobile development. 
        for web development I work with ReactJs, NextJs, Laravel. 
        I also have skills in graphic design using Photoshop and Illustrator 
        software, note that I also do Community Management. <b/>
For more details contact me</p>
        
        <motion.div
        variants={fadeIn('bottom', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='btn-box btns'
        >
          <a href="../contact" className="btn">Hire Me</a>
        </motion.div>
    </motion.div>
   </motion.div>
   </div>
  )
}

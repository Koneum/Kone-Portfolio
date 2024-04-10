'use client'

import React from 'react';
import './contact.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const page = () => {
  return (
    <section className='contact-container text-white 
    mt-[3rem]  h-full w-full flex flex-col md:flex-row gap-10 px-10 
            items-center justify-evenly'>
      
      <motion.div 
       variants={fadeIn('down', 0.2)}
       initial='hidden'
       animate='show'
       exit='hidden'
      className='flex flex-col gap-6 mt-6 text-6xl
      font-bold text-white max-w-[600px] w-auto h-auto'
       >
               <span>
                Contact <span className='text-transparent bg-clip-text
                bg-gradient-to-r from-purple-500 to-cyan-500'>
                    {" "} ME{" "}  </span>
                </span>
            </motion.div>

      <div className='contact-content mt-[3rem] text-black h-full w-full 
      flex flex-col md:flex-row gap-10 px-10 text-white 
            items-center justify-evenly z-[10]'>
        <motion.div 
        variants={fadeIn('left', 0.2)}
        initial='hidden'
        animate='show'
        exit='hidden'
        style={{flex: 1}}>
          <ContactInfoCard 
          iconUrl='/email.png'
          text='kone.moussa@umdynastie.net'
          />
        </motion.div>

        <motion.div 
         variants={fadeIn('right', 0.2)}
         initial='hidden'
         animate='show'
         exit='hidden'
        style={{flex: 1}}>
          <ContactForm />
        </motion.div>
        
      </div>
    </section>
  )
}

export default page
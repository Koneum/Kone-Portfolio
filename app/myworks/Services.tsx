'use client'
import React from 'react'
import {motion, AnimatePresence} from 'framer-motion';
import { useState } from "react"
import './services.css'

interface Props {
    title: string;
    description: string;
    icon: string;
  }

const Services = ({title, description, icon}: Props) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
    transition={{layout: {duration: 1, type: 'spring'}}}
    layout
    onClick={() => setIsOpen(!isOpen)} 
    style={{ boxShadow: '0px 10px 30px rgba(0,0,0, 0.5)'
    }}
    className='card'>
    <motion.h2 layout='position' className='font-bold'>{title}</motion.h2>
{isOpen &&(
    <motion.div 
    initial={{opacity: 0}}
     animate={{opacity: 1}}
     transition={{duration: 1}}
     exit={{opacity: 0}}
      className='expand'>
      <p>{description}</p>
      <div>{icon}</div>
    </motion.div>
    )}
  </motion.div>
  )
}

export default Services
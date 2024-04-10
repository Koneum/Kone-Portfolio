'use client'

import React from 'react'
import './skills.css'
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const page = () => {
  return (
    <section
    className=" flex-row justify-around flex-wrap mt-4 gap-7
    gap-5 h-[50%] relative overflow-hidden pb-50 py-40 text-white"
    id="compete"
    style={{transform:'scale(0.9)'}}
    >
      <motion.div 
      variants={fadeIn('down', 0.2)}
      initial='hidden'
      animate='show'
      exit='hidden'
      className='flex flex-col gap-6 mt-6 text-6xl
      font-bold text-white max-w-[600px] w-auto h-auto'
       >
               <span>
                My <span className='text-transparent bg-clip-text
                bg-gradient-to-r from-purple-500 to-cyan-500'>
                    {" "} Skills{" "}  </span>
                </span>
            </motion.div>

            <div id='skills'>
            <div className="skills-row1 z-[20]">
              <motion.div 
              variants={fadeIn('left', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="skills-column z-[20]">
                <h3 className="title">FRONT-END</h3>

                <div className="skills-box">
                  <div className="skills-content">
                    <div className="progress">
                      <h3>Wordpress <span className='percent'> 90%</span> </h3>
                      <div className="bar"><span></span></div>
                    </div>

                    <div className="progress">
                      <h3>Photoshop <span className='percent'> 90%</span> </h3>
                      <div className="bar"><span></span></div>
                    </div>

                    <div className="progress">
                      <h3>Illustrator <span className='percent'> 80%</span> </h3>
                      <div className="bar"><span></span></div>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
              variants={fadeIn('right', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="skills-column">
              <h3 className="titlez-[20]">BACK-END</h3>

                  <div className="skills-box">
                    <div className="skills-content">
                      <div className="progress">
                        <h3>HTML5 <span className='percent'> 80%</span> </h3>
                        <div className="bar"><span></span></div>
                      </div>

                      <div className="progress">
                        <h3>CSS3 <span className='percent'> 70%</span> </h3>
                        <div className="bar"><span></span></div>
                      </div>

                      <div className="progress">
                        <h3>JavaScript <span className='percent'> 60%</span> </h3>
                        <div className="bar"><span></span></div>
                      </div>

                      <div className="progress">
                        <h3>React.js <span className='percent'> 60%</span> </h3>
                        <div className="bar"><span></span></div>
                      </div>

                      <div className="progress">
                        <h3>Laravel <span className='percent'> 70%</span> </h3>
                        <div className="bar"><span></span></div>
                      </div>
                    </div>
                  </div>
              </motion.div>
            </div>

            <div className="skill-row2 z-[20]">
            <motion.div 
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className="skills-column z-[20]">
                <h3 className="title">TOOLS</h3>

                <div className="skills-box">
                  <div className="skills-content">
                    <div className="progress">
                      <h3>Visual Studio Code<span className='percent'> 80%</span> </h3>
                      <div className="bar"><span></span></div>
                    </div>

                    <div className="progress">
                      <h3>Android Studio<span className='percent'> 70%</span> </h3>
                      <div className="bar"><span></span></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className="skills-column z-[20]">
                <h3 className="title">PROFESSIONAL SKILLS</h3>

                <div className="skills-box">
                  <div className="skills-content">
                    <div className="progress">
                      <h3>web Design<span className='percent'> 80%</span> </h3>
                      <div className="bar"><span></span></div>
                    </div>

                    <div className="progress">
                      <h3>Graphic Design<span className='percent'> 85%</span> </h3>
                      <div className="bar"><span></span></div>
                    </div>

                    <div className="progress">
                      <h3>Mobile Development<span className='percent'> 78%</span> </h3>
                      <div className="bar"><span></span></div>
                    </div>

                    <div className="progress">
                      <h3>Community Management<span className='percent'> 60%</span> </h3>
                      <div className="bar"><span></span></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            </div>

    </section>
  )
}

export default page

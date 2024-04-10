'use client'
import React from 'react'
import { RiCalendar2Line } from "react-icons/ri";
import './etude.css'
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

const page = () => {
  return (
    <section 
    id='etude'
    className=' h-full w-full flex flex-row md:flex-row gap-10 px-10
    justify-center items-center'
    style={{transform:'scale(0.9)'}}
    >
      <motion.div
       variants={fadeIn('down', 0.2)}
       initial='hidden'
       animate='show'
       exit='hidden'
       className='flex flex-col gap-6 mt-6 text-6xl  font-bold text-white max-w-[600px] w-auto h-auto'
       >
               <span>
                My
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                    {" "}
                Journey{" "}
                </span>
                </span>
            </motion.div>

      {/* Skill_data */}
      <section className='education text-[15px] text-white font-medium mt-[10px]' id='education'>
       

        <div className='education-row'>
          <motion.div 
          variants={fadeIn('left', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='education-column'>
            <h3 className="title">Education</h3>

            <div className="education-box">

              {/* 1 */}
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <div className='flex flex-row gap-3 '><RiCalendar2Line /> 2016 - 2020</div>
                    </div>
                    <h3>TECHNICIAN’S PATENT CERTIFICATE</h3>
                    <p>MODULAR TPA in Electromechanics</p>
                </div>


                {/* 2 */}
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <div className='flex flex-row gap-3 '><RiCalendar2Line /> 2019 - 2019</div>
                    </div>
                    <h3>PAN-AFRICAN COMPETITION ROBOTICS</h3>
                    <p>TRAINING CERTIFICATE FOR THE PAN-AFRICAN COMPETITION ROBOTICS (PARC)</p>
                </div>

                {/* 3 */}
              </div>
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <div className='flex flex-row gap-3 '><RiCalendar2Line /> 2018 - 2018</div>
                    </div>
                    <h3>DATABASE TRAINING CERTIFICATE</h3>
                    <p>DATABASE TRAINING CERTIFICATE | AUGUST SESSION 2018
                    Specialization: DATA BASE management Option: MySQL
                    </p>
                </div>
              </div>


            </div>
          </motion.div>



          {/* Experience column 2 */}
          <motion.div 
          variants={fadeIn('right', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='education-column'>
            <h3 className="title">Experience</h3>

            <div className="education-box">

              {/* 1 */}
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <div className='flex flex-row gap-3 '><RiCalendar2Line /> 2020 - 2024</div>
                    </div>
                    <h3>Web-developer</h3>
                    <p>Self-training in web development on Laravel, ionic, react, flutter</p>
                </div>
              </div>

              {/* 2 */}
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <div className='flex flex-row gap-3 '><RiCalendar2Line /> 2021 - 2023</div>
                    </div>
                    <h3>Company (NEXT S.A.S)</h3>
                    <p>
                    Assistant webmaster, Community management, CMS (WordPress) 
                    social media management, Video editing.
                    </p>
                </div>
              </div>

              {/* 3 */}
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <div className='flex flex-row gap-3 '><RiCalendar2Line /> 2022 - 2022</div>
                    </div>
                    <h3>CAPACITY BUILDING</h3>
                    <p>(PROGRAMMATION) Flutte, Ionic, Laravel</p>
                </div>
              </div>

              {/* 4 */}
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <div className='flex flex-row gap-3 '><RiCalendar2Line /> 2020 - 2021</div>
                    </div>
                    <h3>Company (SOLUACT) </h3>
                    <p>- System and software assistant, <br/>
                    - ERP management software, <br/>
                    - GED Digital Archiving.</p>
                </div>
              </div>

              {/* 5 */}
              <div className="education-content">
                <div className="content">
                  <div className="year">
                    <div className='flex flex-row gap-3 '><RiCalendar2Line /> 2019 - 2020</div>
                    </div>
                    <h3>Company (ISERV)</h3>
                    <p>- System and software assistant as well as user support</p>
                </div>
              </div>


            </div>
          </motion.div>
        </div>
      </section>
      
    </section>
  )
}

export default page

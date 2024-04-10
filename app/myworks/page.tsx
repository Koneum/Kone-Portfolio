'use client'
import React  from 'react';
import './works.css'
import WorkSlider from './slider/WorkSlider';
import LogoSlide from './slider/logo/LogoSlide';
import Services from './Services';


const page = () => {
  return (
    
    <div id='Portfolios'>
    <div
    className=" text-white z-[10]"
    id="works"
    style={{transform:'scale(0.9)'}}
    >
      <div className='flex flex-col gap-6 mt-6 text-6xl
      font-bold text-white max-w-[600px] w-auto h-auto'
       >
               <span>
                My <span className='text-transparent bg-clip-text
                bg-gradient-to-r from-purple-500 to-cyan-500'>
                    {" "} Skills{" "}  </span>
                </span>
            </div>

            <div className='mt-[3rem] text-black h-full w-full flex flex-col md:flex-row gap-10 px-10 
            items-center justify-evenly '>
               <h3 
        className='items-center justify-center py-20
        flex flex-col md:flex-row  
       text-[40px] font-semibold text-white'>Services</h3>

              <div className='flex flex-row font-bold items-center  
              h-full w-full flex flex-col md:flex-row gap-10 px-10 z-[20]'>
              <Services 
              title={'Graphic Design'} 
              description={''} 
              icon={''} />

              <Services 
              title={'Web Design'} 
              description={''} 
              icon={''} />

              <Services 
              title={'Branding'} 
              description={''} 
              icon={''} />

              <Services 
              title={'Mobile App'} 
              description={''} 
              icon={''} />

              <Services 
              title={'Desktop App'} 
              description={''} 
              icon={''} />


              </div>
              
              
            </div>
      <div className='works-row1 flex flex-col  text-6xl
      font-bold text-white z-[20] '>
        <h3 
        className=' items-center justify-center py-20
         flex flex-col md:flex-row  
        text-[40px] font-semibold'>Design</h3>

      <div className="flex flex-col md:flex-row gap-10 px-10 
      flex items-center justify-center z-[20]">
        <WorkSlider />
        
      </div>
      </div>

      <div className='works-row2 flex flex-col   text-6xl
      font-bold text-white w-auto h-auto'>
         <h3 
        className=' items-center justify-center py-20
        h-full w-full flex flex-col md:flex-row  
        text-[40px] font-semibold'>
          We work together
          </h3>
      <div className=" flex flex-col md:flex-row 
      relative rounded-lg overflow-hidden flex items-center justify-center z-[20]">
        <LogoSlide />
      </div>
      </div>
    </div>
    </div>
  )
}

export default page

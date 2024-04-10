'use client'

import React, { useRef, useState } from 'react';
import './slider.css'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

const WorkSlider = () => {
  return (
    
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={'auto'}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={false}
    modules={[Autoplay, EffectCoverflow, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
    <img src={'/work/2024.png'} alt=''  />
    </SwiperSlide>

    <SwiperSlide>
    <img src={'/work/Dableni.png'} alt=''  />
    </SwiperSlide>
    <SwiperSlide>
    <img src={'/work/boroye1.png'} alt=''  />
    </SwiperSlide>
    <SwiperSlide>
    <img src={'/work/Baobab 2.jpg'} alt=''  />
    </SwiperSlide>
    <SwiperSlide>
    <img src={'/work/esic9.png'} alt=''  />
    </SwiperSlide>
    <SwiperSlide>
    <img src={'/work/esic2.jpg'} alt=''  />
    </SwiperSlide>
    <SwiperSlide>
    <img src={'/work/esic3.png'} alt=''  />
    </SwiperSlide>
    <SwiperSlide>
    <img src={'/work/esic5.png'} alt=''  />
    </SwiperSlide>
    <SwiperSlide>
    <img src={'/work/farm1.jpg'} alt=''  />
    </SwiperSlide>
    <SwiperSlide>
    <img src={'/work/farm2.jpg'} alt=''  />
    </SwiperSlide>
    <SwiperSlide>
    <img src={'/work/farm4.png'} alt=''  />
    </SwiperSlide>

    
  </Swiper>
  )
}

export default WorkSlider

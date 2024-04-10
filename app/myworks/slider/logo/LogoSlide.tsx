'use client'

import React, { useRef, useState } from 'react';
import './logo.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';

const LogoSlide = () => {
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
    <img src={'/logo/Boroye.png'} alt=''  />
    </SwiperSlide>
    <SwiperSlide>
    <img src={'/logo/SISSE-bleu-blanc-logo.png'} alt=''  />
    </SwiperSlide>
    <SwiperSlide>
    <img src={'/logo/CICM.png'} alt=''  />
    </SwiperSlide>
    <SwiperSlide>
    <img src={'/logo/Cluster-1.png'} alt=''  />
    </SwiperSlide>
    <SwiperSlide>
    <img src={'/logo/eliman.png'} alt=''  />
    </SwiperSlide>
    <SwiperSlide>
    <img src={'/logo/Emploi.png'} alt=''  />
    </SwiperSlide>
    <SwiperSlide>
    <img src={'/logo/Lenali.png'} alt=''  />
    </SwiperSlide>
    <SwiperSlide>
    <img src={'/logo/farm.png'} alt=''  />
    </SwiperSlide>
    <SwiperSlide>
    <img src={'/logo/ibra.png'} alt=''  />
    </SwiperSlide>

    
  </Swiper>
  )
}

export default LogoSlide
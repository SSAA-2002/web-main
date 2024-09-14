import React from 'react'
import { Navigation, Pagination , Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "../assets/images/slide1.jpg";
import img2 from "../assets/images/slide2.jpg";
import img3 from "../assets/images/slide3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function HomeCarousel() {
  return (
   <section className=' py-10 bg-white'>
     <section className="w-3/4 mx-auto">
    <Swiper
      modules={[Navigation, Pagination , Autoplay ]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <img src={img2} alt="" className="w-full h-[500px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" className="w-full h-[500px] " />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img1} alt="" className="w-full h-[500px] " />
      </SwiperSlide>
    </Swiper>
  </section>
   </section>
  )
}

export default HomeCarousel
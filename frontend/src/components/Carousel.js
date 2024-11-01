import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Correct import

const Carousel = () => (
  <div className="">
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} // Specify modules here
      loop={true}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      className="h-64"
    >
      <SwiperSlide>
        <img
          src="https://chatbot.delhimetrorail.com/render/second.png"
          alt="Image 1"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://chatbot.delhimetrorail.com/render/first.png"
          alt="Image 2"
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    </Swiper>
  </div>
);

export default Carousel;

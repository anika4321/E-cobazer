import React from "react";
import BannerSlider from "../Utilits/BannerSlider";
import BannerSliderTwo from "../Utilits/BannerSliderTwo";
import BannerSliderThree from "../Utilits/BannerSliderThree";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Banner = () => {
    return (
    <Swiper
      className="relative"
      loop={true}
      pagination={true}
      modules={[Navigation, Pagination]}
      navigation={{
        enabled : true,
        prevEl : ".prevArrow",
        nextEl : ".nextArrow",
      }}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
    >

      <div className="prevArrow lg:inline-flex hidden"><FaArrowLeft /></div>
      <div className="nextArrow lg:inline-flex hidden"><FaArrowRight /></div>

      <SwiperSlide>
        <BannerSlider/>
      </SwiperSlide>
      <SwiperSlide>
        <BannerSliderTwo/>
      </SwiperSlide>
      <SwiperSlide>
        <BannerSliderThree/>
      </SwiperSlide>
    </Swiper>
    )
}

export default Banner;
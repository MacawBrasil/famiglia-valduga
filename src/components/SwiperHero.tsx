"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Navbar } from "./Navbar";

export const SwiperHero = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      className="swiper-hero"
    >
      <Navbar />
      <SwiperSlide>
        <Image
          src="/bg-home.png"
          fill
          alt="banner"
          className="object-cover object-top"
        />
      </SwiperSlide>
    </Swiper>
  );
};

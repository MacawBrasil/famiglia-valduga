"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Wrapper } from "./wrapper";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { History } from "./History";
import Link from "next/link";

const years = [
  1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
  2002, 2003, 2004, 2005,
];

export const SwiperHistory = () => {
  const [selectedItem, SetSelectedItem] = useState(years[0]);
  return (
    <Wrapper className="relative mb-6 flex flex-col  items-center gap-20">
      <Swiper
        spaceBetween={63}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          425: {
            slidesPerView: 4,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 9,
            spaceBetween: 16,
          },
          1440: {
            slidesPerView: 13,
            spaceBetween: 16,
          },
        }}
        slidesPerView={13}
        className="w-full h-[83px] relative before:absolute before:w-full before:h-[2px] before:top-[15px] before:bg-[#C9C9C9] pt-5"
      >
        {years.map((year, index) => {
          return (
            <SwiperSlide
              key={index}
              onClick={() => SetSelectedItem(year)}
              className="cursor-pointer"
            >
              <Link
                href={`#${year}`}
                className="h-full flex flex-col items-center justify-center gap-5"
              >
                <div
                  className={twMerge(
                    "w-2 h-2 rounded-full bg-[#C9C9C9]",
                    selectedItem === year && "bg-ouro relative"
                  )}
                >
                  {selectedItem === year && (
                    <div className="absolute w-6 h-6 bg-transparent border border-ouro top-1/2 rounded-full -translate-y-1/2 left-1/2 -translate-x-1/2 z-40"></div>
                  )}
                </div>
                <span
                  className={twMerge(
                    "text-stone-300 text-2xl font-normal font-basker"
                  )}
                >
                  {year}
                </span>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="w-screen flex flex-col items-center justify-center gap-32 bg-banner-historia bg-cover bg-top sm:px-6">
        {years.map((year, index) => (
          <History year={year} index={index} key={index} />
        ))}
      </div>
    </Wrapper>
  );
};

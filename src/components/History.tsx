"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { IconSelected, IconSeparator } from "./SVGS";
import { useState } from "react";
import Modal from "./Modal";

interface iHistory {
  year: number;
  index: number;
}

export const History = ({ index, year }: iHistory) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="flex items-center gap-[72px] -ml-[300px] odd:ml-0 odd:-mr-[300px] md:-ml-[0] md:odd:ml-0 md:odd:-mr-[0] sm:w-full sm:flex-col sm:gap-4"
      id={`${year}`}
    >
      <div
        className={twMerge(
          "flex flex-col items-center gap-5 group",
          index % 2 !== 0 && "order-1"
        )}
      >
        <div
          className={twMerge(
            "w-[140px] h-[140px] rounded-full relative cursor-pointer transition-all duration-500 group-hover:w-[196px] group-hover:h-[196px] sm:w-[100px] sm:h-[100px] sm:group-hover:w-[146px] sm:group-hover:h-[146px]"
          )}
          onClick={openModal}
        >
          <Image src="/img-history.png" fill alt="img-history" />
          <IconSelected className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 opacity-0 transition-all duration-500 group-hover:opacity-100" />
        </div>
        <div className="flex flex-col items-center gap-6 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:opacity-100">
          <span className="uppercase text-center text-stone-950 text-[21px] font-normal font-basker">
            O desenbarque
          </span>
          <div className="uppercase text-center text-ouro_light text-xs font-bold font-mont">
            saiba mais
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3 sm:order-1">
        <IconSeparator className="sm:hidden" />
        <span className="text-center text-stone-300 text-[56px] font-normal font-basker sm:text-5xl">
          {year}
        </span>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

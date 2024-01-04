import Image from 'next/image';
import { Button } from './Button';
import { LogoCasaValduga } from './SVGS';
import { Animated } from './Animated';
import { ReactNode } from 'react';

interface iBoard {
  logo: ReactNode;
}

export const Board = ({ logo }: iBoard) => {
  return (
    <Animated className="w-[438px] h-[520px] rounded relative overflow-hidden transition-all duration-500 group 1xl:w-[400px]">
      {logo}
      <div className="w-full px-8 z-10 flex items-center flex-col justify-center gap-14 opacity-0 transition-all duration-500 absolute bottom-28 left-1/2 -translate-x-1/2 group-hover:opacity-100">
        <p className="text-center text-white text-opacity-80 text-lg font-light font-mont leading-[27px]">
          Lorem ipsum dolor sit amet consectetur. Turpis rhoncus pulvinar
          aliquam suspendisse.
        </p>
        <a href="#" target="_blank">
          <Button className="font-basker">Acessar o site</Button>
        </a>
      </div>
      <Image
        src="/bg-card.png"
        fill
        alt="image"
        className="object-cover z-0 transition-all duration-500 group-hover:scale-125"
      />
    </Animated>
  );
};

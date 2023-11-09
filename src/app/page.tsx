import { Board } from '@/components/Board';
import { Button } from '@/components/Button';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import {
  IconValduga,
  LogoCasaValduga,
  TitleNossaHistoria,
} from '@/components/SVGS';
import { SwiperHero } from '@/components/SwiperHero';
import { SwiperHistory } from '@/components/SwiperHistory';
import Image from 'next/image';
import Script from 'next/script';

const years = [
  1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
  2002, 2003, 2004, 2005,
];

export default function Home() {
  return (
    <>
      <Script
        defer
        src="https://identity.netlify.com/v1/netlify-identity-widget.js"
      />
      <SwiperHero />
      <div className="max-w-[1346px] m-auto w-full flex items-center flex-col gap-20 pt-16 sm:px-8 1xl:max-w-full">
        <span className="uppercase text-black text-opacity-80 text-2xl font-normal font-basker sm:text-center">
          Conheça as marcas do grupo
        </span>
        <div className="w-full flex justify-center flex-wrap gap-4 lg:justify-center">
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </div>
      </div>
      <div className="w-screen flex flex-col gap-4 items-center justify-center pt-[218px] pb-52 md:px-8">
        <div className="w-full flex flex-col gap-14 items-center">
          <IconValduga />
          <TitleNossaHistoria className="w-full" />
          <SwiperHistory />
        </div>
      </div>
      <Footer />
      <Script id="identity-login">
        {`if (window.netlifyIdentity) {
            window.netlifyIdentity.on("init", user => {
              if (!user) {
                window.netlifyIdentity.on("login", () => {
                  document.location.href = "/admin/";
                });
              }
            });
          }`}
      </Script>
    </>
  );
}

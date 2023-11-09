import { Animated } from '@/components/Animated';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { IconArrowBottom, IconValduga } from '@/components/SVGS';
import Image from 'next/image';

export default function Sobre() {
  return (
    <>
      <div className="relative w-screen h-[893px] bg-black bg-hero-sobre bg-cover bg-top flex flex-col items-center justify-center sm:h-[1300px]">
        <Navbar />
        <Animated className="flex flex-col items-center sm:absolute sm:top-52 sm:left-1/2 sm:-translate-x-1/2 sm:w-full sm:text-center sm:gap-4">
          <span className="text-white text-[88px] font-normal font-basker lg:text-7xl md:text-5xl">
            A FAMIGLIA VALDUGA
          </span>
          <div className="text-white text-lg font-normal font-mont leading-[27px] mb-24">
            Das raízes italianas à concretização de um sonho
          </div>
          <IconArrowBottom />
        </Animated>

        <Animated className="absolute -bottom-[136px] left-1/2 -translate-x-1/2 bg-white shadow p-16 md:w-11/12">
          <p className="w-[875px] text-center text-stone-600 text-2xl font-normal font-mont leading-9 md:w-full">
            Nossa história começa em 1875, com a chegada da família Valduga ao
            Brasil. Vindos da cidade de Rovereto, ao norte da Itália, os
            imigrantes trouxeram na mala a paixão pelo vinho e o desejo de
            prosperar. Foi assim que cultivaram os primeiros parreirais no
            coração do que hoje é o Vale dos Vinhedos, na Serra Gaúcha, região
            Sul do país.
          </p>
        </Animated>
      </div>
      <div className="w-screen pt-[306px] pb-[173px] flex items-center justify-center sm:px-6">
        <Animated className="w-[1034px] h-[820px] relative lg:flex flex-col lg:items-center lg:h-auto lg:gap-14 lg:text-center sm:w-full">
          <span className="w-[447px] left-[29px] top-0 absolute text-stone-600 text-lg font-normal font-mont leading-[27px] lg:static lg:order-2 sm:w-full">
            Mais de um século e quatro gerações depois, o sonho de construir uma
            vinícola referência no Brasil é uma realidade. Com a ajuda dos
            filhos, o casal Luiz e Maria Valduga aliou tradição e tecnologia
            para modernizar a elaboração de vinhos finos. E o resultado não
            poderia ser outro: a Casa Valduga hoje se consolida entre as marcas
            líderes do Brasil. Com o tempo, o trabalho da família foi muito além
            da vinícola e transformou-se no Grupo Famiglia Valduga, reconhecido
            internacionalmente pela qualidade dos seus produtos e pelos prêmios
            conquistados pelo mundo. Atualmente, o Grupo é formado por 5
            empresas e administrado pela família, mantendo viva a paixão pelo
            cultivo da uva e a dedicação em entregar sempre produtos de
            excelência.
          </span>
          <Image
            className="left-[546px] top-[418px] absolute lg:static lg:order-1"
            width={488}
            height={402}
            src="/img1-sobre.png"
            alt="image sobre"
          />
          <Image
            className="left-[546px] top-0 absolute lg:static  lg:order-3"
            width={488}
            height={402}
            src="/img2-sobre.png"
            alt="image sobre"
          />
          <IconValduga className="absolute left-0 top-[649.29px] lg:static lg:order-4" />
        </Animated>
      </div>
      <Footer />
    </>
  );
}

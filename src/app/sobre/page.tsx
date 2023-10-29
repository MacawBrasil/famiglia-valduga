import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { IconArrowBottom, IconValduga } from "@/components/SVGS";
import Image from "next/image";

export default function Sobre() {
  return (
    <>
      <div className="relative w-screen h-[893px] bg-black bg-hero-sobre bg-cover bg-top flex flex-col items-center justify-center">
        <Navbar />
        <div className="flex flex-col items-center">
          <span className="text-white text-[88px] font-normal font-['Baskerville']">
            A FAMIGLIA VALDUGA
          </span>
          <div className="text-white text-lg font-normal font-['Montserrat'] leading-[27px] mb-24">
            Das raízes italianas à concretização de um sonho
          </div>
          <IconArrowBottom />
        </div>

        <div className="absolute -bottom-[136px] left-1/2 -translate-x-1/2 bg-white shadow p-16">
          <p className="w-[875px] text-center text-stone-600 text-2xl font-normal font-['Montserrat'] leading-9">
            Nossa história começa em 1875, com a chegada da família Valduga ao
            Brasil. Vindos da cidade de Rovereto, ao norte da Itália, os
            imigrantes trouxeram na mala a paixão pelo vinho e o desejo de
            prosperar. Foi assim que cultivaram os primeiros parreirais no
            coração do que hoje é o Vale dos Vinhedos, na Serra Gaúcha, região
            Sul do país.
          </p>
        </div>
      </div>
      <div className="w-screen pt-[306px] pb-[173px] flex items-center justify-center">
        <div className="w-[1034px] h-[820px] relative">
          <div className="w-[447px] left-[29px] top-0 absolute text-stone-600 text-lg font-normal font-['Montserrat'] leading-[27px]">
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
          </div>
          <Image
            className="left-[546px] top-[418px] absolute"
            width={488}
            height={402}
            src="/img1-sobre.png"
            alt="image sobre"
          />
          <Image
            className="left-[546px] top-0 absolute"
            width={488}
            height={402}
            src="/img2-sobre.png"
            alt="image sobre"
          />
          <IconValduga className="absolute left-0 top-[649.29px]" />
        </div>
      </div>
      <Footer />
    </>
  );
}

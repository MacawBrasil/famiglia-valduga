"use client";
import Link from "next/link";
import {
  CasaMadeira,
  Domnowines,
  Leopoldina,
  Logo,
  LogoCasaValduga,
  LogoMacaw,
  Nero,
  Vinotage,
} from "./SVGS";
import { Wrapper } from "./wrapper";
import { Button } from "./Button";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

export const Footer = () => {
  const path = usePathname();
  return (
    <footer className="bg-[#171614] w-screen pt-16">
      <Wrapper className="flex flex-col items-center justify-center m-auto gap-24">
        <Logo />
        <nav className="w-full flex items-center justify-center gap-12 flex-wrap">
          <Link
            href="/"
            className={twMerge(
              "uppercase text-white transition-all duration-500 hover:text-ouro",
              "/" === path && "text-ouro"
            )}
          >
            Home
          </Link>
          <Link
            href="/sobre"
            className={twMerge(
              "uppercase text-white transition-all duration-500 hover:text-ouro",
              "/sobre" === path && "text-ouro"
            )}
          >
            A famiglia
          </Link>
          <a href="#" target="_blank" className="uppercase text-white">
            Enoturismo
          </a>
          <a href="#" target="_blank" className="uppercase text-white">
            Blog
          </a>
          <Link
            href="/contato"
            className={twMerge(
              "uppercase text-white transition-all duration-500 hover:text-ouro",
              "/contato" === path && "text-ouro"
            )}
          >
            Contato
          </Link>
          <a href="#" target="_blank">
            <Button className="text-sm font-normal font-mont">
              Compre online
            </Button>
          </a>
        </nav>
        <div className="w-full flex items-center justify-center gap-16 flex-wrap">
          <LogoCasaValduga />
          <Leopoldina />
          <CasaMadeira />
          <Domnowines />
          <Nero />
          <Vinotage />
        </div>
        <div className="w-full flex items-center justify-between flex-wrap border-t-[1px] border-white border-opacity-20 py-14 sm:justify-center sm:gap-5">
          <div className="flex items-center gap-16 flex-wrap justify-center">
            <Link
              href="#"
              className="text-white text-opacity-60 text-sm font-normal font-mont transition-all duration-500 hover:text-ouro"
            >
              Politica de privacidade
            </Link>
            <Link
              href="#"
              className="text-white text-opacity-60 text-sm font-normal font-mont transition-all duration-500 hover:text-ouro"
            >
              Politica de cookies
            </Link>
          </div>
          <a href="https://macawbrasil.com.br" target="_blank">
            <LogoMacaw className="transition-all duration-500 hover:scale-125" />
          </a>
        </div>
      </Wrapper>
    </footer>
  );
};

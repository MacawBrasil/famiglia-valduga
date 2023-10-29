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

export const Footer = () => {
  return (
    <footer className="bg-[#171614] w-screen pt-16">
      <Wrapper className="flex flex-col items-center justify-center m-auto gap-24">
        <Logo />
        <nav className="w-full flex items-center justify-center gap-12">
          <Link href="/" className="uppercase text-white">
            Home
          </Link>
          <Link href="/a-famiglia" className="uppercase text-white">
            A famiglia
          </Link>
          <Link href="/enoturismo" className="uppercase text-white">
            Enoturismo
          </Link>
          <Link href="/blog" className="uppercase text-white">
            Blog
          </Link>
          <Link href="/contato" className="uppercase text-white">
            Contato
          </Link>
          <Button>Compre online</Button>
        </nav>
        <div className="w-full flex items-center justify-center gap-16">
          <LogoCasaValduga />
          <Leopoldina />
          <CasaMadeira />
          <Domnowines />
          <Nero />
          <Vinotage />
        </div>
        <div className="w-full flex items-center justify-between border-t-[1px] border-white border-opacity-20 py-14">
          <div className="flex items-center gap-16">
            <Link
              href="#"
              className="text-white text-opacity-60 text-sm font-normal font-['Montserrat']"
            >
              Politica de privacidade
            </Link>
            <Link
              href="#"
              className="text-white text-opacity-60 text-sm font-normal font-['Montserrat']"
            >
              Politica de cookies
            </Link>
          </div>
          <a href="https://macawbrasil.com.br" target="_blank">
            <LogoMacaw />
          </a>
        </div>
      </Wrapper>
    </footer>
  );
};

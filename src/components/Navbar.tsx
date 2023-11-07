"use client";
import Link from "next/link";
import { Logo } from "./SVGS";
import { Wrapper } from "./wrapper";
import { Button } from "./Button";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

const navLinkOne = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "A famiglia",
    path: "/sobre",
  },
];

export const Navbar = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper className="absolute top-11 left-1/2 -translate-x-1/2 z-50">
      <div className="w-full flex items-center justify-between h-auto lg:hidden">
        <div className="flex items-center justify-start gap-12 border-b border-white w-[453px] h-[86px]">
          {navLinkOne.map((link, index) => (
            <Link
              href={link.path}
              className={twMerge(
                "uppercase text-white transition-all duration-500 hover:text-ouro",
                link.path === path && "text-ouro"
              )}
              key={index}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/enoturismo"
            className="uppercase text-white transition-all duration-500 hover:text-ouro"
            target="_blank"
          >
            Enoturismo
          </a>
        </div>
        <Link href="/">
          <Logo />
        </Link>
        <div className="flex items-center justify-end gap-12 border-b border-white w-[453px] h-[86px]">
          <Link
            href="/blog"
            className="uppercase text-white transition-all duration-500 hover:text-ouro"
          >
            Blog
          </Link>
          <Link
            href="/contato"
            className={twMerge(
              "uppercase text-white transition-all duration-500 hover:text-ouro",
              "/contato" === path && "text-ouro"
            )}
          >
            Contato
          </Link>
          <Button className="font-mont text-sm font-normal">
            Compre online
          </Button>
        </div>
      </div>
      <div className="hidden lg:flex lg:w-full lg:items-center lg:justify-center lg:relative sm:justify-start">
        <Link href="/">
          <Logo className="w-40" />
        </Link>
        <span
          onClick={() => setIsOpen(true)}
          className="absolute right-0 top-1/2 -translate-x-1/2 text-white uppercase font-basker cursor-pointer"
        >
          Menu
        </span>
        <div
          className={twMerge(
            "fixed top-0 right-full w-full h-screen bg-black transition-all duration-500 z-50 flex items-center justify-center",
            isOpen && "right-0"
          )}
        >
          <span
            className="absolute right-9 top-9 text-white z-20 uppercase font-basker cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            Fechar
          </span>
          <div className="flex items-center flex-col justify-start gap-12">
            {navLinkOne.map((link, index) => (
              <Link
                href={link.path}
                className={twMerge(
                  "uppercase text-white transition-all duration-500 hover:text-ouro text-xl",
                  link.path === path && "text-ouro"
                )}
                key={index}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="#"
              className="uppercase text-white transition-all duration-500 hover:text-ouro text-xl"
              target="_blank"
            >
              Enoturismo
            </a>
            <a
              href="#"
              className="uppercase text-white transition-all duration-500 hover:text-ouro text-xl"
              target="_blank"
            >
              Blog
            </a>
            <Link
              href="/contato"
              className={twMerge(
                "uppercase text-white transition-all duration-500 hover:text-ouro text-xl",
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
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

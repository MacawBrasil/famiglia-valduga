import Link from "next/link";
import { Logo } from "./SVGS";
import { Wrapper } from "./wrapper";
import { Button } from "./Button";

export const Navbar = () => {
  return (
    <Wrapper className="absolute top-11 left-1/2 -translate-x-1/2">
      <div className="w-full flex items-center justify-between h-auto">
        <div className="flex items-center justify-start gap-12 border-b border-white w-[453px] h-[86px]">
          <Link href="/" className="uppercase text-white">
            Home
          </Link>
          <Link href="/a-famiglia" className="uppercase text-white">
            A famiglia
          </Link>
          <Link href="/enoturismo" className="uppercase text-white">
            Enoturismo
          </Link>
        </div>
        <Logo />
        <div className="flex items-center justify-end gap-12 border-b border-white w-[453px] h-[86px]">
          <Link href="/blog" className="uppercase text-white">
            Blog
          </Link>
          <Link href="/contato" className="uppercase text-white">
            Contato
          </Link>
          <Button>Compre online</Button>
        </div>
      </div>
    </Wrapper>
  );
};

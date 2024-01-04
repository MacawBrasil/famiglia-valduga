import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface iWrapper {
  children: ReactNode;
  className?: string;
}

export const Wrapper = ({ children, className }: iWrapper) => {
  return (
    <div className={twMerge("w-screen max-w-[1283px] px-8", className)}>
      {children}
    </div>
  );
};

import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface iButton extends ComponentProps<"button"> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}
export const Button = ({
  children,
  className,
  disabled,
  ...props
}: iButton) => {
  return (
    <button
      {...props}
      className={twMerge(
        "px-7 py-3.5 flex cursor-pointer items-center justify-center border rounded border-ouro_light text-ouro_light text-sm uppercase font-[--font-montserrat]",
        className
      )}
    >
      {children}
    </button>
  );
};

'use client';

import { twMerge } from 'tailwind-merge';
import { IconClose, IconLeft, IconRigth } from './SVGS';
import Image from 'next/image';

const Modal = ({ isOpen, onClose }: any) => {
  if (!isOpen) return null;

  const closeModal = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-40 flex items-center justify-center">
      <div
        className={twMerge(
          'w-[1217px] h-[675px] relative rounded shadow bg-stone-100 transition-all duration-500 opacity-0 flex items-center justify-center gap-32 lg:w-11/12 lg:gap-10 sm:h-screen sm:w-full sm:flex-col sm:gap-0 sm:justify-start',
          isOpen && 'opacity-100',
        )}>
        <div
          onClick={closeModal}
          className="absolute top-8 right-8 z-50 cursor-pointer">
          <IconClose />
        </div>
        <div className="w-[568px] h-[440px] relative sm:flex sm:flex-col sm:items-center sm:justify-center sm:w-full sm:gap-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[435px] h-[300px] sm:w-[200px] sm:h-[200px] sm:static sm:translate-x-0 sm:order-1">
            <Image
              src="/img1-sobre.png"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-[248px] h-[186px] sm:hidden">
            <Image
              src="/img1-sobre.png"
              alt="image"
              fill
              className="object-cover"
            />
          </div>
          <span className="text-center text-ouro text-[168px] font-normal font-basker absolute -bottom-10 -right-[40px] sm:text-3xl sm:static">
            1875
          </span>
        </div>
        <div className="w-[280px] sm:w-full sm:text-center sm:px-6">
          <div className="text-center text-neutral-900 text-[40px] font-normal font-basker uppercase">
            O INÍCIO
          </div>
          <p className="w-full text-stone-600 text-base font-normal font-mont leading-normal">
            Lorem ipsum dolor sit amet consectetur. Hendrerit semper gravida
            ultricies ac enim tortor. Sem arcu egestas urna sed. Leo lacus
            tincidunt rutrum metus sollicitudin tellus lacus pretium. Tristique
            donec sollicitudin at luctus sed ligula sed fringilla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;

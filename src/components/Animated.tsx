'use client';
import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { motion, MotionProps, useAnimation } from 'framer-motion';

interface iAnimated extends MotionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Animated = ({ children, ...props }: iAnimated) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const animacao = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={animacao}
      {...props}>
      {children}
    </motion.div>
  );
};

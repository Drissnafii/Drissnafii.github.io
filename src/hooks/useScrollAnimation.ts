import { useInView } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = (threshold = 0.1, triggerOnce = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount: threshold,
    once: triggerOnce 
  });

  const variants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 75 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return { ref, isInView, variants };
};

export const useStaggeredAnimation = (delay = 0.1) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return { containerVariants, itemVariants };
};
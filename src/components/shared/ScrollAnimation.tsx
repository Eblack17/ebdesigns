import { ReactNode } from 'react';
import { motion, useAnimation, Variant } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box, BoxProps } from '@chakra-ui/react';
import { useEffect } from 'react';

interface ScrollAnimationProps extends BoxProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  threshold?: number;
  viewportOnce?: boolean;
}

const ScrollAnimation = ({
  children,
  delay = 0,
  direction = 'up',
  distance = 50,
  threshold = 0.1,
  viewportOnce = true,
  ...props
}: ScrollAnimationProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: viewportOnce,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const getDirectionOffset = (): { [key: string]: number } => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      default:
        return { y: distance };
    }
  };

  const variants = {
    hidden: {
      opacity: 0,
      ...getDirectionOffset(),
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <Box ref={ref} {...props}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        {children}
      </motion.div>
    </Box>
  );
};

export default ScrollAnimation; 
import React, { useEffect } from 'react';
import { Box, Text, TextProps } from '@chakra-ui/react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Define motion components
const MotionText = motion(Text);
const MotionBox = motion(Box);

// Define animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.04 * i,
    },
  }),
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

interface AnimatedTextProps extends TextProps {
  text: string;
  delay?: number;
  duration?: number;
  highlightWords?: string[];
  highlightColor?: string;
  animationType?: 'chars' | 'words' | 'lines';
  once?: boolean;
}

/**
 * AnimatedText component that reveals text with staggered animation
 */
export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  delay = 0,
  duration = 0.05,
  highlightWords = [],
  highlightColor = 'brand.500',
  animationType = 'words',
  once = true,
  ...textProps
}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: once,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  // Split text by animation type
  const getAnimationElements = () => {
    if (animationType === 'chars') {
      return text.split('').map((char, index) => (
        <MotionBox
          key={index}
          display="inline-block"
          variants={childVariants}
          style={{ 
            whiteSpace: char === ' ' ? 'pre' : 'normal',
            color: highlightWords.some(word => 
              text.toLowerCase().indexOf(word.toLowerCase()) === index ||
              index >= text.toLowerCase().indexOf(word.toLowerCase()) && 
              index < text.toLowerCase().indexOf(word.toLowerCase()) + word.length
            ) ? highlightColor : 'inherit'
          }}
        >
          {char}
        </MotionBox>
      ));
    } else if (animationType === 'words') {
      return text.split(' ').map((word, index) => (
        <MotionBox
          key={index}
          display="inline-block"
          variants={childVariants}
          mr="0.25em"
          color={highlightWords.includes(word) ? highlightColor : 'inherit'}
        >
          {word}
        </MotionBox>
      ));
    } else {
      // Lines
      return text.split('\n').map((line, index) => (
        <MotionBox
          key={index}
          display="block"
          variants={childVariants}
          color={highlightWords.includes(line) ? highlightColor : 'inherit'}
        >
          {line}
        </MotionBox>
      ));
    }
  };

  return (
    <MotionBox
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      custom={delay}
    >
      <MotionText display="block" {...textProps}>
        {getAnimationElements()}
      </MotionText>
    </MotionBox>
  );
};

export default AnimatedText; 
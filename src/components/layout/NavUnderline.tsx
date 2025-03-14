import { Box } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const MotionBox = motion(Box);

interface NavUnderlineProps {
  isActive: boolean;
  underlineWidth: number;
  underlineLeft: number;
}

/**
 * Animated underline component for navbar links
 * Follows mouse movement and highlights active links
 */
export const NavUnderline: React.FC<NavUnderlineProps> = ({ 
  isActive, 
  underlineWidth, 
  underlineLeft 
}) => {
  return (
    <MotionBox
      position="absolute"
      bottom="0"
      left={`${underlineLeft}px`}
      height="2px"
      width={`${underlineWidth}px`}
      bgGradient="linear(to-r, brand.500, accent.500)"
      animate={{
        width: underlineWidth,
        left: underlineLeft,
        opacity: isActive ? 1 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30
      }}
      sx={{
        boxShadow: isActive 
          ? '0 0 8px 1px rgba(45, 91, 255, 0.3)'
          : 'none'
      }}
    />
  );
};

export default NavUnderline; 
import React, { useEffect, useRef } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface AnimatedGradientBackgroundProps extends BoxProps {
  colorStart?: string;
  colorEnd?: string;
  colorMid?: string;
  animationDuration?: number;
  noiseOpacity?: number;
  borderRadius?: string;
  blurAmount?: string;
}

/**
 * AnimatedGradientBackground - Creates a dynamic animated gradient background
 * with optional noise texture overlay for modern design
 */
export const AnimatedGradientBackground: React.FC<AnimatedGradientBackgroundProps> = ({
  colorStart = '#4158D0',
  colorEnd = '#C850C0',
  colorMid = '#FFCC70',
  animationDuration = 8,
  noiseOpacity = 0.03,
  borderRadius = '0px',
  blurAmount = '80px',
  children,
  ...rest
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Generate noise texture on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    if (!context) return;
    
    // Set canvas size to match device pixel ratio for crisp rendering
    const scale = window.devicePixelRatio;
    canvas.width = canvas.offsetWidth * scale;
    canvas.height = canvas.offsetHeight * scale;
    context.scale(scale, scale);
    
    // Create noise pattern
    const imageData = context.createImageData(canvas.width, canvas.height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      // Random grayscale value
      const gray = Math.floor(Math.random() * 255);
      data[i] = gray;     // R
      data[i + 1] = gray; // G
      data[i + 2] = gray; // B
      data[i + 3] = 255;  // A (full opacity)
    }
    
    context.putImageData(imageData, 0, 0);
  }, []);
  
  // Gradient animation variants
  const gradientVariants = {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: animationDuration,
        ease: 'linear',
        repeat: Infinity,
      },
    },
  };

  return (
    <MotionBox
      position="relative"
      overflow="hidden"
      borderRadius={borderRadius}
      {...rest}
    >
      {/* Animated gradient background */}
      <MotionBox
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        background={`linear-gradient(-45deg, ${colorStart}, ${colorMid}, ${colorEnd}, ${colorStart})`}
        backgroundSize="400% 400%"
        variants={gradientVariants}
        animate="animate"
        filter={`blur(${blurAmount})`}
        zIndex={0}
        transform="scale(1.2)" // Slightly larger to account for blur edges
      />
      
      {/* Noise texture overlay */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity={noiseOpacity}
        zIndex={1}
        mixBlendMode="overlay"
        willChange="opacity"
        pointerEvents="none"
      >
        <Box
          as="canvas"
          ref={canvasRef}
          width="100%"
          height="100%"
          style={{ display: 'block' }}
        />
      </Box>
      
      {/* Content container */}
      <Box
        position="relative"
        zIndex={2}
        height="100%"
        width="100%"
      >
        {children}
      </Box>
    </MotionBox>
  );
};

export default AnimatedGradientBackground; 
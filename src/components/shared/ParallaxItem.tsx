import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import { motion, MotionValue, useTransform } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';

const MotionBox = motion(Box);

interface ParallaxItemProps extends BoxProps {
  factor?: number;
  reversed?: boolean;
  delay?: number;
  limitX?: number;
  limitY?: number;
  initialX?: number;
  initialY?: number;
  useMouseMovement?: boolean;
  rotationFactor?: number;
  scaleFactor?: number;
  withGlare?: boolean;
}

/**
 * ParallaxItem component that moves based on mouse position or scroll
 * Creates a parallax effect for visual elements
 */
export const ParallaxItem: React.FC<ParallaxItemProps> = ({
  children,
  factor = 20,
  reversed = false,
  delay = 0,
  limitX = 30,
  limitY = 30,
  initialX = 0,
  initialY = 0,
  useMouseMovement = true,
  rotationFactor = 0,
  scaleFactor = 0,
  withGlare = false,
  ...boxProps
}) => {
  const { normalizedPosition, isInViewport } = useMousePosition();
  const direction = reversed ? -1 : 1;
  
  // Calculate movement based on mouse position
  const x = useTransform(
    () => isInViewport ? normalizedPosition.x * limitX * direction + initialX : initialX,
    { damping: 25, stiffness: 100, delay }
  );
  
  const y = useTransform(
    () => isInViewport ? normalizedPosition.y * limitY * direction + initialY : initialY,
    { damping: 25, stiffness: 100, delay }
  );
  
  // Optional rotation based on mouse position
  const rotateX = rotationFactor ? useTransform(
    () => isInViewport ? -normalizedPosition.y * rotationFactor * direction : 0,
    { damping: 40, stiffness: 90, delay }
  ) : 0;
  
  const rotateY = rotationFactor ? useTransform(
    () => isInViewport ? normalizedPosition.x * rotationFactor * direction : 0,
    { damping: 40, stiffness: 90, delay }
  ) : 0;
  
  // Optional scale based on mouse position
  const scale = scaleFactor ? useTransform(
    () => isInViewport 
      ? 1 + Math.abs(normalizedPosition.x * normalizedPosition.y) * scaleFactor 
      : 1,
    { damping: 40, stiffness: 100, delay }
  ) : 1;
  
  // Glare effect - position of highlight based on mouse
  const glareOpacity = withGlare ? useTransform(
    () => isInViewport ? Math.max(0.05, Math.abs(normalizedPosition.x * normalizedPosition.y) * 0.15) : 0,
    { damping: 40, stiffness: 100, delay }
  ) : 0;
  
  const glareX = withGlare ? useTransform(
    () => isInViewport ? normalizedPosition.x * 100 + 50 : 50,
    { damping: 40, stiffness: 100, delay }
  ) : 50;
  
  const glareY = withGlare ? useTransform(
    () => isInViewport ? normalizedPosition.y * 100 + 50 : 50,
    { damping: 40, stiffness: 100, delay }
  ) : 50;

  return (
    <MotionBox
      position="relative"
      style={useMouseMovement ? {
        x,
        y,
        rotateX,
        rotateY,
        scale,
      } : undefined}
      transition={{ type: 'spring', damping: 15, stiffness: 150 }}
      {...boxProps}
    >
      {children}
      
      {/* Glare effect overlay */}
      {withGlare && (
        <MotionBox
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          borderRadius="inherit"
          pointerEvents="none"
          zIndex={1}
          style={{
            background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${glareOpacity}), transparent 70%)`,
          }}
        />
      )}
    </MotionBox>
  );
};

export default ParallaxItem; 
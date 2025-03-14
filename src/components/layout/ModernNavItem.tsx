import { Box, Link, useColorModeValue } from '@chakra-ui/react';
import { motion, useSpring, useTransform } from 'framer-motion';
import React, { useRef, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const MotionBox = motion(Box);

interface ModernNavItemProps {
  to: string;
  label: string;
  onHover: (item: { width: number; left: number; }) => void;
  isScrolled: boolean;
}

/**
 * Modern navigation item with micro-animations and hover effects
 * Enhanced with smoother transitions for the scrolling navbar
 */
export const ModernNavItem: React.FC<ModernNavItemProps> = ({ 
  to, 
  label, 
  onHover,
  isScrolled
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const itemRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const textColor = useColorModeValue('gray.700', 'white');
  const activeTextColor = useColorModeValue('brand.600', 'brand.400');
  const hoverTextColor = useColorModeValue('brand.500', 'brand.300');
  
  // Spring animation for hover effect
  const springConfig = { stiffness: 300, damping: 30 };
  const hoverSpring = useSpring(isHovered || isActive ? 1 : 0, springConfig);
  
  // Transform the spring value into different properties
  const width = useTransform(hoverSpring, [0, 1], ['0%', '100%']);
  const opacity = useTransform(hoverSpring, [0, 0.5, 1], [0, 0.8, 1]);
  const boxShadowValue = useTransform(
    hoverSpring, 
    [0, 1], 
    ['0 0 0px rgba(45, 91, 255, 0)', '0 0 8px 1px rgba(45, 91, 255, 0.3)']
  );
  
  useEffect(() => {
    // Update the spring value when hover or active state changes
    hoverSpring.set(isHovered || isActive ? 1 : 0);
  }, [isHovered, isActive, hoverSpring]);
  
  const handleHover = () => {
    if (itemRef.current) {
      const rect = itemRef.current.getBoundingClientRect();
      onHover({
        width: rect.width,
        left: rect.left
      });
    }
    setIsHovered(true);
  };
  
  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <MotionBox
      ref={itemRef}
      position="relative"
      initial={false}
      whileHover={{ y: -2 }}
      onHoverStart={handleHover}
      onHoverEnd={handleHoverEnd}
      transition={{ 
        type: 'spring', 
        stiffness: 400, 
        damping: 17,
        mass: 1
      }}
    >
      <Link
        as={NavLink}
        to={to}
        fontSize="md"
        fontWeight={isScrolled ? "medium" : "normal"}
        color={isActive ? activeTextColor : textColor}
        textDecoration="none"
        position="relative"
        px={4}
        py={2}
        _hover={{
          textDecoration: 'none',
          color: hoverTextColor,
        }}
        transition="all 0.25s cubic-bezier(0.33, 1, 0.68, 1)"
      >
        {label}
        <MotionBox
          position="absolute"
          bottom="0"
          left="50%"
          height="2px"
          style={{
            width,
            x: '-50%',
            opacity,
            boxShadow: boxShadowValue
          }}
          background={isActive ? "accent.500" : "brand.500"}
          transition={{ 
            type: 'spring', 
            stiffness: 300, 
            damping: 25 
          }}
        />
      </Link>
    </MotionBox>
  );
};

export default ModernNavItem; 
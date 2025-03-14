import React from 'react';
import { Button, ButtonProps, Box, Icon, Text, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

interface ModernButtonProps extends ButtonProps {
  to?: string;
  external?: boolean;
  arrow?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  hoverScale?: number;
}

/**
 * ModernButton - A modern, animated button component with various styles and hover effects
 */
export const ModernButton: React.FC<ModernButtonProps> = ({
  children,
  to,
  external = false,
  arrow = false,
  variant = 'primary',
  hoverScale = 1.03,
  ...rest
}) => {
  // Button style variants
  const variants = {
    primary: {
      bg: 'brand.primary',
      color: 'white',
      _hover: { bg: '#6461F8' }, // Slightly lighter on hover
      boxShadow: '0 10px 30px -10px rgba(100, 97, 248, 0.5)',
    },
    secondary: {
      bg: 'rgba(255, 255, 255, 0.1)',
      color: 'white',
      backdropFilter: 'blur(8px)',
      _hover: { bg: 'rgba(255, 255, 255, 0.15)' },
      border: '1px solid rgba(255, 255, 255, 0.2)',
    },
    outline: {
      bg: 'transparent',
      color: 'white',
      border: '1px solid',
      borderColor: 'rgba(255, 255, 255, 0.3)',
      _hover: { borderColor: 'white' },
    },
    ghost: {
      bg: 'transparent',
      color: 'white',
      _hover: { bg: 'rgba(255, 255, 255, 0.08)' },
    },
  };

  // Animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: hoverScale },
  };

  const arrowVariants = {
    initial: { x: 0, opacity: 1 },
    hover: { x: 5, opacity: 1 },
  };

  const glowVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 0.4 },
  };

  // Determine the base component based on if it's a link or button
  const ButtonOrLink = to ? Link : 'div';
  const linkProps = to
    ? {
        to: !external ? to : undefined,
        as: external ? 'a' : undefined,
        href: external ? to : undefined,
        target: external ? '_blank' : undefined,
        rel: external ? 'noopener noreferrer' : undefined,
      }
    : {};

  return (
    <MotionBox
      as={ButtonOrLink}
      position="relative"
      display="inline-block"
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      {...linkProps}
    >
      <Button
        position="relative"
        zIndex={2}
        {...variants[variant]}
        rounded="lg"
        px={6}
        py={6}
        fontSize="md"
        fontWeight="600"
        height="auto"
        overflow="hidden"
        {...rest}
      >
        <MotionFlex align="center" gap={2}>
          <Text>{children}</Text>
          
          {arrow && (
            <MotionBox variants={arrowVariants} transition={{ type: 'spring', stiffness: 300 }}>
              <Icon as={BsArrowRight} />
            </MotionBox>
          )}
        </MotionFlex>
      </Button>
      
      {/* Glow effect on hover (only for primary variant) */}
      {variant === 'primary' && (
        <MotionBox
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          width="100%"
          height="100%"
          bg="brand.primary"
          filter="blur(20px)"
          borderRadius="lg"
          zIndex={1}
          variants={glowVariants}
          transition={{ duration: 0.3 }}
        />
      )}
    </MotionBox>
  );
};

export default ModernButton; 
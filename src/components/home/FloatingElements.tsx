import React from 'react';
import { Box, Flex, Text, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { IoCodeSlashOutline, IoGridOutline } from 'react-icons/io5';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FiFeather } from 'react-icons/fi';
import { TbBrandFramerMotion } from 'react-icons/tb';
import { useMousePosition } from '../../hooks/useMousePosition';
import ParallaxItem from '../shared/ParallaxItem';

const MotionBox = motion(Box);

// Element types for different floating items
type ElementType = 'code' | 'design' | 'ui' | 'card' | 'glow';

interface ElementProps {
  type: ElementType;
  top: string;
  left: string;
  delay?: number;
  factor?: number;
  rotationFactor?: number;
  zIndex?: number;
}

/**
 * CodeSnippet - A floating code element
 */
const CodeSnippet: React.FC<{top: string; left: string; delay: number; factor: number}> = ({
  top, left, delay, factor
}) => (
  <ParallaxItem
    position="absolute"
    top={top}
    left={left}
    delay={delay}
    factor={factor}
    rotationFactor={5}
    zIndex={10}
  >
    <Box 
      bg="rgba(20, 20, 25, 0.85)" 
      backdropFilter="blur(8px)"
      borderRadius="lg"
      boxShadow="0 15px 30px -15px rgba(0, 0, 0, 0.3)"
      border="1px solid rgba(127, 127, 127, 0.2)"
      p={3}
      maxW="180px"
      fontSize="xs"
      color="green.300"
      fontFamily="mono"
    >
      <Text>.hero-section {'{'}</Text>
      <Text ml={3}>display: flex;</Text>
      <Text ml={3}>flex-direction: column;</Text>
      <Text ml={3}>align-items: center;</Text>
      <Text ml={3}>transform: translateY();</Text>
      <Text>{'}'}</Text>
    </Box>
  </ParallaxItem>
);

/**
 * DesignElement - A floating UI design element
 */
const DesignElement: React.FC<{top: string; left: string; delay: number; factor: number}> = ({
  top, left, delay, factor
}) => (
  <ParallaxItem
    position="absolute"
    top={top}
    left={left}
    delay={delay}
    factor={factor}
    rotationFactor={8}
    zIndex={11}
  >
    <Flex
      bg="rgba(20, 20, 25, 0.9)"
      backdropFilter="blur(10px)"
      borderRadius="lg"
      border="1px solid rgba(127, 127, 127, 0.2)"
      boxShadow="0 15px 30px -15px rgba(0, 0, 0, 0.3)"
      p={3}
      gap={3}
      align="center"
    >
      <Flex 
        bg="brand.primary"
        w="36px"
        h="36px"
        borderRadius="md"
        align="center"
        justify="center"
      >
        <Icon as={IoGridOutline} color="white" boxSize={5} />
      </Flex>
      <Box>
        <Text color="gray.200" fontWeight="bold" fontSize="xs">
          UI Layout
        </Text>
        <Text color="gray.400" fontSize="xs">
          Responsive Grid System
        </Text>
      </Box>
    </Flex>
  </ParallaxItem>
);

/**
 * TechBadge - A floating technology badge
 */
const TechBadge: React.FC<{top: string; left: string; delay: number; factor: number}> = ({
  top, left, delay, factor
}) => (
  <ParallaxItem
    position="absolute"
    top={top}
    left={left}
    delay={delay}
    factor={factor}
    withGlare
    zIndex={12}
  >
    <Flex
      direction="column"
      align="center"
      justify="center"
      bg="rgba(20, 20, 25, 0.7)"
      backdropFilter="blur(8px)"
      borderRadius="full"
      boxShadow="0 15px 30px -15px rgba(0, 0, 0, 0.3)"
      border="1px solid rgba(127, 127, 127, 0.2)"
      w="60px"
      h="60px"
      p={2}
    >
      <Icon as={TbBrandFramerMotion} color="white" boxSize={6} />
      <Text color="gray.200" fontSize="9px" mt={1} fontWeight="bold">
        Motion
      </Text>
    </Flex>
  </ParallaxItem>
);

/**
 * FeatureCard - A floating feature card
 */
const FeatureCard: React.FC<{top: string; left: string; delay: number; factor: number}> = ({
  top, left, delay, factor
}) => (
  <ParallaxItem
    position="absolute"
    top={top}
    left={left}
    delay={delay}
    factor={factor}
    rotationFactor={3}
    withGlare
    zIndex={9}
  >
    <Box
      bg="rgba(20, 20, 25, 0.8)"
      backdropFilter="blur(8px)"
      borderRadius="lg"
      boxShadow="0 15px 30px -15px rgba(0, 0, 0, 0.3)"
      border="1px solid rgba(127, 127, 127, 0.2)"
      p={4}
      maxW="180px"
    >
      <Flex 
        bg="rgba(255, 255, 255, 0.1)"
        w="30px"
        h="30px"
        borderRadius="md"
        align="center"
        justify="center"
        mb={2}
      >
        <Icon as={HiOutlineLightBulb} color="yellow.300" boxSize={4} />
      </Flex>
      <Text color="gray.200" fontWeight="bold" fontSize="sm">
        Creative Solutions
      </Text>
      <Text color="gray.400" fontSize="xs" mt={1}>
        Innovative design with usability focus
      </Text>
    </Box>
  </ParallaxItem>
);

/**
 * GlowSphere - A decorative glow element
 */
const GlowSphere: React.FC<{top: string; left: string; color: string; size: string; opacity: number}> = ({
  top, left, color, size, opacity
}) => (
  <Box
    position="absolute"
    top={top}
    left={left}
    width={size}
    height={size}
    borderRadius="full"
    bg={color}
    filter={`blur(40px)`}
    opacity={opacity}
    zIndex={1}
    pointerEvents="none"
  />
);

/**
 * FloatingElement - Factory component for different floating elements
 */
const FloatingElement: React.FC<ElementProps> = ({
  type,
  top,
  left,
  delay = 0,
  factor = 15,
  zIndex = 10
}) => {
  if (type === 'code') {
    return <CodeSnippet top={top} left={left} delay={delay} factor={factor} />;
  }
  if (type === 'design') {
    return <DesignElement top={top} left={left} delay={delay} factor={factor} />;
  }
  if (type === 'ui') {
    return <TechBadge top={top} left={left} delay={delay} factor={factor} />;
  }
  if (type === 'card') {
    return <FeatureCard top={top} left={left} delay={delay} factor={factor} />;
  }
  
  // Default: empty spacer
  return null;
};

/**
 * FloatingElements - Container for all floating elements in the hero section
 */
export const FloatingElements: React.FC = () => {
  return (
    <Box position="relative" w="100%" h="100%" overflow="visible">
      {/* Central UI element will go here */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        zIndex={20}
      >
        <ParallaxItem
          factor={8}
          rotationFactor={2}
          scaleFactor={0.05}
          withGlare
        >
          <Flex
            direction="column"
            align="center"
            justify="center"
            bg="rgba(20, 20, 25, 0.85)"
            backdropFilter="blur(12px)"
            borderRadius="2xl"
            boxShadow="0 20px 40px -20px rgba(0, 0, 0, 0.4)"
            border="1px solid rgba(127, 127, 127, 0.2)"
            p={6}
            h="220px"
            w="220px"
          >
            <Flex
              bg="brand.primary"
              borderRadius="full"
              w="70px"
              h="70px"
              align="center"
              justify="center"
              mb={4}
            >
              <Icon as={FiFeather} color="white" boxSize={8} />
            </Flex>
            <Text color="white" fontWeight="bold" fontSize="lg" textAlign="center">
              Creative Design
            </Text>
            <Text color="gray.300" fontSize="sm" textAlign="center" mt={2}>
              Blending aesthetics with functionality
            </Text>
          </Flex>
        </ParallaxItem>
      </Box>

      {/* Floating elements */}
      <FloatingElement type="code" top="15%" left="5%" delay={0.1} factor={20} />
      <FloatingElement type="design" top="65%" left="10%" delay={0.3} factor={15} />
      <FloatingElement type="ui" top="30%" left="85%" delay={0.2} factor={25} />
      <FloatingElement type="card" top="75%" left="75%" delay={0.4} factor={18} />
      
      {/* Decorative glow elements */}
      <GlowSphere top="20%" left="20%" color="rgba(100, 97, 248, 0.4)" size="150px" opacity={0.4} />
      <GlowSphere top="70%" left="70%" color="rgba(200, 80, 192, 0.3)" size="180px" opacity={0.3} />
    </Box>
  );
};

export default FloatingElements; 
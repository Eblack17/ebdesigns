import React, { useEffect, useState } from 'react';
import { Box, Flex, Text, Grid, GridItem, Container, Heading, useMediaQuery, VStack, HStack } from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useMousePosition } from '../../hooks/useMousePosition';
import AnimatedText from '../shared/AnimatedText';
import AnimatedGradientBackground from '../shared/AnimatedGradientBackground';
import ModernButton from '../shared/ModernButton';
import FloatingElements from './FloatingElements';

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

/**
 * ModernHeroSection - Award-winning 2025-style hero section with interactive elements
 * and micro-animations for a portfolio website
 */
export const ModernHeroSection: React.FC = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');
  const { scrollYProgress } = useScroll();
  const { normalizedPosition, isInViewport } = useMousePosition();
  
  // Parallax effect based on scroll position
  const leftColumnY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const rightColumnY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Highlighted words in the heading
  const highlightWords = ['Transforming', 'Ideas', 'Digital', 'Reality'];
  
  // Sub-heading animation sequence
  const [subheadingIndex, setSubheadingIndex] = useState(0);
  const subheadings = ['Design', 'Development', 'Innovation'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSubheadingIndex((prev) => (prev + 1) % subheadings.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <Box 
      position="relative" 
      height={{ base: 'auto', md: '100vh' }}
      minHeight={{ base: '90vh', md: '800px' }}
      overflow="hidden"
    >
      {/* Gradient background with noise texture */}
      <AnimatedGradientBackground
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        colorStart="#2F1C63"
        colorMid="#5F1A88"
        colorEnd="#270F3F"
        noiseOpacity={0.03}
        animationDuration={15}
        zIndex={0}
      />
      
      {/* Content container */}
      <Container 
        maxW="1400px" 
        height="100%" 
        position="relative" 
        zIndex={2}
        px={{ base: 4, md: 8 }}
      >
        <Grid
          templateColumns={{ base: '1fr', md: '1fr 1fr' }}
          height="100%"
          gap={{ base: 10, md: 0 }}
          py={{ base: 20, md: 0 }}
          alignItems="center"
        >
          {/* Left column - Text content */}
          <GridItem position="relative">
            <MotionBox
              style={{ y: isLargerThan768 ? leftColumnY : 0 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <VStack alignItems="flex-start" spacing={6}>
                {/* Animated heading */}
                <Box>
                  <AnimatedText
                    text="Transforming Ideas into Digital Reality"
                    animationType="words"
                    highlightWords={highlightWords}
                    highlightColor="brand.primary"
                    fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
                    fontWeight="800"
                    lineHeight="1.1"
                    letterSpacing="-0.02em"
                    delay={0.3}
                  />
                </Box>
                
                {/* Animated subheading */}
                <MotionFlex 
                  color="whiteAlpha.800"
                  fontSize={{ base: 'md', md: 'xl' }}
                  fontWeight="500"
                  letterSpacing="0.05em"
                  textTransform="uppercase"
                  mt={2}
                  position="relative"
                  height="30px"
                  alignItems="center"
                >
                  <AnimatedText
                    text={subheadings[0]}
                    key={`subheading-${0}`}
                    animationType="characters"
                    delay={0}
                    duration={0.5}
                    style={{ 
                      display: subheadingIndex === 0 ? 'block' : 'none',
                      position: 'absolute'
                    }}
                  />
                  <AnimatedText
                    text={subheadings[1]}
                    key={`subheading-${1}`}
                    animationType="characters"
                    delay={0}
                    duration={0.5}
                    style={{ 
                      display: subheadingIndex === 1 ? 'block' : 'none',
                      position: 'absolute'
                    }}
                  />
                  <AnimatedText
                    text={subheadings[2]}
                    key={`subheading-${2}`}
                    animationType="characters"
                    delay={0}
                    duration={0.5}
                    style={{ 
                      display: subheadingIndex === 2 ? 'block' : 'none',
                      position: 'absolute'
                    }}
                  />
                </MotionFlex>
                
                {/* Description */}
                <MotionBox
                  maxW="550px"
                  color="whiteAlpha.800"
                  fontSize={{ base: 'sm', md: 'md' }}
                  lineHeight="1.8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <Text>
                    Award-winning designer and developer crafting immersive digital 
                    experiences that blend creativity with cutting-edge technology. 
                    Specializing in responsive websites, interactive applications, 
                    and brand identity systems that elevate businesses.
                  </Text>
                </MotionBox>
                
                {/* Action buttons */}
                <MotionFlex
                  gap={4}
                  mt={2}
                  flexWrap={{ base: 'wrap', md: 'nowrap' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <ModernButton to="/portfolio" arrow variant="primary">
                    See My Work
                  </ModernButton>
                  <ModernButton to="/contact" variant="secondary">
                    Let's Connect
                  </ModernButton>
                </MotionFlex>
              </VStack>
            </MotionBox>
          </GridItem>
          
          {/* Right column - Visual elements */}
          <GridItem 
            position="relative" 
            height={{ base: '500px', md: '100%' }}
            display={{ base: 'none', md: 'block' }}
          >
            <MotionBox
              position="relative"
              height="100%"
              width="100%"
              style={{ y: rightColumnY, opacity }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <FloatingElements />
            </MotionBox>
          </GridItem>
        </Grid>
      </Container>
      
      {/* Decorative elements */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height="150px"
        bgGradient="linear(to-t, rgba(0,0,0,0.3), transparent)"
        pointerEvents="none"
        zIndex={1}
      />
    </Box>
  );
};

export default ModernHeroSection; 
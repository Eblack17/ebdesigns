import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Container, 
  Flex, 
  Grid, 
  Heading, 
  Text, 
  useColorModeValue,
  VStack,
  HStack,
  Icon,
  Circle,
  Divider,
  chakra,
  shouldForwardProp,
  Button,
  useBreakpointValue,
  Badge
} from '@chakra-ui/react';
import { motion, isValidMotionProp, useAnimation, useInView, AnimatePresence, Transition, keyframes as motionKeyframes } from 'framer-motion';
import { IconType } from 'react-icons';
import ScrollAnimation from '../shared/ScrollAnimation';
import BasicHeading from '../shared/BasicHeading';

// Interface for skill item
interface SkillItem {
  icon: IconType;
  title: string;
  description: string;
  percentage?: number;
}

interface SubSkill {
  name: string;
  level: number;
}

interface ModernSkillsSectionProps {
  skills: SkillItem[];
}

// Create ChakraBox - a custom component that supports both Chakra props and motion props
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ChakraIcon = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

// Floating animation keyframes for CSS
const floatingAnimation = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
  }
`;

// Type for framer-motion animations
interface AnimationProps {
  y?: number[] | string[];
  rotate?: number[];
  scale?: number;
  opacity?: number;
}

/**
 * A modern, award-winning skills section component that follows 2025 design trends
 * featuring glassmorphism, 3D effects, and micro-interactions
 */
const ModernSkillsSection: React.FC<ModernSkillsSectionProps> = ({ skills }) => {
  const [activeSkill, setActiveSkill] = useState<number>(0);
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(detailsRef, { once: false, amount: 0.3 });
  const controls = useAnimation();
  
  // Color variables that adapt to light/dark mode
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)');
  const accentColor = useColorModeValue('brand.500', 'brand.300');
  const glowColor = useColorModeValue('rgba(99, 179, 237, 0.3)', 'rgba(99, 179, 237, 0.15)');
  const lightAccentColor = useColorModeValue('brand.100', 'brand.900');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const subtextColor = useColorModeValue('gray.600', 'gray.400');
  const borderColor = useColorModeValue('brand.200', 'brand.800');
  const cardBorderColor = useColorModeValue('rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.1)');
  const glassShadow = useColorModeValue(
    '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
    '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
  );
  
  // Responsive values
  const isMobile = useBreakpointValue({ base: true, md: false });
  const gridColumns = useBreakpointValue({ 
    base: "1fr", 
    lg: "380px 1fr" 
  });
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
  
  const barVariants = {
    hidden: { width: 0 },
    visible: (percentage: number) => ({
      width: `${percentage}%`,
      transition: { 
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    })
  };
  
  // 3D hover effect for cards
  const hoverCard = (index: number) => {
    setHoveredSkill(index);
  };
  
  const handleSkillClick = (index: number) => {
    setActiveSkill(index);
    
    // Scroll to details on mobile
    if (isMobile && detailsRef.current) {
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  // Animate skill details when activeSkill changes
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    });
  }, [activeSkill, controls]);
  
  return (
    <Box 
      as="section" 
      py={{ base: 24, md: 32 }}
      bg={bgColor}
      position="relative"
      overflow="hidden"
      sx={{ floatingAnimation }}
    >
      {/* Background elements */}
      <Box 
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="transparent"
        zIndex={0}
        backgroundImage="radial-gradient(circle at 10% 20%, rgba(99, 179, 237, 0.05) 0%, transparent 50%)"
      >
        {/* Abstract shapes and patterns */}
        <Box
          position="absolute"
          top="10%"
          left="5%"
          width={{ base: "150px", md: "200px" }}
          height={{ base: "150px", md: "200px" }}
          borderRadius="full"
          border="1px solid"
          borderColor={borderColor}
          opacity={0.2}
          sx={{ animation: "float 10s ease-in-out infinite" }}
        />
        
        <Box
          position="absolute"
          bottom="20%"
          right="15%"
          width={{ base: "120px", md: "200px" }}
          height={{ base: "120px", md: "200px" }}
          borderRadius="full"
          border="1px solid"
          borderColor={borderColor}
          opacity={0.15}
          sx={{ animation: "float 15s ease-in-out infinite" }}
        />
        
        <Box
          position="absolute"
          top="60%"
          left="30%"
          width={{ base: "100px", md: "150px" }}
          height={{ base: "100px", md: "150px" }}
          borderRadius="full"
          bg={lightAccentColor}
          opacity={0.07}
          sx={{ animation: "float 12s ease-in-out infinite" }}
        />
        
        {/* Grid pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bgImage="linear-gradient(to right, rgba(99, 179, 237, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 179, 237, 0.05) 1px, transparent 1px)"
          bgSize="30px 30px"
          opacity={0.3}
        />
      </Box>
      
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <ScrollAnimation>
          <VStack spacing={4} mb={{ base: 16, md: 20 }} textAlign="center">
            <BasicHeading 
              as="h2" 
              size="xl"
              textAlign="center"
              bgGradient="linear(to-r, brand.400, purple.500)"
              bgClip="text"
            >
              My Expertise
            </BasicHeading>
            <Text 
              color={subtextColor} 
              fontSize={{ base: "lg", md: "xl" }} 
              maxW="3xl" 
              mx="auto"
              mt={4}
            >
              Transforming ideas into exceptional digital experiences through creative design and technical expertise
            </Text>
          </VStack>
        </ScrollAnimation>
        
        <Grid
          templateColumns={gridColumns}
          gap={{ base: 12, lg: 20 }}
        >
          {/* Left side - Interactive skill selection with glassmorphism cards */}
          <Box overflow="visible">
            <ScrollAnimation>
              <ChakraBox
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                display="flex"
                flexDirection="column"
                gap={6}
                height="100%"
              >
                {skills.map((skill, index) => (
                  <ChakraBox
                    key={index}
                    variants={itemVariants}
                    cursor="pointer"
                    onClick={() => handleSkillClick(index)}
                    onMouseEnter={() => hoverCard(index)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    whileHover="hover"
                    position="relative"
                    zIndex={activeSkill === index ? 2 : 1}
                    transform={activeSkill === index ? "scale(1.05)" : "scale(1)"}
                    transformOrigin="center left"
                    transition="transform 0.3s ease"
                  >
                    <Box
                      p={{ base: 5, md: 6 }}
                      borderRadius="xl"
                      bg={cardBg}
                      backdropFilter="blur(10px)"
                      border="1px solid"
                      borderColor={cardBorderColor}
                      boxShadow={activeSkill === index 
                        ? `0 10px 30px -5px ${glowColor}, 0 0 10px 0 rgba(0, 0, 0, 0.1)` 
                        : glassShadow
                      }
                      overflow="hidden"
                      position="relative"
                      transition="all 0.3s ease"
                      transform={
                        hoveredSkill === index 
                          ? "translateY(-5px)" 
                          : "translateY(0)"
                      }
                    >
                      {/* Color accent indicator */}
                      <Box
                        position="absolute"
                        left="0"
                        top="0"
                        width="5px"
                        height="100%"
                        bg={accentColor}
                        opacity={activeSkill === index ? 1 : 0.3}
                        transition="opacity 0.3s ease"
                      />
                      
                      <Flex gap={5} align="center">
                        <ChakraIcon
                          initial={{ scale: 1 }}
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: [0, 5, -5, 0],
                            transition: { duration: 0.5 } 
                          }}
                        >
                          <Circle 
                            size="60px" 
                            bg={activeSkill === index ? accentColor : 'transparent'}
                            color={activeSkill === index ? 'white' : accentColor}
                            border="2px solid"
                            borderColor={accentColor}
                            transition="all 0.3s ease"
                            boxShadow={activeSkill === index ? `0 0 15px ${glowColor}` : "none"}
                          >
                            <Icon as={skill.icon} boxSize={6} />
                          </Circle>
                        </ChakraIcon>
                        
                        <VStack align="start" spacing={2}>
                          <Heading 
                            as="h3" 
                            size="md" 
                            fontWeight={activeSkill === index ? "bold" : "medium"}
                            color={textColor}
                          >
                            {skill.title}
                          </Heading>
                          <Text 
                            color={subtextColor} 
                            fontSize="sm" 
                            noOfLines={2}
                          >
                            {skill.description}
                          </Text>
                          
                          {/* "Selected" indicator */}
                          {activeSkill === index && (
                            <Badge 
                              colorScheme="brand" 
                              variant="subtle"
                              mt={1}
                            >
                              Selected
                            </Badge>
                          )}
                        </VStack>
                      </Flex>
                      
                      {/* Hover overlay gradient */}
                      <Box
                        position="absolute"
                        top="0"
                        left="0"
                        right="0"
                        bottom="0"
                        bgGradient={`linear(to-br, ${accentColor}10, transparent)`}
                        opacity={hoveredSkill === index ? 0.6 : 0}
                        transition="opacity 0.3s ease"
                        pointerEvents="none"
                      />
                    </Box>
                  </ChakraBox>
                ))}
              </ChakraBox>
            </ScrollAnimation>
          </Box>
          
          {/* Right side - Active skill details with immersive 3D card */}
          <Box ref={detailsRef}>
            <ScrollAnimation threshold={0.1}>
              <AnimatePresence mode="wait">
                <ChakraBox
                  key={activeSkill}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  // Convert to framer-motion transition
                  as={motion.div}
                  position="relative"
                >
                  <Box
                    borderRadius="2xl" 
                    overflow="hidden"
                    bg={cardBg}
                    backdropFilter="blur(16px)"
                    border="1px solid"
                    borderColor={cardBorderColor}
                    boxShadow={`0 25px 50px -12px ${glowColor}`}
                    p={{ base: 6, md: 8 }}
                    position="relative"
                    zIndex={1}
                    transition="transform 0.3s ease, box-shadow 0.3s ease"
                    _hover={{
                      transform: "translateY(-5px)",
                      boxShadow: `0 30px 60px -15px ${glowColor}`
                    }}
                  >
                    {/* 3D layers for depth effect */}
                    <Box
                      position="absolute"
                      top="20px"
                      right="20px"
                      width="150px"
                      height="150px"
                      borderRadius="full"
                      bg={`${accentColor}15`}
                      filter="blur(40px)"
                      zIndex={0}
                    />
                    
                    <VStack spacing={8} align="start" position="relative" zIndex={1}>
                      <Flex 
                        justify="space-between" 
                        align="center" 
                        width="full"
                      >
                        <Heading 
                          as="h3" 
                          fontSize={{ base: "2xl", md: "3xl" }}
                          fontWeight="bold"
                          bgGradient={`linear(to-r, ${accentColor}, purple.500)`}
                          bgClip="text"
                        >
                          {skills[activeSkill].title}
                        </Heading>
                        
                        <Circle
                          size={{ base: "40px", md: "50px" }}
                          bg={`${accentColor}20`}
                          color={accentColor}
                        >
                          <Icon as={skills[activeSkill].icon} boxSize={{ base: 5, md: 6 }} />
                        </Circle>
                      </Flex>
                      
                      <Text 
                        fontSize={{ base: "md", md: "lg" }} 
                        lineHeight="tall" 
                        color={textColor}
                      >
                        {skills[activeSkill].description}
                      </Text>
                      
                      {/* Modern skill level visualization */}
                      <VStack spacing={7} width="100%" pt={6}>
                        <HStack width="full" justify="space-between">
                          <Heading as="h4" size="sm" color={textColor}>
                            Core Competencies
                          </Heading>
                          
                          <Text fontSize="sm" color={subtextColor}>
                            Proficiency level
                          </Text>
                        </HStack>
                        
                        <Divider borderColor={borderColor} opacity={0.5} />
                        
                        {/* Dynamically generate skills based on the active skill */}
                        {getSkillLevels(activeSkill).map((skill, index) => (
                          <ChakraBox
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ 
                              opacity: 1, 
                              x: 0, 
                              transition: { 
                                delay: index * 0.1 + 0.2,
                                duration: 0.5
                              } 
                            }}
                            width="100%"
                          >
                            <VStack width="full" spacing={2} align="start">
                              <Flex justify="space-between" width="full">
                                <Text 
                                  fontWeight="medium" 
                                  color={textColor}
                                  fontSize="md"
                                >
                                  {skill.name}
                                </Text>
                                <Text 
                                  fontWeight="bold" 
                                  color={accentColor}
                                >
                                  {skill.level}%
                                </Text>
                              </Flex>
                              
                              <Box 
                                width="100%" 
                                h="8px" 
                                bg={`${accentColor}20`}
                                borderRadius="full"
                                overflow="hidden"
                                position="relative"
                              >
                                <ChakraBox
                                  height="100%"
                                  bgGradient={`linear(to-r, ${accentColor}, purple.500)`}
                                  borderRadius="full"
                                  custom={skill.level}
                                  variants={barVariants}
                                  initial="hidden"
                                  animate="visible"
                                  position="relative"
                                  _after={{
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    bgGradient: 'linear(to-r, transparent, rgba(255,255,255,0.3), transparent)',
                                    animation: 'shine 2s infinite linear',
                                  }}
                                />
                              </Box>
                            </VStack>
                          </ChakraBox>
                        ))}
                        
                        <Button 
                          mt={4}
                          colorScheme="brand"
                          size="md"
                          alignSelf="flex-start"
                          variant="outline"
                          _hover={{
                            transform: "translateY(-2px)",
                            boxShadow: "md"
                          }}
                        >
                          View Projects
                        </Button>
                      </VStack>
                    </VStack>
                  </Box>
                </ChakraBox>
              </AnimatePresence>
            </ScrollAnimation>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

// Helper function to generate skill levels based on the active skill
function getSkillLevels(activeSkillIndex: number): SubSkill[] {
  const skillSets = [
    // UI/UX Design skills
    [
      { name: 'User Research', level: 90 },
      { name: 'Wireframing', level: 95 },
      { name: 'Prototyping', level: 88 },
      { name: 'Visual Design', level: 92 }
    ],
    // Frontend Development skills
    [
      { name: 'React.js', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'CSS/SASS', level: 90 },
      { name: 'Responsive Design', level: 96 }
    ],
    // Mobile Development skills
    [
      { name: 'React Native', level: 85 },
      { name: 'iOS/Android', level: 78 },
      { name: 'App Architecture', level: 82 },
      { name: 'Performance', level: 88 }
    ],
    // Brand Identity skills
    [
      { name: 'Logo Design', level: 88 },
      { name: 'Brand Strategy', level: 85 },
      { name: 'Typography', level: 92 },
      { name: 'Color Theory', level: 94 }
    ]
  ];
  
  return skillSets[activeSkillIndex] || skillSets[0];
}

export default ModernSkillsSection; 
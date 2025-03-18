import React, { useState } from 'react';
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
  shouldForwardProp
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
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

interface ModernSkillsSectionProps {
  skills: SkillItem[];
}

// Create ChakraBox - a custom component that supports both Chakra props and motion props
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

/**
 * A modern, award-winning skills section component that follows 2025 design trends
 */
const ModernSkillsSection: React.FC<ModernSkillsSectionProps> = ({ skills }) => {
  const [activeSkill, setActiveSkill] = useState<number>(0);
  
  // Color variables that adapt to light/dark mode
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const accentColor = useColorModeValue('brand.500', 'brand.300');
  const lightAccentColor = useColorModeValue('brand.100', 'brand.900');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const subtextColor = useColorModeValue('gray.600', 'gray.400');
  const borderColor = useColorModeValue('brand.200', 'brand.800');
  const gradientStart = useColorModeValue('rgba(255, 255, 255, 0.7)', 'rgba(23, 25, 35, 0.7)');
  const gradientEnd = useColorModeValue('rgba(237, 242, 247, 0)', 'rgba(23, 25, 35, 0)');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const barVariants = {
    hidden: { width: 0 },
    visible: (percentage: number) => ({
      width: `${percentage}%`,
      transition: { 
        duration: 1.5,
        ease: [0.165, 0.84, 0.44, 1]
      }
    })
  };
  
  // Hover animation for skill icons
  const iconHoverVariants = {
    idle: { scale: 1, y: 0 },
    hover: { 
      scale: 1.1, 
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 15
      }
    }
  };
  
  const handleSkillClick = (index: number) => {
    setActiveSkill(index);
  };
  
  return (
    <Box 
      as="section" 
      py={{ base: 20, md: 28 }}
      bg={bgColor}
      position="relative"
      overflow="hidden"
    >
      {/* Background elements */}
      <Box 
        position="absolute"
        top="50%"
        left="0"
        transform="translateY(-50%)"
        width="100%"
        height="70%"
        bg="transparent"
        zIndex={0}
      >
        {/* Horizontal line */}
        <Box 
          position="absolute"
          top="50%"
          left="0"
          width="100%"
          height="1px"
          bg={borderColor}
          opacity={0.3}
          transform="translateY(-50%)"
        />
        
        {/* Vertical lines - responsive grid */}
        {[...Array(6)].map((_, i) => (
          <Box
            key={i}
            position="absolute"
            top="0"
            left={`${(i+1) * 14}%`}
            height="100%"
            width="1px"
            bg={borderColor}
            opacity={0.2}
          />
        ))}
        
        {/* Large floating circle */}
        <ChakraBox
          position="absolute"
          top="-10%"
          right="-5%"
          width={{ base: "200px", md: "400px" }}
          height={{ base: "200px", md: "400px" }}
          borderRadius="full"
          border="1px solid"
          borderColor={borderColor}
          opacity={0.3}
          animate={{
            y: [0, 30, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </Box>
      
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <ScrollAnimation>
          <VStack spacing={2} mb={16} textAlign="center">
            <BasicHeading 
              as="h2" 
              size="xl"
              textAlign="center"
            >
              What I Do
            </BasicHeading>
            <Text 
              color={subtextColor} 
              fontSize="xl" 
              maxW="3xl" 
              mx="auto"
              mt={4}
            >
              Transforming ideas into exceptional digital experiences through creative design and technical expertise
            </Text>
          </VStack>
        </ScrollAnimation>
        
        <Grid
          templateColumns={{ base: "1fr", lg: "380px 1fr" }}
          gap={{ base: 10, lg: 20 }}
        >
          {/* Left side - Interactive skill selection */}
          <ScrollAnimation>
            <ChakraBox
              as="ul"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              display="flex"
              flexDirection="column"
              gap={6}
            >
              {skills.map((skill, index) => (
                <ChakraBox
                  as="li"
                  key={index}
                  variants={itemVariants}
                  cursor="pointer"
                  onClick={() => handleSkillClick(index)}
                  position="relative"
                >
                  <HStack 
                    spacing={4} 
                    p={4}
                    borderRadius="xl"
                    bg={activeSkill === index ? lightAccentColor : 'transparent'}
                    transition="all 0.3s ease"
                    _hover={{ bg: lightAccentColor }}
                    opacity={activeSkill === index ? 1 : 0.7}
                  >
                    <ChakraBox
                      variants={iconHoverVariants}
                      initial="idle"
                      whileHover="hover"
                    >
                      <Circle 
                        size="60px" 
                        bg={activeSkill === index ? accentColor : 'transparent'}
                        color={activeSkill === index ? 'white' : accentColor}
                        border="2px solid"
                        borderColor={accentColor}
                        transition="all 0.3s ease"
                      >
                        <Icon as={skill.icon} boxSize={6} />
                      </Circle>
                    </ChakraBox>
                    
                    <VStack align="start" spacing={1}>
                      <Heading 
                        as="h3" 
                        size="md" 
                        fontWeight={activeSkill === index ? "bold" : "medium"}
                        color={textColor}
                        fontFamily="'Roboto', sans-serif"
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
                    </VStack>
                  </HStack>
                  
                  {/* Active indicator */}
                  {activeSkill === index && (
                    <Box
                      position="absolute"
                      left="-10px"
                      top="50%"
                      w="4px"
                      h="60%"
                      bg={accentColor}
                      borderRadius="full"
                      transform="translateY(-50%)"
                    />
                  )}
                </ChakraBox>
              ))}
            </ChakraBox>
          </ScrollAnimation>
          
          {/* Right side - Active skill details */}
          <ScrollAnimation>
            <Box 
              borderRadius="2xl" 
              overflow="hidden"
              bg={useColorModeValue('white', 'gray.800')}
              border="1px solid"
              borderColor={borderColor}
              boxShadow="xl"
              p={{ base: 6, md: 10 }}
              position="relative"
            >
              {/* Colored background accent */}
              <Box 
                position="absolute"
                top="0"
                right="0"
                width="60%"
                height="50%"
                bg={lightAccentColor}
                opacity={0.2}
                borderBottomLeftRadius="full"
                zIndex={0}
              />
              
              <VStack spacing={8} align="start" position="relative" zIndex={1}>
                <Heading 
                  as="h3" 
                  size="lg" 
                  fontWeight="bold"
                  color={accentColor}
                >
                  {skills[activeSkill].title}
                </Heading>
                
                <Text 
                  fontSize="lg" 
                  lineHeight="tall" 
                  color={textColor}
                >
                  {skills[activeSkill].description}
                </Text>
                
                {/* Skill level visualization */}
                <VStack spacing={6} width="100%" pt={4}>
                  <Heading as="h4" size="sm" color={subtextColor} alignSelf="flex-start">
                    Core Competencies
                  </Heading>
                  
                  {/* Dynamically generate skills based on the active skill */}
                  {getSkillLevels(activeSkill).map((skill, index) => (
                    <HStack key={index} width="100%" spacing={4}>
                      <Text 
                        minWidth="120px" 
                        fontWeight="medium" 
                        color={textColor}
                        fontSize="sm"
                      >
                        {skill.name}
                      </Text>
                      <Box width="100%" h="8px" bg={lightAccentColor} borderRadius="full">
                        <ChakraBox
                          height="100%"
                          bg={accentColor}
                          borderRadius="full"
                          custom={skill.level}
                          variants={barVariants}
                          initial="hidden"
                          animate="visible"
                        />
                      </Box>
                      <Text 
                        minWidth="40px" 
                        fontWeight="medium" 
                        color={subtextColor}
                        fontSize="sm"
                      >
                        {skill.level}%
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </Box>
          </ScrollAnimation>
        </Grid>
      </Container>
    </Box>
  );
};

// Helper function to generate skill levels based on the active skill
function getSkillLevels(activeSkillIndex: number) {
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
import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Text,
  Button,
  Icon,
  Circle,
  VStack,
  HStack,
  useColorModeValue,
  chakra,
  shouldForwardProp,
  Tooltip,
} from '@chakra-ui/react';
import { motion, useAnimation, useInView, isValidMotionProp } from 'framer-motion';
import { IconType } from 'react-icons';
import { 
  FiEdit, 
  FiLayout, 
  FiCode, 
  FiCheckCircle, 
  FiTarget, 
  FiLayers, 
  FiFeather, 
  FiEye, 
  FiGlobe,
  FiArrowRight
} from 'react-icons/fi';
import ScrollAnimation from '../shared/ScrollAnimation';
import BasicHeading from '../shared/BasicHeading';

// Create ChakraBox - a custom component that supports both Chakra props and motion props
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

// Interface for process step
interface ProcessStep {
  id: number;
  icon: IconType;
  title: string;
  description: string;
  color: string;
  outputs: string[];
}

// Sample data for the design process
const designProcessSteps: ProcessStep[] = [
  {
    id: 1,
    icon: FiTarget,
    title: "Discovery",
    description: "Understanding client goals, target audience, and project requirements. Comprehensive research to identify opportunities.",
    color: "brand.500",
    outputs: ["Client Brief", "User Personas", "Competitive Analysis", "Project Roadmap"]
  },
  {
    id: 2,
    icon: FiFeather,
    title: "Ideation",
    description: "Exploring creative concepts, sketching ideas, and creating mood boards to establish the project's direction.",
    color: "purple.500",
    outputs: ["Sketches", "Wireframes", "Mood Boards", "Concept Directions"]
  },
  {
    id: 3,
    icon: FiLayout,
    title: "Design",
    description: "Crafting visual elements, developing UI components, and creating cohesive layouts that align with the brand.",
    color: "blue.400",
    outputs: ["Style Guide", "UI Components", "Responsive Layouts", "Visual Assets"]
  },
  {
    id: 4,
    icon: FiCode,
    title: "Development",
    description: "Transforming designs into functional websites or applications with clean, efficient code.",
    color: "teal.400",
    outputs: ["Frontend Code", "CMS Integration", "Responsive Implementation", "Interactive Elements"]
  },
  {
    id: 5,
    icon: FiEye,
    title: "Testing",
    description: "Ensuring quality through thorough testing across devices, browsers, and user scenarios.",
    color: "orange.400",
    outputs: ["Usability Testing", "Performance Optimization", "Cross-browser Testing", "Accessibility Checks"]
  },
  {
    id: 6,
    icon: FiGlobe,
    title: "Launch",
    description: "Deploying the final product with post-launch support and monitoring for optimal performance.",
    color: "green.400",
    outputs: ["Deployment", "Documentation", "Analytics Setup", "Training Resources"]
  }
];

/**
 * Modern Design Process Showcase component that follows 2025 design trends
 * This component replaces the testimonials section with an interactive 
 * visualization of the design process
 */
const DesignProcessShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  
  // Color variables that adapt to light/dark mode
  const bgColor = useColorModeValue('white', 'gray.800');
  const accentColor = useColorModeValue('brand.500', 'brand.300');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const subtextColor = useColorModeValue('gray.600', 'gray.400');
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const glassEffect = useColorModeValue(
    'rgba(255, 255, 255, 0.7)',
    'rgba(26, 32, 44, 0.7)'
  );
  const cardHoverBg = useColorModeValue('gray.50', 'gray.700');
  
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
  
  const stepVariants = {
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
      y: -5,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
  
  const circleVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
  
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
  
  const handleStepClick = (step: number) => {
    setActiveStep(step);
    
    // Control animation for when step changes
    controls.start({
      opacity: [0, 1],
      y: [20, 0],
      transition: { duration: 0.5 }
    });
  };
  
  // Get active step data
  const activeStepData = designProcessSteps.find(step => step.id === activeStep) || designProcessSteps[0];
  
  // Function to get color for step
  const getStepColor = (stepId: number) => {
    return designProcessSteps.find(step => step.id === stepId)?.color || accentColor;
  };
  
  return (
    <Box 
      as="section" 
      py={{ base: 16, md: 24 }}
      position="relative"
      overflow="hidden"
    >
      {/* Background elements */}
      <Box 
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg={useColorModeValue('gray.50', 'gray.900')}
        zIndex={0}
        overflow="hidden"
      >
        {/* Abstract background elements */}
        <ChakraBox
          position="absolute"
          top="-10%"
          right="-5%"
          width={{ base: "300px", md: "500px" }}
          height={{ base: "300px", md: "500px" }}
          borderRadius="full"
          background={`radial-gradient(circle, ${useColorModeValue('brand.50', 'brand.900')}, transparent)`}
          opacity={0.7}
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <ChakraBox
          position="absolute"
          bottom="-10%"
          left="-5%"
          width={{ base: "200px", md: "400px" }}
          height={{ base: "200px", md: "400px" }}
          borderRadius="full"
          background={`radial-gradient(circle, ${useColorModeValue('blue.50', 'blue.900')}, transparent)`}
          opacity={0.5}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </Box>
      
      {/* Main content */}
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <ScrollAnimation>
          <VStack spacing={4} mb={16} textAlign="center">
            <BasicHeading 
              as="h2" 
              size="xl"
              textAlign="center"
              mb={3}
            >
              My Design Process
            </BasicHeading>
            <Text 
              color={subtextColor} 
              fontSize="xl" 
              maxW="3xl" 
              mx="auto"
              mt={2}
            >
              A systematic approach to creating effective and engaging digital experiences
            </Text>
          </VStack>
        </ScrollAnimation>
        
        {/* Process Steps Timeline */}
        <Box 
          ref={processRef}
          position="relative"
          mt={10}
          mb={16}
        >
          <ChakraBox
            as="div"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            width="100%"
            position="relative"
          >
            {/* Horizontal line connecting all steps */}
            <Box
              position="absolute"
              top="50%"
              left="0"
              right="0"
              height="2px"
              bg={borderColor}
              transform="translateY(-50%)"
              zIndex={1}
              display={{ base: 'none', md: 'block' }}
            />
            
            {/* Timeline steps */}
            <Flex 
              justifyContent="space-between" 
              wrap={{ base: 'wrap', md: 'nowrap' }}
              gap={{ base: 4, md: 0 }}
            >
              {designProcessSteps.map((step) => (
                <ChakraBox
                  key={step.id}
                  variants={stepVariants}
                  whileHover="hover"
                  position="relative"
                  zIndex={2}
                  width={{ base: '33.33%', md: 'auto' }}
                  mb={{ base: 8, md: 0 }}
                  cursor="pointer"
                  onClick={() => handleStepClick(step.id)}
                  onMouseEnter={() => setIsHovering(step.id)}
                  onMouseLeave={() => setIsHovering(null)}
                >
                  <VStack spacing={2} align="center">
                    <Circle 
                      size={{ base: "60px", md: "70px" }}
                      bg={activeStep === step.id ? step.color : bgColor}
                      color={activeStep === step.id ? 'white' : step.color}
                      border="2px solid"
                      borderColor={step.color}
                      boxShadow={activeStep === step.id ? `0 0 15px ${step.color}40` : 'none'}
                      transition="all 0.3s ease"
                      position="relative"
                    >
                      <Icon as={step.icon} boxSize={6} />
                      
                      {/* Number badge */}
                      <Circle
                        size="24px"
                        bg={step.color}
                        color="white"
                        position="absolute"
                        top="-5px"
                        right="-5px"
                        fontSize="xs"
                        fontWeight="bold"
                        border="2px solid white"
                      >
                        {step.id}
                      </Circle>
                    </Circle>
                    
                    <Heading 
                      as="h3" 
                      size="sm"
                      color={activeStep === step.id ? step.color : textColor}
                      fontWeight={activeStep === step.id ? "bold" : "medium"}
                      textAlign="center"
                      transition="all 0.3s ease"
                    >
                      {step.title}
                    </Heading>
                    
                    {/* Description tooltip on hover */}
                    {isHovering === step.id && (
                      <Box
                        position="absolute"
                        top="100%"
                        left="50%"
                        transform="translateX(-50%)"
                        width="200px"
                        p={3}
                        bg={glassEffect}
                        backdropFilter="blur(8px)"
                        borderRadius="md"
                        boxShadow="lg"
                        zIndex={10}
                        mt={2}
                        borderTop="3px solid"
                        borderColor={step.color}
                        display={{ base: 'none', md: 'block' }}
                      >
                        <Text fontSize="sm" color={textColor} textAlign="center">
                          {step.description}
                        </Text>
                      </Box>
                    )}
                  </VStack>
                </ChakraBox>
              ))}
            </Flex>
          </ChakraBox>
        </Box>
        
        {/* Active Process Step Details */}
        <ScrollAnimation>
          <ChakraBox
            animate={controls}
            initial={{ opacity: 1, y: 0 }}
          >
            <Box
              borderRadius="xl"
              overflow="hidden"
              bg={useColorModeValue('white', 'gray.800')}
              borderTop="4px solid"
              borderColor={activeStepData.color}
              boxShadow="xl"
              p={{ base: 6, md: 8 }}
              position="relative"
              maxW="1200px"
              mx="auto"
            >
              {/* Colored background accent */}
              <Box 
                position="absolute"
                top="0"
                right="0"
                width="40%"
                height="40%"
                bg={`${activeStepData.color}15`}
                borderBottomLeftRadius="full"
                zIndex={0}
              />
              
              <Grid 
                templateColumns={{ base: "1fr", lg: "1fr 1fr" }} 
                gap={8}
                position="relative"
                zIndex={1}
              >
                {/* Left side - Step description */}
                <VStack align="flex-start" spacing={6}>
                  <HStack>
                    <Circle 
                      size="40px"
                      bg={activeStepData.color}
                      color="white"
                    >
                      <Icon as={activeStepData.icon} boxSize={5} />
                    </Circle>
                    <Heading 
                      as="h3" 
                      size="lg" 
                      color={activeStepData.color}
                    >
                      {activeStepData.title}
                    </Heading>
                  </HStack>
                  
                  <Text 
                    fontSize="lg" 
                    lineHeight="tall" 
                    color={textColor}
                  >
                    {activeStepData.description}
                  </Text>
                  
                  <Box pt={4}>
                    <Text fontWeight="medium" mb={3} color={subtextColor}>
                      Why this matters:
                    </Text>
                    <Text color={textColor}>
                      {activeStepData.id === 1 && "A thorough discovery phase ensures that all designs have purpose and align with business goals."}
                      {activeStepData.id === 2 && "Creative exploration without constraints allows for innovative solutions that stand out in the market."}
                      {activeStepData.id === 3 && "Thoughtful design creates intuitive, engaging user experiences that resonate with your audience."}
                      {activeStepData.id === 4 && "Clean, efficient development ensures your design vision is perfectly translated into reality."}
                      {activeStepData.id === 5 && "Rigorous testing guarantees a flawless experience across all devices and user scenarios."}
                      {activeStepData.id === 6 && "A smooth launch with ongoing support ensures your digital product continues to perform optimally."}
                    </Text>
                  </Box>
                </VStack>
                
                {/* Right side - Deliverables */}
                <Box>
                  <VStack 
                    align="stretch" 
                    spacing={4} 
                    h="100%" 
                    bg={useColorModeValue('gray.50', 'gray.700')}
                    borderRadius="lg"
                    p={6}
                  >
                    <Heading 
                      as="h4" 
                      size="md" 
                      color={textColor}
                      mb={2}
                    >
                      Deliverables & Outputs
                    </Heading>
                    
                    {activeStepData.outputs.map((output, index) => (
                      <HStack 
                        key={index}
                        p={3}
                        bg={bgColor}
                        borderRadius="md"
                        borderLeft="3px solid"
                        borderColor={activeStepData.color}
                        transition="all 0.2s ease"
                        _hover={{
                          transform: "translateX(5px)",
                          boxShadow: "sm"
                        }}
                      >
                        <Icon as={FiCheckCircle} color={activeStepData.color} boxSize={5} />
                        <Text fontWeight="medium">{output}</Text>
                      </HStack>
                    ))}
                    
                    {/* Visual indicator of step position in process */}
                    <HStack 
                      mt="auto" 
                      pt={4} 
                      justifyContent="space-between"
                      borderTop="1px solid"
                      borderColor={borderColor}
                    >
                      <Text fontSize="sm" color={subtextColor}>
                        Step {activeStepData.id} of {designProcessSteps.length}
                      </Text>
                      <HStack>
                        <Button
                          size="sm"
                          variant="ghost"
                          isDisabled={activeStep === 1}
                          onClick={() => handleStepClick(activeStep - 1)}
                        >
                          Previous
                        </Button>
                        <Button
                          size="sm"
                          colorScheme="brand"
                          rightIcon={<FiArrowRight />}
                          isDisabled={activeStep === designProcessSteps.length}
                          onClick={() => handleStepClick(activeStep + 1)}
                        >
                          Next Step
                        </Button>
                      </HStack>
                    </HStack>
                  </VStack>
                </Box>
              </Grid>
            </Box>
          </ChakraBox>
        </ScrollAnimation>
      </Container>
    </Box>
  );
};

export default DesignProcessShowcase; 
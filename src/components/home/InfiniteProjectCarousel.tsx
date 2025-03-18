import React, { useEffect, useState, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  Flex, 
  Heading, 
  Text, 
  Image, 
  IconButton, 
  useColorModeValue,
  Container,
  VStack,
  HStack,
  Tag,
} from '@chakra-ui/react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiExternalLink } from 'react-icons/fi';

// Motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

// Project interface
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface InfiniteProjectCarouselProps {
  projects: Project[];
}

/**
 * A modern infinite carousel component for showcasing featured projects
 */
const InfiniteProjectCarousel: React.FC<InfiniteProjectCarouselProps> = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isHovering, setIsHovering] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayInterval = useRef<NodeJS.Timeout | null>(null);
  const slideCount = projects.length;
  
  // Colors that adapt to light/dark mode
  const bgColor = useColorModeValue('white', 'gray.800');
  const accentColor = useColorModeValue('brand.500', 'brand.300');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const subtextColor = useColorModeValue('gray.600', 'gray.400');
  const cardShadow = useColorModeValue('lg', 'dark-lg');
  const tagBg = useColorModeValue('brand.50', 'brand.900');
  const controlBg = useColorModeValue('white', 'gray.800');
  
  // Animation variants
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.85,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.85,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
        scale: { duration: 0.4 }
      }
    })
  };
  
  // Indicator variants
  const indicatorVariants = {
    inactive: { scale: 1, opacity: 0.5 },
    active: { 
      scale: 1.2, 
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };
  
  // Handle navigation
  const navigateToSlide = (index: number, newDirection: number) => {
    // Reset autoplay timer when manually navigating
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
    }
    
    setDirection(newDirection);
    
    // Handle wrapping for infinite carousel
    if (index < 0) {
      setActiveIndex(slideCount - 1);
    } else if (index >= slideCount) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
    
    // Restart autoplay if it was active
    if (isAutoPlaying) {
      startAutoPlay();
    }
  };
  
  // Navigate to next/previous slide
  const nextSlide = () => navigateToSlide(activeIndex + 1, 1);
  const prevSlide = () => navigateToSlide(activeIndex - 1, -1);
  
  // Start autoplay function
  const startAutoPlay = () => {
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
    }
    
    autoPlayInterval.current = setInterval(() => {
      navigateToSlide(activeIndex + 1, 1);
    }, 5000); // Change slide every 5 seconds
  };
  
  // Initialize and clean up autoplay
  useEffect(() => {
    if (isAutoPlaying && !isHovering) {
      startAutoPlay();
    }
    
    return () => {
      if (autoPlayInterval.current) {
        clearInterval(autoPlayInterval.current);
      }
    };
  }, [activeIndex, isAutoPlaying, isHovering]);
  
  // Pause autoplay on hover
  const handleMouseEnter = () => {
    setIsHovering(true);
    if (autoPlayInterval.current) {
      clearInterval(autoPlayInterval.current);
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    if (isAutoPlaying) {
      startAutoPlay();
    }
  };
  
  return (
    <Box 
      py={10} 
      position="relative" 
      overflow="hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Container maxW="container.xl" position="relative">
        {/* Carousel container */}
        <Box 
          position="relative" 
          height={{ base: "480px", md: "500px" }}
          my={8}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <MotionBox
              key={activeIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              position="absolute"
              width="100%"
              height="100%"
            >
              <Flex 
                h="100%" 
                direction={{ base: "column", md: "row" }}
                rounded="xl"
                overflow="hidden"
                shadow={cardShadow}
                bg={bgColor}
              >
                {/* Project Image */}
                <Box 
                  w={{ base: "100%", md: "60%" }} 
                  h={{ base: "200px", md: "100%" }}
                  position="relative"
                  overflow="hidden"
                >
                  <Image 
                    src={projects[activeIndex].image}
                    alt={projects[activeIndex].title}
                    objectFit="cover"
                    w="100%"
                    h="100%"
                    transition="transform 0.6s ease"
                    _hover={{ transform: "scale(1.05)" }}
                  />
                  {/* Tags overlay */}
                  <HStack 
                    position="absolute" 
                    bottom="4" 
                    left="4" 
                    spacing={2}
                  >
                    {projects[activeIndex].tags.map(tag => (
                      <Tag 
                        key={tag} 
                        bg={tagBg} 
                        color={accentColor}
                        fontWeight="medium"
                        size="md"
                        px={3}
                        py={1}
                      >
                        {tag}
                      </Tag>
                    ))}
                  </HStack>
                </Box>
                
                {/* Project Details */}
                <VStack 
                  w={{ base: "100%", md: "40%" }} 
                  p={{ base: 4, md: 8 }}
                  align="flex-start"
                  justify="center"
                  spacing={4}
                >
                  <Heading 
                    as="h3" 
                    size="lg" 
                    color={textColor}
                    fontWeight="300"
                  >
                    {projects[activeIndex].title}
                  </Heading>
                  
                  <Text 
                    color={subtextColor}
                    fontSize="lg"
                    lineHeight="tall"
                  >
                    {projects[activeIndex].description}
                  </Text>
                  
                  <HStack 
                    mt={4}
                    as={RouterLink}
                    to={projects[activeIndex].link}
                    color={accentColor}
                    fontWeight="medium"
                    transition="transform 0.3s ease"
                    _hover={{ 
                      textDecor: "none", 
                      transform: "translateX(4px)" 
                    }}
                  >
                    <Text>View Project</Text>
                    <FiExternalLink />
                  </HStack>
                </VStack>
              </Flex>
            </MotionBox>
          </AnimatePresence>
          
          {/* Navigation Controls */}
          <Flex
            position="absolute"
            w="100%"
            justify="space-between"
            align="center"
            top="50%"
            transform="translateY(-50%)"
            px={{ base: 2, md: 4 }}
            pointerEvents="none"
          >
            <IconButton
              aria-label="Previous project"
              icon={<FiArrowLeft />}
              onClick={prevSlide}
              variant="solid"
              rounded="full"
              bg={controlBg}
              color={accentColor}
              shadow="md"
              size="lg"
              pointerEvents="auto"
              opacity={isHovering ? 1 : 0.6}
              transition="all 0.3s ease"
              _hover={{ transform: "scale(1.1)", opacity: 1 }}
            />
            
            <IconButton
              aria-label="Next project"
              icon={<FiArrowRight />}
              onClick={nextSlide}
              variant="solid"
              rounded="full"
              bg={controlBg}
              color={accentColor}
              shadow="md"
              size="lg"
              pointerEvents="auto"
              opacity={isHovering ? 1 : 0.6}
              transition="all 0.3s ease"
              _hover={{ transform: "scale(1.1)", opacity: 1 }}
            />
          </Flex>
        </Box>
        
        {/* Indicators */}
        <Flex justify="center" mt={6}>
          {projects.map((_, index) => (
            <MotionBox
              key={index}
              as="button"
              width="12px"
              height="12px"
              rounded="full"
              bg={accentColor}
              mx={1}
              variants={indicatorVariants}
              animate={activeIndex === index ? "active" : "inactive"}
              onClick={() => navigateToSlide(index, activeIndex < index ? 1 : -1)}
              transition="all 0.2s"
              _hover={{ opacity: 0.8 }}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default InfiniteProjectCarousel; 
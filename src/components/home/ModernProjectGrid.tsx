import React, { useState, useRef, useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Text,
  Heading,
  Grid,
  Flex,
  Link,
  Badge,
  Container,
  useColorModeValue,
  VStack,
  HStack,
  AspectRatio,
  chakra,
  shouldForwardProp,
  Tag,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion, useAnimation, useMotionValue, isValidMotionProp } from 'framer-motion';
import { FiArrowRight, FiExternalLink, FiCode, FiLayers } from 'react-icons/fi';

// Define ChakraBox - a component that accepts both chakra and motion props
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

// Project interface
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

interface ModernProjectGridProps {
  projects: Project[];
}

/**
 * A modern, award-winning project grid component that showcases projects
 * with dynamic layouts, 3D effects, and interactive hover states.
 */
const ModernProjectGrid: React.FC<ModernProjectGridProps> = ({ projects }) => {
  // Mouse position for interactive effects
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Track if user has interacted with projects
  const [hasInteracted, setHasInteracted] = useState(false);
  
  // Refs for tracking the container
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Animation controls
  const controls = useAnimation();
  
  // Colors adapted to color mode
  const textColor = useColorModeValue('gray.800', 'white');
  const bgColor = useColorModeValue('white', 'gray.800');
  const accentColor = useColorModeValue('brand.500', 'brand.300');
  const cardBg = useColorModeValue('gray.50', 'gray.800');
  const hoverBg = useColorModeValue('white', 'gray.700');
  const subtleText = useColorModeValue('gray.600', 'gray.400');
  const tagBg = useColorModeValue('gray.100', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  
  // Responsive layout
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  const isFullWidth = useBreakpointValue({ base: true, md: false });
  const spanAll = useBreakpointValue({ base: false, md: true, lg: true });
  
  // Calculate mouse position relative to container
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    mouseX.set(x);
    mouseY.set(y);
    
    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };
  
  // Initial animation sequence on mount
  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      });
      
      await controls.start("visible");
    };
    
    sequence();
  }, [controls]);
  
  // Animation variants for project cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }),
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
  
  // Animation for featured (first) project
  const featuredProjectVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
  
  // Custom component for project card
  const ProjectCard = ({ project, index, isFeatured = false }: { project: Project; index: number; isFeatured?: boolean }) => {
    return (
      <ChakraBox
        position="relative"
        overflow="hidden"
        custom={index}
        variants={isFeatured ? featuredProjectVariants : cardVariants}
        initial="hidden"
        animate={controls}
        whileHover="hover"
        height="100%"
        bg={cardBg}
        borderRadius="xl"
        boxShadow="lg"
        transition="all 0.3s ease"
        borderWidth="1px"
        borderColor={borderColor}
        _hover={{
          boxShadow: "2xl",
          borderColor: accentColor,
          zIndex: 2
        }}
      >
        <AspectRatio ratio={isFeatured ? 16 / 9 : 4 / 3}>
          <ChakraBox
            bgImage={`url(${project.image})`}
            bgSize="cover"
            bgPosition="center"
            w="full"
            h="full"
            position="relative"
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bg: 'blackAlpha.300',
              transition: 'all 0.3s ease',
            }}
            _groupHover={{
              transform: 'scale(1.05)',
              _before: {
                bg: 'blackAlpha.100'
              }
            }}
            transition="all 0.5s ease"
          />
        </AspectRatio>
        
        <VStack
          p={isFeatured ? 6 : 4}
          align="flex-start"
          spacing={isFeatured ? 4 : 3}
          h="100%"
        >
          <HStack spacing={2} mb={2}>
            {project.tags.map((tag) => (
              <Tag
                key={tag}
                size={isFeatured ? "md" : "sm"}
                bg={tagBg}
                color={accentColor}
                fontWeight="medium"
              >
                {tag}
              </Tag>
            ))}
          </HStack>
          
          <Heading
            size={isFeatured ? "lg" : "md"}
            color={textColor}
            fontWeight="semibold"
            lineHeight="tight"
          >
            {project.title}
          </Heading>
          
          <Text
            color={subtleText}
            fontSize={isFeatured ? "md" : "sm"}
            lineHeight="tall"
            noOfLines={isFeatured ? 3 : 2}
          >
            {project.description}
          </Text>
          
          <HStack 
            mt="auto"
            pt={2}
            as={RouterLink}
            to={project.link}
            color={accentColor}
            fontWeight="medium"
            spacing={1}
            _hover={{ textDecoration: 'none' }}
          >
            <Text fontSize={isFeatured ? "md" : "sm"}>View Project</Text>
            <Icon as={FiArrowRight} transition="transform 0.3s ease" _groupHover={{ transform: 'translateX(3px)' }} />
          </HStack>
        </VStack>
        
        {/* Corner accent */}
        <Box
          position="absolute"
          top="0"
          right="0"
          width="100px"
          height="100px"
          transform="translate(50%, -50%) rotate(45deg)"
          bg={accentColor}
          opacity="0.1"
        />
      </ChakraBox>
    );
  };
  
  // Decorative elements for visual interest
  const DecorativeElement = ({ top, left, size, delay, opacity }: { top: string; left: string; size: string; delay: number; opacity: number }) => (
    <ChakraBox
      position="absolute"
      top={top}
      left={left}
      width={size}
      height={size}
      borderRadius="full"
      bg={accentColor}
      opacity={opacity}
      initial={{ scale: 0 }}
      animate={{ 
        scale: [0, 1, 1.2, 1],
        opacity: [0, opacity, opacity * 1.2, opacity],
      }}
      transition={{
        delay,
        duration: 1.5,
        ease: "easeOut",
        repeat: 0,
      }}
    />
  );
  
  return (
    <Box 
      py={16} 
      position="relative" 
      overflow="hidden"
      ref={containerRef}
      onMouseMove={handleMouseMove}
    >
      {/* Decorative elements */}
      <DecorativeElement top="-50px" left="10%" size="100px" delay={0.2} opacity={0.05} />
      <DecorativeElement top="30%" left="-30px" size="60px" delay={0.4} opacity={0.07} />
      <DecorativeElement top="70%" left="50%" size="120px" delay={0.6} opacity={0.04} />
      <DecorativeElement top="20%" left="85%" size="80px" delay={0.8} opacity={0.06} />
      
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={16} align="stretch">
          {/* Featured project (first project) */}
          <ChakraBox 
            as="section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <ProjectCard project={projects[0]} index={0} isFeatured={true} />
          </ChakraBox>
          
          {/* Project grid */}
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
            gap={{ base: 8, md: 6 }}
            as={motion.div}
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {projects.slice(1).map((project, index) => (
              <ChakraBox key={project.id} role="group">
                <ProjectCard project={project} index={index + 1} />
              </ChakraBox>
            ))}
          </Grid>
          
          {/* View all projects link */}
          <Flex justify="center" mt={6}>
            <ChakraBox
              as={RouterLink}
              to="/projects"
              display="inline-flex"
              alignItems="center"
              color={textColor}
              fontWeight="semibold"
              fontSize="lg"
              px={4}
              py={2}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="full"
              _hover={{
                bg: hoverBg,
                transform: "translateY(-2px)",
                boxShadow: "md",
                borderColor: accentColor,
              }}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              transition="all 0.2s"
            >
              View All Projects
              <Icon as={FiArrowRight} ml={2} />
            </ChakraBox>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default ModernProjectGrid; 
import { useState, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  useColorModeValue,
  LinkBox,
  LinkOverlay,
  AspectRatio,
  Badge,
  SimpleGrid,
  Icon,
  Grid,
  GridItem,
  Divider,
  Tag,
  useBreakpointValue,
  chakra,
} from '@chakra-ui/react';
import { motion, useAnimation, AnimatePresence, useInView } from 'framer-motion';
import { FiArrowRight, FiAward, FiCalendar, FiCode, FiExternalLink, FiLayers, FiTool, FiUser } from 'react-icons/fi';

// Wrap motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionImage = motion(Image);
const MotionGrid = motion(Grid);
const MotionGridItem = motion(GridItem);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionBadge = motion(Badge);
const MotionAspectRatio = motion(AspectRatio);
const MotionButton = motion(Button);

// Enhanced featured projects data with additional fields
const featuredProjects = [
  {
    id: 1,
    title: 'L.Denise Photography Website',
    description: 'A sustainable shopping experience built with React and Node.js, featuring carbon footprint tracking for purchases and sustainable product recommendations.',
    longDescription: 'Developed a comprehensive e-commerce platform focused on sustainable products with features including carbon footprint tracking, eco-friendly product filtering, and integrated sustainability metrics for conscious consumers.',
    image: 'images/1.png',
    thumbnails: [
      'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1555421676-22b0fb40bbbf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    ],
    categories: ['Web Development', 'E-commerce'],
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Redux'],
    duration: '4 months',
    client: 'GreenLife Collective',
    outcome: 'Increased sales by 45% and reduced carbon footprint by 32%',
    featured: true,
    link: '/projects/eco-friendly-ecommerce',
    color: 'green',
    role: 'Lead Developer & Designer',
  },
  {
    id: 2,
    title: 'Financial Dashboard',
    description: 'Interactive data visualization dashboard for financial analytics with real-time updates and predictive modeling for investment decision-making.',
    longDescription: 'Created a powerful financial dashboard with real-time data visualization, customizable widgets, predictive analytics, and comprehensive reporting tools for portfolio management and investment tracking.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    ],
    categories: ['Web Development', 'Data Visualization'],
    technologies: ['React', 'D3.js', 'Firebase', 'Material UI', 'TypeScript'],
    duration: '3 months',
    client: 'InvestSmart Inc.',
    outcome: 'Reduced analysis time by 65% and improved decision accuracy by 28%',
    featured: false,
    link: '/projects/financial-dashboard',
    color: 'blue',
    role: 'Frontend Developer',
  },
  {
    id: 3,
    title: 'Corporate Brand Identity',
    description: 'Complete brand identity design for a tech startup, including logo, color system, typography, and brand guidelines for consistent application.',
    longDescription: 'Crafted a comprehensive brand identity system for a rising tech startup, encompassing logo design, color palette development, typography selection, and detailed brand guidelines for multi-channel application.',
    image: 'https://images.unsplash.com/photo-1600508773759-f4e82a050f23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1600508773759-f4e82a050f23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1600508774634-4e11e98c1f55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    ],
    categories: ['Branding', 'Graphic Design'],
    technologies: ['Adobe Illustrator', 'Photoshop', 'Figma', 'InDesign'],
    duration: '6 weeks',
    client: 'NexGen Technologies',
    outcome: 'Increased brand recognition by 78% and social media engagement by 120%',
    featured: false,
    link: '/projects/corporate-brand-identity',
    color: 'purple',
    role: 'Brand Designer',
  },
  {
    id: 4,
    title: 'Health & Wellness Mobile App',
    description: 'Intuitive mobile application for health tracking and wellness management with personalized recommendations and social accountability features.',
    longDescription: 'Designed and developed a comprehensive health and wellness mobile app featuring activity tracking, nutrition monitoring, guided meditation sessions, sleep analysis, and social accountability features.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    thumbnails: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1556742231-ab6e1de360b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    ],
    categories: ['Mobile Development', 'UI/UX Design'],
    technologies: ['React Native', 'Firebase', 'Redux', 'Expo', 'Figma'],
    duration: '5 months',
    client: 'Wellness Works',
    outcome: 'Over 100k downloads with 4.8/5 star rating across app stores',
    featured: false,
    link: '/projects/health-wellness-app',
    color: 'teal',
    role: 'Mobile Developer & UI Designer',
  },
];

// Get the featured project (for main showcase)
const mainProject = featuredProjects.find(project => project.featured) || featuredProjects[0];
// Get the rest of the projects
const secondaryProjects = featuredProjects.filter(project => project.id !== mainProject.id);

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

const textRevealVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// 3D hover effect for project cards
const hoverVariants = {
  rest: { 
    scale: 1, 
    rotateX: 0, 
    rotateY: 0, 
    boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)"
  },
  hover: { 
    scale: 1.02, 
    rotateX: 5, 
    rotateY: 5, 
    boxShadow: "0 20px 40px -20px rgba(0, 0, 0, 0.3)",
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1.0]
    }
  }
};

// Badge pop animation
const badgeVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

// Floating elements animation
const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

// Decorative Elements Component
const DecorativeElements = () => {
  const bgGradient1 = useColorModeValue(
    'radial-gradient(circle at 20% 30%, rgba(219, 239, 255, 0.8) 0%, rgba(219, 239, 255, 0) 70%)',
    'radial-gradient(circle at 20% 30%, rgba(19, 39, 55, 0.8) 0%, rgba(19, 39, 55, 0) 70%)'
  );
  
  const bgGradient2 = useColorModeValue(
    'radial-gradient(circle at 80% 70%, rgba(255, 231, 219, 0.7) 0%, rgba(255, 231, 219, 0) 70%)',
    'radial-gradient(circle at 80% 70%, rgba(55, 31, 19, 0.7) 0%, rgba(55, 31, 19, 0) 70%)'
  );
  
  const bgGradient3 = useColorModeValue(
    'radial-gradient(circle at 50% 50%, rgba(237, 231, 255, 0.6) 0%, rgba(237, 231, 255, 0) 60%)',
    'radial-gradient(circle at 50% 50%, rgba(37, 31, 55, 0.6) 0%, rgba(37, 31, 55, 0) 60%)'
  );

  return (
    <>
      <MotionBox
        position="absolute"
        top="-20%"
        left="-10%"
        width="70%"
        height="70%"
        background={bgGradient1}
        zIndex={0}
        borderRadius="full"
        filter="blur(60px)"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 8,
          repeatType: "mirror",
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <MotionBox
        position="absolute"
        bottom="-30%"
        right="-20%"
        width="80%"
        height="80%"
        background={bgGradient2}
        zIndex={0}
        borderRadius="full"
        filter="blur(70px)"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 10,
          delay: 1,
          repeatType: "mirror",
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <MotionBox
        position="absolute"
        top="30%"
        left="50%"
        width="60%"
        height="60%"
        background={bgGradient3}
        zIndex={0}
        borderRadius="full"
        filter="blur(50px)"
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{
          duration: 9,
          delay: 2,
          repeatType: "mirror",
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </>
  );
};

// Glass Card component with 3D effects
const GlassCard = ({ children, hasHover = true, color = 'blue', ...props }) => {
  const bgColor = useColorModeValue(
    `rgba(255, 255, 255, 0.7)`,
    `rgba(26, 32, 44, 0.7)`
  );
  
  const borderColor = useColorModeValue(
    `rgba(255, 255, 255, 0.8)`,
    `rgba(255, 255, 255, 0.08)`
  );
  
  const accentMap = {
    blue: useColorModeValue('rgba(66, 153, 225, 0.2)', 'rgba(66, 153, 225, 0.15)'),
    green: useColorModeValue('rgba(72, 187, 120, 0.2)', 'rgba(72, 187, 120, 0.15)'),
    purple: useColorModeValue('rgba(159, 122, 234, 0.2)', 'rgba(159, 122, 234, 0.15)'),
    teal: useColorModeValue('rgba(56, 178, 172, 0.2)', 'rgba(56, 178, 172, 0.15)'),
  };
  
  const accentGlow = accentMap[color] || accentMap.blue;
  
  return (
    <MotionBox
      bg={bgColor}
      backdropFilter="blur(12px)"
      borderRadius="xl"
      borderWidth="1px"
      borderColor={borderColor}
      boxShadow={`0 10px 30px -15px ${accentGlow}, 0 4px 6px -2px rgba(0, 0, 0, 0.05)`}
      overflow="hidden"
      position="relative"
      variants={hasHover ? hoverVariants : {}}
      initial="rest"
      whileHover="hover"
      style={{ perspective: "1000px" }}
      {...props}
    >
      <Box
        position="absolute"
        top="-50%"
        left="-50%"
        width="200%"
        height="200%"
        background={`linear-gradient(
          135deg,
          ${accentGlow} 0%,
          transparent 50%,
          ${accentGlow} 100%
        )`}
        opacity="0.2"
        transform="translateZ(-10px)"
        filter="blur(20px)"
        zIndex={0}
      />
      <Box position="relative" zIndex={1}>
        {children}
      </Box>
    </MotionBox>
  );
};

// Project Info Tag Component
const ProjectInfoTag = ({ icon, text }) => {
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const textColor = useColorModeValue('gray.700', 'gray.300');
  
  return (
    <HStack
      bg={bgColor}
      px={3}
      py={1}
      borderRadius="full"
      fontSize="sm"
      alignItems="center"
      spacing={1}
    >
      <Icon as={icon} boxSize={3} />
      <Text color={textColor} fontWeight="medium">{text}</Text>
    </HStack>
  );
};

// Featured Project Component
const FeaturedProject = ({ project }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const accentColor = useColorModeValue(`${project.color}.500`, `${project.color}.300`);
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const mutedTextColor = useColorModeValue('gray.600', 'gray.400');
  
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  
  return (
    <MotionGrid
      ref={ref}
      templateColumns={{ base: '1fr', lg: '5fr 4fr' }}
      gap={{ base: 8, lg: 12 }}
      alignItems="center"
      opacity={isInView ? 1 : 0}
      transform={isInView ? "translateY(0)" : "translateY(50px)"}
      transition="all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s"
      mb={16}
    >
      {/* Featured Image */}
      <GridItem order={{ base: 1, lg: isLargeScreen ? 1 : 2 }}>
        <GlassCard
          hasHover={false}
          p={0}
          color={project.color}
          height="100%"
        >
          <AspectRatio ratio={16 / 9} overflow="hidden">
            <MotionImage
              src={project.image}
              alt={project.title}
              objectFit="cover"
              w="100%"
              h="100%"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </AspectRatio>
          
          {/* Categories */}
          <HStack 
            position="absolute" 
            top="4" 
            left="4" 
            spacing={2}
          >
            {project.categories.map(category => (
              <MotionBadge 
                key={category} 
                colorScheme={project.color}
                fontSize="xs"
                py={1} 
                px={3}
                borderRadius="full"
                variants={badgeVariants}
                whileHover="hover"
              >
                {category}
              </MotionBadge>
            ))}
          </HStack>
        </GlassCard>
      </GridItem>
      
      {/* Project Details */}
      <GridItem order={{ base: 2, lg: isLargeScreen ? 2 : 1 }}>
        <MotionFlex
          direction="column"
          spacing={5}
          p={{ base: 3, md: 2 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <VStack align="start" spacing={4}>
            <MotionBox>
              <Badge colorScheme={project.color} fontSize="sm" px={2} py={1} mb={2}>
                Featured Project
              </Badge>
              <MotionHeading 
                as="h3" 
                fontSize={{ base: '3xl', md: '4xl' }}
                fontWeight="bold"
                lineHeight="tight"
                color={textColor}
              >
                {project.title}
              </MotionHeading>
            </MotionBox>
            
            <MotionText 
              fontSize={{ base: 'md', md: 'lg' }}
              color={mutedTextColor}
              lineHeight="tall"
            >
              {project.longDescription}
            </MotionText>
            
            <HStack flexWrap="wrap" spacing={3} mt={2}>
              <ProjectInfoTag icon={FiUser} text={project.client} />
              <ProjectInfoTag icon={FiCalendar} text={project.duration} />
              <ProjectInfoTag icon={FiTool} text={project.role} />
            </HStack>
            
            <Box>
              <Text fontWeight="semibold" mb={2} color={accentColor}>
                Technologies Used
              </Text>
              <HStack flexWrap="wrap" spacing={2}>
                {project.technologies.map(tech => (
                  <Tag 
                    key={tech} 
                    size="sm" 
                    colorScheme={project.color} 
                    variant="subtle"
                    mb={2}
                  >
                    {tech}
                  </Tag>
                ))}
              </HStack>
            </Box>
            
            <Box>
              <Text fontWeight="semibold" mb={2} color={accentColor}>
                Outcome
              </Text>
              <HStack>
                <Icon as={FiAward} color={accentColor} />
                <Text fontWeight="medium">{project.outcome}</Text>
              </HStack>
            </Box>
            
            <MotionButton
              as={RouterLink}
              to={project.link}
              colorScheme={project.color}
              rightIcon={<Icon as={FiArrowRight} />}
              size="lg"
              mt={2}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              View Case Study
            </MotionButton>
          </VStack>
        </MotionFlex>
      </GridItem>
    </MotionGrid>
  );
};

// Secondary Project Card Component
const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
  const accentColor = useColorModeValue(`${project.color}.500`, `${project.color}.300`);
  const mutedTextColor = useColorModeValue('gray.600', 'gray.400');
  
  return (
    <MotionBox
      ref={ref}
      opacity={isInView ? 1 : 0}
      transform={isInView ? "translateY(0)" : "translateY(30px)"}
      transition={`all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.2 + index * 0.1}s`}
    >
      <GlassCard
        as={LinkBox}
        height="100%"
        color={project.color}
        overflow="hidden"
        role="group"
      >
        <Box position="relative">
          <AspectRatio ratio={16 / 9}>
            <MotionImage
              src={project.image}
              alt={project.title}
              objectFit="cover"
              w="100%"
              h="100%"
              transition="transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1)"
              _groupHover={{ transform: 'scale(1.05)' }}
            />
          </AspectRatio>
          
          {/* Categories */}
          <HStack 
            position="absolute" 
            top="3" 
            left="3" 
            spacing={2}
            zIndex={2}
          >
            {project.categories.map(category => (
              <MotionBadge 
                key={category} 
                colorScheme={project.color}
                fontSize="xs"
                py={1} 
                px={2}
                borderRadius="full"
                variants={badgeVariants}
                whileHover="hover"
              >
                {category}
              </MotionBadge>
            ))}
          </HStack>
          
          {/* Overlay on hover */}
          <Box
            position="absolute"
            inset={0}
            bgGradient={`linear(to-t, ${project.color}.900, transparent)`}
            opacity={0.1}
            transition="all 0.3s ease"
            _groupHover={{ opacity: 0.3 }}
          />
        </Box>
        
        <VStack 
          p={5}
          spacing={4}
          align="flex-start"
          height="calc(100% - 225px)"
          justifyContent="space-between"
        >
          <VStack align="flex-start" spacing={2}>
            <Heading 
              as="h3" 
              fontSize={{ base: 'xl', md: '2xl' }}
              fontWeight="bold"
              lineHeight="tight"
            >
              <LinkOverlay as={RouterLink} to={project.link}>
                {project.title}
              </LinkOverlay>
            </Heading>
            
            <Text 
              fontSize={{ base: 'sm', md: 'md' }}
              color={mutedTextColor}
              noOfLines={3}
            >
              {project.description}
            </Text>
          </VStack>
          
          <HStack spacing={4} wrap="wrap">
            <HStack>
              <Icon as={FiCalendar} color={accentColor} fontSize="sm" />
              <Text fontSize="sm" color={mutedTextColor}>{project.duration}</Text>
            </HStack>
            <HStack>
              <Icon as={FiCode} color={accentColor} fontSize="sm" />
              <Text fontSize="sm" color={mutedTextColor}>
                {project.technologies.slice(0, 2).join(', ')}
                {project.technologies.length > 2 && '...'}
              </Text>
            </HStack>
          </HStack>
          
          <Button
            as={RouterLink}
            to={project.link}
            variant="link"
            colorScheme={project.color}
            rightIcon={<Icon as={FiExternalLink} />}
            alignSelf="flex-start"
            size="sm"
            fontWeight="medium"
            _hover={{
              textDecoration: 'none',
            }}
            sx={{
              '& svg': { 
                transition: 'transform 0.3s ease',
              },
              '&:hover svg': {
                transform: 'translateX(3px)',
              }
            }}
          >
            View Project
          </Button>
        </VStack>
      </GlassCard>
    </MotionBox>
  );
};

// Main Component
const ProjectShowcase = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const mutedTextColor = useColorModeValue('gray.600', 'gray.400');
  const accentColor = useColorModeValue('brand.500', 'brand.300');
  
  return (
    <Box 
      as="section" 
      py={{ base: 16, md: 24 }} 
      position="relative"
      overflow="hidden"
    >
      {/* Decorative Background Elements */}
      <DecorativeElements />
      
      <Container maxW="container.xl" position="relative" zIndex={1}>
        {/* Section Heading */}
        <VStack spacing={6} mb={{ base: 12, md: 16 }} textAlign="center">
          <MotionHeading 
            as="h2" 
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="light"
            lineHeight="shorter"
            fontFamily="'Roboto', sans-serif"
            variants={textRevealVariants}
            initial="hidden"
            animate="visible"
          >
            Featured Projects
          </MotionHeading>
          
          <MotionText 
            fontSize={{ base: 'lg', md: 'xl' }}
            maxW="container.md"
            color={mutedTextColor}
            variants={textRevealVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Explore some of my recent work across web development, design, and branding.
            Each project represents my commitment to quality and attention to detail.
          </MotionText>
          
          <MotionBox 
            width="80px" 
            height="4px" 
            bg={accentColor} 
            borderRadius="full"
            mt={4}
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </VStack>

        {/* Featured Project (Main Showcase) */}
        <FeaturedProject project={mainProject} />
        
        {/* Secondary Projects Grid */}
        <Box mt={20}>
          <MotionHeading
            as="h3"
            fontSize={{ base: '2xl', md: '3xl' }}
            mb={8}
            textAlign="center"
            fontFamily="'Roboto', sans-serif"
            fontWeight="light"
            variants={textRevealVariants}
            initial="hidden"
            animate="visible"
          >
            More Project Highlights
          </MotionHeading>
          
          <SimpleGrid 
            columns={{ base: 1, md: 2, lg: 3 }} 
            spacing={8}
            mt={8}
          >
            {secondaryProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </SimpleGrid>
        </Box>
        
        {/* View All Projects Button */}
        <Flex justify="center" mt={16}>
          <MotionButton
            as={RouterLink}
            to="/projects"
            size="lg"
            colorScheme="brand"
            rightIcon={<Icon as={FiArrowRight} />}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{ x: 5 }}
          >
            View All Projects
          </MotionButton>
        </Flex>
      </Container>
    </Box>
  );
};

export default ProjectShowcase; 
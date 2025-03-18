import { useState, useMemo, useEffect, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Tag,
  Text,
  VStack,
  useColorModeValue,
  Wrap,
  WrapItem,
  useBreakpointValue,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Badge,
  Divider,
  AspectRatio,
  Show,
  Hide,
} from '@chakra-ui/react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FiSearch, FiArrowRight, FiChevronDown, FiFilter, FiEye, FiGithub, FiLink, FiChevronRight, FiX } from 'react-icons/fi';

// Wrap motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionImage = motion(Image);
const MotionVStack = motion(VStack);
const MotionBadge = motion(Badge);

// Sample project data - in a real app, this would come from an API or CMS
const projects = [
  {
    id: 1,
    title: 'Eco-Friendly E-commerce Platform',
    description: 'A sustainable shopping experience built with React and Node.js, featuring carbon footprint tracking for purchases.',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    categories: ['web', 'ecommerce'],
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '/projects/eco-friendly-ecommerce',
    featured: true,
    year: 2023,
    client: 'EcoShop',
    demoUrl: 'https://ecoshop-demo.com'
  },
  {
    id: 2,
    title: 'Financial Dashboard',
    description: 'Interactive data visualization dashboard for financial analytics with real-time updates and predictive modeling.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    categories: ['web', 'dashboard'],
    tags: ['TypeScript', 'D3.js', 'Firebase'],
    link: '/projects/financial-dashboard',
    featured: true,
    year: 2023,
    client: 'FinTech Inc.',
    demoUrl: 'https://fintech-dashboard.com'
  },
  {
    id: 3,
    title: 'Health & Wellness App',
    description: 'Mobile application for tracking fitness and mental wellbeing with personalized recommendations and habit tracking.',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80',
    categories: ['mobile', 'health'],
    tags: ['React Native', 'GraphQL', 'AWS'],
    link: '/projects/health-wellness-app',
    featured: false,
    year: 2022,
    client: 'Wellness Solutions',
    demoUrl: 'https://health-app-demo.com'
  },
  {
    id: 4,
    title: 'Corporate Brand Identity',
    description: 'Complete brand identity design for a tech startup, including logo, color system, typography, and brand guidelines.',
    image: 'https://images.unsplash.com/photo-1600508773759-f4e82a050f23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    categories: ['branding', 'design'],
    tags: ['Branding', 'Logo Design', 'Style Guide'],
    link: '/projects/corporate-brand-identity',
    featured: false,
    year: 2022,
    client: 'TechNova',
    demoUrl: 'https://technova-brand.com'
  },
  {
    id: 5,
    title: 'Restaurant Booking System',
    description: 'Online reservation platform for a chain of restaurants with waitlist management and predictive table allocation.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    categories: ['web', 'mobile'],
    tags: ['React', 'React Native', 'Node.js', 'PostgreSQL'],
    link: '/projects/restaurant-booking',
    featured: true,
    year: 2023,
    client: 'Culinary Group',
    demoUrl: 'https://booking-demo.com'
  },
  {
    id: 6,
    title: 'Educational Platform UI',
    description: 'User interface design for an online learning platform with personalized learning paths and immersive content presentation.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    categories: ['design', 'web'],
    tags: ['UI/UX', 'Figma', 'Prototyping'],
    link: '/projects/educational-platform',
    featured: false,
    year: 2021,
    client: 'EduLearn',
    demoUrl: 'https://edulearn-platform.com'
  },
  {
    id: 7,
    title: 'Smart Home IoT Dashboard',
    description: 'Control interface for connected home devices with energy usage analytics and automated optimization suggestions.',
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    categories: ['web', 'iot'],
    tags: ['React', 'MQTT', 'WebSockets'],
    link: '/projects/smart-home-dashboard',
    featured: false,
    year: 2022,
    client: 'Smart Living',
    demoUrl: 'https://smarthome-demo.com'
  },
  {
    id: 8,
    title: 'Travel Photography Portfolio',
    description: 'Responsive portfolio website for a travel photographer with immersive galleries and location-based storytelling.',
    image: 'https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80',
    categories: ['web', 'portfolio'],
    tags: ['Next.js', 'Tailwind CSS', 'Cloudinary'],
    link: '/projects/travel-photography',
    featured: false,
    year: 2021,
    client: 'Wanderlust Photos',
    demoUrl: 'https://travel-portfolio-demo.com'
  }
];

// Get all unique categories and years
const allCategories = ['all', ...new Set(projects.flatMap(project => project.categories))];
const allYears = [...new Set(projects.map(project => project.year))].sort((a, b) => b - a);

// Staggered animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
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
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

// Project card component
const ProjectCard = ({ project, index }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const mutedTextColor = useColorModeValue('gray.600', 'gray.400');
  const tagBg = useColorModeValue('gray.100', 'gray.700');
  const accentColor = useColorModeValue('brand.500', 'brand.300');
  
  // Different layouts for different positions in the grid
  const isLarge = index % 5 === 0;
  const isWide = index % 3 === 1;
  
  return (
    <MotionBox
      variants={itemVariants}
      layout
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      gridColumn={isLarge ? { base: "1 / -1", md: "span 2" } : isWide ? { md: "span 2", lg: "span 1" } : "span 1"}
      height="100%"
    >
      <Box
        as={RouterLink}
        to={project.link}
        borderRadius="xl"
        overflow="hidden"
        bg={cardBg}
        boxShadow="lg"
        position="relative"
        height="100%"
        display="flex"
        flexDirection="column"
        role="group"
        _hover={{ textDecoration: 'none' }}
      >
        <Box position="relative" overflow="hidden">
          <AspectRatio ratio={isLarge ? 21/9 : 16/9}>
            <MotionImage
              src={project.image}
              alt={project.title}
              objectFit="cover"
              w="100%"
              h="100%"
              _groupHover={{ transform: 'scale(1.05)' }}
              transition="transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)"
            />
          </AspectRatio>
          
          {/* Overlay on hover */}
          <Box
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bg="blackAlpha.700"
            opacity="0"
            transition="all 0.3s ease"
            _groupHover={{ opacity: 1 }}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <HStack spacing={6}>
              <VStack>
                <Icon as={FiEye} color="white" boxSize={6} />
                <Text color="white" fontSize="sm">View Project</Text>
              </VStack>
              {project.demoUrl && (
                <VStack>
                  <Icon as={FiLink} color="white" boxSize={6} />
                  <Text color="white" fontSize="sm">Live Demo</Text>
                </VStack>
              )}
            </HStack>
          </Box>
          
          {/* Project year badge */}
          <Badge
            position="absolute"
            top="3"
            right="3"
            colorScheme="brand"
            variant="solid"
            fontSize="xs"
            px={2}
            py={1}
            borderRadius="full"
          >
            {project.year}
          </Badge>
          
          {/* Categories */}
          <HStack position="absolute" top="3" left="3" spacing={2}>
            {project.categories.map((category) => (
              <Badge
                key={category}
                textTransform="uppercase"
                fontSize="xs"
                px={2}
                py={1}
                bg="blackAlpha.700"
                color="white"
                borderRadius="full"
                letterSpacing="0.5px"
              >
                {category}
              </Badge>
            ))}
          </HStack>

          {/* Client badge */}
          <Badge
            position="absolute"
            bottom="3"
            left="3"
            bg="whiteAlpha.900"
            color="gray.800"
            fontSize="xs"
            px={2}
            py={1}
            borderRadius="md"
          >
            {project.client}
          </Badge>
        </Box>
        
        <VStack
          p={{ base: 4, md: 6 }}
          align="start"
          spacing={3}
          flex="1"
          justify="space-between"
        >
          <Box width="100%">
            <Heading 
              as="h3" 
              fontSize={isLarge ? "2xl" : "lg"} 
              mb={2}
              color={textColor}
              fontWeight="700"
              letterSpacing="-0.5px"
              _groupHover={{ color: accentColor }}
              transition="color 0.3s ease"
            >
              {project.title}
            </Heading>
            <Text 
              color={mutedTextColor} 
              fontSize={isLarge ? "md" : "sm"}
              noOfLines={2}
              mb={4}
            >
              {project.description}
            </Text>
          </Box>
          
          <Box width="100%">
            <Flex 
              wrap="wrap" 
              gap={2} 
              mb={4}
            >
              {project.tags.map((tag) => (
                <Tag
                  key={tag}
                  size="sm"
                  bg={tagBg}
                  color={mutedTextColor}
                  borderRadius="full"
                  px={3}
                >
                  {tag}
                </Tag>
              ))}
            </Flex>
            
            <HStack justifyContent="space-between" width="100%">
              <Box />
              <HStack>
                <Text
                  fontSize="sm"
                  color={accentColor}
                  fontWeight="medium"
                >
                  View Details
                </Text>
                <Icon 
                  as={FiArrowRight} 
                  color={accentColor}
                  transition="transform 0.3s ease"
                  _groupHover={{ transform: 'translateX(4px)' }}
                />
              </HStack>
            </HStack>
          </Box>
        </VStack>
      </Box>
    </MotionBox>
  );
};

// Custom Background Shapes
const BackgroundShapes = () => {
  return (
    <>
      <MotionBox
        position="absolute"
        top="5%"
        right="5%"
        width="300px"
        height="300px"
        borderRadius="full"
        bg="brand.500"
        filter="blur(150px)"
        opacity="0.15"
        zIndex={0}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.2, 0.15],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <MotionBox
        position="absolute"
        bottom="10%"
        left="5%"
        width="250px"
        height="250px"
        borderRadius="full"
        bg="purple.500"
        filter="blur(150px)"
        opacity="0.1"
        zIndex={0}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 5,
        }}
      />
    </>
  );
};

// Redesigned ProjectsPage component
const ProjectsPage = () => {
  // State for filters and sorting
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('newest');
  const [visibleProjects, setVisibleProjects] = useState(6);
  
  // Color mode values
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const mutedTextColor = useColorModeValue('gray.600', 'gray.400');
  const cardBg = useColorModeValue('white', 'gray.800');
  const accentColor = useColorModeValue('brand.500', 'brand.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  
  // Responsive values
  const gridColumns = useBreakpointValue({ base: 1, md: 2, lg: 3 });
  
  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects;
    
    // Apply category filter
    if (activeFilter !== 'all') {
      filtered = filtered.filter(project => 
        project.categories.includes(activeFilter)
      );
    }
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    // Apply sorting
    return [...filtered].sort((a, b) => {
      switch (sortOption) {
        case 'newest':
          return b.year - a.year;
        case 'oldest':
          return a.year - b.year;
        case 'aToZ':
          return a.title.localeCompare(b.title);
        case 'zToA':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
  }, [activeFilter, searchQuery, sortOption]);
  
  // Reset visible count when filters change
  useEffect(() => {
    setVisibleProjects(6);
  }, [activeFilter, searchQuery, sortOption]);
  
  // Load more projects
  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 3, filteredProjects.length));
  };
  
  // Header with scroll animations
  const headerRef = useRef(null);
  
  return (
    <Box as="main" bg={bgColor} overflowX="hidden">
      {/* Animated background shapes */}
      <BackgroundShapes />
      
      {/* Projects Section */}
      <Box 
        py={{ base: 16, md: 24 }} 
        id="projects"
        position="relative"
        zIndex={2}
      >
        <Container maxW="container.xl">
          {/* Filter Bar */}
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "stretch", md: "center" }}
            mb={12}
            gap={4}
            ref={headerRef}
          >
            {/* Search Input */}
            <InputGroup maxW={{ base: "full", md: "320px" }}>
              <InputLeftElement pointerEvents="none">
                <Icon as={FiSearch} color={mutedTextColor} />
              </InputLeftElement>
              <Input
                placeholder="Search projects..."
                variant="filled"
                bg={useColorModeValue("gray.100", "gray.700")}
                _focus={{
                  bg: useColorModeValue("white", "gray.800"),
                  borderColor: "brand.400",
                }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                borderRadius="full"
              />
            </InputGroup>
            
            <HStack spacing={4} justify={{ base: "space-between", md: "flex-end" }} wrap="wrap">
              {/* Category Filters */}
              <Menu closeOnSelect={false}>
                <MenuButton 
                  as={Button} 
                  rightIcon={<FiChevronDown />} 
                  variant="outline"
                  borderRadius="full"
                  borderColor={borderColor}
                >
                  <HStack>
                    <Icon as={FiFilter} />
                    <Text>Filter</Text>
                  </HStack>
                </MenuButton>
                <MenuList minW="200px">
                  {allCategories.map((category) => (
                    <MenuItem 
                      key={category}
                      onClick={() => setActiveFilter(category)}
                      bg={activeFilter === category ? useColorModeValue("gray.100", "gray.700") : "transparent"}
                      fontWeight={activeFilter === category ? "medium" : "normal"}
                      _hover={{
                        bg: useColorModeValue("gray.100", "gray.700")
                      }}
                    >
                      <HStack spacing={3}>
                        {activeFilter === category && (
                          <Icon as={FiChevronRight} boxSize={4} color={accentColor} />
                        )}
                        <Text pl={activeFilter === category ? 0 : 7} textTransform="capitalize">
                          {category}
                        </Text>
                      </HStack>
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
              
              {/* Sort Options */}
              <Menu>
                <MenuButton
                  as={Button}
                  rightIcon={<FiChevronDown />}
                  variant="outline"
                  borderRadius="full"
                  borderColor={borderColor}
                >
                  <Text>Sort</Text>
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => setSortOption('newest')}>
                    <HStack spacing={3}>
                      {sortOption === 'newest' && (
                        <Icon as={FiChevronRight} boxSize={4} color={accentColor} />
                      )}
                      <Text pl={sortOption === 'newest' ? 0 : 7}>Newest First</Text>
                    </HStack>
                  </MenuItem>
                  <MenuItem onClick={() => setSortOption('oldest')}>
                    <HStack spacing={3}>
                      {sortOption === 'oldest' && (
                        <Icon as={FiChevronRight} boxSize={4} color={accentColor} />
                      )}
                      <Text pl={sortOption === 'oldest' ? 0 : 7}>Oldest First</Text>
                    </HStack>
                  </MenuItem>
                  <MenuItem onClick={() => setSortOption('aToZ')}>
                    <HStack spacing={3}>
                      {sortOption === 'aToZ' && (
                        <Icon as={FiChevronRight} boxSize={4} color={accentColor} />
                      )}
                      <Text pl={sortOption === 'aToZ' ? 0 : 7}>A to Z</Text>
                    </HStack>
                  </MenuItem>
                  <MenuItem onClick={() => setSortOption('zToA')}>
                    <HStack spacing={3}>
                      {sortOption === 'zToA' && (
                        <Icon as={FiChevronRight} boxSize={4} color={accentColor} />
                      )}
                      <Text pl={sortOption === 'zToA' ? 0 : 7}>Z to A</Text>
                    </HStack>
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Flex>
          
          {/* Active Filters Display */}
          {(activeFilter !== 'all' || searchQuery) && (
            <Flex
              mb={8}
              align="center"
              wrap="wrap"
              gap={3}
            >
              <Text color={mutedTextColor} fontSize="sm">Active filters:</Text>
              
              {activeFilter !== 'all' && (
                <Badge
                  colorScheme="brand"
                  borderRadius="full"
                  px={3}
                  py={1}
                  display="flex"
                  alignItems="center"
                >
                  <Text textTransform="capitalize">{activeFilter}</Text>
                  <Icon
                    as={FiX}
                    ml={2}
                    boxSize={3}
                    cursor="pointer"
                    onClick={() => setActiveFilter('all')}
                  />
                </Badge>
              )}
              
              {searchQuery && (
                <Badge
                  colorScheme="gray"
                  borderRadius="full"
                  px={3}
                  py={1}
                  display="flex"
                  alignItems="center"
                >
                  <Text>"{searchQuery}"</Text>
                  <Icon
                    as={FiX}
                    ml={2}
                    boxSize={3}
                    cursor="pointer"
                    onClick={() => setSearchQuery('')}
                  />
                </Badge>
              )}
              
              <Button
                variant="link"
                size="sm"
                colorScheme="brand"
                onClick={() => {
                  setActiveFilter('all');
                  setSearchQuery('');
                }}
              >
                Clear All
              </Button>
            </Flex>
          )}

          {/* Projects Grid */}
          <MotionBox
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.length === 0 ? (
              <Box 
                textAlign="center" 
                py={16} 
                px={6}
                bg={cardBg}
                borderRadius="xl"
                boxShadow="md"
              >
                <VStack spacing={6}>
                  <Heading as="h3" size="lg" color={textColor}>
                    No projects found
                  </Heading>
                  <Text color={mutedTextColor} maxW="xl" mx="auto">
                    No projects match your current filters. Try adjusting your search criteria or browse all projects.
                  </Text>
                  <Button
                    onClick={() => {
                      setActiveFilter('all');
                      setSearchQuery('');
                    }}
                    colorScheme="brand"
                    size="lg"
                  >
                    View All Projects
                  </Button>
                </VStack>
              </Box>
            ) : (
              <>
                <Box
                  display="grid"
                  gridTemplateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                  }}
                  gap={{ base: 6, md: 8 }}
                >
                  <AnimatePresence mode="wait">
                    {filteredProjects
                      .slice(0, visibleProjects)
                      .map((project, index) => (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          index={index}
                        />
                      ))}
                  </AnimatePresence>
                </Box>
                
                {/* Load More Button */}
                {visibleProjects < filteredProjects.length && (
                  <Flex justify="center" mt={16}>
                    <MotionBox
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      <Button
                        onClick={loadMoreProjects}
                        size="lg"
                        variant="outline"
                        colorScheme="brand"
                        rightIcon={<Icon as={FiChevronDown} />}
                        _hover={{
                          transform: 'translateY(4px)',
                          bg: 'brand.50'
                        }}
                        transition="all 0.3s ease"
                      >
                        Load More Projects
                      </Button>
                    </MotionBox>
                  </Flex>
                )}
              </>
            )}
          </MotionBox>
          
          {/* Project Stats */}
          <Box
            mt={20}
            mb={10}
            py={8}
            borderTop="1px solid"
            borderBottom="1px solid"
            borderColor={borderColor}
          >
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={10}>
              <VStack align="flex-start">
                <Text fontSize="5xl" fontWeight="bold" color={accentColor}>
                  {projects.length}
                </Text>
                <Text color={mutedTextColor}>Total Projects</Text>
              </VStack>
              
              <VStack align="flex-start">
                <Text fontSize="5xl" fontWeight="bold" color={accentColor}>
                  {allCategories.length - 1}
                </Text>
                <Text color={mutedTextColor}>Categories</Text>
              </VStack>
              
              <VStack align="flex-start">
                <Text fontSize="5xl" fontWeight="bold" color={accentColor}>
                  {projects.filter(p => p.featured).length}
                </Text>
                <Text color={mutedTextColor}>Featured Works</Text>
              </VStack>
              
              <VStack align="flex-start">
                <Text fontSize="5xl" fontWeight="bold" color={accentColor}>
                  {allYears.length}
                </Text>
                <Text color={mutedTextColor}>Years Experience</Text>
              </VStack>
            </SimpleGrid>
          </Box>
          
          {/* Call to Action */}
          <Box
            mt={16}
            p={{ base: 8, md: 12 }}
            bg={cardBg}
            borderRadius="2xl"
            boxShadow="xl"
            textAlign="center"
            position="relative"
            overflow="hidden"
          >
            <Box
              position="absolute"
              top="-100px"
              right="-100px"
              width="300px"
              height="300px"
              bg={`${accentColor}20`}
              borderRadius="full"
              zIndex={0}
            />
            
            <VStack
              spacing={8}
              position="relative"
              zIndex={1}
            >
              <Heading size="xl">Have a project in mind?</Heading>
              <Text fontSize="lg" color={mutedTextColor} maxW="2xl" mx="auto">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </Text>
              <Button
                as={RouterLink}
                to="/contact"
                size="lg"
                colorScheme="brand"
                rightIcon={<Icon as={FiArrowRight} />}
                _hover={{
                  transform: 'translateX(4px)'
                }}
                transition="all 0.3s ease"
              >
                Let's Talk
              </Button>
            </VStack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ProjectsPage; 
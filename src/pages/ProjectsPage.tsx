import { useState, useMemo } from 'react';
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
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

// Wrap motion components
const MotionBox = motion(Box);

// Sample data - in a real app, this would come from an API or CMS
const projects = [
  {
    id: 1,
    title: 'Eco-Friendly E-commerce Platform',
    description: 'A sustainable shopping experience built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    categories: ['web', 'ecommerce'],
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '/projects/eco-friendly-ecommerce'
  },
  {
    id: 2,
    title: 'Financial Dashboard',
    description: 'Interactive data visualization dashboard for financial analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    categories: ['web', 'dashboard'],
    tags: ['TypeScript', 'D3.js', 'Firebase'],
    link: '/projects/financial-dashboard'
  },
  {
    id: 3,
    title: 'Health & Wellness App',
    description: 'Mobile application for tracking fitness and mental wellbeing',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80',
    categories: ['mobile', 'health'],
    tags: ['React Native', 'GraphQL', 'AWS'],
    link: '/projects/health-wellness-app'
  },
  {
    id: 4,
    title: 'Corporate Brand Identity',
    description: 'Complete brand identity design for a tech startup',
    image: 'https://images.unsplash.com/photo-1600508773759-f4e82a050f23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    categories: ['branding', 'design'],
    tags: ['Branding', 'Logo Design', 'Style Guide'],
    link: '/projects/corporate-brand-identity'
  },
  {
    id: 5,
    title: 'Restaurant Booking System',
    description: 'Online reservation platform for a chain of restaurants',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    categories: ['web', 'mobile'],
    tags: ['React', 'React Native', 'Node.js', 'PostgreSQL'],
    link: '/projects/restaurant-booking'
  },
  {
    id: 6,
    title: 'Educational Platform UI',
    description: 'User interface design for an online learning platform',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80',
    categories: ['design', 'web'],
    tags: ['UI/UX', 'Figma', 'Prototyping'],
    link: '/projects/educational-platform'
  },
  {
    id: 7,
    title: 'Smart Home IoT Dashboard',
    description: 'Control interface for connected home devices',
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    categories: ['web', 'iot'],
    tags: ['React', 'MQTT', 'WebSockets'],
    link: '/projects/smart-home-dashboard'
  },
  {
    id: 8,
    title: 'Travel Photography Portfolio',
    description: 'Responsive portfolio website for a travel photographer',
    image: 'https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80',
    categories: ['web', 'portfolio'],
    tags: ['Next.js', 'Tailwind CSS', 'Cloudinary'],
    link: '/projects/travel-photography'
  }
];

// Get all unique categories
const allCategories = ['all', ...new Set(projects.flatMap(project => project.categories))];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const bgGradient = useColorModeValue(
    'linear(to-r, gray.50, purple.50)',
    'linear(to-r, gray.900, purple.900)'
  );
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const highlightColor = useColorModeValue('brand.500', 'brand.300');
  
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter(project => project.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <Box as="main">
      {/* Hero Section */}
      <Box
        bg={bgGradient}
        pt={{ base: 20, md: 28 }}
        pb={{ base: 16, md: 24 }}
        textAlign="center"
      >
        <Container maxW="container.xl">
          <Heading
            as="h1"
            size="2xl"
            fontWeight="bold"
            mb={4}
          >
            My Projects
          </Heading>
          <Text
            fontSize="xl"
            color={textColor}
            maxW="2xl"
            mx="auto"
            mb={8}
          >
            Explore my portfolio of design and development work across various industries and technologies.
          </Text>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          {/* Category Filters */}
          <Flex
            justify="center"
            mb={12}
            wrap="wrap"
            gap={3}
          >
            {allCategories.map((category) => (
              <Button
                key={category}
                size="md"
                variant={activeFilter === category ? 'solid' : 'outline'}
                colorScheme={activeFilter === category ? 'brand' : 'gray'}
                onClick={() => setActiveFilter(category)}
                mb={{ base: 2, md: 0 }}
                textTransform="capitalize"
              >
                {category}
              </Button>
            ))}
          </Flex>

          {/* Projects Grid */}
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <MotionBox
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  layout
                >
                  <Box
                    as={RouterLink}
                    to={project.link}
                    borderRadius="lg"
                    overflow="hidden"
                    bg={cardBg}
                    boxShadow="md"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: 'translateY(-8px)',
                      boxShadow: 'xl',
                      textDecoration: 'none',
                    }}
                    height="100%"
                    display="flex"
                    flexDirection="column"
                  >
                    <Box position="relative" overflow="hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        objectFit="cover"
                        w="100%"
                        h="220px"
                        transition="transform 0.5s ease"
                        _groupHover={{ transform: 'scale(1.05)' }}
                      />
                      <Wrap position="absolute" top="3" left="3" spacing={2}>
                        {project.categories.map((category) => (
                          <WrapItem key={category}>
                            <Tag
                              size="sm"
                              variant="solid"
                              colorScheme="brand"
                              textTransform="capitalize"
                            >
                              {category}
                            </Tag>
                          </WrapItem>
                        ))}
                      </Wrap>
                    </Box>
                    <VStack
                      p={6}
                      align="start"
                      spacing={3}
                      flex="1"
                      justify="space-between"
                    >
                      <Box>
                        <Heading as="h3" size="md" mb={2}>
                          {project.title}
                        </Heading>
                        <Text color={textColor}>
                          {project.description}
                        </Text>
                      </Box>
                      <HStack spacing={2} flexWrap="wrap">
                        {project.tags.map((tag) => (
                          <Tag
                            key={tag}
                            size="sm"
                            variant="subtle"
                            colorScheme="gray"
                            mt={1}
                          >
                            {tag}
                          </Tag>
                        ))}
                      </HStack>
                    </VStack>
                  </Box>
                </MotionBox>
              ))}
            </AnimatePresence>
          </SimpleGrid>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <Box textAlign="center" py={10}>
              <Heading as="h3" size="md" mb={4}>
                No projects found
              </Heading>
              <Text color={textColor} mb={6}>
                No projects match the selected filter. Try selecting a different category.
              </Text>
              <Button
                onClick={() => setActiveFilter('all')}
                colorScheme="brand"
              >
                View All Projects
              </Button>
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default ProjectsPage; 
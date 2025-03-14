import { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Tag,
  Text,
  VStack,
  useColorModeValue,
  Divider,
  Icon,
  Wrap,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiArrowRight, FiCalendar, FiLink, FiTag, FiUser } from 'react-icons/fi';

// Wrap motion components
const MotionBox = motion(Box);

// Sample data - in a real app, this would come from an API or CMS
const projectsData = [
  {
    id: 'eco-friendly-ecommerce',
    title: 'Eco-Friendly E-commerce Platform',
    description: 'A sustainable shopping experience built with React and Node.js',
    fullDescription: `
      This e-commerce platform was designed specifically for environmentally conscious brands and consumers. 
      The project focused on creating a seamless shopping experience while highlighting the sustainable aspects of each product.
      
      The platform includes features such as carbon footprint tracking, sustainable packaging options, and detailed information about the eco-friendly aspects of each product. 
      The design emphasizes clean, natural aesthetics with a color palette inspired by nature.
    `,
    client: 'GreenLife Organics',
    completionDate: 'June 2023',
    services: ['UI/UX Design', 'Frontend Development', 'Backend Development'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
    website: 'https://example.com/greenlife',
    mainImage: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        alt: 'Homepage of the eco-friendly e-commerce platform'
      },
      {
        src: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        alt: 'Product listing page'
      },
      {
        src: 'https://images.unsplash.com/photo-1555421689-bb0d7c7d9b67?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        alt: 'Shopping cart and checkout process'
      },
      {
        src: 'https://images.unsplash.com/photo-1555421689-3f034debb36a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        alt: 'Mobile responsive design'
      }
    ],
    challenge: `
      The main challenge was to create an e-commerce platform that not only provided a seamless shopping experience but also effectively communicated the sustainable aspects of each product. 
      We needed to balance aesthetic appeal with informative content about eco-friendly practices.
      
      Additionally, we had to implement a system for tracking and displaying the carbon footprint of products and shipping methods, which required integrating with third-party sustainability APIs.
    `,
    solution: `
      We designed a clean, intuitive interface that puts sustainability information front and center without overwhelming the shopping experience. 
      Each product page includes a dedicated section highlighting eco-friendly features, materials, and manufacturing processes.
      
      For the carbon footprint tracking, we developed a custom dashboard that visualizes environmental impact data in an easily digestible format. 
      The checkout process includes options for carbon-neutral shipping and minimal packaging.
      
      The tech stack was chosen for its scalability and performance, with React providing a responsive frontend and Node.js handling the backend logic. 
      MongoDB was selected for its flexibility in storing varied product data and sustainability metrics.
    `,
    results: `
      Since launch, the platform has seen a 45% increase in conversion rate compared to the client's previous website. 
      Customer feedback has been overwhelmingly positive, with particular praise for the transparency around sustainability practices.
      
      The average order value increased by 28%, and the carbon-neutral shipping option was selected by 72% of customers, exceeding initial projections.
      
      The platform has also helped the client establish themselves as a leader in sustainable e-commerce, resulting in features in several industry publications.
    `,
    relatedProjects: ['financial-dashboard', 'restaurant-booking']
  },
  {
    id: 'financial-dashboard',
    title: 'Financial Dashboard',
    description: 'Interactive data visualization dashboard for financial analytics',
    fullDescription: `
      This comprehensive financial dashboard was developed for a fintech startup to help their clients visualize and analyze complex financial data. 
      The dashboard provides real-time insights into investment performance, market trends, and portfolio allocation.
      
      The project required creating intuitive data visualizations that could present complex financial information in an accessible way for users with varying levels of financial literacy.
    `,
    client: 'FinSmart Analytics',
    completionDate: 'November 2023',
    services: ['UI/UX Design', 'Frontend Development', 'Data Visualization'],
    technologies: ['TypeScript', 'React', 'D3.js', 'Firebase', 'Recharts'],
    website: 'https://example.com/finsmart',
    mainImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        alt: 'Main dashboard view with key financial metrics'
      },
      {
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80',
        alt: 'Portfolio performance visualization'
      },
      {
        src: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        alt: 'Market trends analysis screen'
      },
      {
        src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        alt: 'Mobile responsive design of the dashboard'
      }
    ],
    challenge: `
      The primary challenge was creating visualizations that could effectively communicate complex financial data to users with varying levels of financial expertise. 
      We needed to design a system that was sophisticated enough for professional analysts but accessible enough for individual investors.
      
      Additionally, the dashboard needed to handle large datasets with real-time updates without compromising performance or user experience.
    `,
    solution: `
      We implemented a modular dashboard design with customizable widgets that users could arrange according to their preferences and needs. 
      Each visualization was designed with multiple layers of information, allowing users to drill down into the data for more detailed analysis.
      
      For the technical implementation, we used TypeScript to ensure code reliability and D3.js for creating custom, interactive visualizations. 
      Firebase was utilized for real-time data synchronization, and we implemented efficient data caching strategies to optimize performance.
      
      The interface includes contextual help and explanations for financial terms and metrics, making it accessible to users with different levels of financial literacy.
    `,
    results: `
      The dashboard has been adopted by over 5,000 users since its launch, with a 92% satisfaction rate based on user surveys. 
      The client reported a 60% reduction in support tickets related to data interpretation, as users were able to understand their financial information more intuitively.
      
      The platform's ability to handle real-time data updates has been particularly praised, with users reporting that the insights gained have directly influenced their investment decisions.
      
      The success of this project has led to an ongoing partnership with the client for additional features and expansions.
    `,
    relatedProjects: ['smart-home-dashboard', 'health-wellness-app']
  },
  // Additional project data would be included here
];

const ProjectDetailPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [relatedProjects, setRelatedProjects] = useState<any[]>([]);
  
  const bgGradient = useColorModeValue(
    'linear(to-r, gray.50, purple.50)',
    'linear(to-r, gray.900, purple.900)'
  );
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const highlightColor = useColorModeValue('brand.500', 'brand.300');

  useEffect(() => {
    // Simulate API fetch with setTimeout
    setLoading(true);
    setTimeout(() => {
      const foundProject = projectsData.find(p => p.id === projectId);
      setProject(foundProject || null);
      
      if (foundProject && foundProject.relatedProjects) {
        const related = projectsData.filter(p => 
          foundProject.relatedProjects.includes(p.id)
        );
        setRelatedProjects(related);
      }
      
      setLoading(false);
      // Scroll to top when project changes
      window.scrollTo(0, 0);
    }, 300);
  }, [projectId]);

  if (loading) {
    return (
      <Box as="main" minH="80vh" display="flex" alignItems="center" justifyContent="center">
        <Text>Loading project details...</Text>
      </Box>
    );
  }

  if (!project) {
    return (
      <Box as="main" minH="80vh" py={20}>
        <Container maxW="container.xl" textAlign="center">
          <Heading mb={4}>Project Not Found</Heading>
          <Text mb={8}>The project you're looking for doesn't exist or has been removed.</Text>
          <Button as={RouterLink} to="/projects" colorScheme="brand">
            View All Projects
          </Button>
        </Container>
      </Box>
    );
  }

  return (
    <Box as="main">
      {/* Hero Section */}
      <Box
        bg={bgGradient}
        pt={{ base: 20, md: 28 }}
        pb={{ base: 16, md: 24 }}
      >
        <Container maxW="container.xl">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              as={RouterLink}
              to="/projects"
              variant="ghost"
              leftIcon={<FiArrowLeft />}
              mb={6}
              size="sm"
            >
              Back to Projects
            </Button>
            <Heading
              as="h1"
              size="2xl"
              fontWeight="bold"
              mb={4}
            >
              {project.title}
            </Heading>
            <Text
              fontSize="xl"
              color={textColor}
              maxW="3xl"
              mb={8}
            >
              {project.description}
            </Text>
          </MotionBox>
        </Container>
      </Box>

      {/* Main Content */}
      <Box py={{ base: 12, md: 20 }}>
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={10}>
            {/* Left Column - Gallery */}
            <GridItem>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Box
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="xl"
                  mb={6}
                >
                  <Image
                    src={project.gallery[selectedImage].src}
                    alt={project.gallery[selectedImage].alt}
                    w="full"
                    h={{ base: '300px', md: '500px' }}
                    objectFit="cover"
                  />
                </Box>
                
                <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
                  {project.gallery.map((image: any, index: number) => (
                    <Box
                      key={index}
                      borderRadius="md"
                      overflow="hidden"
                      borderWidth="2px"
                      borderColor={selectedImage === index ? 'brand.500' : 'transparent'}
                      cursor="pointer"
                      onClick={() => setSelectedImage(index)}
                      transition="all 0.2s"
                      _hover={{ transform: 'scale(1.05)' }}
                    >
                      <Image
                        src={image.src}
                        alt={`Thumbnail ${index + 1}`}
                        h="80px"
                        w="full"
                        objectFit="cover"
                      />
                    </Box>
                  ))}
                </SimpleGrid>
              </MotionBox>

              {/* Project Description */}
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                mt={12}
              >
                <Heading as="h2" size="xl" mb={6}>
                  Project Overview
                </Heading>
                <Text color={textColor} fontSize="lg" whiteSpace="pre-line" mb={8}>
                  {project.fullDescription}
                </Text>
                
                <Heading as="h3" size="lg" mb={4}>
                  The Challenge
                </Heading>
                <Text color={textColor} fontSize="lg" whiteSpace="pre-line" mb={8}>
                  {project.challenge}
                </Text>
                
                <Heading as="h3" size="lg" mb={4}>
                  The Solution
                </Heading>
                <Text color={textColor} fontSize="lg" whiteSpace="pre-line" mb={8}>
                  {project.solution}
                </Text>
                
                <Heading as="h3" size="lg" mb={4}>
                  The Results
                </Heading>
                <Text color={textColor} fontSize="lg" whiteSpace="pre-line">
                  {project.results}
                </Text>
              </MotionBox>
            </GridItem>
            
            {/* Right Column - Project Details */}
            <GridItem>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Box
                  bg={cardBg}
                  borderRadius="lg"
                  p={6}
                  boxShadow="md"
                  position="sticky"
                  top="100px"
                >
                  <Heading as="h3" size="md" mb={4}>
                    Project Details
                  </Heading>
                  <Divider mb={4} />
                  
                  <VStack align="stretch" spacing={4}>
                    <HStack>
                      <Icon as={FiUser} color={highlightColor} />
                      <Text fontWeight="bold" minW="100px">Client:</Text>
                      <Text>{project.client}</Text>
                    </HStack>
                    
                    <HStack>
                      <Icon as={FiCalendar} color={highlightColor} />
                      <Text fontWeight="bold" minW="100px">Completed:</Text>
                      <Text>{project.completionDate}</Text>
                    </HStack>
                    
                    <HStack alignItems="flex-start">
                      <Icon as={FiTag} color={highlightColor} mt={1} />
                      <Text fontWeight="bold" minW="100px">Services:</Text>
                      <VStack align="start" spacing={1}>
                        {project.services.map((service: string) => (
                          <Text key={service}>{service}</Text>
                        ))}
                      </VStack>
                    </HStack>
                    
                    <Box>
                      <HStack alignItems="flex-start" mb={2}>
                        <Icon as={FiTag} color={highlightColor} mt={1} />
                        <Text fontWeight="bold" minW="100px">Technologies:</Text>
                      </HStack>
                      <Wrap mt={1}>
                        {project.technologies.map((tech: string) => (
                          <Tag key={tech} colorScheme="brand" size="md" m={1}>
                            {tech}
                          </Tag>
                        ))}
                      </Wrap>
                    </Box>
                    
                    {project.website && (
                      <HStack>
                        <Icon as={FiLink} color={highlightColor} />
                        <Text fontWeight="bold" minW="100px">Website:</Text>
                        <Link href={project.website} color={highlightColor} isExternal>
                          Visit Site
                        </Link>
                      </HStack>
                    )}
                  </VStack>
                  
                  <Button
                    as={RouterLink}
                    to="/contact"
                    colorScheme="brand"
                    size="lg"
                    width="full"
                    mt={8}
                    rightIcon={<FiArrowRight />}
                  >
                    Start a Similar Project
                  </Button>
                </Box>
              </MotionBox>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <Box py={{ base: 12, md: 20 }} bg={useColorModeValue('gray.50', 'gray.900')}>
          <Container maxW="container.xl">
            <Heading as="h2" size="xl" mb={8}>
              Related Projects
            </Heading>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
              {relatedProjects.map((relatedProject, index) => (
                <MotionBox
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Box
                    as={RouterLink}
                    to={`/projects/${relatedProject.id}`}
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
                  >
                    <Box h="200px" position="relative" overflow="hidden">
                      <Image
                        src={relatedProject.mainImage}
                        alt={relatedProject.title}
                        objectFit="cover"
                        w="100%"
                        h="100%"
                        transition="transform 0.3s ease"
                        _groupHover={{ transform: 'scale(1.05)' }}
                      />
                    </Box>
                    <Box p={6}>
                      <Heading as="h3" size="md" mb={2}>
                        {relatedProject.title}
                      </Heading>
                      <Text color={textColor} mb={4}>
                        {relatedProject.description}
                      </Text>
                    </Box>
                  </Box>
                </MotionBox>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      )}
    </Box>
  );
};

export default ProjectDetailPage; 
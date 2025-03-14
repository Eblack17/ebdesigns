import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCode, FiLayout, FiPenTool, FiSmartphone } from 'react-icons/fi';
import PageTransition from '../components/shared/PageTransition';
import ScrollAnimation from '../components/shared/ScrollAnimation';
import BasicHeading from '../components/shared/BasicHeading';
import ModernHeroSection from '../components/home/ModernHeroSection';

// Wrap motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

// Sample data - in a real app, this would come from an API or CMS
const featuredProjects = [
  {
    id: 1,
    title: 'Eco-Friendly E-commerce Platform',
    description: 'A sustainable shopping experience built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '/projects/eco-friendly-ecommerce'
  },
  {
    id: 2,
    title: 'Financial Dashboard',
    description: 'Interactive data visualization dashboard for financial analytics',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    tags: ['TypeScript', 'D3.js', 'Firebase'],
    link: '/projects/financial-dashboard'
  },
  {
    id: 3,
    title: 'Health & Wellness App',
    description: 'Mobile application for tracking fitness and mental wellbeing',
    image: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80',
    tags: ['React Native', 'GraphQL', 'AWS'],
    link: '/projects/health-wellness-app'
  }
];

const skills = [
  {
    icon: FiLayout,
    title: 'UI/UX Design',
    description: 'Creating intuitive and beautiful user interfaces with a focus on user experience.'
  },
  {
    icon: FiCode,
    title: 'Frontend Development',
    description: 'Building responsive and performant web applications using modern frameworks.'
  },
  {
    icon: FiSmartphone,
    title: 'Mobile Development',
    description: 'Developing cross-platform mobile applications with native-like experiences.'
  },
  {
    icon: FiPenTool,
    title: 'Brand Identity',
    description: 'Crafting cohesive brand identities that communicate your values and vision.'
  }
];

const testimonials = [
  {
    quote: "Working with EB Designs transformed our online presence. Their attention to detail and creative solutions exceeded our expectations.",
    author: "Sarah Johnson",
    position: "CEO, GreenTech Solutions"
  },
  {
    quote: "The team at EB Designs delivered a website that perfectly captures our brand essence while providing an exceptional user experience.",
    author: "Michael Chen",
    position: "Marketing Director, Innovate Inc."
  },
  {
    quote: "Their technical expertise and design sensibility are unmatched. They turned our complex requirements into an elegant, user-friendly platform.",
    author: "Priya Patel",
    position: "Product Manager, FinSmart"
  }
];

const HomePage = () => {
  const bgGradient = useColorModeValue(
    'linear(to-r, brand.50, purple.50)',
    'linear(to-r, gray.900, purple.900)'
  );
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const highlightColor = useColorModeValue('brand.500', 'brand.300');

  return (
    <PageTransition>
      <Box as="main">
        {/* Modern Hero Section */}
        <ModernHeroSection />

        {/* Featured Projects Section */}
        <Box py={{ base: 16, md: 24 }}>
          <Container maxW="container.xl">
            <ScrollAnimation>
              <BasicHeading 
                as="h2" 
                size="xl" 
                mb={8}
                textAlign="center"
              >
                Featured Projects
              </BasicHeading>
            </ScrollAnimation>
            
            <SimpleGrid 
              columns={{ base: 1, md: 2, lg: 3 }} 
              spacing={8}
            >
              {featuredProjects.map((project, index) => (
                <ScrollAnimation 
                  key={project.id}
                  delay={index * 0.1}
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
                  >
                    <Box h="200px" position="relative" overflow="hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        objectFit="cover"
                        w="100%"
                        h="100%"
                        transition="transform 0.3s ease"
                        _groupHover={{ transform: 'scale(1.05)' }}
                      />
                    </Box>
                    <Box p={6}>
                      <Heading 
                        as="h3" 
                        size="md" 
                        mb={2}
                        _hover={{ color: 'brand.500' }}
                      >
                        {project.title}
                      </Heading>
                      <Text color={textColor} mb={4}>
                        {project.description}
                      </Text>
                      <Flex flexWrap="wrap" gap={2}>
                        {project.tags.map(tag => (
                          <Text
                            key={tag}
                            color={highlightColor}
                            fontSize="sm"
                            fontWeight="medium"
                            px={3}
                            py={1}
                            bg={useColorModeValue('brand.50', 'brand.900')}
                            borderRadius="full"
                          >
                            {tag}
                          </Text>
                        ))}
                      </Flex>
                    </Box>
                  </Box>
                </ScrollAnimation>
              ))}
            </SimpleGrid>
            
            <Flex justify="center" mt={12}>
              <Button
                as={RouterLink}
                to="/projects"
                size="lg"
                rightIcon={<FiArrowRight />}
                colorScheme="brand"
                variant="outline"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'md',
                }}
              >
                View All Projects
              </Button>
            </Flex>
          </Container>
        </Box>
        
        {/* Skills Section */}
        <Box 
          py={{ base: 16, md: 24 }}
          bg={useColorModeValue('gray.50', 'gray.900')}
        >
          <Container maxW="container.xl">
            <ScrollAnimation>
              <BasicHeading 
                as="h2" 
                size="xl" 
                mb={12}
                textAlign="center"
              >
                What I Do
              </BasicHeading>
            </ScrollAnimation>
            
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
              {skills.map((skill, index) => (
                <ScrollAnimation 
                  key={index}
                  delay={index * 0.1}
                >
                  <VStack
                    align="start"
                    p={6}
                    bg={cardBg}
                    borderRadius="lg"
                    boxShadow="md"
                    height="100%"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: 'translateY(-5px)',
                      boxShadow: 'lg',
                    }}
                  >
                    <Flex
                      alignItems="center"
                      justifyContent="center"
                      w={12}
                      h={12}
                      rounded="full"
                      bg={useColorModeValue('brand.100', 'brand.900')}
                      color={useColorModeValue('brand.600', 'brand.300')}
                      mb={4}
                    >
                      <Icon as={skill.icon} boxSize={6} />
                    </Flex>
                    <Heading as="h3" size="md" mb={3}>
                      {skill.title}
                    </Heading>
                    <Text color={textColor}>
                      {skill.description}
                    </Text>
                  </VStack>
                </ScrollAnimation>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
        
        {/* Testimonials Section */}
        <Box py={{ base: 16, md: 24 }}>
          <Container maxW="container.xl">
            <ScrollAnimation>
              <BasicHeading 
                as="h2" 
                size="xl" 
                mb={12}
                textAlign="center"
              >
                Client Testimonials
              </BasicHeading>
            </ScrollAnimation>
            
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              {testimonials.map((testimonial, index) => (
                <ScrollAnimation 
                  key={index}
                  delay={index * 0.1}
                >
                  <Box
                    p={8}
                    bg={cardBg}
                    borderRadius="lg"
                    borderTop="4px solid"
                    borderColor="brand.500"
                    boxShadow="md"
                    position="relative"
                    transition="all 0.3s ease"
                    _hover={{
                      transform: 'translateY(-5px)',
                      boxShadow: 'lg',
                    }}
                  >
                    <Box
                      position="absolute"
                      top={-4}
                      left={8}
                      bg={cardBg}
                      p={2}
                      borderRadius="full"
                      boxShadow="md"
                    >
                      <Icon 
                        as={FiLayout} 
                        color="brand.500" 
                        boxSize={6} 
                      />
                    </Box>
                    <Text 
                      fontStyle="italic" 
                      mb={4}
                      color={textColor}
                    >
                      "{testimonial.quote}"
                    </Text>
                    <Heading as="h4" size="sm">
                      {testimonial.author}
                    </Heading>
                    <Text fontSize="sm" color={textColor}>
                      {testimonial.position}
                    </Text>
                  </Box>
                </ScrollAnimation>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
        
        {/* Call to Action */}
        <Box
          py={16}
          bg={useColorModeValue('brand.50', 'brand.900')}
          borderTop="1px solid"
          borderColor={borderColor}
        >
          <Container maxW="container.md" textAlign="center">
            <ScrollAnimation>
              <Heading as="h2" size="xl" mb={4}>
                Ready to Start Your Project?
              </Heading>
              <Text fontSize="xl" mb={8} color={textColor}>
                Let's work together to create something amazing.
              </Text>
              <Button
                as={RouterLink}
                to="/contact"
                size="lg"
                colorScheme="brand"
                px={8}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                Get in Touch
              </Button>
            </ScrollAnimation>
          </Container>
        </Box>
      </Box>
    </PageTransition>
  );
};

export default HomePage; 
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
import ProjectShowcase from '../components/home/ProjectShowcase';
import ModernSkillsSection from '../components/home/ModernSkillsSection';
import DesignProcessShowcase from '../components/home/DesignProcessShowcase';

// Wrap motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

// Sample skills data
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

        {/* Featured Projects Section - Now using the new ProjectShowcase component */}
        <ProjectShowcase />
        
        {/* Modern Skills Section */}
        <ModernSkillsSection skills={skills} />
        
        {/* Design Process Showcase - replacing testimonials section */}
        <DesignProcessShowcase />
      </Box>
    </PageTransition>
  );
};

export default HomePage; 
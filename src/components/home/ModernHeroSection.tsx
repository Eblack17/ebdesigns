import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  HStack, 
  Grid, 
  GridItem, 
  Button, 
  useColorModeValue,
  Flex,
  Divider
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

// Motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);

/**
 * Modern2024HeroSection - A clean, minimal 2-column hero section design
 * following 2024 web design trends for portfolio websites
 */
const ModernHeroSection: React.FC = () => {
  // Colors that adapt to light/dark mode
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const accentColor = useColorModeValue('brand.500', 'brand.300');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const subtextColor = useColorModeValue('gray.600', 'gray.400');
  const dividerColor = useColorModeValue('brand.500', 'brand.400');
  const heroImage = useColorModeValue('/images/hero.png', '/images/herodark.png');
  
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
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Box 
      as="section"
      py={{ base: 16, md: 24, lg: 32 }}
      bg={bgColor}
      overflow="hidden"
      position="relative"
      bgImage={heroImage}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Container maxW="container.xl" position="relative">
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap={{ base: 10, md: 16, lg: 24 }}
        >
          {/* Left Column - Content */}
          <GridItem
            ml={{ base: 0, md: '-15%', lg: '-20%' }}
          >
            <MotionBox
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              {/* Overline text */}
              <MotionBox variants={itemVariants} mb={3}>
                <Text
                  textTransform="uppercase"
                  letterSpacing="wider"
                  fontWeight="medium"
                  fontSize="sm"
                  color={accentColor}
                >
                  Portfolio 2025
                </Text>
              </MotionBox>
              
              {/* Primary heading */}
              <MotionHeading
                variants={itemVariants}
                as="h1"
                fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
                fontWeight="bold"
                lineHeight="1.1"
                letterSpacing="tight"
                color={textColor}
                mb={6}
              >
                Crafting Digital{' '}
                <Box 
                  as="span" 
                  position="relative"
                  color={accentColor}
                  _after={{
                    content: '""',
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    bg: dividerColor,
                  }}
                >
                  Experiences
                </Box>
              </MotionHeading>
              
              {/* Descriptive text */}
              <MotionText
                variants={itemVariants}
                fontSize={{ base: 'lg', md: 'xl' }}
                color={subtextColor}
                lineHeight="1.7"
                maxW="540px"
                mb={8}
              >
                Award-winning designer and developer focused on creating
                immersive user experiences that blend creativity with cutting-edge
                technology to elevate your brand.
              </MotionText>
              
              {/* Divider */}
              <MotionBox variants={itemVariants}>
                <Divider 
                  width="64px" 
                  borderColor={dividerColor} 
                  borderBottomWidth="3px" 
                  opacity={1} 
                  mb={8} 
                />
              </MotionBox>
              
              {/* Call to action buttons */}
              <MotionFlex
                variants={itemVariants}
                gap={4}
                flexWrap={{ base: 'wrap', md: 'nowrap' }}
              >
                <Button
                  as={RouterLink}
                  to="/projects"
                  size="lg"
                  colorScheme="brand"
                  rightIcon={<FiArrowRight />}
                  px={8}
                  position="relative"
                  overflow="hidden"
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    bg: 'brand.500',
                    opacity: 0.1,
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.3s ease-out',
                  }}
                  _hover={{
                    transform: 'translateY(-2px)',
                    _before: {
                      transform: 'translateX(0)',
                    }
                  }}
                >
                  View Projects
                </Button>
                <Button
                  as={RouterLink}
                  to="/contact"
                  size="lg"
                  variant="outline"
                  colorScheme="brand"
                  px={8}
                  _hover={{
                    transform: 'translateY(-2px)',
                    bg: useColorModeValue('brand.50', 'rgba(154, 105, 237, 0.12)')
                  }}
                >
                  Get in Touch
                </Button>
              </MotionFlex>
            </MotionBox>
          </GridItem>
          
          {/* Right Column - Intentionally left empty as requested */}
          <GridItem 
            position="relative" 
            height="100%"
          >
            {/* Empty space - You can add subtle visual elements here later if desired */}
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default ModernHeroSection;
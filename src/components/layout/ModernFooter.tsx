import React, { useState, useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  List,
  ListItem,
  Text,
  VStack,
  Icon,
  Divider,
  useColorModeValue,
  chakra,
  shouldForwardProp,
  useToast,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { 
  FiGithub, 
  FiLinkedin, 
  FiInstagram, 
  FiArrowRight, 
  FiMail, 
  FiSend,
  FiExternalLink,
  FiArrowUp
} from 'react-icons/fi';
import { SiBehance, SiDribbble } from 'react-icons/si';

// Create ChakraBox - a custom component that supports both Chakra props and motion props
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const footerLinks = {
  company: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ],
  legal: [
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
  ],
  social: [
    { icon: SiDribbble, label: 'Dribbble', href: 'https://dribbble.com/' },
    { icon: SiBehance, label: 'Behance', href: 'https://behance.net/' },
    { icon: FiGithub, label: 'GitHub', href: 'https://github.com/' },
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/' },
    { icon: FiInstagram, label: 'Instagram', href: 'https://instagram.com/' },
  ]
};

const MinimalFooter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const year = new Date().getFullYear();
  const emailRef = useRef<HTMLInputElement>(null);
  
  // Color variables that adapt to light/dark mode
  const bgColor = useColorModeValue('white', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'white');
  const mutedTextColor = useColorModeValue('gray.500', 'gray.400');
  const accentColor = useColorModeValue('brand.500', 'brand.300');
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  
  const handleSubscribe = () => {
    if (!email) {
      setIsEmailValid(false);
      emailRef.current?.focus();
      return;
    }
    
    if (!validateEmail(email)) {
      setIsEmailValid(false);
      emailRef.current?.focus();
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to my newsletter.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1500);
  };
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <Box
      as="footer"
      bg={bgColor}
      borderTop="1px solid"
      borderColor={borderColor}
      py={12}
    >
      <Container maxW="container.xl">
        <Grid 
          templateColumns={{ base: "1fr", md: "1fr 1fr", lg: "1.5fr 1fr 1fr" }}
          gap={{ base: 8, md: 12 }}
          mb={10}
        >
          {/* Brand and newsletter */}
          <GridItem>
            <Link
              as={RouterLink}
              to="/"
              display="inline-block"
              mb={4}
              _hover={{ textDecoration: 'none' }}
            >
              <Heading as="h2" size="md" color={textColor}>
                EB<Box as="span" color={accentColor}>Designs</Box>
              </Heading>
            </Link>
            
            <Text color={mutedTextColor} mb={6} maxW="sm">
              Creating purposeful digital experiences through innovative design and development solutions.
            </Text>
            
            <Heading as="h3" size="sm" mb={4} color={textColor}>
              Stay Updated
            </Heading>
            
            <FormControl isInvalid={!isEmailValid} maxW="sm" mb={2}>
              <InputGroup size="md">
                <Input
                  ref={emailRef}
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setIsEmailValid(true);
                  }}
                  bg={useColorModeValue('white', 'gray.700')}
                  borderColor={borderColor}
                  _hover={{ borderColor: accentColor }}
                  _focus={{ 
                    borderColor: accentColor,
                    boxShadow: `0 0 0 1px ${accentColor}`
                  }}
                  pr="4.5rem"
                />
                <InputRightElement width="4.5rem">
                  <Button 
                    h="1.75rem" 
                    size="sm" 
                    colorScheme="brand"
                    isLoading={isSubmitting}
                    onClick={handleSubscribe}
                  >
                    Join
                  </Button>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>
                Please enter a valid email address.
              </FormErrorMessage>
            </FormControl>
            <Text fontSize="xs" color={mutedTextColor}>
              I respect your privacy. Unsubscribe at any time.
            </Text>
          </GridItem>
          
          {/* Quick Links */}
          <GridItem>
            <Heading as="h3" size="sm" mb={4} color={textColor}>
              Quick Links
            </Heading>
            <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr" }} gap={4}>
              <List spacing={2}>
                {footerLinks.company.map((link) => (
                  <ListItem key={link.path}>
                    <Link
                      as={RouterLink}
                      to={link.path}
                      color={mutedTextColor}
                      fontSize="sm"
                      _hover={{ color: accentColor }}
                    >
                      {link.label}
                    </Link>
                  </ListItem>
                ))}
              </List>
              
              <List spacing={2}>
                {footerLinks.legal.map((link) => (
                  <ListItem key={link.path}>
                    <Link
                      as={RouterLink}
                      to={link.path}
                      color={mutedTextColor}
                      fontSize="sm"
                      _hover={{ color: accentColor }}
                    >
                      {link.label}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
          </GridItem>
          
          {/* Contact */}
          <GridItem>
            <Heading as="h3" size="sm" mb={4} color={textColor}>
              Contact
            </Heading>
            <VStack align="flex-start" spacing={2}>
              <ChakraBox
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <HStack spacing={2}>
                  <Box
                    width="8px"
                    height="8px"
                    borderRadius="full"
                    bg="green.400"
                  />
                  <Text fontSize="sm">Available for new projects</Text>
                </HStack>
              </ChakraBox>
              
              <Link 
                href="mailto:contact@ebdesigns.com" 
                color={mutedTextColor} 
                fontSize="sm"
                _hover={{ color: accentColor }}
              >
                contact@ebdesigns.com
              </Link>
              
              <Link 
                href="resume.pdf" 
                isExternal
                display="flex"
                alignItems="center"
                fontSize="sm"
                color={mutedTextColor}
                _hover={{ color: accentColor }}
              >
                Download Resume
                <Icon as={FiExternalLink} ml={1} boxSize={3} />
              </Link>
              
              <Button
                as={RouterLink}
                to="/contact"
                variant="outline"
                colorScheme="brand"
                size="sm"
                mt={2}
                rightIcon={<FiArrowRight />}
              >
                Start a Project
              </Button>
            </VStack>
            
            {/* Social Links */}
            <HStack spacing={4} mt={6}>
              {footerLinks.social.map((social) => (
                <Link 
                  key={social.label}
                  href={social.href} 
                  isExternal
                  aria-label={social.label}
                >
                  <Icon 
                    as={social.icon} 
                    boxSize={5}
                    color={mutedTextColor}
                    transition="color 0.2s"
                    _hover={{ color: accentColor }}
                  />
                </Link>
              ))}
            </HStack>
          </GridItem>
        </Grid>
        
        <Divider borderColor={borderColor} mb={6} />
        
        {/* Copyright & Bottom Links */}
        <Flex 
          direction={{ base: 'column', sm: 'row' }} 
          justify="space-between" 
          align={{ base: 'center', sm: 'center' }}
          fontSize="xs"
          color={mutedTextColor}
        >
          <Text mb={{ base: 2, sm: 0 }}>
            &copy; {year} EB Designs. All rights reserved.
          </Text>
          
          <ChakraBox
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            whileHover={{ scale: 1.05 }}
          >
            <Link 
              onClick={scrollToTop}
              color={accentColor}
              display="flex"
              alignItems="center"
            >
              Back to top
              <Icon as={FiArrowUp} ml={1} />
            </Link>
          </ChakraBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default MinimalFooter; 
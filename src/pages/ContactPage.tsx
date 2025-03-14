import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Input,
  Link,
  SimpleGrid,
  Text,
  Textarea,
  useColorModeValue,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { SiBehance, SiDribbble } from 'react-icons/si';

// Wrap motion components
const MotionBox = motion(Box);

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  const toast = useToast();
  
  const bgGradient = useColorModeValue(
    'linear(to-r, gray.50, purple.50)',
    'linear(to-r, gray.900, purple.900)'
  );
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const highlightColor = useColorModeValue('brand.500', 'brand.300');

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!message.trim()) {
      newErrors.message = 'Message is required';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      setIsSubmitting(false);
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      
      // Show success message
      toast({
        title: 'Message sent!',
        description: "I'll get back to you as soon as possible.",
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      });
    }, 1500);
  };

  const socialLinks = [
    { icon: SiDribbble, label: 'Dribbble', href: 'https://dribbble.com/' },
    { icon: SiBehance, label: 'Behance', href: 'https://behance.net/' },
    { icon: FiGithub, label: 'GitHub', href: 'https://github.com/' },
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/' },
    { icon: FiInstagram, label: 'Instagram', href: 'https://instagram.com/' },
  ];

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
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading
              as="h1"
              size="2xl"
              fontWeight="bold"
              mb={4}
            >
              Get in Touch
            </Heading>
            <Text
              fontSize="xl"
              color={textColor}
              maxW="2xl"
              mx="auto"
              mb={8}
            >
              Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you!
            </Text>
          </MotionBox>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={10}>
            {/* Contact Form */}
            <GridItem>
              <MotionBox
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Box
                  bg={cardBg}
                  p={8}
                  borderRadius="lg"
                  boxShadow="lg"
                >
                  <Heading as="h2" size="lg" mb={6}>
                    Send Me a Message
                  </Heading>
                  
                  <form onSubmit={handleSubmit}>
                    <VStack spacing={4}>
                      <FormControl isInvalid={!!errors.name}>
                        <FormLabel htmlFor="name">Your Name</FormLabel>
                        <Input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Doe"
                          size="lg"
                        />
                        <FormErrorMessage>{errors.name}</FormErrorMessage>
                      </FormControl>
                      
                      <FormControl isInvalid={!!errors.email}>
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@example.com"
                          size="lg"
                        />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                      </FormControl>
                      
                      <FormControl isInvalid={!!errors.subject}>
                        <FormLabel htmlFor="subject">Subject</FormLabel>
                        <Input
                          id="subject"
                          type="text"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="Project Inquiry"
                          size="lg"
                        />
                        <FormErrorMessage>{errors.subject}</FormErrorMessage>
                      </FormControl>
                      
                      <FormControl isInvalid={!!errors.message}>
                        <FormLabel htmlFor="message">Message</FormLabel>
                        <Textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell me about your project or inquiry..."
                          size="lg"
                          rows={6}
                        />
                        <FormErrorMessage>{errors.message}</FormErrorMessage>
                      </FormControl>
                      
                      <Button
                        type="submit"
                        colorScheme="brand"
                        size="lg"
                        width="full"
                        mt={4}
                        isLoading={isSubmitting}
                        loadingText="Sending"
                        rightIcon={<FiSend />}
                      >
                        Send Message
                      </Button>
                    </VStack>
                  </form>
                </Box>
              </MotionBox>
            </GridItem>
            
            {/* Contact Information */}
            <GridItem>
              <MotionBox
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <VStack spacing={8} align="stretch">
                  <Box>
                    <Heading as="h2" size="lg" mb={6}>
                      Contact Information
                    </Heading>
                    
                    <VStack spacing={6} align="start">
                      <HStack spacing={4}>
                        <Flex
                          align="center"
                          justify="center"
                          bg={useColorModeValue('brand.50', 'brand.900')}
                          color={highlightColor}
                          w={12}
                          h={12}
                          rounded="full"
                        >
                          <Icon as={FiMail} boxSize={5} />
                        </Flex>
                        <Box>
                          <Text fontWeight="bold" fontSize="md">
                            Email
                          </Text>
                          <Link href="mailto:hello@ebdesigns.com" color={highlightColor}>
                            hello@ebdesigns.com
                          </Link>
                        </Box>
                      </HStack>
                      
                      <HStack spacing={4}>
                        <Flex
                          align="center"
                          justify="center"
                          bg={useColorModeValue('brand.50', 'brand.900')}
                          color={highlightColor}
                          w={12}
                          h={12}
                          rounded="full"
                        >
                          <Icon as={FiPhone} boxSize={5} />
                        </Flex>
                        <Box>
                          <Text fontWeight="bold" fontSize="md">
                            Phone
                          </Text>
                          <Link href="tel:+11234567890" color={highlightColor}>
                            +1 (123) 456-7890
                          </Link>
                        </Box>
                      </HStack>
                      
                      <HStack spacing={4}>
                        <Flex
                          align="center"
                          justify="center"
                          bg={useColorModeValue('brand.50', 'brand.900')}
                          color={highlightColor}
                          w={12}
                          h={12}
                          rounded="full"
                        >
                          <Icon as={FiMapPin} boxSize={5} />
                        </Flex>
                        <Box>
                          <Text fontWeight="bold" fontSize="md">
                            Location
                          </Text>
                          <Text color={textColor}>
                            San Francisco, California
                          </Text>
                        </Box>
                      </HStack>
                    </VStack>
                  </Box>
                  
                  <Box>
                    <Heading as="h3" size="md" mb={4}>
                      Connect on Social Media
                    </Heading>
                    
                    <SimpleGrid columns={5} spacing={4}>
                      {socialLinks.map((social) => (
                        <Link
                          key={social.label}
                          href={social.href}
                          isExternal
                          aria-label={social.label}
                        >
                          <Flex
                            align="center"
                            justify="center"
                            bg={useColorModeValue('gray.100', 'gray.700')}
                            w={12}
                            h={12}
                            rounded="full"
                            transition="all 0.3s ease"
                            _hover={{
                              bg: useColorModeValue('brand.50', 'brand.900'),
                              color: highlightColor,
                              transform: 'translateY(-2px)',
                            }}
                          >
                            <Icon as={social.icon} boxSize={5} />
                          </Flex>
                        </Link>
                      ))}
                    </SimpleGrid>
                  </Box>
                  
                  <Box
                    bg={useColorModeValue('brand.50', 'brand.900')}
                    p={6}
                    borderRadius="lg"
                    mt={6}
                  >
                    <Heading as="h3" size="md" mb={4} color={highlightColor}>
                      Working Hours
                    </Heading>
                    <VStack align="start" spacing={2}>
                      <Text>
                        <Text as="span" fontWeight="bold">Monday - Friday:</Text> 9:00 AM - 6:00 PM PST
                      </Text>
                      <Text>
                        <Text as="span" fontWeight="bold">Saturday:</Text> By appointment
                      </Text>
                      <Text>
                        <Text as="span" fontWeight="bold">Sunday:</Text> Closed
                      </Text>
                    </VStack>
                    <Text mt={4} fontSize="sm">
                      I typically respond to inquiries within 24 hours during business days.
                    </Text>
                  </Box>
                </VStack>
              </MotionBox>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Map Section */}
      <Box py={{ base: 16, md: 24 }} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW="container.xl">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h2" size="lg" mb={8} textAlign="center">
              Find Me Here
            </Heading>
            
            <Box
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              height={{ base: '300px', md: '400px' }}
              bg={cardBg}
            >
              {/* In a real application, you would embed a Google Map or other map service here */}
              <Box
                bg={useColorModeValue('gray.200', 'gray.700')}
                height="100%"
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text>Map Placeholder - Google Maps would be embedded here</Text>
              </Box>
            </Box>
          </MotionBox>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <VStack spacing={4} mb={12} textAlign="center">
              <Heading as="h2" size="xl">
                Frequently Asked Questions
              </Heading>
              <Text
                fontSize="lg"
                color={textColor}
                maxW="2xl"
              >
                Here are answers to some common questions about working with me.
              </Text>
            </VStack>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
              <Box>
                <Heading as="h3" size="md" mb={3}>
                  What is your design process?
                </Heading>
                <Text color={textColor}>
                  My design process typically includes discovery, research, wireframing, design, prototyping, and implementation. I believe in an iterative approach with regular client feedback throughout the project.
                </Text>
              </Box>
              
              <Box>
                <Heading as="h3" size="md" mb={3}>
                  How long does a typical project take?
                </Heading>
                <Text color={textColor}>
                  Project timelines vary based on scope and complexity. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. I'll provide a detailed timeline during our initial consultation.
                </Text>
              </Box>
              
              <Box>
                <Heading as="h3" size="md" mb={3}>
                  What are your payment terms?
                </Heading>
                <Text color={textColor}>
                  I typically require a 50% deposit to begin work, with the remaining balance due upon project completion. For larger projects, I can arrange milestone-based payments. I accept bank transfers and major credit cards.
                </Text>
              </Box>
              
              <Box>
                <Heading as="h3" size="md" mb={3}>
                  Do you offer maintenance services?
                </Heading>
                <Text color={textColor}>
                  Yes, I offer ongoing maintenance and support packages for websites and applications I've built. These can include regular updates, security monitoring, content updates, and performance optimization.
                </Text>
              </Box>
            </SimpleGrid>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactPage; 
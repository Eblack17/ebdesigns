import { useState, useRef, useEffect } from 'react';
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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMail, 
  FiMapPin, 
  FiPhone, 
  FiSend, 
  FiGithub, 
  FiLinkedin, 
  FiInstagram, 
  FiArrowRight, 
  FiClock, 
  FiCalendar, 
  FiCheckCircle 
} from 'react-icons/fi';
import { SiBehance, SiDribbble } from 'react-icons/si';

// Wrap motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionText = motion(Text);
const MotionGrid = motion(Grid);
const MotionButton = motion(Button);
const MotionHeading = motion(Heading);
const MotionInput = motion(Input);
const MotionTextarea = motion(Textarea);

// Floating 3D Element Component
const FloatingElement = ({ delay = 0, children }) => (
  <MotionBox
    position="absolute"
    initial={{ y: 0 }}
    animate={{ 
      y: ["-10px", "10px", "-10px"],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity,
      delay,
    }}
    zIndex={0}
  >
    {children}
  </MotionBox>
);

// Glassmorphism Card Component
const GlassCard = ({ children, ...props }) => {
  const glassColor = useColorModeValue(
    'rgba(255, 255, 255, 0.15)',
    'rgba(26, 32, 44, 0.15)'
  );
  const borderColor = useColorModeValue(
    'rgba(255, 255, 255, 0.2)',
    'rgba(255, 255, 255, 0.05)'
  );
  const shadowColor = useColorModeValue(
    '0 8px 32px rgba(0, 0, 0, 0.1)',
    '0 8px 32px rgba(0, 0, 0, 0.2)'
  );
  
  return (
    <MotionBox
      bg={glassColor}
      backdropFilter="blur(12px)"
      border="1px solid"
      borderColor={borderColor}
      borderRadius="xl"
      boxShadow={shadowColor}
      overflow="hidden"
      transition="all 0.3s ease"
      position="relative"
      whileHover={{ 
        y: -5,
        boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)'
      }}
      {...props}
    >
      {children}
    </MotionBox>
  );
};

// Enhanced form input with animations
const AnimatedFormControl = ({ label, error, children, ...props }) => {
  return (
    <FormControl isInvalid={!!error} {...props}>
      <FormLabel
        fontSize="sm"
        fontWeight="medium"
        color={useColorModeValue("gray.600", "gray.300")}
        transition="all 0.2s"
      >
        {label}
      </FormLabel>
      {children}
      <AnimatePresence>
        {error && (
          <MotionBox
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <FormErrorMessage>{error}</FormErrorMessage>
          </MotionBox>
        )}
      </AnimatePresence>
    </FormControl>
  );
};

// Social Media Button with animation
const SocialButton = ({ icon, label, href, ...props }) => {
  return (
    <MotionBox
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link
        href={href}
        isExternal
        aria-label={label}
        _hover={{ textDecoration: 'none' }}
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
            color: useColorModeValue('brand.500', 'brand.300'),
            transform: 'translateY(-2px)',
          }}
          {...props}
        >
          <Icon as={icon} boxSize={5} />
        </Flex>
      </Link>
    </MotionBox>
  );
};

// Main Contact Page Component
const ContactPage = () => {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  
  // References
  const formRef = useRef(null);
  
  // Modal for success message
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // Toast notification
  const toast = useToast();
  
  // Color values
  const bgGradient = useColorModeValue(
    'linear(to-br, purple.500, brand.400)',
    'linear(to-br, gray.900, purple.900)'
  );
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const highlightColor = useColorModeValue('brand.500', 'brand.300');
  const faqBg = useColorModeValue('gray.50', 'gray.900');
  const accentGradient = useColorModeValue(
    'linear(to-r, brand.400, purple.500)',
    'linear(to-r, brand.300, purple.400)'
  )

  // Form validation
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

  // Form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Open success modal
      onOpen();
      
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

  // Social media links
  const socialLinks = [
    { icon: SiDribbble, label: 'Dribbble', href: 'https://dribbble.com/' },
    { icon: SiBehance, label: 'Behance', href: 'https://behance.net/' },
    { icon: FiGithub, label: 'GitHub', href: 'https://github.com/' },
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/' },
    { icon: FiInstagram, label: 'Instagram', href: 'https://instagram.com/' },
  ];

  // FAQ items
  const faqItems = [
    {
      question: "How do you balance company design guidelines with innovation?",
      answer: "I approach this balance by first deeply understanding the company's design system and brand guidelines. Then I look for opportunities to innovate within those constraints, often by introducing subtle variations or new patterns that align with established principles. The key is maintaining consistency while gradually evolving the design language."
    },
    {
      question: "How do you collaborate with cross-functional teams?",
      answer: "Effective collaboration begins with understanding each team's objectives and constraints. I establish clear communication channels and regular check-ins with developers, product managers, and other stakeholders. I use tools like Figma for real-time collaboration, create detailed documentation, and actively participate in planning sessions to ensure design considerations are integrated early."
    },
    {
      question: "What's your approach to design systems in a corporate environment?",
      answer: "In corporate environments, I focus on creating scalable, modular design systems that can grow with the organization. This involves documenting components thoroughly, establishing clear usage guidelines, and ensuring accessibility compliance. I also implement governance processes to maintain system integrity while allowing for continuous improvement based on user feedback and business needs."
    },
    {
      question: "How do you handle design feedback from multiple stakeholders?",
      answer: "I manage stakeholder feedback by establishing a structured review process with clear evaluation criteria tied to user needs and business goals. I document all feedback systematically, identify patterns and priorities, and facilitate discussions to resolve conflicting opinions. When presenting design iterations, I explain my reasoning and use data to support decisions while remaining open to constructive input."
    }
  ];

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    }
  };

  // Render decorative shapes
  const renderShapes = () => {
    return (
      <>
        <FloatingElement delay={0}>
          <Box 
            position="absolute" 
            top="15%" 
            right="10%" 
            width="250px" 
            height="250px" 
            borderRadius="full" 
            bgGradient="linear(to-r, purple.400, pink.300)" 
            opacity="0.2"
            filter="blur(40px)"
          />
        </FloatingElement>
        
        <FloatingElement delay={2}>
          <Box 
            position="absolute" 
            bottom="20%" 
            left="5%" 
            width="300px" 
            height="300px" 
            borderRadius="full" 
            bgGradient="linear(to-r, brand.300, blue.300)" 
            opacity="0.15"
            filter="blur(60px)"
          />
        </FloatingElement>
        
        <FloatingElement delay={4}>
          <Box 
            position="absolute" 
            top="40%" 
            left="15%" 
            width="150px" 
            height="150px" 
            borderRadius="full" 
            bg="yellow.400" 
            opacity="0.1"
            filter="blur(30px)"
          />
        </FloatingElement>
      </>
    );
  };

  return (
    <Box as="main" position="relative" overflow="hidden">
      {/* Background gradient and decorative elements */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient={bgGradient}
        opacity={0.1}
        zIndex={-1}
      />
      
      {renderShapes()}
      
      {/* Hero Section */}
      <Box
        pt={{ base: 24, md: 32 }}
        pb={{ base: 16, md: 24 }}
        textAlign="center"
        position="relative"
      >
        <Container maxW="container.xl">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <MotionHeading
              as="h1"
              size="2xl"
              fontWeight="bold"
              mb={6}
              bgGradient={accentGradient}
              bgClip="text"
              letterSpacing="tight"
            >
              Let's Create Something Amazing Together
            </MotionHeading>
            
            <MotionText
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="medium"
              maxW="2xl"
              mx="auto"
              mb={12}
              color={textColor}
              lineHeight="tall"
            >
              Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you and bring your vision to life.
            </MotionText>
          </MotionBox>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box py={{ base: 12, md: 20 }} position="relative">
        <Container maxW="container.xl" position="relative">
          <MotionGrid
            templateColumns={{ base: '1fr', lg: '3fr 2fr' }}
            gap={{ base: 10, md: 16 }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Contact Form */}
            <GridItem>
              <GlassCard
                p={{ base: 6, md: 8 }}
                variants={itemVariants}
                as={MotionBox}
                overflow="hidden"
              >
                <Box 
                  position="absolute" 
                  top="-10px" 
                  right="-10px" 
                  width="150px" 
                  height="150px" 
                  borderRadius="full" 
                  bgGradient="linear(to-br, brand.300, purple.400)" 
                  opacity="0.1"
                  zIndex="0"
                  filter="blur(30px)"
                />
                
                <MotionHeading
                  as="h2" 
                  size="lg" 
                  mb={8}
                  position="relative"
                  zIndex="1"
                >
                  Send Me a Message
                </MotionHeading>
                
                <form onSubmit={handleSubmit} ref={formRef}>
                  <MotionFlex 
                    direction="column" 
                    gap={6}
                    position="relative"
                    zIndex="1"
                  >
                    <AnimatedFormControl label="Your Name" error={errors.name}>
                      <MotionInput
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        size="lg"
                        borderRadius="md"
                        _focus={{
                          borderColor: "brand.400",
                          boxShadow: "0 0 0 1px var(--chakra-colors-brand-400)"
                        }}
                        whileFocus={{ scale: 1.01 }}
                      />
                    </AnimatedFormControl>
                    
                    <AnimatedFormControl label="Email Address" error={errors.email}>
                      <MotionInput
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        size="lg"
                        borderRadius="md"
                        _focus={{
                          borderColor: "brand.400",
                          boxShadow: "0 0 0 1px var(--chakra-colors-brand-400)"
                        }}
                        whileFocus={{ scale: 1.01 }}
                      />
                    </AnimatedFormControl>
                    
                    <AnimatedFormControl label="Subject" error={errors.subject}>
                      <MotionInput
                        id="subject"
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Project Inquiry"
                        size="lg"
                        borderRadius="md"
                        _focus={{
                          borderColor: "brand.400",
                          boxShadow: "0 0 0 1px var(--chakra-colors-brand-400)"
                        }}
                        whileFocus={{ scale: 1.01 }}
                      />
                    </AnimatedFormControl>
                    
                    <AnimatedFormControl label="Message" error={errors.message}>
                      <MotionTextarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell me about your project or inquiry..."
                        size="lg"
                        borderRadius="md"
                        rows={6}
                        _focus={{
                          borderColor: "brand.400",
                          boxShadow: "0 0 0 1px var(--chakra-colors-brand-400)"
                        }}
                        whileFocus={{ scale: 1.01 }}
                      />
                    </AnimatedFormControl>
                    
                    <MotionButton
                      type="submit"
                      colorScheme="brand"
                      size="lg"
                      height="56px"
                      width="full"
                      mt={4}
                      isLoading={isSubmitting}
                      loadingText="Sending"
                      rightIcon={<FiSend />}
                      bgGradient={accentGradient}
                      _hover={{
                        bgGradient: accentGradient,
                        transform: "translateY(-2px)",
                        boxShadow: "lg"
                      }}
                      transition="all 0.3s ease"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Send Message
                    </MotionButton>
                  </MotionFlex>
                </form>
              </GlassCard>
            </GridItem>
            
            {/* Contact Information */}
            <GridItem>
              <VStack spacing={6} align="stretch">
                <GlassCard p={6} variants={itemVariants} as={MotionBox}>
                  <MotionHeading
                    as="h2" 
                    size="lg" 
                    mb={6}
                  >
                    Contact Information
                  </MotionHeading>
                  
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
                        shadow="md"
                      >
                        <Icon as={FiMail} boxSize={5} />
                      </Flex>
                      <Box>
                        <Text fontWeight="medium" fontSize="md">
                          Email
                        </Text>
                        <Link 
                          href="mailto:ericblack13@gmail.com" 
                          color={highlightColor}
                          fontWeight="semibold"
                          _hover={{ textDecoration: "none", color: "brand.600" }}
                        >
                          ericblack13@gmail.com
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
                        shadow="md"
                      >
                        <Icon as={FiPhone} boxSize={5} />
                      </Flex>
                      <Box>
                        <Text fontWeight="medium" fontSize="md">
                          Phone
                        </Text>
                        <Link 
                          href="tel:+19512959085" 
                          color={highlightColor}
                          fontWeight="semibold"
                          _hover={{ textDecoration: "none", color: "brand.600" }}
                        >
                          +1 (951) 295-9085
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
                        shadow="md"
                      >
                        <Icon as={FiMapPin} boxSize={5} />
                      </Flex>
                      <Box>
                        <Text fontWeight="medium" fontSize="md">
                          Location
                        </Text>
                        <Text color={textColor} fontWeight="medium">
                          Moreno Valley, California
                        </Text>
                      </Box>
                    </HStack>
                  </VStack>
                </GlassCard>
                
                <GlassCard p={6} variants={itemVariants} as={MotionBox}>
                  <Box mb={4}>
                    <Heading as="h3" size="md" mb={4}>
                      Connect on Social Media
                    </Heading>
                    
                    <SimpleGrid columns={5} spacing={4}>
                      {socialLinks.map((social) => (
                        <SocialButton
                          key={social.label}
                          icon={social.icon}
                          label={social.label}
                          href={social.href}
                        />
                      ))}
                    </SimpleGrid>
                  </Box>
                </GlassCard>
                
                <GlassCard
                  p={6}
                  variants={itemVariants}
                  as={MotionBox}
                  bgGradient={useColorModeValue('linear(to-br, brand.50, purple.50)', 'linear(to-br, brand.900, purple.900)')}
                >
                  <Heading as="h3" size="md" mb={4} color={highlightColor}>
                    Working Hours
                  </Heading>
                  <VStack align="start" spacing={3}>
                    <HStack spacing={3}>
                      <Icon as={FiClock} color={highlightColor} />
                      <Text>
                        <Text as="span" fontWeight="bold">Monday - Friday:</Text> 9:00 AM - 6:00 PM PST
                      </Text>
                    </HStack>
                    <HStack spacing={3}>
                      <Icon as={FiClock} color={highlightColor} />
                      <Text>
                        <Text as="span" fontWeight="bold">Saturday:</Text> By appointment
                      </Text>
                    </HStack>
                    <HStack spacing={3}>
                      <Icon as={FiClock} color={highlightColor} />
                      <Text>
                        <Text as="span" fontWeight="bold">Sunday:</Text> Closed
                      </Text>
                    </HStack>
                  </VStack>
                  <Text mt={4} fontSize="sm">
                    I typically respond to inquiries within 24 hours during business days.
                  </Text>
                </GlassCard>
              </VStack>
            </GridItem>
          </MotionGrid>
        </Container>
      </Box>

      {/* Map Section */}
      <Box py={{ base: 12, md: 20 }} position="relative">
        <Container maxW="container.xl">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading as="h2" size="lg" mb={8} textAlign="center">
              Find Me Here
            </Heading>
            
            <GlassCard
              overflow="hidden"
              boxShadow="lg"
              height={{ base: '300px', md: '400px' }}
              bg={cardBg}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {/* In a real application, you would embed a Google Map or other map service here */}
              <Box
                bg={useColorModeValue('gray.200', 'gray.700')}
                height="100%"
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="relative"
                overflow="hidden"
              >
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bgGradient={useColorModeValue(
                    'linear(to-br, gray.100, blue.50)',
                    'linear(to-br, gray.800, blue.900)'
                  )}
                  opacity={0.8}
                />
                
                <Box
                  position="absolute"
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  backgroundImage="url('https://maps.googleapis.com/maps/api/staticmap?center=San+Francisco,CA&zoom=13&size=1200x400&key=YOUR_API_KEY')"
                  backgroundSize="cover"
                  backgroundPosition="center"
                  opacity={0.6}
                />
                
                <Box 
                  position="relative"
                  bg={useColorModeValue('whiteAlpha.800', 'blackAlpha.700')}
                  p={4}
                  borderRadius="md"
                  textAlign="center"
                  boxShadow="md"
                >
                  <Icon 
                    as={FiMapPin} 
                    color={highlightColor} 
                    boxSize={8} 
                    mb={2} 
                  />
                  <Text fontSize="lg" fontWeight="bold">
                    San Francisco Office
                  </Text>
                  <Text>123 Design Avenue, San Francisco, CA 94110</Text>
                </Box>
              </Box>
            </GlassCard>
          </MotionBox>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box py={{ base: 12, md: 20 }} bg={faqBg}>
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
            
            <GlassCard p={0} overflow="hidden">
              <Accordion defaultIndex={[0]} allowMultiple>
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={index}
                    border="none"
                    mb={2}
                  >
                    <AccordionButton
                      p={6}
                      _hover={{ bg: useColorModeValue('blackAlpha.50', 'whiteAlpha.50') }}
                      borderRadius="md"
                    >
                      <Box flex="1" textAlign="left" fontWeight="semibold" fontSize="lg">
                        {item.question}
                      </Box>
                      <AccordionIcon color={highlightColor} boxSize={5} />
                    </AccordionButton>
                    <AccordionPanel pb={6} px={6}>
                      <Text color={textColor}>{item.answer}</Text>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassCard>
          </MotionBox>
        </Container>
      </Box>
      
      {/* Success Modal */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered motionPreset="scale">
        <ModalOverlay 
          bg="blackAlpha.300"
          backdropFilter="blur(10px)"
        />
        <ModalContent
          mx={4}
          bg={useColorModeValue('white', 'gray.800')}
          p={0}
          borderRadius="xl"
          overflow="hidden"
        >
          <ModalHeader p={0}>
            <Box
              bg={highlightColor}
              py={6}
              px={6}
              textAlign="center"
              color="white"
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top="-20px"
                right="-20px"
                width="100px"
                height="100px"
                borderRadius="full"
                bg="whiteAlpha.200"
              />
              
              <Box position="relative" zIndex={1}>
                <Icon as={FiCheckCircle} boxSize={10} mb={2} />
                <Heading size="lg">Message Sent!</Heading>
              </Box>
            </Box>
          </ModalHeader>
          <ModalCloseButton color={useColorModeValue('white', 'white')} top={6} right={6} zIndex={2} />
          <ModalBody py={8} px={6} textAlign="center">
            <VStack spacing={4}>
              <Text fontSize="lg">
                Thank you for reaching out! I've received your message and will get back to you as soon as possible.
              </Text>
              <Text color={textColor}>
                In the meantime, feel free to check out my portfolio or connect with me on social media.
              </Text>
              <Button
                mt={4}
                colorScheme="brand"
                onClick={onClose}
                rightIcon={<FiArrowRight />}
              >
                Back to Website
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ContactPage; 
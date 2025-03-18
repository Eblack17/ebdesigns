import React, { Fragment, useState } from 'react';
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
  Image,
  Link,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
  Divider,
  Icon,
  Progress,
  Tag,
  chakra,
  shouldForwardProp,
  Badge,
  useDisclosure,
  Collapse,
  Tooltip,
  IconButton,
  CircularProgress,
  CircularProgressLabel,
  Tab,
  TabList,
  Tabs,
  TabPanels,
  TabPanel,
  Circle,
  Spacer,
  Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon,
  Avatar, Center
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { 
  FiArrowRight, 
  FiAward, 
  FiBriefcase, 
  FiCalendar, 
  FiCheckCircle, 
  FiCode, 
  FiDownload, 
  FiGlobe, 
  FiLayout, 
  FiPenTool, 
  FiSmartphone, 
  FiUser,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiMinus,
  FiLinkedin,
  FiTwitter,
  FiGithub,
  FiInstagram,
  FiMail,
  FiMaximize,
  FiPlay,
  FiTrendingUp,
  FiActivity,
  FiZap,
  FiMousePointer,
  FiUserCheck, FiMessageCircle, FiTarget, FiCheck, FiMapPin, FiExternalLink, FiBook, FiTool
} from 'react-icons/fi';

// Define ChakraBox - a component that accepts both chakra and motion props
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

// Wrap motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

// New Experience Card component for the modern timeline
type ExperienceCardProps = {
  job: {
    position: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
  };
  index: number;
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ job, index }) => {
  const { isOpen, onToggle } = useDisclosure();
  const accentColor = useColorModeValue('brand.500', 'brand.300');
  
  // Animation variants for card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        delay: index * 0.1 
      }
    },
    hover: { 
      y: -10, 
      boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 15
      }
    }
  };
  
  // Progress animation for achievements
  const progressVariants = {
    hidden: { width: 0 },
    visible: (i: number) => ({ 
      width: "100%", 
      transition: { 
        duration: 0.8, 
        delay: 0.3 + (i * 0.2) 
      } 
    })
  };
  
  // Company logos (placeholder URLs - replace with actual logos)
  const companyLogos: Record<string, string> = {
    'Pctronics Managed IT Solutions': 'https://via.placeholder.com/150/232323/FFFFFF?text=TVS',
    'Monster Media': 'https://via.placeholder.com/150/232323/FFFFFF?text=DCA',
    'Impact Canopy': 'https://via.placeholder.com/150/232323/FFFFFF?text=CH'
  };
  
  return (
    <ChakraBox
      width={{ base: "90vw", md: "400px" }}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      overflow="hidden"
      bg="gray.900"
      borderRadius="2xl"
      position="relative"
      boxShadow="0 15px 30px -15px rgba(0,0,0,0.3)"
      border="1px solid"
      borderColor="gray.800"
      height="fit-content"
      maxHeight={isOpen ? "none" : "380px"}
      transition="max-height 0.5s ease"
      _before={{
        content: '""',
        position: 'absolute',
        inset: 0,
        borderRadius: 'inherit',
        padding: '2px',
        background: `linear-gradient(135deg, ${accentColor}, transparent 50%)`,
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        pointerEvents: 'none'
      }}
    >
      {/* Card Header with Company Logo */}
      <Flex
        p={5}
        borderBottom="1px solid"
        borderColor="gray.800"
        bg="gray.900"
        justify="space-between"
        align="center"
      >
        <HStack spacing={4}>
          <Box
            width="50px"
            height="50px"
            borderRadius="lg"
            overflow="hidden"
            bg="black"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Image 
              src={companyLogos[job.company]} 
              alt={`${job.company} logo`}
              width="100%"
              height="100%"
              objectFit="cover"
            />
          </Box>
          <Box>
            <Text 
              color="white" 
              fontWeight="bold" 
              fontSize={{ base: "lg", md: "xl" }}
              lineHeight="tight"
            >
              {job.position}
            </Text>
            <Text color={accentColor} fontWeight="medium" fontSize="md">
              {job.company}
            </Text>
          </Box>
        </HStack>
        
        <Badge
          colorScheme="brand"
          px={3}
          py={1}
          borderRadius="full"
          textTransform="uppercase"
          letterSpacing="wider"
          fontSize="xs"
          fontWeight="medium"
        >
          {job.period}
        </Badge>
      </Flex>
      
      {/* Card Body */}
      <Box p={5}>
        {/* Job Description */}
        <Text color="gray.300" mb={4}>
          {job.description}
        </Text>
        
        {/* Impact Metrics */}
        <Heading 
          as="h4" 
          size="sm" 
          color="white" 
          mb={3}
          display="flex"
          alignItems="center"
        >
          <Icon as={FiAward} mr={2} color={accentColor} />
          Key Achievements
        </Heading>
        
        <VStack align="stretch" spacing={3} mb={4}>
          {job.achievements.slice(0, isOpen ? job.achievements.length : 2).map((achievement, i) => (
            <ChakraBox
              key={i}
              position="relative"
              px={4}
              py={3}
              bg="gray.800"
              borderRadius="md"
              overflow="hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ease: "easeOut", delay: 0.2 + (i * 0.1) }}
              _before={{
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '3px',
                bg: accentColor,
                borderRadius: '4px',
              }}
            >
              <Text color="white" fontSize="sm">
                {achievement}
              </Text>
              
              {/* Visual progress indicator */}
              <ChakraBox
                position="absolute"
                bottom={0}
                left={0}
                height="2px"
                bg={`${accentColor}80`}
                custom={i}
                variants={progressVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              />
            </ChakraBox>
          ))}
        </VStack>
        
        {/* Skills Used Section (compact in collapsed state) */}
        {isOpen && (
          <Box 
            mt={6} 
            p={4} 
            borderRadius="lg" 
            bg="blackAlpha.400"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 10 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          >
            <Text color="white" fontWeight="medium" mb={2} fontSize="sm">
              Skills Applied:
            </Text>
            <Flex flexWrap="wrap" gap={2}>
              {["UI/UX Design", "Frontend", "React", "Figma", "Team Leadership"].map((skill) => (
                <Tag 
                  key={skill} 
                  size="sm" 
                  colorScheme="brand" 
                  variant="subtle" 
                  borderRadius="full"
                >
                  {skill}
                </Tag>
              ))}
            </Flex>
          </Box>
        )}
        
        {/* "Learn More" toggle button */}
        <Button
          variant="ghost"
          size="sm"
          rightIcon={isOpen ? <FiChevronUp /> : <FiChevronDown />}
          onClick={onToggle}
          alignSelf="center"
          color={accentColor}
          _hover={{ bg: 'blackAlpha.300' }}
          mt={4}
          width="full"
        >
          {isOpen ? "Show Less" : "Show More"}
        </Button>
      </Box>
    </ChakraBox>
  );
};

// Sample data
const skills = [
  { name: 'UI/UX Design', level: 95, icon: FiLayout },
  { name: 'Frontend Development', level: 90, icon: FiCode },
  { name: 'Mobile Development', level: 85, icon: FiSmartphone },
  { name: 'Brand Identity', level: 80, icon: FiPenTool },
  { name: 'Web Animation', level: 75, icon: FiGlobe },
];

const experience = [
  {
    position: 'Graphic Designer',
    company: 'Pctronics: Managed IT Solutions',
    period: '2023 - Present',
    description: 'Created website layouts that increased user engagement, adapted designs for various media, and optimized digital images to enhance the company\'s branding and online presence.',
    achievements: [
      'Created website layouts that increased user engagement.',
      'Adapted design concepts to different media formats, including web, social media, and video.',
      'Designed brand identities and websites for over clients'
    ]
  },
  {
    position: 'Graphic Designer',
    company: 'Monster Media',
    period: '2023 - 2024',
    description: 'Created comprehensive style guides and adapted designs across web, social media, print, and video to enhance user engagement and drive conversions.',
    achievements: [
      'Created content and visuals that increased user engagement and drove conversions',
      'Adapted design concepts to different media formats, including web, social media, print, and video',
      'Collaborated with the design team to ensure pixel-perfect implementation'
    ]
  },
  {
    position: 'Graphic Designer',
    company: 'Impact Canopy',
    period: '2022 - 2023',
    description: 'Adapted design concepts for various media, developed brand-consistent visual systems, and contributed to the development of custom canopy tents and branding products.',
    achievements: [
      'Optimized digital images for web and mobile platforms, resulting in faster page loading times.',
      'Increased client satisfaction rate to 95% through iterative design processes',
      'Introduced responsive design principles to the company workflow'
    ]
  },
  {
    position: 'Graphic Designer',
    company: 'Image360',
    period: '2019 - 2022',
    description: 'Created visual concepts, produces designs for various signage and graphic products, and operates production equipment to bring client visions to life.',
    achievements: [
      'Adapted design concepts to different media formats, including web, social media, and print',
      'Collaborated with the design team to ensure pixel-perfect implementation',
      'Developed a system of color palettes and typography that improved brand consistency across all marketing materials'
    ]
  }
];

// Modify the educationData array to only include the Bachelor of Graphic Design
const educationData = [
  {
    degree: "Bachelor of Graphic Design",
    institution: "California State University, East Bay",
    period: "2015 - 2019",
    description: "Specialized in User Experience Design with a focus on emerging technologies and inclusive design practices.",
    location: "Hayward, CA",
    gpa: "3.92",
    achievements: [
      "Awarded Outstanding Graduate Student for thesis project on accessible AR interfaces",
      "Led student design team that won national UX competition",
      "Published research paper on cognitive load optimization in mobile interfaces"
    ],
    courses: [
      "Advanced Interaction Design",
      "Design Systems Architecture",
      "Human-Computer Interaction",
      "Design Research Methods",
      "Visual Design Theory"
    ],
    skills: [
      "User Research",
      "Figma",
      "Design Systems",
      "Prototyping",
      "A/B Testing",
      "Usability Testing",
      "Information Architecture"
    ]
  }
];

// Personal facts for the interactive "Get to know me" section
const personalFacts = [
  "I'm an avid rock climber and spend most weekends at the crag",
  "I've visited 27 countries and counting",
  "I make a mean sourdough bread from a starter I've kept alive for 5 years",
  "I built my first website when I was 12 years old",
  "I collect vintage design books and movie posters",
];

// Experience Card for the vertical timeline
interface ExperienceCardV2Props {
  job: {
    position: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
  };
  index: number;
  isEven: boolean;
}

const ExperienceCardV2: React.FC<ExperienceCardV2Props> = ({ job, index, isEven }) => {
  const accentColor = useColorModeValue('brand.500', 'brand.300');
  const cardBg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const textSecondary = useColorModeValue('gray.600', 'gray.400');
  
  // Animation variants for card
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        delay: index * 0.1 
      }
    },
    hover: { 
      y: -5, 
      boxShadow: "0 15px 30px -10px rgba(0,0,0,0.2)",
      transition: { 
        type: "spring", 
        stiffness: 300,
        damping: 15
      }
    }
  };
  
  // Progress animation for achievements
  const progressVariants = {
    hidden: { width: 0 },
    visible: (i: number) => ({ 
      width: "100%", 
      transition: { 
        duration: 0.8, 
        delay: 0.3 + (i * 0.2) 
      } as any
    })
  };
  
  // Company logos (placeholder URLs - replace with actual logos)
  const companyLogos: Record<string, string> = {
    'TechVision Studios': 'https://via.placeholder.com/150/232323/FFFFFF?text=TVS',
    'Digital Craft Agency': 'https://via.placeholder.com/150/232323/FFFFFF?text=DCA',
    'CreativeHub': 'https://via.placeholder.com/150/232323/FFFFFF?text=CH'
  };
  
  // Company theme colors
  const companyThemes: Record<string, string> = {
    'TechVision Studios': 'brand.400',
    'Digital Craft Agency': 'purple.400',
    'CreativeHub': 'blue.400'
  };
  
  return (
    <ChakraBox
      width="100%"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-100px" }}
      overflow="hidden"
      bg={cardBg}
      borderRadius="xl"
      position="relative"
      boxShadow="lg"
      border="1px solid"
      borderColor={borderColor}
      height="fit-content"
      transition="max-height 0.5s ease"
      _before={{
        content: '""',
        position: 'absolute',
        inset: 0,
        borderRadius: 'inherit',
        padding: '2px',
        background: `linear-gradient(135deg, ${companyThemes[job.company] || accentColor}, transparent 60%)`,
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        pointerEvents: 'none',
        opacity: 0.8
      }}
    >
      {/* Card Header with Company Logo */}
      <Flex
        p={5}
        borderBottom="1px solid"
        borderColor={borderColor}
        justify="space-between"
        align="center"
      >
        <HStack spacing={4}>
          <ChakraBox
            width="50px"
            height="50px"
            borderRadius="lg"
            overflow="hidden"
            bg="black"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxShadow={`0 0 0 2px ${companyThemes[job.company] || accentColor}`}
            initial={{ rotate: -5 }}
            whileHover={{ rotate: 0, scale: 1.1 }}
            transition={{ duration: 0.3 } as any}
            _before={{
              content: '""',
              position: 'absolute',
              inset: 0,
              background: `radial-gradient(circle at 30% 30%, ${companyThemes[job.company] || accentColor}40, transparent 70%)`,
              opacity: 0.6
            }}
          >
            <Image 
              src={companyLogos[job.company]} 
              alt={`${job.company} logo`}
              width="80%"
              height="80%"
              objectFit="contain"
            />
          </ChakraBox>
          <Box>
            <Text 
              color={textColor} 
              fontWeight="bold" 
              fontSize={{ base: "lg", md: "xl" }}
              lineHeight="tight"
            >
              {job.position}
            </Text>
            <Text color={accentColor} fontWeight="medium" fontSize="md">
              {job.company}
            </Text>
          </Box>
        </HStack>
        
        <Badge
          colorScheme="brand"
          px={3}
          py={1}
          borderRadius="full"
          textTransform="uppercase"
          letterSpacing="wider"
          fontSize="xs"
          fontWeight="medium"
        >
          {job.period}
        </Badge>
      </Flex>
      
      {/* Card Body */}
      <Box p={5}>
        {/* Job Description */}
        <Text color={textSecondary} mb={4}>
          {job.description}
        </Text>
        
        {/* Skills Visualization */}
        <Box mb={4}>
          <Flex wrap="wrap" gap={2}>
            {["UI/UX Design", "Frontend", "React", "Figma", "Team Leadership"].map((skill) => (
              <ChakraBox
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -2 }}
                viewport={{ once: true }}
                transition={{ duration: 0.2 } as any}
              >
                <Tag
                  size="md"
                  colorScheme="brand"
                  borderRadius="full"
                  px={3}
                  py={1}
                  variant="subtle"
                >
                  {skill}
                </Tag>
              </ChakraBox>
            ))}
          </Flex>
        </Box>
        
        {/* Impact Metrics */}
        <Accordion allowToggle>
          <AccordionItem border="none">
            <AccordionButton 
              px={0} 
              _hover={{ bg: 'transparent' }} 
            >
              <HStack spacing={2}>
                <Icon as={FiAward} color={accentColor} />
                <Text fontWeight="semibold" color={textColor}>
                  Key Achievements
                </Text>
              </HStack>
              <AccordionIcon ml="auto" color={accentColor} />
            </AccordionButton>
            <AccordionPanel pb={4} px={0}>
              <VStack align="stretch" spacing={3}>
                {job.achievements.map((achievement, i) => (
                  <ChakraBox
                    key={i}
                    position="relative"
                    px={4}
                    py={3}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    borderRadius="md"
                    overflow="hidden"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + (i * 0.1) } as any}
                    _before={{
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '3px',
                      bg: accentColor,
                      borderRadius: '4px',
                    }}
                  >
                    <Text color={textColor} fontSize="sm">
                      {achievement}
                    </Text>
                    
                    <ChakraBox
                      position="absolute"
                      bottom={0}
                      left={0}
                      height="2px"
                      bg={accentColor}
                      custom={i}
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + (i * 0.2) } as any}
                    />
                  </ChakraBox>
                ))}
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        
        {/* Projects Section (New) */}
        <Box mt={4} pt={4} borderTop="1px solid" borderColor={borderColor}>
          <HStack mb={2}>
            <Icon as={FiBriefcase} color={accentColor} />
            <Text fontWeight="semibold" color={textColor}>Notable Projects</Text>
          </HStack>
          <SimpleGrid columns={2} spacing={3}>
            {[1, 2].map(i => (
              <ChakraBox
                key={i}
                bg={useColorModeValue('gray.50', 'gray.800')}
                p={3}
                borderRadius="md"
                cursor="pointer"
                initial={{ opacity: 0.8 }}
                whileHover={{ 
                  opacity: 1, 
                  y: -3,
                  boxShadow: useColorModeValue(
                    "0 10px 15px -5px rgba(0,0,0,0.1)",
                    "0 10px 15px -5px rgba(0,0,0,0.4)"
                  )
                }}
                transition={{ duration: 0.2 }}
              >
                <Text fontSize="xs" color={textSecondary}>PROJECT</Text>
                <Text fontSize="sm" fontWeight="medium" color={textColor}>Company {i === 1 ? "Rebrand" : "Website"}</Text>
              </ChakraBox>
            ))}
          </SimpleGrid>
        </Box>
      </Box>
    </ChakraBox>
  );
};

// Skill Evolution Component
interface SkillEvolutionProps {
  experiences: Array<{
    position: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
  }>;
}

const SkillEvolution: React.FC<SkillEvolutionProps> = ({ experiences }) => {
  // Extract unique skills from all experiences
  const allSkills = [
    "UI/UX Design", "Frontend", "React", "Figma", "Team Leadership",
    "Project Management", "Design Systems", "Responsive Design"
  ];
  
  const accentColor = useColorModeValue('brand.500', 'brand.300');
  const textColor = useColorModeValue('gray.800', 'white');
  const textSecondary = useColorModeValue('gray.600', 'gray.400');
  const cardBg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.800');
  
  return (
    <Box mt={12} mb={16}>
      <VStack spacing={4} mb={6}>
        <Heading as="h3" size="lg" textAlign="center" color={textColor}>
          Skill Evolution
        </Heading>
        <Text color={textSecondary} textAlign="center" maxW="2xl">
          See how my skills have developed throughout my career journey
        </Text>
      </VStack>
      
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
        {allSkills.slice(0, 4).map((skill) => (
          <SkillProgressCard key={skill} skill={skill} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

interface SkillProgressCardProps {
  skill: string;
}

const SkillProgressCard: React.FC<SkillProgressCardProps> = ({ skill }) => {
  // Simulated skill progress through career stages
  const stages = [
    { period: "2016-2018", level: 60 },
    { period: "2018-2021", level: 80 },
    { period: "2021-Present", level: 95 }
  ];
  
  const accentColor = useColorModeValue('brand.500', 'brand.300');
  const textColor = useColorModeValue('gray.800', 'white');
  const textSecondary = useColorModeValue('gray.600', 'gray.400');
  const cardBg = useColorModeValue('white', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.800');
  
  return (
    <ChakraBox
      bg={cardBg}
      p={4}
      borderRadius="lg"
      border="1px solid"
      borderColor={borderColor}
      boxShadow="md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Text fontWeight="bold" mb={4} color={textColor}>
        {skill}
      </Text>
      
      <VStack spacing={3} align="stretch">
        {stages.map((stage, index) => (
          <Box key={index}>
            <Flex justify="space-between" mb={1}>
              <Text fontSize="xs" color={textSecondary}>{stage.period}</Text>
              <Text fontSize="xs" color={textSecondary}>{stage.level}%</Text>
            </Flex>
            <ChakraBox
              h="3px"
              w="100%"
              bg={useColorModeValue('gray.100', 'gray.700')}
              borderRadius="full"
              position="relative"
              overflow="hidden"
            >
              <ChakraBox
                position="absolute"
                left={0}
                top={0}
                bottom={0}
                width={`${stage.level}%`}
                bgGradient={`linear(to-r, ${accentColor}, purple.400)`}
                borderRadius="full"
                initial={{ width: 0 }}
                whileInView={{ width: `${stage.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 + (index * 0.2) } as any}
              />
            </ChakraBox>
          </Box>
        ))}
      </VStack>
    </ChakraBox>
  );
};

const AboutPage = () => {
  const { isOpen: isFactsOpen, onToggle: onFactsToggle } = useDisclosure();
  
  // Colors for dark mode aesthetic
  const bgMain = useColorModeValue('gray.50', 'gray.900');
  const bgSecondary = useColorModeValue('white', 'gray.800');
  const bgAccent = useColorModeValue('brand.50', 'brand.900');
  const bgGradient = useColorModeValue(
    'linear(to-br, gray.50, purple.50, blue.50)',
    'linear(to-br, gray.900, purple.900, blue.900)'
  );
  const textPrimary = useColorModeValue('gray.800', 'gray.100');
  const textSecondary = useColorModeValue('gray.600', 'gray.400');
  const accentColor = useColorModeValue('brand.500', 'brand.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const cardShadow = useColorModeValue('lg', 'dark-lg');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  };
  
  const scaleVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.98, transition: { duration: 0.3 } },
  };

  // Skill block hover animation variants
  const skillBlockVariants = {
    initial: { opacity: 0.9 },
    hover: { 
      opacity: 1, 
      scale: 1.02, 
      transition: { duration: 0.2 } 
    }
  };

  // State for the active experience in navigation
  const [activeExperienceIndex, setActiveExperienceIndex] = useState(0);

  return (
    <Box as="main">
      {/* Modern Hero Section with Asymmetric Layout */}
      <Box
        bg={bgGradient}
        pt={{ base: 24, md: 32 }}
        pb={{ base: 20, md: 28 }}
        overflow="hidden"
        position="relative"
      >
        {/* Abstract decorative elements */}
        <Box
          position="absolute"
          top="-10%"
          right="-5%"
          width="30%"
          height="30%"
          bg={useColorModeValue('purple.50', 'purple.900')}
          opacity="0.4"
          borderRadius="full"
          filter="blur(70px)"
          zIndex="0"
        />
        <Box
          position="absolute"
          bottom="-15%"
          left="-10%"
          width="40%"
          height="40%"
          bg={useColorModeValue('blue.50', 'blue.900')}
          opacity="0.5"
          borderRadius="full"
          filter="blur(90px)"
          zIndex="0"
        />
        
        <Container maxW="container.xl" position="relative" zIndex="1">
          <ChakraBox
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Grid 
              templateColumns={{ base: '1fr', lg: '7fr 5fr' }} 
              gap={{ base: 12, lg: 20 }}
            >
              {/* Left content area */}
              <GridItem order={{ base: 2, lg: 1 }}>
                <ChakraBox variants={itemVariants}>
                  {/* Eyebrow text with line */}
                  <HStack mb={6} spacing={3} align="center">
                    <Box h="1px" w="60px" bg={accentColor} />
                    <Text 
                      textTransform="uppercase" 
                      letterSpacing="wider" 
                      fontSize="sm" 
                      fontWeight="medium"
                      color={accentColor}
                    >
                      Designer & Developer
                    </Text>
                  </HStack>
                  
                  {/* Main headline with varied styles and weights */}
                  <Heading
                    as="h1"
                    fontSize={{ base: "5xl", md: "7xl" }}
                    lineHeight="shorter"
                    mb={8}
                    fontWeight="400"
                  >
                    Where Design
                    <Box as="span" display="block" fontWeight="bold" color={accentColor}>
                    Meets
                    </Box>
                    <Box as="span" display="block">
                      Strategy.
                    </Box>
                  </Heading>
                  
                  {/* Featured quote instead of standard paragraph */}
                  <Box 
                    borderLeft="3px solid" 
                    borderColor={accentColor} 
                    pl={5} 
                    mb={8}
                  >
                    <Text fontSize="xl" fontWeight="400" color={textSecondary}>
                    "Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated." - Paul Rand
                    </Text>
                  </Box>
                  
                  {/* Key facts in horizontal layout */}
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
                    <ChakraBox 
                      variants={itemVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <HStack align="flex-start" spacing={3}>
                        <Box
                          p={2}
                          borderRadius="md"
                          bg={bgAccent}
                          color={accentColor}
                        >
                          <Icon as={FiBriefcase} boxSize={5} />
                        </Box>
                        <Box>
                          <Text fontWeight="bold" fontSize="lg">5+ Years</Text>
                          <Text color={textSecondary} fontSize="sm">Professional Experience</Text>
                        </Box>
                      </HStack>
                    </ChakraBox>
                    
                    <ChakraBox 
                      variants={itemVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      <HStack align="flex-start" spacing={3}>
                        <Box
                          p={2}
                          borderRadius="md"
                          bg={bgAccent}
                          color={accentColor}
                        >
                          <Icon as={FiGlobe} boxSize={5} />
                        </Box>
                        <Box>
                          <Text fontWeight="bold" fontSize="lg">50+ Projects</Text>
                          <Text color={textSecondary} fontSize="sm">Completed Overall</Text>
                        </Box>
                      </HStack>
                    </ChakraBox>
                  </SimpleGrid>
                  
                  {/* Call to action buttons */}
                  <ChakraBox variants={itemVariants}>
                    <HStack spacing={4} wrap="wrap">
                      <Button
                        as={RouterLink}
                        to="/contact"
                        size="lg"
                        colorScheme="brand"
                        rightIcon={<FiArrowRight />}
                        _hover={{
                          transform: 'translateY(-2px)',
                          boxShadow: 'lg',
                        }}
                      >
                        Let's Connect
                      </Button>
                      <Button
                        as="a"
                        href="/resume.pdf"
                        download
                        variant="outline"
                        size="lg"
                        rightIcon={<FiDownload />}
                        borderWidth={2}
                        _hover={{
                          bg: bgAccent,
                          transform: 'translateY(-2px)',
                        }}
                      >
                        Download CV
                      </Button>
                    </HStack>
                  </ChakraBox>
                </ChakraBox>
              </GridItem>
              
              {/* Right image area with creative framing */}
              <GridItem order={{ base: 1, lg: 2 }}>
                <ChakraBox
                  variants={itemVariants}
                  position="relative"
                  zIndex={2}
                >
                  <Box
                    position="relative"
                    height="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    {/* Background shape */}
                    <Box
                      position="absolute"
                      bottom="-5%"
                      right="-5%"
                      width="80%"
                      height="80%"
                      bg={accentColor}
                      opacity="0.15"
                      borderRadius="10% 30% 50% 70%"
                      zIndex="-1"
                      transform="rotate(-5deg)"
                    />
                    
                    {/* Image container with creative border */}
                    <ChakraBox
                      borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
                      overflow="hidden"
                      boxShadow={cardShadow}
                      maxW="450px"
                      width="100%"
                      position="relative"
                      _before={{
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        borderRadius: 'inherit',
                        padding: '4px',
                        background: `linear-gradient(135deg, ${accentColor}, transparent)`,
                        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                        WebkitMaskComposite: 'xor',
                        maskComposite: 'exclude',
                      }}
                      whileHover={{ 
                        borderRadius: "50% 50% 50% 50% / 50% 50% 50% 50%" 
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src="images/profile.png"
                        alt="Eric Black"
                        w="100%"
                        h="100%"
                        objectFit="cover"
                      />
                    </ChakraBox>
                  </Box>
                </ChakraBox>
              </GridItem>
            </Grid>
            
            {/* Personal facts interactive element */}
            <ChakraBox
              variants={itemVariants}
              mt={{ base: 12, lg: 20 }}
              p={6}
              borderRadius="xl"
              bg={bgSecondary}
              boxShadow="md"
              whileHover={{ y: -5 }}
              cursor="pointer"
              onClick={onFactsToggle}
            >
              <Flex justify="space-between" align="center">
                <HStack>
                  <Icon
                    as={isFactsOpen ? FiMinus : FiPlus}
                    color={accentColor}
                    boxSize={5}
                  />
                  <Heading
                    as="h3"
                    fontSize="xl"
                    fontWeight="500"
                  >
                    Get to know me beyond the résumé
                  </Heading>
                </HStack>
                <Tag size="md" colorScheme="brand" borderRadius="full">
                  Personal
                </Tag>
              </Flex>
              
              <Collapse in={isFactsOpen} animateOpacity>
                <Box pt={6}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    {personalFacts.map((fact, index) => (
                      <HStack
                        key={index}
                        p={3}
                        borderRadius="md"
                        bg={bgAccent}
                        align="flex-start"
                      >
                        <Text
                          fontSize="xl"
                          fontWeight="bold"
                          color={accentColor}
                        >
                          {index + 1}.
                        </Text>
                        <Text>{fact}</Text>
                      </HStack>
                    ))}
                  </SimpleGrid>
                </Box>
              </Collapse>
            </ChakraBox>
          </ChakraBox>
        </Container>
      </Box>

      {/* Completely redesigned Skills Section - 2024 Design Trends */}
      <Box 
        py={{ base: 20, md: 32 }} 
        position="relative" 
        overflow="hidden"
        bg={useColorModeValue('gray.50', 'black')}
      >
        {/* Animated background elements */}
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          opacity={useColorModeValue('0.03', '0.05')}
          zIndex="0"
          bgImage="url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')"
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundAttachment="fixed"
        />
        
        {/* Holographic color blobs - adjusted for light mode */}
        <Box
          position="absolute"
          top="10%"
          right="-5%"
          width="40%"
          height="40%"
          bg={useColorModeValue('purple.200', 'purple.600')}
          filter="blur(120px)"
          opacity={useColorModeValue('0.2', '0.15')}
          mixBlendMode="multiply"
          zIndex="0"
          transform="rotate(-15deg)"
        />
        <Box
          position="absolute"
          bottom="-10%"
          left="-10%"
          width="50%"
          height="40%"
          bg={useColorModeValue('cyan.100', 'cyan.400')}
          filter="blur(150px)"
          opacity={useColorModeValue('0.2', '0.1')}
          mixBlendMode="multiply"
          zIndex="0"
        />
        <Box
          position="absolute"
          top="40%"
          left="30%"
          width="20%"
          height="20%"
          bg={useColorModeValue('brand.200', 'brand.400')}
          filter="blur(100px)"
          opacity={useColorModeValue('0.2', '0.15')}
          mixBlendMode="multiply"
          zIndex="0"
        />
        
        <Container maxW="container.xl" position="relative" zIndex="1">
          {/* Redesigned section header to match Education section */}
          <VStack spacing={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl" fontWeight="400" color={useColorModeValue('gray.800', 'white')}>
              My Expertise
            </Heading>
            <Text
              fontSize="lg"
              color={useColorModeValue('gray.600', 'gray.300')}
              maxW="2xl"
            >
              I've cultivated a versatile skill set that enables me to tackle complex design challenges with confidence and precision.
            </Text>
          </VStack>
          
          {/* Modern Bento Grid Layout */}
          <Box 
            sx={{
              display: "grid",
              gridTemplateColumns: { 
                base: "repeat(1, 1fr)", 
                md: "repeat(6, 1fr)" 
              },
              gridTemplateRows: { 
                base: "auto", 
                md: "repeat(6, minmax(60px, auto))" 
              },
              gap: { base: 5, md: 6 },
              width: "100%",
            }}
          >
            {/* Skill Area 1: Large feature box - UI/UX Design */}
          <ChakraBox
              gridColumn={{ md: "span 4" }}
              gridRow={{ md: "span 3" }}
              borderRadius="2xl"
              overflow="hidden"
              position="relative"
              bg={useColorModeValue('white', 'gray.900')}
              borderWidth="1px"
              borderColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
              variants={itemVariants}
            initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              _before={{
                content: '""',
                position: 'absolute',
                inset: 0,
                borderRadius: 'inherit',
                padding: '1px',
                background: useColorModeValue(
                  'linear-gradient(135deg, #63B3ED, #9F7AEA, transparent 70%)',
                  'linear-gradient(135deg, #4299E1, #9F7AEA, transparent 70%)'
                ),
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                opacity: 0.8,
              }}
            >
              {/* Background elements */}
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                backgroundImage={useColorModeValue(
                  'radial-gradient(circle at 70% 30%, rgba(124, 58, 237, 0.1) 0%, rgba(255,255,255,0) 70%)',
                  'radial-gradient(circle at 70% 30%, rgba(124, 58, 237, 0.2) 0%, rgba(0,0,0,0) 70%)'
                )}
                zIndex="0"
              />
              
              {/* Grid pattern background */}
              <Box
                position="absolute"
                width="100%"
                height="100%"
                opacity={useColorModeValue('0.03', '0.05')}
                backgroundImage={`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
                zIndex="0"
              />
              
              <Grid 
                templateColumns={{ base: "1fr", lg: "1.2fr 0.8fr" }}
                height="100%"
                p={{ base: 6, md: 8 }}
                gap={8}
                position="relative"
                zIndex="1"
              >
                {/* Left Column - Main Content */}
                <GridItem>
                  <Flex direction="column" height="100%" justify="space-between">
                    {/* Header */}
                    <Box mb={6}>
                      <HStack mb={3}>
                        <Box 
                          borderRadius="full"
                          bg={useColorModeValue('blue.100', 'blue.900')}
                          p={2}
                          color={useColorModeValue('blue.500', 'blue.300')}
                        >
                          <Icon as={FiPenTool} boxSize={5} />
                        </Box>
                        <Box>
                <Text 
                  textTransform="uppercase" 
                  fontSize="sm" 
                            letterSpacing="wider" 
                            fontWeight="600"
                            color={useColorModeValue('brand.500', 'brand.300')}
                >
                            Primary Specialty
                </Text>
              <Heading 
                            as="h3" 
                            fontSize={{ base: "3xl", md: "4xl" }} 
                            fontWeight="700"
                            bgGradient={useColorModeValue(
                              'linear(to-r, blue.500, purple.500)',
                              'linear(to-r, blue.300, purple.300)'
                            )}
                            bgClip="text"
                          >
                            UI/UX Design
              </Heading>
                        </Box>
                      </HStack>
                      
                      <Text 
                        fontSize={{ base: "md", md: "lg" }}
                        color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                        lineHeight="tall"
                      >
                        I craft user-centered digital experiences that balance aesthetics with functionality, 
                        solving real problems through thoughtful design.
              </Text>
            </Box>
            
                    {/* Design Process */}
                    <Box mb={6}>
                      <Text 
                        fontSize="sm" 
                        fontWeight="600" 
                        color={useColorModeValue('gray.700', 'whiteAlpha.900')} 
                        mb={4}
                      >
                        Design Process
                      </Text>
                      
            <Grid 
                        templateColumns="repeat(5, 1fr)" 
                        gap={2}
                        position="relative"
                      >
                        {/* Process Arrow */}
                        <Box
                          position="absolute"
                          top="15px"
                          left="10%"
                          width="80%"
                          height="2px"
                          bg={useColorModeValue(
                            'linear-gradient(to right, #63B3ED, #9F7AEA)',
                            'linear-gradient(to right, #4299E1, #9F7AEA)'
                          )}
                          zIndex={0}
                        />
                        
                        {/* Process Steps */}
                        {[
                          { icon: FiUser, label: "Research", 
                            tooltip: "Understanding user needs through research" },
                          { icon: FiPenTool, label: "Ideate", 
                            tooltip: "Brainstorming and sketching ideas" },
                          { icon: FiLayout, label: "Wireframe", 
                            tooltip: "Creating structural blueprints" },
                          { icon: FiSmartphone, label: "Prototype", 
                            tooltip: "Building interactive mockups" },
                          { icon: FiCheckCircle, label: "Test", 
                            tooltip: "Validating with usability testing" }
                        ].map((step, idx) => (
                          <VStack key={idx} spacing={2} position="relative" zIndex={1}>
                            <Tooltip label={step.tooltip} hasArrow placement="top">
                              <ChakraBox
                                bg={useColorModeValue('white', 'gray.800')}
                                boxSize="30px"
                                borderRadius="full"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                borderWidth="2px"
                                borderColor={useColorModeValue('blue.400', 'blue.400')}
                                color={useColorModeValue('blue.500', 'blue.300')}
                                boxShadow={useColorModeValue(
                                  '0 0 0 4px rgba(99, 179, 237, 0.15)',
                                  '0 0 0 4px rgba(49, 130, 206, 0.2)'
                                )}
                                whileHover={{ scale: 1.1 }}
                              >
                                <Icon as={step.icon} boxSize={4} />
                              </ChakraBox>
                            </Tooltip>
                            <Text 
                              fontSize="xs" 
                              fontWeight="500"
                              color={useColorModeValue('gray.700', 'whiteAlpha.800')}
                              textAlign="center"
                            >
                              {step.label}
                            </Text>
                          </VStack>
                        ))}
                      </Grid>
                    </Box>
                    
                    {/* Design System Preview */}
                    <Box mb={6}>
                      <Text 
                        fontSize="sm" 
                        fontWeight="600" 
                        color={useColorModeValue('gray.700', 'whiteAlpha.900')} 
                        mb={3}
                      >
                        Design Principles
                      </Text>
                      
                      <SimpleGrid columns={{ base: 2, md: 4 }} spacing={4}>
                        {[
                          { 
                            name: "User-Centered",
                            icon: FiUser,
                            color: useColorModeValue('blue.500', 'blue.300')
                          },
                          { 
                            name: "Accessible",
                            icon: FiGlobe,
                            color: useColorModeValue('purple.500', 'purple.300')
                          },
                          { 
                            name: "Consistent",
                            icon: FiLayout,
                            color: useColorModeValue('teal.500', 'teal.300')
                          },
                          { 
                            name: "Intuitive",
                            icon: FiZap,
                            color: useColorModeValue('orange.500', 'orange.300')
                          }
                        ].map((principle, idx) => (
                          <ChakraBox
                            key={idx}
                            bg={useColorModeValue('gray.50', 'whiteAlpha.100')}
                            borderRadius="lg"
                            p={3}
                            whileHover={{ y: -4 }}
                            transition={{ duration: 0.2 }}
                          >
                            <VStack spacing={2} align="center">
                              <Box
                                borderRadius="full"
                                color={principle.color}
                              >
                                <Icon as={principle.icon} boxSize={5} />
                              </Box>
                              <Text
                                fontSize="xs"
                                fontWeight="600"
                                textAlign="center"
                              >
                                {principle.name}
                              </Text>
                            </VStack>
                          </ChakraBox>
                        ))}
                      </SimpleGrid>
                    </Box>
                    
                    {/* Tools */}
                    <Box>
                      <Text fontSize="sm" color={useColorModeValue('gray.600', 'whiteAlpha.700')} mb={3}>
                        Design Tools:
                      </Text>
                      <Flex wrap="wrap" gap={2}>
                        {[
                          { name: 'Figma', color: useColorModeValue('blue.500', 'blue.300') },
                          { name: 'Sketch', color: useColorModeValue('yellow.500', 'yellow.300') },
                          { name: 'Adobe XD', color: useColorModeValue('purple.500', 'purple.300') },
                          { name: 'Principle', color: useColorModeValue('red.500', 'red.300') },
                          { name: 'Photoshop', color: useColorModeValue('blue.600', 'blue.400') },
                          { name: 'Illustrator', color: useColorModeValue('orange.500', 'orange.300') }
                        ].map((tool) => (
                          <Tag 
                            key={tool.name} 
                            size="sm" 
                            bg={useColorModeValue('white', 'gray.800')}
                            color={tool.color}
                            borderRadius="full"
                            borderWidth="1px"
                            borderColor={useColorModeValue('gray.200', 'whiteAlpha.300')}
                            _hover={{ 
                              borderColor: tool.color, 
                              transform: 'translateY(-2px)' 
                            }}
                            transition="all 0.2s"
                          >
                            {tool.name}
                          </Tag>
                        ))}
                      </Flex>
                    </Box>
                  </Flex>
                </GridItem>
                
                {/* Right Column - Visual Examples */}
                <GridItem display={{ base: "none", lg: "block" }}>
                  <Flex direction="column" height="100%" justify="space-between">
                    {/* Color Palette */}
                    <Box mb={6}>
                      <Text 
                        fontSize="sm" 
                        fontWeight="600" 
                        color={useColorModeValue('gray.700', 'whiteAlpha.900')} 
                        mb={3}
                      >
                        Color System
                      </Text>
                      
                      <Grid templateColumns="repeat(5, 1fr)" gap={2}>
                        {[
                          { color: useColorModeValue('#3182CE', '#4299E1'), name: 'Primary' },
                          { color: useColorModeValue('#805AD5', '#9F7AEA'), name: 'Secondary' },
                          { color: useColorModeValue('#38B2AC', '#4FD1C5'), name: 'Accent' },
                          { color: useColorModeValue('#2D3748', '#E2E8F0'), name: 'Text' },
                          { color: useColorModeValue('#EDF2F7', '#1A202C'), name: 'Background' }
                        ].map((colorItem, idx) => (
                          <VStack key={idx} spacing={1}>
                            <Box 
                              w="100%" 
                              h="32px" 
                              bg={colorItem.color} 
                              borderRadius="md"
                              boxShadow="sm"
                            />
                            <Text fontSize="xs" textAlign="center">
                              {colorItem.name}
                            </Text>
                          </VStack>
                        ))}
                      </Grid>
                    </Box>
                    
                    {/* UI Component Examples */}
                    <Box mb={6}>
                      <Text 
                        fontSize="sm" 
                        fontWeight="600" 
                        color={useColorModeValue('gray.700', 'whiteAlpha.900')} 
                        mb={3}
                      >
                        UI Components
                      </Text>
                      
                      <VStack 
                        align="stretch" 
                        spacing={3} 
                        bg={useColorModeValue('gray.50', 'gray.800')}
                        p={3}
                        borderRadius="md"
                      >
                        {/* Button Styles */}
                        <HStack spacing={2}>
                          <Button size="sm" colorScheme="blue">
                            Primary
                          </Button>
                          <Button size="sm" variant="outline" colorScheme="blue">
                            Secondary
                          </Button>
                          <Button size="sm" variant="ghost" colorScheme="blue">
                            Tertiary
                          </Button>
                        </HStack>
                        
                        {/* Input Example */}
                        <HStack spacing={2} align="flex-end">
                          <Box flex="1">
                            <Text fontSize="xs" mb={1}>Form Field</Text>
                            <Box 
                              h="30px" 
                              borderWidth="1px" 
                              borderColor={useColorModeValue('gray.300', 'whiteAlpha.300')}
                              borderRadius="md"
                              bg={useColorModeValue('white', 'gray.700')}
                            />
                            </Box>
                          <Box>
                            <Button size="sm" colorScheme="blue" h="30px">
                              Submit
                            </Button>
                          </Box>
                          </HStack>
                        
                        {/* Card Preview */}
                        <Box
                          p={2}
                          bg={useColorModeValue('white', 'gray.700')}
                          borderRadius="md"
                          borderWidth="1px"
                          borderColor={useColorModeValue('gray.200', 'whiteAlpha.200')}
                        >
                          <VStack align="stretch" spacing={2}>
                            <Box h="40px" bg={useColorModeValue('gray.100', 'gray.600')} borderRadius="sm" />
                            <Box h="8px" w="70%" bg={useColorModeValue('gray.200', 'gray.500')} borderRadius="sm" />
                            <Box h="6px" w="90%" bg={useColorModeValue('gray.100', 'gray.600')} borderRadius="sm" />
                            <Box h="6px" w="80%" bg={useColorModeValue('gray.100', 'gray.600')} borderRadius="sm" />
                            <HStack justify="flex-end">
                              <Box h="20px" w="60px" bg={useColorModeValue('blue.100', 'blue.800')} borderRadius="sm" />
                        </HStack>
                          </VStack>
                        </Box>
                      </VStack>
                    </Box>
                    
                    {/* Skill Proficiency */}
                    <Box>
                      <Text 
                        fontSize="sm" 
                        fontWeight="600" 
                        color={useColorModeValue('gray.700', 'whiteAlpha.900')} 
                        mb={3}
                      >
                        Skill Proficiency
                      </Text>
                      
                      <VStack spacing={3}>
                        {[
                          { name: 'User Research', value: 90, color: useColorModeValue('#3182CE', '#4299E1') },
                          { name: 'Wireframing', value: 95, color: useColorModeValue('#805AD5', '#9F7AEA') },
                          { name: 'Prototyping', value: 90, color: useColorModeValue('#38B2AC', '#4FD1C5') },
                          { name: 'UI Design', value: 95, color: useColorModeValue('#3182CE', '#4299E1') },
                          { name: 'Design Systems', value: 95, color: useColorModeValue('#805AD5', '#9F7AEA') },
                        ].map((skill) => (
                          <Box key={skill.name} width="100%">
                            <Flex justify="space-between" mb={1}>
                              <Text fontSize="xs" color={useColorModeValue('gray.700', 'whiteAlpha.900')}>
                                {skill.name}
                              </Text>
                              <Text fontSize="xs" color={useColorModeValue('gray.600', 'whiteAlpha.700')}>
                                {skill.value}%
                              </Text>
                            </Flex>
                            <Box 
                              width="100%" 
                              height="4px" 
                              bg={useColorModeValue('gray.100', 'whiteAlpha.100')}
                              borderRadius="full" 
                              overflow="hidden"
                            >
                          <ChakraBox
                            height="100%"
                                width={`${skill.value}%`} 
                                bg={skill.color}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.value}%` }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                              />
                            </Box>
                          </Box>
                        ))}
                      </VStack>
                    </Box>
                  </Flex>
                </GridItem>
              </Grid>
            </ChakraBox>
                        
            {/* Skill Area 2: Development Skills */}
                          <ChakraBox
              gridColumn={{ md: "span 2" }}
              gridRow={{ md: "span 3" }}
              borderRadius="2xl"
              bg={useColorModeValue('white', 'gray.900')}
              borderWidth="1px"
              borderColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
              p={8}
              position="relative"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              overflow="hidden"
              _before={{
                              content: '""',
                              position: 'absolute',
                inset: 0,
                borderRadius: 'inherit',
                padding: '1px',
                background: useColorModeValue(
                  'linear-gradient(220deg, #63B3ED, transparent 60%)',
                  'linear-gradient(220deg, #3182CE, transparent 60%)'
                ),
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                opacity: 0.7,
              }}
            >
              <Box
                position="absolute"
                bottom="0"
                right="0"
                width="100%"
                height="50%"
                backgroundImage={useColorModeValue(
                  'radial-gradient(circle at 100% 100%, rgba(99, 179, 237, 0.1) 0%, rgba(255,255,255,0) 70%)',
                  'radial-gradient(circle at 100% 100%, rgba(49, 130, 206, 0.15) 0%, rgba(0,0,0,0) 70%)'
                )}
                zIndex="0"
              />
              
              <VStack align="start" spacing={6} zIndex="1" position="relative">
                <Box>
                  <Text 
                    textTransform="uppercase" 
                    fontSize="xs" 
                    letterSpacing="wider" 
                    fontWeight="600"
                    color={useColorModeValue('blue.500', 'blue.300')}
                    mb={1}
                  >
                    Secondary Focus
                  </Text>
                  <Heading 
                    as="h3" 
                    fontSize={{ base: "2xl", md: "3xl" }} 
                    fontWeight="700"
                    color={useColorModeValue('gray.900', 'white')}
                    lineHeight="1.1"
                  >
                    Frontend <Box as="span" display="block" color={useColorModeValue('blue.500', 'blue.200')}>Development</Box>
                  </Heading>
                      </Box>
                
                {/* Interactive Frontend Development Card Content - Redesigned */}
                <Grid 
                  templateColumns="1fr 1fr" 
                  gap={4} 
                  width="100%" 
                  position="relative"
                  height="222px" // Fixed height to match original card
                >
                  {/* Animated Background Element */}
                  <Box
                    position="absolute"
                    top="0"
                    right="0"
                    width="100%"
                    height="100%"
                    opacity={0.07}
                    zIndex="0"
                    backgroundImage={`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${useColorModeValue('3182CE', '63B3ED')}' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}
                    as={motion.div}
                    animate={{
                      backgroundPosition: ["0px 0px", "20px 20px"],
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      duration: 30, 
                      ease: "linear" 
                    } as any}
                  />
                  
                  {/* Left Column: Skills */}
                  <Box position="relative" zIndex="1">
                    {/* Skills Visualization with Horizontal Bars */}
                    <VStack align="stretch" spacing={3}>
                      {[
                        { name: 'React', value: 90, color: 'blue' },
                        { name: 'TypeScript', value: 85, color: 'cyan' },
                        { name: 'Next.js', value: 80, color: 'teal' },
                        { name: 'Chakra UI', value: 95, color: 'purple' }
                      ].map((skill, index) => (
                        <ChakraBox
                          key={skill.name}
                          as={motion.div}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            delay: 0.1 * index,
                            duration: 0.3
                          } as any}
                        >
                          <HStack width="100%" justify="space-between" mb={1}>
                            <Text 
                              fontSize="sm" 
                              fontWeight="medium" 
                              color={useColorModeValue('gray.700', 'gray.300')}
                            >
                              {skill.name}
                            </Text>
                            <Text 
                              fontSize="xs" 
                              fontWeight="bold" 
                              color={useColorModeValue(`${skill.color}.500`, `${skill.color}.300`)}
                            >
                              {skill.value}%
                            </Text>
                          </HStack>
                          <Box 
                            height="6px" 
                            width="100%" 
                            bg={useColorModeValue('gray.100', 'gray.700')} 
                            borderRadius="full" 
                            overflow="hidden"
                            position="relative"
                          >
                            <ChakraBox
                              height="100%"
                              bg={useColorModeValue(
                                `linear-gradient(90deg, ${skill.color}.400, ${skill.color}.500)`,
                                `linear-gradient(90deg, ${skill.color}.500, ${skill.color}.400)`
                              )}
                              borderRadius="full"
                              width={`${skill.value}%`}
                              as={motion.div}
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.value}%` }}
                              transition={{ 
                                duration: 0.5,
                                delay: 0.2 + (index * 0.1)
                              } as any}
                              _hover={{
                                boxShadow: `0 0 10px ${useColorModeValue(`${skill.color}.300`, `${skill.color}.200`)}`
                              }}
                            />
                      </Box>
                    </ChakraBox>
                  ))}
                </VStack>
                    
                    {/* Proficiency Tags in Grid Layout */}
                    <Box mt={4}>
                      <Text 
                        fontSize="xs" 
                        fontWeight="600" 
                        mb={2} 
                        color={useColorModeValue('gray.700', 'whiteAlpha.800')}
                      >
                        Also Proficient With:
                      </Text>
                      <SimpleGrid columns={3} spacing={2}>
                        {['Redux', 'HTML5', 'CSS3', 'SASS', 'Tailwind', 'Jest'].map((tool) => (
                          <Tag 
                            key={tool} 
                            size="sm" 
                            bg={useColorModeValue('blue.50', 'whiteAlpha.200')}
                            color={useColorModeValue('blue.700', 'white')}
                            borderRadius="full"
                            fontSize="xs"
                            py={1}
                            _hover={{ 
                              bg: useColorModeValue('blue.100', 'whiteAlpha.300'),
                              transform: 'translateY(-2px)'
                            }}
                            transition="all 0.2s"
                            cursor="pointer"
                          >
                            {tool}
                          </Tag>
                        ))}
                      </SimpleGrid>
                    </Box>
                  </Box>
                  
                  {/* Right Column: Interactive Code & Ecosystem */}
                  <Box position="relative" zIndex="1">
                  <ChakraBox 
                      bg={useColorModeValue('gray.50', 'gray.800')}
                      borderRadius="md"
                      p={3}
                      width="100%"
                      height="100%"
                      fontSize="xs"
                      fontFamily="mono"
                      color={useColorModeValue('gray.700', 'gray.300')}
                      position="relative"
                      borderWidth="1px"
                      borderColor={useColorModeValue('gray.200', 'gray.700')}
                      overflow="hidden"
                      as={motion.div}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 } as any}
                    >
                      {/* Code Editor Header */}
                      <HStack mb={2} color={useColorModeValue('gray.500', 'gray.400')} fontSize="xs" spacing={2}>
                        <Circle size="8px" bg="red.400" />
                        <Circle size="8px" bg="yellow.400" />
                        <Circle size="8px" bg="green.400" />
                        <Spacer />
                        <Text fontSize="xs">FrontendApp.tsx</Text>
                      </HStack>
                      
                      {/* Code Editor Content */}
                      <Box position="relative">
                        {/* Code Snippet */}
                        <VStack align="stretch" spacing={0.5}>
                          <Text color={useColorModeValue('purple.600', 'purple.300')}>import</Text>
                          <Text pl={2} color={useColorModeValue('gray.700', 'gray.300')}>{'{'} useState, useEffect {'}'} from 'react';</Text>
                          
                          <Text color={useColorModeValue('purple.600', 'purple.300')}>const</Text>
                          <Text pl={2} color={useColorModeValue('blue.600', 'blue.300')}>App</Text>
                          <Text pl={2} color={useColorModeValue('gray.700', 'gray.300')}> = () {'->'} {'{'}</Text>
                          
                          <Text pl={4} color={useColorModeValue('purple.600', 'purple.300')}>return</Text>
                          <Text pl={6} color={useColorModeValue('red.500', 'red.300')}>{'<'}<Text as="span" color={useColorModeValue('blue.600', 'blue.300')}>Dashboard</Text> {'>'}</Text>
                          <Text pl={8} color={useColorModeValue('red.500', 'red.300')}>{'<'}<Text as="span" color={useColorModeValue('blue.600', 'blue.300')}>Header</Text> {'/>'}</Text>
                          <Text pl={8} color={useColorModeValue('red.500', 'red.300')}>{'<'}<Text as="span" color={useColorModeValue('blue.600', 'blue.300')}>Content</Text> {'/>'}</Text>
                          <Text pl={8} color={useColorModeValue('red.500', 'red.300')}>{'<'}<Text as="span" color={useColorModeValue('blue.600', 'blue.300')}>Footer</Text> {'/>'}</Text>
                          <Text pl={6} color={useColorModeValue('red.500', 'red.300')}>{'</'}<Text as="span" color={useColorModeValue('blue.600', 'blue.300')}>Dashboard</Text>{'>'}</Text>
                          <Text pl={2} color={useColorModeValue('gray.700', 'gray.300')}>{'}'}</Text>
                        </VStack>
                        
                        {/* Overlay Ecosystem Elements */}
                  <ChakraBox 
                          position="absolute"
                          top="0"
                          right="0"
                          width="40%"
                          height="100%"
                          as={motion.div}
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 } as any}
                        >
                          {/* React Node */}
                          <Box position="absolute" top="10%" right="20%">
                            <Circle 
                              size="30px" 
                              bg={useColorModeValue('blue.100', 'blue.900')} 
                              color={useColorModeValue('blue.600', 'blue.200')}
                              fontSize="xs"
                              fontWeight="bold"
                              borderWidth="1px"
                              borderColor={useColorModeValue('blue.300', 'blue.600')}
                            >
                              React
                            </Circle>
                          </Box>
                          
                          {/* TypeScript Node */}
                          <Box position="absolute" top="35%" right="40%">
                            <Circle 
                              size="30px" 
                              bg={useColorModeValue('cyan.100', 'cyan.900')} 
                              color={useColorModeValue('cyan.600', 'cyan.200')}
                              fontSize="xs"
                              fontWeight="bold"
                              borderWidth="1px"
                              borderColor={useColorModeValue('cyan.300', 'cyan.600')}
                            >
                              TS
                            </Circle>
                          </Box>
                          
                          {/* Next.js Node */}
                          <Box position="absolute" top="60%" right="30%">
                            <Circle 
                              size="30px" 
                              bg={useColorModeValue('teal.100', 'teal.900')} 
                              color={useColorModeValue('teal.600', 'teal.200')}
                              fontSize="xs"
                              fontWeight="bold"
                              borderWidth="1px"
                              borderColor={useColorModeValue('teal.300', 'teal.600')}
                            >
                              Next
                            </Circle>
                          </Box>
                          
                          {/* Connection Lines */}
                          <ChakraBox
                            as={motion.div}
                            position="absolute"
                            width="100%"
                            height="100%"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 } as any}
                          >
                            <Box
                              position="absolute"
                              top="25%"
                              right="30%"
                              height="1px"
                              width="30px"
                              bg={useColorModeValue('blue.300', 'blue.500')}
                              transform="rotate(30deg)"
                              transformOrigin="right"
                            />
                            <Box
                              position="absolute"
                              top="48%"
                              right="35%"
                              height="1px"
                              width="20px"
                              bg={useColorModeValue('cyan.300', 'cyan.500')}
                              transform="rotate(-20deg)"
                              transformOrigin="right"
                            />
                            <Box
                              position="absolute"
                              top="65%"
                              right="30%"
                              height="1px"
                              width="25px"
                              bg={useColorModeValue('teal.300', 'teal.500')}
                              transform="rotate(-30deg)"
                              transformOrigin="right"
                            />
                  </ChakraBox>
                        </ChakraBox>
                      </Box>
                    </ChakraBox>
                  </Box>
                </Grid>
                </VStack>
            </ChakraBox>
                  
            {/* Skill Area 3: Mobile Development - Redesigned */}
                  <ChakraBox 
              gridColumn={{ md: "span 2" }}
              gridRow={{ md: "span 2" }}
              borderRadius="2xl"
              bg={useColorModeValue('white', 'gray.900')}
              borderWidth="1px"
              borderColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
                    p={6}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: 'absolute',
                inset: 0,
                borderRadius: 'inherit',
                padding: '1px',
                background: useColorModeValue(
                  'linear-gradient(320deg, #ED64A6, #D53F8C, transparent 70%)',
                  'linear-gradient(320deg, #D53F8C, #97266D, transparent 70%)'
                ),
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                opacity: 0.7,
              }}
            >
              {/* Background elements */}
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="60%"
                backgroundImage={useColorModeValue(
                  'radial-gradient(circle at 30% 30%, rgba(237, 100, 166, 0.1) 0%, rgba(255,255,255,0) 70%)',
                  'radial-gradient(circle at 30% 30%, rgba(213, 63, 140, 0.15) 0%, rgba(0,0,0,0) 70%)'
                )}
                zIndex="0"
              />
              
              {/* Mobile grid pattern background */}
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                opacity={useColorModeValue('0.03', '0.05')}
                backgroundImage="url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D53F8C' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
                zIndex="0"
              />
              
              <Grid templateColumns={{ base: "1fr", sm: "1fr 1fr" }} gap={4} position="relative" zIndex="1">
                {/* Left side: Header and Skills */}
              <GridItem>
                  {/* Header Section */}
                  <HStack spacing={3} align="center" mb={4}>
                    <Box
                      p={2}
                      borderRadius="md"
                      bg={useColorModeValue('pink.50', 'pink.900')}
                      color={useColorModeValue('pink.500', 'pink.200')}
                    >
                      <Icon as={FiSmartphone} boxSize={5} />
                    </Box>
                    <Box>
                      <Text 
                        fontSize="xs" 
                        textTransform="uppercase" 
                        letterSpacing="wider" 
                        fontWeight="600"
                        color={useColorModeValue('pink.500', 'pink.300')}
                      >
                        Cross-Platform Solutions
                      </Text>
                <Heading 
                  as="h3" 
                        fontSize={{ base: "xl", md: "2xl" }} 
                        fontWeight="600"
                        color={useColorModeValue('gray.900', 'white')}
                      >
                        Mobile Development
                    </Heading>
                    </Box>
                  </HStack>
                  
                  {/* Skills Section */}
                  <VStack align="stretch" spacing={3} mb={4}>
                    {[
                      { name: 'React Native', value: 85, icon: FiSmartphone },
                      { name: 'Flutter', value: 75, icon: FiLayout },
                      { name: 'Native APIs', value: 80, icon: FiCode },
                      { name: 'Responsive Design', value: 90, icon: FiMaximize }
                    ].map((skill, i) => (
                      <Box key={i}>
                        <Flex justify="space-between" mb={1} align="center">
                          <HStack>
                            <Icon as={skill.icon} size="sm" color={useColorModeValue('pink.500', 'pink.300')} />
                            <Text fontSize="xs" fontWeight="500" color={useColorModeValue('gray.700', 'gray.300')}>
                              {skill.name}
                            </Text>
                          </HStack>
                          <Text 
                            fontSize="xs" 
                            fontWeight="bold" 
                            color={useColorModeValue('pink.500', 'pink.300')}
                          >
                            {skill.value}%
                          </Text>
                        </Flex>
                        <Box 
                          width="100%" 
                          height="3px" 
                          bg={useColorModeValue('gray.100', 'whiteAlpha.100')} 
                          borderRadius="full"
                        >
                  <ChakraBox 
                            height="100%"
                            width={`${skill.value}%`}
                            bg={useColorModeValue('pink.400', 'pink.300')}
                            borderRadius="full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.value}%` }}
                            viewport={{ once: true }}
                          />
                      </Box>
                      </Box>
                    ))}
                  </VStack>
                  
                  {/* Platform Support */}
                  <Box 
                    mt="auto" 
                    pt={3} 
                    borderTop="1px solid" 
                    borderColor={useColorModeValue('gray.100', 'whiteAlpha.100')}
                  >
                    <Text 
                      fontSize="xs" 
                      fontWeight="600" 
                      mb={2}
                      color={useColorModeValue('gray.700', 'gray.300')}
                    >
                      Platforms
                    </Text>
                    <Flex gap={2} wrap="wrap">
                      <Tag
                        size="sm"
                        variant="subtle"
                        colorScheme="pink"
                        px={3}
                      >
                        <Box as="span" h="2px" w="2px" mr={1} bg="currentColor" borderRadius="full" />
                        iOS
                      </Tag>
                      <Tag
                        size="sm"
                        variant="subtle"
                        colorScheme="green"
                        px={3}
                      >
                        <Box as="span" h="2px" w="2px" mr={1} bg="currentColor" borderRadius="full" />
                        Android
                      </Tag>
                      <Tag
                        size="sm"
                        variant="subtle"
                        colorScheme="blue"
                        px={3}
                      >
                        <Box as="span" h="2px" w="2px" mr={1} bg="currentColor" borderRadius="full" />
                        PWA
                      </Tag>
                    </Flex>
                      </Box>
                </GridItem>
                
                {/* Right side: Device Mockups */}
                <GridItem display="flex" justifyContent="center" alignItems="center">
                  <Box position="relative" height="100%" width="100%">
                    {/* Phone Mockup */}
                    <Box
                      position="absolute"
                      top="10%"
                      right="20%"
                      width="120px"
                      height="220px"
                      borderRadius="24px"
                      border="10px solid"
                      borderColor={useColorModeValue('gray.300', 'gray.700')}
                      bg={useColorModeValue('gray.100', 'gray.800')}
                      overflow="hidden"
                      boxShadow={useColorModeValue(
                        '0 4px 12px rgba(0,0,0,0.1)',
                        '0 4px 12px rgba(0,0,0,0.3)'
                      )}
                      transform="rotate(-5deg)"
                    >
                      {/* Phone Screen */}
                      <Flex 
                        direction="column" 
                        h="100%" 
                        w="100%" 
                        bg={useColorModeValue('white', 'gray.900')}
                        p={1}
                      >
                        {/* Status Bar */}
                        <Box 
                          h="8px" 
                          w="100%" 
                          bg={useColorModeValue('pink.100', 'pink.900')} 
                          mb={1} 
                          borderRadius="sm"
                        />
                        
                        {/* App Content */}
                        <VStack spacing={1} flex="1">
                          <Box 
                            h="30px" 
                            w="100%" 
                            bg={useColorModeValue('pink.200', 'pink.800')} 
                            borderRadius="sm"
                          />
                          <Box 
                            h="50px" 
                            w="100%" 
                            bg={useColorModeValue('gray.100', 'whiteAlpha.100')} 
                            borderRadius="sm"
                          />
                          <Box 
                            h="20px" 
                            w="70%" 
                            bg={useColorModeValue('gray.200', 'whiteAlpha.200')} 
                            borderRadius="sm"
                          />
                          <Box 
                            h="40px" 
                            w="100%" 
                            bg={useColorModeValue('gray.100', 'whiteAlpha.100')} 
                            borderRadius="sm"
                          />
                        </VStack>
                        
                        {/* Navigation Bar */}
                        <Flex justify="space-around" p={1}>
                          <Box 
                            h="6px" 
                            w="6px" 
                            borderRadius="full" 
                            bg={useColorModeValue('pink.400', 'pink.600')} 
                          />
                          <Box 
                            h="6px" 
                            w="6px" 
                            borderRadius="full" 
                            bg={useColorModeValue('gray.300', 'gray.600')} 
                          />
                          <Box 
                            h="6px" 
                            w="6px" 
                            borderRadius="full" 
                            bg={useColorModeValue('gray.300', 'gray.600')} 
                          />
                    </Flex>
                      </Flex>
                      </Box>
                    
                    {/* Tablet Mockup */}
                    <Box
                      position="absolute"
                      bottom="10%"
                      left="10%"
                      width="150px"
                      height="110px"
                      borderRadius="12px"
                      border="8px solid"
                      borderColor={useColorModeValue('gray.300', 'gray.700')}
                      bg={useColorModeValue('gray.100', 'gray.800')}
                      overflow="hidden"
                      boxShadow={useColorModeValue(
                        '0 4px 12px rgba(0,0,0,0.1)',
                        '0 4px 12px rgba(0,0,0,0.3)'
                      )}
                      transform="rotate(8deg)"
                    >
                      {/* Tablet Screen */}
                      <Flex 
                        direction="column" 
                        h="100%" 
                        w="100%" 
                        bg={useColorModeValue('white', 'gray.900')}
                        p={1}
                      >
                        {/* App Content */}
                        <HStack spacing={1} h="100%">
                          <VStack spacing={1} w="30%" h="100%">
                            <Box 
                              h="10px" 
                              w="100%" 
                              bg={useColorModeValue('pink.300', 'pink.700')} 
                              borderRadius="sm"
                            />
                            <Box 
                              h="10px" 
                              w="100%" 
                              bg={useColorModeValue('gray.200', 'whiteAlpha.200')} 
                              borderRadius="sm"
                            />
                            <Box 
                              h="10px" 
                              w="100%" 
                              bg={useColorModeValue('gray.200', 'whiteAlpha.200')} 
                              borderRadius="sm"
                            />
                            <Box 
                              h="10px" 
                              w="100%" 
                              bg={useColorModeValue('gray.200', 'whiteAlpha.200')} 
                              borderRadius="sm"
                            />
                          </VStack>
                          <Box flex="1" p={1}>
                            <Box 
                              h="15px" 
                              w="100%" 
                              bg={useColorModeValue('pink.200', 'pink.800')} 
                              mb={1}
                              borderRadius="sm"
                            />
                            <Box 
                              h="50px" 
                              w="100%" 
                              bg={useColorModeValue('gray.100', 'whiteAlpha.100')} 
                              borderRadius="sm"
                            />
                          </Box>
                        </HStack>
                      </Flex>
                    </Box>
                </Box>
              </GridItem>
            </Grid>
                  </ChakraBox>
            
            {/* Skill Area 4: Brand Identity - Redesigned */}
            <ChakraBox 
              gridColumn={{ md: "span 2" }}
              gridRow={{ md: "span 2" }}
              borderRadius="2xl"
              bg={useColorModeValue('white', 'gray.900')}
              borderWidth="1px"
              borderColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
                    p={6}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: 'absolute',
                inset: 0,
                borderRadius: 'inherit',
                padding: '1px',
                background: useColorModeValue(
                  'linear-gradient(320deg, #4FD1C5, #38B2AC, transparent 70%)',
                  'linear-gradient(320deg, #38B2AC, #2C7A7B, transparent 70%)'
                ),
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                opacity: 0.7,
              }}
            >
              {/* Background elements */}
              <Box
                position="absolute"
                bottom="0"
                right="0"
                width="100%"
                height="60%"
                backgroundImage={useColorModeValue(
                  'radial-gradient(circle at 70% 70%, rgba(79, 209, 197, 0.1) 0%, rgba(255,255,255,0) 70%)',
                  'radial-gradient(circle at 70% 70%, rgba(56, 178, 172, 0.15) 0%, rgba(0,0,0,0) 70%)'
                )}
                zIndex="0"
              />
              
              {/* Pattern background */}
              <Box
                position="absolute"
                top="0"
                left="0"
                width="100%"
                height="100%"
                opacity={useColorModeValue('0.03', '0.05')}
                backgroundImage="url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2338B2AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"
                zIndex="0"
              />
              
              <VStack align="start" spacing={4} height="100%" position="relative" zIndex="1">
                {/* Header Section */}
                <HStack spacing={3} align="center">
                  <Box
                    p={2}
                    borderRadius="md"
                    bg={useColorModeValue('teal.50', 'teal.900')}
                    color={useColorModeValue('teal.500', 'teal.200')}
                  >
                    <Icon as={FiPenTool} boxSize={5} />
                  </Box>
                  <Box>
                    <Text 
                      fontSize="xs" 
                      textTransform="uppercase" 
                      letterSpacing="wider" 
                      fontWeight="600"
                      color={useColorModeValue('teal.500', 'teal.300')}
                    >
                      Visual Identity
                    </Text>
                    <Heading 
                      as="h3" 
                      fontSize={{ base: "xl", md: "2xl" }} 
                      fontWeight="600"
                      color={useColorModeValue('gray.900', 'white')}
                    >
                      Brand Identity
                  </Heading>
                  </Box>
                </HStack>
                
                {/* Color Palette Section */}
                <Box width="100%">
                  <Text 
                    fontSize="xs" 
                    fontWeight="600" 
                    mb={2}
                    color={useColorModeValue('gray.700', 'gray.300')}
                  >
                    Color Theory
                  </Text>
                  <HStack spacing={1}>
                    {[
                      { color: 'teal.500', name: 'Primary' },
                      { color: 'blue.400', name: 'Secondary' },
                      { color: 'purple.300', name: 'Accent' },
                      { color: 'gray.700', name: 'Text' },
                      { color: 'gray.200', name: 'Background' }
                    ].map((item, i) => (
                      <Tooltip key={i} label={item.name} placement="top">
                        <Box
                          width="100%"
                          height="24px"
                          bg={item.color}
                          borderRadius="sm"
                          _hover={{ transform: 'translateY(-2px)' }}
                          transition="transform 0.2s"
                        />
                      </Tooltip>
                    ))}
                  </HStack>
                      </Box>
                
                {/* Typography Section */}
                <Box 
                  width="100%" 
                  p={3} 
                  borderRadius="md" 
                  bg={useColorModeValue('gray.50', 'whiteAlpha.100')}
                >
                  <Text 
                    fontSize="xs" 
                    fontWeight="600" 
                    mb={2}
                    color={useColorModeValue('gray.700', 'gray.300')}
                  >
                    Typography
                  </Text>
                  <VStack align="start" spacing={1}>
                    <Text fontWeight="700" fontSize="md" lineHeight="1">Aa Heading</Text>
                    <Text fontWeight="400" fontSize="sm" lineHeight="1">Aa Subheading</Text>
                    <Text fontWeight="300" fontSize="xs" lineHeight="1">Aa Body Text</Text>
                  </VStack>
                      </Box>
                
                {/* Skills Section */}
                <Box width="100%">
                  <Text 
                    fontSize="xs" 
                    fontWeight="600" 
                    mb={2}
                    color={useColorModeValue('gray.700', 'gray.300')}
                  >
                    Expertise Areas
                  </Text>
                  <SimpleGrid columns={2} spacing={2}>
                    {[
                      { name: 'Logo Design', value: 85 },
                      { name: 'Brand Guidelines', value: 80 },
                      { name: 'Visual Identity', value: 90 },
                      { name: 'Brand Strategy', value: 75 }
                    ].map((skill, i) => (
                      <Box key={i} mb={1}>
                        <Flex justify="space-between" mb={1}>
                          <Text fontSize="xs" color={useColorModeValue('gray.700', 'gray.300')}>
                            {skill.name}
                          </Text>
                          <Text 
                            fontSize="xs" 
                            fontWeight="bold" 
                            color={useColorModeValue('teal.500', 'teal.300')}
                          >
                            {skill.value}%
                          </Text>
                    </Flex>
                        <Box 
                          width="100%" 
                          height="3px" 
                          bg={useColorModeValue('gray.100', 'whiteAlpha.100')} 
                          borderRadius="full"
                        >
                          <ChakraBox
                            height="100%"
                            width={`${skill.value}%`}
                            bg={useColorModeValue('teal.400', 'teal.300')}
                            borderRadius="full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.value}%` }}
                            viewport={{ once: true }}
                          />
                      </Box>
                      </Box>
                    ))}
                </SimpleGrid>
                </Box>
                
                {/* Portfolio Preview */}
                <HStack 
                  spacing={2} 
                  width="100%" 
                  justify="space-between" 
                  mt="auto"
                >
                  <Text fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>
                    Creating cohesive brand experiences across all touchpoints
                  </Text>
                  <Button 
                    size="xs"
                    variant="ghost"
                    colorScheme="teal"
                    rightIcon={<FiArrowRight />}
                  >
                    Portfolio
                  </Button>
                </HStack>
              </VStack>
                  </ChakraBox>
                
            {/* Skill Area 5: Web Animation - Redesigned */}
                  <ChakraBox 
              gridColumn={{ md: "span 2" }}
              gridRow={{ md: "span 2" }}
              borderRadius="2xl"
              bg={useColorModeValue('white', 'gray.900')}
              borderWidth="1px"
              borderColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
                    p={6}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: 'absolute',
                inset: 0,
                borderRadius: 'inherit',
                padding: '1px',
                background: useColorModeValue(
                  'linear-gradient(320deg, #9F7AEA, #805AD5, transparent 70%)',
                  'linear-gradient(320deg, #805AD5, #6B46C1, transparent 70%)'
                ),
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                opacity: 0.7,
              }}
            >
              {/* Background elements */}
              <Box
                position="absolute"
                top="30%"
                left="20%"
                width="100%"
                height="60%"
                backgroundImage={useColorModeValue(
                  'radial-gradient(circle at 30% 30%, rgba(159, 122, 234, 0.1) 0%, rgba(255,255,255,0) 70%)',
                  'radial-gradient(circle at 30% 30%, rgba(128, 90, 213, 0.15) 0%, rgba(0,0,0,0) 70%)'
                )}
                zIndex="0"
              />
              
              <Grid 
                templateRows="auto 1fr auto" 
                height="100%" 
                gap={4} 
                position="relative" 
                zIndex="1"
              >
                {/* Header Section */}
                <HStack spacing={3} align="center">
                  <Box
                    p={2}
                    borderRadius="md"
                    bg={useColorModeValue('purple.50', 'purple.900')}
                    color={useColorModeValue('purple.500', 'purple.200')}
                  >
                    <Icon as={FiPlay} boxSize={5} />
                      </Box>
                    <Box>
                    <Text 
                      fontSize="xs" 
                      textTransform="uppercase" 
                      letterSpacing="wider" 
                      fontWeight="600"
                      color={useColorModeValue('purple.500', 'purple.300')}
                    >
                      Motion & Interaction
                      </Text>
                    <Heading 
                      as="h3" 
                      fontSize={{ base: "xl", md: "2xl" }} 
                      fontWeight="600"
                      color={useColorModeValue('gray.900', 'white')}
                    >
                      Web Animation
                    </Heading>
                    </Box>
                </HStack>
                
                {/* Animation Demo Section */}
                    <Box>
                  <SimpleGrid columns={2} spacing={4} mb={4}>
                    {/* Animation Types */}
                    <Box
                      borderRadius="md"
                      bg={useColorModeValue('purple.50', 'whiteAlpha.100')}
                      p={3}
                    >
                      <Text 
                        fontSize="xs" 
                        fontWeight="600" 
                        mb={2} 
                        color={useColorModeValue('purple.700', 'purple.300')}
                      >
                        Animation Types
                      </Text>
                      <VStack spacing={2} align="start">
                        <HStack>
                          <Icon 
                            as={FiTrendingUp} 
                            color={useColorModeValue('purple.500', 'purple.300')} 
                            boxSize={3}
                          />
                          <Text fontSize="xs" color={useColorModeValue('gray.700', 'gray.300')}>
                            Transitions
                          </Text>
                        </HStack>
                        <HStack>
                          <Icon 
                            as={FiActivity} 
                            color={useColorModeValue('purple.500', 'purple.300')} 
                            boxSize={3}
                          />
                          <Text fontSize="xs" color={useColorModeValue('gray.700', 'gray.300')}>
                            Keyframes
                          </Text>
                        </HStack>
                        <HStack>
                          <Icon 
                            as={FiZap} 
                            color={useColorModeValue('purple.500', 'purple.300')} 
                            boxSize={3}
                          />
                          <Text fontSize="xs" color={useColorModeValue('gray.700', 'gray.300')}>
                            Spring Physics
                          </Text>
                        </HStack>
                        <HStack>
                          <Icon 
                            as={FiMousePointer} 
                            color={useColorModeValue('purple.500', 'purple.300')} 
                            boxSize={3}
                          />
                          <Text fontSize="xs" color={useColorModeValue('gray.700', 'gray.300')}>
                            Micro-interactions
                          </Text>
                        </HStack>
                      </VStack>
                    </Box>
                    
                    {/* Animation Demo */}
                    <Box 
                      borderRadius="md" 
                      bg={useColorModeValue('gray.50', 'whiteAlpha.50')}
                      p={3}
                      position="relative"
                      height="100%"
                      overflow="hidden"
                    >
                      <Text 
                        fontSize="xs" 
                        fontWeight="600" 
                        mb={2} 
                        color={useColorModeValue('purple.700', 'purple.300')}
                      >
                        Interactive Demo
                      </Text>
                      <Flex 
                        justify="center" 
                        align="center" 
                        height="80%" 
                        width="100%"
                        position="relative"
                      >
                        {/* Animation 1: Rotating Square */}
                        <ChakraBox
                          position="absolute"
                          width="20px"
                          height="20px"
                          borderRadius="sm"
                          bg={useColorModeValue('purple.400', 'purple.400')}
                          animate={{
                            rotate: [0, 90, 180, 270, 360],
                            scale: [1, 1.2, 1],
                            opacity: [0.8, 1, 0.8]
                          }}
                          transition={{
                            duration: 3,
                            ease: "linear",
                            repeat: Infinity,
                            repeatType: "loop"
                          }}
                          left="30%"
                          top="30%"
                        />
                        
                        {/* Animation 2: Bouncing Circle */}
                        <ChakraBox
                          position="absolute"
                          width="24px"
                          height="24px"
                          borderRadius="full"
                          bg={useColorModeValue('blue.400', 'blue.400')}
                          animate={{
                            y: [0, -20, 0],
                            scale: [1, 0.9, 1]
                          }}
                          transition={{
                            duration: 1.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "reverse"
                          }}
                          right="30%"
                          bottom="30%"
                        />
                        
                        {/* Animation 3: Fading Triangle */}
                        <Box
                          position="absolute"
                          left="50%"
                          top="50%"
                          transform="translate(-50%, -50%)"
                          width="32px"
                          height="32px"
                        >
                          <ChakraBox
                            as="svg"
                            viewBox="0 0 32 32"
                            animate={{
                              opacity: [0.5, 1, 0.5],
                              rotate: [0, 0, 180, 180, 0]
                            }}
                            transition={{
                              duration: 4,
                              ease: "easeInOut",
                              repeat: Infinity
                            }}
                            fill={useColorModeValue('teal.400', 'teal.400')}
                          >
                            <polygon points="16,0 32,32 0,32" />
                          </ChakraBox>
                    </Box>
                      </Flex>
                      </Box>
                    </SimpleGrid>
                  
                  {/* Animation Timeline */}
                  <Box 
                    borderRadius="md" 
                    bg={useColorModeValue('gray.50', 'whiteAlpha.50')}
                    p={3}
                  >
                    <Text 
                      fontSize="xs" 
                      fontWeight="600" 
                      mb={2} 
                      color={useColorModeValue('purple.700', 'purple.300')}
                    >
                      Animation Timeline
                    </Text>
                    <Box position="relative" height="24px" mb={1}>
                      <Box 
                        position="absolute"
                        top="50%"
                        width="100%"
                        height="2px"
                        bg={useColorModeValue('gray.200', 'whiteAlpha.200')}
                        transform="translateY(-50%)"
                      />
                      {/* Timeline Markers */}
                      {[0, 25, 50, 75, 100].map((pos) => (
                        <Box 
                          key={pos}
                          position="absolute"
                          left={`${pos}%`}
                          top="0"
                          height="100%"
                          width="2px"
                          bg={useColorModeValue('gray.300', 'whiteAlpha.300')}
                        />
                      ))}
                      {/* Playhead */}
                      <ChakraBox
                        position="absolute"
                        top="0"
                        height="100%"
                        width="2px"
                        bg={useColorModeValue('purple.500', 'purple.300')}
                        animate={{
                          left: ['0%', '100%']
                        }}
                        transition={{
                          duration: 4,
                          ease: "linear",
                          repeat: Infinity
                        }}
                      />
                </Box>
                    <Flex justify="space-between">
                      <Text fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>0s</Text>
                      <Text fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>2s</Text>
                      <Text fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>4s</Text>
                    </Flex>
                  </Box>
                </Box>
                
                {/* Tools Section */}
                    <Box>
                  <Text 
                    fontSize="xs" 
                    fontWeight="600" 
                    mb={2}
                    color={useColorModeValue('gray.700', 'gray.300')}
                  >
                    Proficient With:
                  </Text>
                  <HStack spacing={2} flexWrap="wrap">
                    {[
                      { name: 'Framer Motion', color: 'purple' },
                      { name: 'GSAP', color: 'green' },
                      { name: 'CSS Animations', color: 'blue' },
                      { name: 'Lottie', color: 'pink' }
                    ].map((tool, i) => (
                      <Tag
                        key={i}
                        size="sm"
                        variant="subtle"
                        colorScheme={tool.color}
                        borderRadius="full"
                      >
                        {tool.name}
                      </Tag>
                    ))}
                  </HStack>
                </Box>
            </Grid>
            </ChakraBox>
            
            {/* Achievements Showcase */}
            <ChakraBox 
              gridColumn={{ md: "2 / span 4" }} // Changed from "span 4" to "2 / span 4" to center in 6-column grid
              gridRow={{ md: "span 2" }}
              borderRadius="2xl"
              bg={useColorModeValue('white', 'gray.900')}
              borderWidth="1px"
              borderColor={useColorModeValue('gray.200', 'whiteAlpha.100')}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              position="relative"
              overflow="hidden"
              _before={{
                content: '""',
                position: 'absolute',
                inset: 0,
                borderRadius: 'inherit',
                padding: '1px',
                background: useColorModeValue(
                  'linear-gradient(140deg, #63B3ED, #B794F4, #F687B3, #63B3ED)',
                  'linear-gradient(140deg, #3182CE, #805AD5, #D53F8C, #3182CE)'
                ),
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                opacity: 0.7,
              }}
            >
                <Box 
                position="absolute"
                bottom="0"
                right="0"
                width="100%"
                height="100%"
                backgroundImage={useColorModeValue(
                  'radial-gradient(circle at 70% 70%, rgba(159, 122, 234, 0.07) 0%, rgba(255,255,255,0) 70%)',
                  'radial-gradient(circle at 70% 70%, rgba(124, 58, 237, 0.07) 0%, rgba(0,0,0,0) 70%)'
                )}
                zIndex="0"
              />
              
              {/* Redesigned layout - replacing grid with VStack for vertical centering */}
              <VStack 
                height="100%" 
                position="relative" 
                zIndex="1" 
                justify="space-between" 
                p={6} 
                spacing={6}
              >
                {/* Title and description - centered */}
                <Box textAlign="center" maxW="xl" mx="auto">
                  <Heading 
                    as="h3" 
                    fontSize={{ base: "xl", md: "2xl" }} 
                    fontWeight="600"
                    color={useColorModeValue('gray.800', 'white')}
                    mb={2}
                  >
                    Skills in Action
                      </Heading>
                  <Text 
                    fontSize="sm" 
                    color={useColorModeValue('gray.600', 'whiteAlpha.800')}
                  >
                    Quantifiable results and achievements from applying my expertise to real-world projects.
                      </Text>
                    </Box>
                
                {/* Metrics display - 2x2 grid for better centering */}
                <SimpleGrid 
                  columns={{ base: 2, md: 4 }} 
                  spacing={{ base: 6, md: 10 }}
                  width="100%"
                  justifyContent="center"
                >
                  {/* Project metric with circular progress */}
                  <ChakraBox
                    textAlign="center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      ease: "easeOut", 
                      delay: 0.1, 
                      duration: 0.3 
                    } as any}
                    viewport={{ once: true }}
                    position="relative"
                  >
                    <Box 
                      position="relative" 
                      width="80px" 
                      height="80px" 
                      mx="auto" 
                      mb={3}
                    >
                      <CircularProgress 
                        value={100} 
                        size="80px" 
                        thickness="4px" 
                        color={useColorModeValue('brand.400', 'brand.200')}
                        trackColor={useColorModeValue('gray.100', 'whiteAlpha.200')}
                      >
                        <CircularProgressLabel 
                          fontSize="xl" 
                          fontWeight="700" 
                          color={useColorModeValue('brand.500', 'brand.300')}
                        >
                          40+
                        </CircularProgressLabel>
                      </CircularProgress>
                      <Icon 
                        as={FiLayout} 
                        position="absolute" 
                        top="-8px" 
                        right="-8px" 
                        color={useColorModeValue('brand.400', 'brand.200')}
                        bg={useColorModeValue('white', 'gray.800')}
                        borderRadius="full"
                        p={1}
                        boxSize="24px"
                      />
                </Box>
                    <Text fontSize="sm" fontWeight="500" color={useColorModeValue('gray.700', 'gray.300')}>
                      Projects
                    </Text>
            </ChakraBox>
                  
                  {/* Satisfaction metric with circular progress */}
                  <ChakraBox
                    textAlign="center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      ease: "easeOut", 
                      delay: 0.2, 
                      duration: 0.3 
                    } as any}
                    viewport={{ once: true }}
                    position="relative"
                  >
                    <Box 
                      position="relative" 
                      width="80px" 
                      height="80px" 
                      mx="auto" 
                      mb={3}
                    >
                      <CircularProgress 
                        value={95} 
                        size="80px" 
                        thickness="4px" 
                        color={useColorModeValue('blue.400', 'blue.200')}
                        trackColor={useColorModeValue('gray.100', 'whiteAlpha.200')}
                      >
                        <CircularProgressLabel 
                          fontSize="xl" 
                          fontWeight="700" 
                          color={useColorModeValue('blue.500', 'blue.300')}
                        >
                          95%
                        </CircularProgressLabel>
                      </CircularProgress>
                      <Icon 
                        as={FiZap} 
                        position="absolute" 
                        top="-8px" 
                        right="-8px" 
                        color={useColorModeValue('blue.400', 'blue.200')}
                        bg={useColorModeValue('white', 'gray.800')}
                        borderRadius="full"
                        p={1}
                        boxSize="24px"
                      />
                    </Box>
                    <Text fontSize="sm" fontWeight="500" color={useColorModeValue('gray.700', 'gray.300')}>
                      Satisfaction
                    </Text>
          </ChakraBox>
                  
                  {/* Experience metric with circular progress */}
                  <ChakraBox
                    textAlign="center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      ease: "easeOut", 
                      delay: 0.3, 
                      duration: 0.3 
                    } as any}
                    viewport={{ once: true }}
                    position="relative"
                  >
                    <Box 
                      position="relative" 
                      width="80px" 
                      height="80px" 
                      mx="auto" 
                      mb={3}
                    >
                      <CircularProgress 
                        value={70} 
                        size="80px" 
                        thickness="4px" 
                        color={useColorModeValue('purple.400', 'purple.200')}
                        trackColor={useColorModeValue('gray.100', 'whiteAlpha.200')}
                      >
                        <CircularProgressLabel 
                          fontSize="xl" 
                          fontWeight="700" 
                          color={useColorModeValue('purple.500', 'purple.300')}
                        >
                          7+
                        </CircularProgressLabel>
                      </CircularProgress>
                      <Icon 
                        as={FiActivity} 
                        position="absolute" 
                        top="-8px" 
                        right="-8px" 
                        color={useColorModeValue('purple.400', 'purple.200')}
                        bg={useColorModeValue('white', 'gray.800')}
                        borderRadius="full"
                        p={1}
                        boxSize="24px"
                      />
                    </Box>
                    <Text fontSize="sm" fontWeight="500" color={useColorModeValue('gray.700', 'gray.300')}>
                      Years Experience
                    </Text>
                  </ChakraBox>
                  
                  {/* Awards metric with circular progress */}
                  <ChakraBox
                    textAlign="center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ 
                      ease: "easeOut", 
                      delay: 0.4, 
                      duration: 0.3 
                    } as any}
                    viewport={{ once: true }}
                    position="relative"
                  >
                    <Box 
                      position="relative" 
                      width="80px" 
                      height="80px" 
                      mx="auto" 
                      mb={3}
                    >
                      <CircularProgress 
                        value={60} 
                        size="80px" 
                        thickness="4px" 
                        color={useColorModeValue('pink.400', 'pink.200')}
                        trackColor={useColorModeValue('gray.100', 'whiteAlpha.200')}
                      >
                        <CircularProgressLabel 
                          fontSize="xl" 
                          fontWeight="700" 
                          color={useColorModeValue('pink.500', 'pink.300')}
                        >
                          12
                        </CircularProgressLabel>
                      </CircularProgress>
                      <Icon 
                        as={FiTrendingUp} 
                        position="absolute" 
                        top="-8px" 
                        right="-8px" 
                        color={useColorModeValue('pink.400', 'pink.200')}
                        bg={useColorModeValue('white', 'gray.800')}
                        borderRadius="full"
                        p={1}
                        boxSize="24px"
                      />
                    </Box>
                    <Text fontSize="sm" fontWeight="500" color={useColorModeValue('gray.700', 'gray.300')}>
                      Design Awards
                    </Text>
                  </ChakraBox>
                </SimpleGrid>
                
                {/* Call to action - centered at bottom */}
                <Button 
                  as={RouterLink} 
                  to="/projects" 
                  size="md"
                  colorScheme="brand"
                  rightIcon={<FiArrowRight />}
                  boxShadow="md"
                  _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
                  transition="all 0.2s"
                >
                  View All Projects
                </Button>
              </VStack>
            </ChakraBox>
          </Box>
        </Container>
      </Box>

      {/* Experience Section - Redesigned Vertical Timeline */}
      <Box 
        py={{ base: 16, md: 24 }} 
        bg={useColorModeValue('gray.50', 'black')}
        position="relative"
        overflow="hidden"
      >
        {/* Abstract background elements */}
        <Box
          position="absolute"
          top="5%"
          right="-10%"
          width="60%"
          height="90%"
          bgGradient={useColorModeValue(
            "linear(to-br, purple.100, transparent)",
            "linear(to-br, purple.900, transparent)"
          )}
          filter="blur(120px)"
          opacity={useColorModeValue("0.3", "0.4")}
          transform="rotate(-15deg)"
          zIndex={0}
        />
        
        <Container maxW="container.xl" position="relative" zIndex={1}>
          {/* Section Header with Modern Typography */}
          <VStack spacing={4} mb={16} textAlign="center">
            <HStack mb={2}>
              <Box h="1px" w="30px" bg={accentColor} />
              <Text 
                color={accentColor} 
                textTransform="uppercase" 
                letterSpacing="wider" 
                fontSize="sm" 
                fontWeight="medium"
              >
                Professional Path
              </Text>
              <Box h="1px" w="30px" bg={accentColor} />
            </HStack>
            <Heading 
              as="h2" 
              fontSize={{ base: "4xl", md: "5xl" }} 
              fontWeight="400" 
              color={useColorModeValue("gray.800", "white")}
              lineHeight="shorter"
            >
              My <Box as="span" fontWeight="bold" bgGradient={`linear(to-r, ${accentColor}, purple.400)`} bgClip="text">Experience</Box> Journey
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color={textSecondary}
              maxW="2xl"
            >
              Explore my professional evolution through an interactive timeline showcasing key roles and achievements.
            </Text>
          </VStack>

          {/* Vertical Timeline */}
          <Box position="relative" mt={12} mb={10}>
            {/* Timeline center line */}
            <Box
              position="absolute"
              left="50%"
              top="0"
              bottom="0"
              width="2px"
              bg={useColorModeValue('gray.200', 'gray.700')}
              transform="translateX(-50%)"
              zIndex={1}
            />
            
            {/* Experience Cards - Alternate sides */}
            <VStack spacing={16} position="relative">
              {experience.map((job, index) => {
                const textColor = useColorModeValue('gray.800', 'white');
                
                return (
                  <Grid
                    key={index}
                    templateColumns={{ base: "1fr", md: "1fr 100px 1fr" }}
                    gap={4}
                    alignItems="center"
                    width="100%"
                  >
                    {/* Left content or empty on mobile */}
                    <GridItem display={{ base: 'none', md: 'block' }} textAlign="right">
                      {index % 2 === 0 && <ExperienceCardV2 job={job} index={index} isEven={true} />}
                    </GridItem>
                    
                    {/* Center timeline marker */}
                    <GridItem justifySelf="center">
                      <Center flexDirection="column">
                        <Circle 
                          size="60px" 
                          bg={useColorModeValue('white', 'gray.900')} 
                          border="3px solid" 
                          borderColor="brand.500"
                          zIndex={2}
            position="relative" 
                          boxShadow={`0 0 15px ${accentColor}40`}
                        >
                <ChakraBox
                            initial={{ scale: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Text fontSize="sm" fontWeight="bold" color={useColorModeValue('gray.800', 'white')}>{index + 1}</Text>
                          </ChakraBox>
                        </Circle>
                <Text 
                          mt={2} 
                          fontWeight="bold" 
                          color={accentColor} 
                  fontSize="sm" 
                          display={{ base: 'none', md: 'block' }}
                >
                  {job.period}
                </Text>
                      </Center>
                    </GridItem>
                    
                    {/* Right content or full width on mobile */}
                    <GridItem colSpan={{ base: 3, md: 1 }} ml={{ base: 0, md: index % 2 === 0 ? 0 : 0 }}>
                      {index % 2 !== 0 ? (
                        <ExperienceCardV2 job={job} index={index} isEven={false} />
                      ) : (
                        <Box display={{ base: 'block', md: 'none' }}>
                          <ExperienceCardV2 job={job} index={index} isEven={true} />
          </Box>
                      )}
                    </GridItem>
                  </Grid>
                );
              })}
            </VStack>
          </Box>
          
          {/* Skill Evolution Section */}
          <SkillEvolution experiences={experience} />
        </Container>
      </Box>

      {/* Education Section - Redesigned with Modern Layout */}
      <ChakraBox
        as="section"
        position="relative"
        pt={16}
        pb={20}
        overflow="hidden"
        id="education"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 } as any}
        bg={useColorModeValue('gray.50', 'gray.900')}
      >
        {/* Background Elements */}
        <Box
          position="absolute"
          top="5%"
          right="-5%"
          width="25%"
          height="25%"
          bg="linear-gradient(135deg, rgba(106, 17, 203, 0.2), rgba(37, 117, 252, 0.2))"
          filter="blur(80px)"
          borderRadius="full"
          zIndex={0}
          opacity={0.6}
        />
        <Box
          position="absolute"
          bottom="15%"
          left="-10%"
          width="30%"
          height="30%"
          bg="linear-gradient(135deg, rgba(17, 127, 203, 0.15), rgba(37, 252, 209, 0.15))"
          filter="blur(80px)"
          borderRadius="full"
          zIndex={0}
          opacity={0.6}
        />

        <Container maxW="container.xl" position="relative" zIndex={1}>
          {/* Section Header */}
          <Flex
            direction="column"
            align="center"
            textAlign="center"
            mb={16}
          >
            <ChakraBox
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 } as any}
            >
              <Heading
                as="h2"
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="bold"
                mb={4}
                bgGradient="linear(to-r, blue.400, purple.500)"
                bgClip="text"
              >
                Education
            </Heading>
            </ChakraBox>
            
            <ChakraBox
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 } as any}
              maxW="3xl"
            >
            <Text
                fontSize={{ base: "md", md: "lg" }}
                color={useColorModeValue("gray.600", "gray.400")}
            >
                My academic path has equipped me with both theoretical knowledge and practical skills in design and development.
            </Text>
            </ChakraBox>
          </Flex>

          {/* Remove the Timeline Visualization section */}
          
          {/* Education Card - Centered */}
          <Box 
            maxW="3xl" 
            mx="auto"
            mt={10}
          >
            <ChakraBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 } as any}
            >
              <EducationCard education={educationData[0]} index={0} />
            </ChakraBox>
          </Box>
          
          {/* Call to Action */}
          <ChakraBox
            mt={16}
            textAlign="center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 } as any}
          >
            <Button
              rightIcon={<Icon as={FiExternalLink} />}
              colorScheme="blue"
              size="lg"
              variant="outline"
              borderWidth={2}
              _hover={{
                transform: "translateY(-3px)",
                shadow: "lg",
                borderColor: "blue.400"
              }}
              as="a"
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              aria-label="View LinkedIn Profile"
            >
              View Full Credentials on LinkedIn
            </Button>
          </ChakraBox>
        </Container>
      </ChakraBox>

      {/* Modern CTA with 3D-ish effect */}
      <Box py={{ base: 16, md: 24 }} bg={bgGradient}>
        <Container maxW="container.xl">
          <ChakraBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            position="relative"
          >
            {/* Background shape */}
            <Box
              position="absolute"
              top="-20px"
              right="-20px"
              width="200px"
              height="200px"
              bg={accentColor}
              opacity="0.1"
              borderRadius="30% 70% 70% 30% / 30% 30% 70% 70%"
              zIndex="0"
              display={{ base: 'none', md: 'block' }}
            />
            
            <Flex
              direction={{ base: 'column', md: 'row' }}
              align="center"
              justify="space-between"
              bg={bgSecondary}
              p={{ base: 8, md: 12 }}
              borderRadius="xl"
              boxShadow={cardShadow}
              position="relative"
              zIndex="1"
              overflow="hidden"
            >
              <Box maxW={{ base: 'full', md: '60%' }} mb={{ base: 6, md: 0 }}>
                <Heading as="h2" size="xl" mb={4} fontWeight="400">
                  Let's Create Something
                  <Box as="span" color={accentColor} fontWeight="bold" display="block">
                    Amazing Together
                  </Box>
                </Heading>
                <Text fontSize="lg" color={textSecondary}>
                  I'm currently available for freelance projects, full-time positions, or consulting work. If you're interested in collaborating, get in touch!
                </Text>
                
                {/* Social links */}
                <HStack spacing={4} mt={6}>
                  <Tooltip label="LinkedIn">
                    <IconButton
                      as="a"
                      href="#"
                      aria-label="LinkedIn"
                      icon={<FiLinkedin />}
                      colorScheme="brand"
                      variant="ghost"
                      fontSize="20px"
                      borderRadius="full"
                    />
                  </Tooltip>
                  <Tooltip label="Twitter">
                    <IconButton
                      as="a"
                      href="#"
                      aria-label="Twitter"
                      icon={<FiTwitter />}
                      colorScheme="brand"
                      variant="ghost"
                      fontSize="20px"
                      borderRadius="full"
                    />
                  </Tooltip>
                  <Tooltip label="GitHub">
                    <IconButton
                      as="a"
                      href="#"
                      aria-label="GitHub"
                      icon={<FiGithub />}
                      colorScheme="brand"
                      variant="ghost"
                      fontSize="20px"
                      borderRadius="full"
                    />
                  </Tooltip>
                  <Tooltip label="Instagram">
                    <IconButton
                      as="a"
                      href="#"
                      aria-label="Instagram"
                      icon={<FiInstagram />}
                      colorScheme="brand"
                      variant="ghost"
                      fontSize="20px"
                      borderRadius="full"
                    />
                  </Tooltip>
                  <Tooltip label="Email">
                    <IconButton
                      as="a"
                      href="mailto:contact@example.com"
                      aria-label="Email"
                      icon={<FiMail />}
                      colorScheme="brand"
                      variant="ghost"
                      fontSize="20px"
                      borderRadius="full"
                    />
                  </Tooltip>
                </HStack>
              </Box>
              <Button
                as={RouterLink}
                to="/contact"
                size="lg"
                colorScheme="brand"
                rightIcon={<FiArrowRight />}
                px={8}
                py={7}
                fontSize="lg"
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                Contact Me
              </Button>
            </Flex>
          </ChakraBox>
        </Container>
      </Box>
    </Box>
  );
};

// Create a new EducationCard component for the redesigned section
interface EducationCardProps {
  education: {
    degree: string;
    institution: string;
    period: string;
    location: string;
    gpa: string;
    description: string;
    achievements: string[];
    courses: string[];
    skills: string[];
  };
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, index }) => {
  // Remove unused isOpen, onToggle
  const accentColor = useColorModeValue('brand.500', 'brand.300');
  const cardBg = useColorModeValue('rgba(255, 255, 255, 0.8)', 'rgba(26, 32, 44, 0.8)');
  const borderColor = useColorModeValue('rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.1)');
  const textColor = useColorModeValue('gray.800', 'white');
  const textSecondary = useColorModeValue('gray.600', 'gray.400');
  const glassShadow = useColorModeValue(
    '0 8px 32px rgba(0, 0, 0, 0.1)',
    '0 8px 32px rgba(0, 0, 0, 0.3)'
  );
  
  // Determine card accent color based on degree type (variety)
  const degreeColors = {
    'Master': ['purple.400', 'purple.300'],
    'Bachelor': ['blue.400', 'blue.300'],
    'Certificate': ['green.400', 'green.300'],
  };
  
  const getDegreeColor = () => {
    const degreeType = Object.keys(degreeColors).find(type => 
      education.degree.includes(type)
    );
    // Fix TypeScript error by using type assertion
    return degreeType 
      ? useColorModeValue(degreeColors[degreeType as keyof typeof degreeColors][0], degreeColors[degreeType as keyof typeof degreeColors][1]) 
      : accentColor;
  };
  
  const degreeColor = getDegreeColor();
  
  return (
    <ChakraBox
      bg={cardBg}
      borderRadius="2xl"
      overflow="hidden"
      boxShadow={glassShadow}
      border="1px solid"
      borderColor={borderColor}
      position="relative"
      backdropFilter="blur(10px)"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 } as any}
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: useColorModeValue(
          'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))',
          'linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(26, 32, 44, 0.05))'
        ),
        zIndex: 0,
      }}
      _after={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '8px',
        bg: degreeColor,
        zIndex: 1,
      }}
    >
      {/* Decorative Elements */}
      <Box
        position="absolute"
        top="-20px"
        right="-20px"
        width="120px"
        height="120px"
        borderRadius="full"
        bg={degreeColor}
        opacity="0.1"
        zIndex={0}
      />
      <Box
        position="absolute"
        bottom="-30px"
        left="-30px"
        width="150px"
        height="150px"
        borderRadius="full"
        bg={degreeColor}
        opacity="0.05"
        zIndex={0}
      />
      
      {/* Card Content - All with zIndex to appear above decorative elements */}
      <Box position="relative" zIndex={2}>
        {/* Card Header */}
        <Flex 
          p={8} 
          justify="space-between" 
          align="flex-start"
          borderBottom="1px solid"
          borderColor={useColorModeValue('rgba(226, 232, 240, 0.5)', 'rgba(255, 255, 255, 0.05)')}
          flexDirection={{ base: "column", sm: "row" }}
          gap={4}
        >
          <Box>
            <ChakraBox
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 } as any}
              viewport={{ once: true }}
            >
              <Heading 
                as="h3" 
                fontSize={{ base: "xl", md: "2xl" }}
                color={textColor}
                fontWeight="bold"
                mb={2}
                bgGradient={`linear(to-r, ${degreeColor}, ${accentColor})`}
                bgClip="text"
              >
                {education.degree}
              </Heading>
            </ChakraBox>
            
            <ChakraBox
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 } as any}
              viewport={{ once: true }}
            >
              <Text color={degreeColor} fontWeight="medium" fontSize="lg">
                {education.institution}
              </Text>
            </ChakraBox>
            
            <HStack mt={3} spacing={4} flexWrap="wrap">
              <ChakraBox
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 } as any}
                viewport={{ once: true }}
              >
                <HStack spacing={2} alignItems="center" bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.300')} 
                  px={3} py={1} borderRadius="full">
                  <Icon as={FiCalendar} color={degreeColor} boxSize={4} mt={0} />
                  <Text color={textSecondary} fontSize="sm" fontWeight="medium">
                    {education.period}
                  </Text>
                </HStack>
              </ChakraBox>
              
              <ChakraBox
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 } as any}
                viewport={{ once: true }}
              >
                <HStack spacing={2} alignItems="center" bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.300')} 
                  px={3} py={1} borderRadius="full">
                  <Icon as={FiMapPin} color={degreeColor} boxSize={4} mt={0} />
                  <Text color={textSecondary} fontSize="sm" fontWeight="medium">
                    {education.location}
                  </Text>
                </HStack>
              </ChakraBox>
            </HStack>
          </Box>
          
          {/* Removing the GPA section by replacing it with a spacer */}
          <Box minW="100px" />
        </Flex>
        
        {/* Card Body */}
        <Box p={8} pt={6}>
          <ChakraBox
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 } as any}
            viewport={{ once: true }}
          >
            <Text color={textSecondary} mb={6} fontSize="md" fontStyle="italic">
              {education.description}
            </Text>
          </ChakraBox>
          
          {/* Achievements Section */}
          <ChakraBox
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 } as any}
            viewport={{ once: true }}
            mb={6}
          >
            <Flex 
              align="center" 
              mb={4}
              bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.300')}
              p={3}
              borderRadius="lg"
            >
              <Icon 
                as={FiAward} 
                mr={3} 
                color={degreeColor} 
                boxSize={5}
                bg={useColorModeValue(`${degreeColor.split('.')[0]}.50`, `${degreeColor.split('.')[0]}.900`)}
                p={1}
                borderRadius="md"
              />
              <Heading as="h4" size="sm" color={textColor} fontWeight="semibold">
                Key Achievements
              </Heading>
            </Flex>
            
            <VStack align="stretch" spacing={3} pl={2}>
              {education.achievements.map((achievement, i) => (
                <ChakraBox
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + (i * 0.1) } as any}
                  viewport={{ once: true }}
                >
                  <HStack 
                    align="flex-start" 
                    spacing={3}
                    bg={useColorModeValue('whiteAlpha.300', 'blackAlpha.200')}
                    p={3}
                    borderRadius="md"
                    _hover={{
                      bg: useColorModeValue('whiteAlpha.500', 'blackAlpha.300'),
                      transform: 'translateX(5px)',
                    }}
                    transition="all 0.2s"
                  >
                    <Center 
                      bg={degreeColor} 
                      color="white" 
                      borderRadius="full" 
                      boxSize="24px"
                      flexShrink={0}
                    >
                      <Text fontSize="xs" fontWeight="bold">{i + 1}</Text>
                    </Center>
                    <Text color={textSecondary} fontSize="sm">
                      {achievement}
                    </Text>
                  </HStack>
                </ChakraBox>
              ))}
            </VStack>
          </ChakraBox>
          
          {/* Skills & Courses Section */}
          <ChakraBox
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.8 } as any}
            viewport={{ once: true }}
          >
            <Flex 
              align="center" 
              mb={4}
              bg={useColorModeValue('whiteAlpha.500', 'blackAlpha.300')}
              p={3}
              borderRadius="lg"
            >
              <Icon 
                as={FiLayout} 
                mr={3} 
                color={degreeColor} 
                boxSize={5}
                bg={useColorModeValue(`${degreeColor.split('.')[0]}.50`, `${degreeColor.split('.')[0]}.900`)}
                p={1}
                borderRadius="md"
              />
              <Heading as="h4" size="sm" color={textColor} fontWeight="semibold">
                Skills & Courses
              </Heading>
            </Flex>
            
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mt={4}>
              {/* Courses */}
              <Box>
                <Text 
                  fontWeight="semibold" 
                  color={textColor} 
                  mb={3} 
                  fontSize="sm"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  display="flex"
                  alignItems="center"
                >
                  <Icon as={FiBook} mr={2} color={degreeColor} />
                  Relevant Courses
                </Text>
                <VStack 
                  align="stretch" 
                  spacing={2} 
                  bg={useColorModeValue('whiteAlpha.300', 'blackAlpha.200')}
                  p={4}
                  borderRadius="md"
                >
                  {education.courses.map((course, i) => (
                    <ChakraBox
                      key={i}
                      initial={{ opacity: 0, x: -5 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.9 + (i * 0.05) } as any}
                      viewport={{ once: true }}
                    >
                      <HStack align="center" spacing={2}>
                        <Icon 
                          as={FiCheck} 
                          color="white" 
                          bg={degreeColor} 
                          borderRadius="full" 
                          p="1px" 
                          boxSize={4} 
                          flexShrink={0} 
                        />
                        <Text color={textSecondary} fontSize="sm">
                          {course}
                        </Text>
                      </HStack>
                    </ChakraBox>
                  ))}
                </VStack>
              </Box>
              
              {/* Skills */}
              <Box>
                <Text 
                  fontWeight="semibold" 
                  color={textColor} 
                  mb={3} 
                  fontSize="sm"
                  textTransform="uppercase"
                  letterSpacing="wider"
                  display="flex"
                  alignItems="center"
                >
                  <Icon as={FiTool} mr={2} color={degreeColor} />
                  Skills Developed
                </Text>
                <Flex 
                  flexWrap="wrap" 
                  gap={2}
                  bg={useColorModeValue('whiteAlpha.300', 'blackAlpha.200')}
                  p={4}
                  borderRadius="md"
                >
                  {education.skills.map((skill, i) => (
                    <ChakraBox
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.9 + (i * 0.05) } as any}
                      viewport={{ once: true }}
                    >
                      <Tag 
                        colorScheme={degreeColor.split('.')[0]} 
                        variant="solid"
                        size="md"
                        borderRadius="full"
                        px={3}
                        py={1}
                        _hover={{
                          transform: 'translateY(-2px)',
                          boxShadow: 'md',
                        }}
                        transition="all 0.2s"
                      >
                        {skill}
                      </Tag>
                    </ChakraBox>
                  ))}
                </Flex>
              </Box>
            </SimpleGrid>
          </ChakraBox>
        </Box>
      </Box>
    </ChakraBox>
  );
};

export default AboutPage; 
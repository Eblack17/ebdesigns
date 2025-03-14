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
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
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
  FiUser 
} from 'react-icons/fi';

// Wrap motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

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
    position: 'Senior UI/UX Designer',
    company: 'TechVision Studios',
    period: '2021 - Present',
    description: 'Lead designer for enterprise web applications and mobile interfaces. Collaborate with product managers and developers to create intuitive user experiences.',
    achievements: [
      'Redesigned the company\'s flagship product, resulting in a 40% increase in user engagement',
      'Established a comprehensive design system that improved development efficiency by 30%',
      'Mentored junior designers and facilitated design thinking workshops'
    ]
  },
  {
    position: 'UI Developer',
    company: 'Digital Craft Agency',
    period: '2018 - 2021',
    description: 'Developed responsive web interfaces and interactive prototypes for clients across various industries.',
    achievements: [
      'Built over 20 client websites using React, Next.js, and various CSS frameworks',
      'Implemented animation systems that enhanced user engagement metrics',
      'Collaborated with the design team to ensure pixel-perfect implementation'
    ]
  },
  {
    position: 'Web Designer',
    company: 'CreativeHub',
    period: '2016 - 2018',
    description: 'Created visual designs for websites and digital marketing materials for small to medium businesses.',
    achievements: [
      'Designed brand identities and websites for over 30 clients',
      'Increased client satisfaction rate to 95% through iterative design processes',
      'Introduced responsive design principles to the company workflow'
    ]
  }
];

const education = [
  {
    degree: 'Master of Design',
    institution: 'Design Institute of Technology',
    period: '2014 - 2016',
    description: 'Specialized in Interactive Design with focus on user experience and interface design.'
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'University of Digital Arts',
    period: '2010 - 2014',
    description: 'Focused on web development and human-computer interaction. Graduated with honors.'
  }
];

const AboutPage = () => {
  const bgGradient = useColorModeValue(
    'linear(to-r, gray.50, purple.50)',
    'linear(to-r, gray.900, purple.900)'
  );
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const highlightColor = useColorModeValue('brand.500', 'brand.300');
  const progressTrackColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <Box as="main">
      {/* Hero Section */}
      <Box
        bg={bgGradient}
        pt={{ base: 20, md: 28 }}
        pb={{ base: 16, md: 24 }}
      >
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={10} alignItems="center">
            <GridItem order={{ base: 2, md: 1 }}>
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
                  About Me
                </Heading>
                <Text
                  fontSize="xl"
                  color={textColor}
                  mb={6}
                >
                  I'm a passionate designer and developer with over 7 years of experience creating beautiful, functional, and user-centered digital experiences.
                </Text>
                <Text color={textColor} mb={8}>
                  My approach combines aesthetic sensibility with technical expertise to build products that not only look great but also solve real problems for users. I believe in the power of thoughtful design to transform businesses and enhance people's lives.
                </Text>
                <HStack spacing={4}>
                  <Button
                    as={RouterLink}
                    to="/contact"
                    colorScheme="brand"
                    rightIcon={<FiArrowRight />}
                    size="lg"
                  >
                    Get in Touch
                  </Button>
                  <Button
                    as="a"
                    href="/resume.pdf"
                    download
                    variant="outline"
                    rightIcon={<FiDownload />}
                    size="lg"
                  >
                    Download Resume
                  </Button>
                </HStack>
              </MotionBox>
            </GridItem>
            <GridItem order={{ base: 1, md: 2 }}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                textAlign="center"
              >
                <Box
                  borderRadius="full"
                  overflow="hidden"
                  boxShadow="2xl"
                  maxW="400px"
                  mx="auto"
                  border="4px solid"
                  borderColor={highlightColor}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt="Portrait of EB Designs founder"
                    w="full"
                    h="full"
                    objectFit="cover"
                  />
                </Box>
              </MotionBox>
            </GridItem>
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl">
              My Skills
            </Heading>
            <Text
              fontSize="lg"
              color={textColor}
              maxW="2xl"
            >
              I've honed my skills in design and development over the years, always staying current with the latest technologies and trends.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <MotionBox
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <VStack align="stretch" spacing={6}>
                {skills.map((skill, index) => (
                  <Box key={skill.name}>
                    <HStack mb={2} justify="space-between">
                      <HStack>
                        <Icon as={skill.icon} color={highlightColor} boxSize={5} />
                        <Text fontWeight="medium">{skill.name}</Text>
                      </HStack>
                      <Text fontWeight="bold">{skill.level}%</Text>
                    </HStack>
                    <Progress 
                      value={skill.level} 
                      colorScheme="brand" 
                      borderRadius="full" 
                      size="sm"
                      bg={progressTrackColor}
                    />
                  </Box>
                ))}
              </VStack>
            </MotionBox>

            <MotionBox
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                bg={cardBg}
                p={6}
                borderRadius="lg"
                boxShadow="md"
                height="full"
              >
                <Heading as="h3" size="md" mb={4}>
                  Technical Proficiencies
                </Heading>
                <Divider mb={4} />
                
                <SimpleGrid columns={2} spacing={4}>
                  <VStack align="start" spacing={3}>
                    <Heading as="h4" size="sm" color={highlightColor}>
                      Design
                    </Heading>
                    <List spacing={2}>
                      <ListItem>
                        <ListIcon as={FiCheckCircle} color={highlightColor} />
                        Figma / Adobe XD
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FiCheckCircle} color={highlightColor} />
                        Photoshop / Illustrator
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FiCheckCircle} color={highlightColor} />
                        Prototyping
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FiCheckCircle} color={highlightColor} />
                        Design Systems
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FiCheckCircle} color={highlightColor} />
                        User Research
                      </ListItem>
                    </List>
                  </VStack>
                  
                  <VStack align="start" spacing={3}>
                    <Heading as="h4" size="sm" color={highlightColor}>
                      Development
                    </Heading>
                    <List spacing={2}>
                      <ListItem>
                        <ListIcon as={FiCheckCircle} color={highlightColor} />
                        React / Next.js
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FiCheckCircle} color={highlightColor} />
                        TypeScript / JavaScript
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FiCheckCircle} color={highlightColor} />
                        HTML5 / CSS3 / SASS
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FiCheckCircle} color={highlightColor} />
                        Chakra UI / Tailwind
                      </ListItem>
                      <ListItem>
                        <ListIcon as={FiCheckCircle} color={highlightColor} />
                        React Native
                      </ListItem>
                    </List>
                  </VStack>
                </SimpleGrid>
              </Box>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Experience Section */}
      <Box py={{ base: 16, md: 24 }} bg={useColorModeValue('gray.50', 'gray.900')}>
        <Container maxW="container.xl">
          <VStack spacing={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl">
              Work Experience
            </Heading>
            <Text
              fontSize="lg"
              color={textColor}
              maxW="2xl"
            >
              My professional journey has equipped me with a diverse skill set and experience across various industries.
            </Text>
          </VStack>

          <VStack spacing={8} align="stretch">
            {experience.map((job, index) => (
              <MotionBox
                key={job.company}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Grid
                  templateColumns={{ base: '1fr', md: '1fr 3fr' }}
                  gap={8}
                  p={6}
                  bg={cardBg}
                  borderRadius="lg"
                  boxShadow="md"
                >
                  <GridItem>
                    <VStack align="start" spacing={3}>
                      <Icon as={FiBriefcase} color={highlightColor} boxSize={6} />
                      <Text fontWeight="bold" fontSize="lg">
                        {job.position}
                      </Text>
                      <Text color={highlightColor} fontWeight="medium">
                        {job.company}
                      </Text>
                      <HStack>
                        <Icon as={FiCalendar} color={textColor} />
                        <Text color={textColor} fontSize="sm">
                          {job.period}
                        </Text>
                      </HStack>
                    </VStack>
                  </GridItem>
                  <GridItem>
                    <Text mb={4}>
                      {job.description}
                    </Text>
                    <Text fontWeight="medium" mb={2}>
                      Key Achievements:
                    </Text>
                    <List spacing={2}>
                      {job.achievements.map((achievement, i) => (
                        <ListItem key={i}>
                          <ListIcon as={FiCheckCircle} color={highlightColor} />
                          {achievement}
                        </ListItem>
                      ))}
                    </List>
                  </GridItem>
                </Grid>
              </MotionBox>
            ))}
          </VStack>
        </Container>
      </Box>

      {/* Education Section */}
      <Box py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <VStack spacing={4} mb={12} textAlign="center">
            <Heading as="h2" size="xl">
              Education
            </Heading>
            <Text
              fontSize="lg"
              color={textColor}
              maxW="2xl"
            >
              My educational background has provided me with a strong foundation in both design and technical disciplines.
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {education.map((edu, index) => (
              <MotionBox
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Box
                  p={6}
                  bg={cardBg}
                  borderRadius="lg"
                  boxShadow="md"
                  height="full"
                  borderLeft="4px solid"
                  borderColor={highlightColor}
                >
                  <HStack mb={2}>
                    <Icon as={FiAward} color={highlightColor} boxSize={5} />
                    <Heading as="h3" size="md">
                      {edu.degree}
                    </Heading>
                  </HStack>
                  <Text fontWeight="medium" color={highlightColor} mb={2}>
                    {edu.institution}
                  </Text>
                  <HStack mb={4}>
                    <Icon as={FiCalendar} color={textColor} />
                    <Text color={textColor} fontSize="sm">
                      {edu.period}
                    </Text>
                  </HStack>
                  <Text>
                    {edu.description}
                  </Text>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={{ base: 16, md: 24 }} bg={bgGradient}>
        <Container maxW="container.xl">
          <MotionFlex
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justify="space-between"
            bg={cardBg}
            p={{ base: 8, md: 12 }}
            borderRadius="xl"
            boxShadow="xl"
          >
            <Box maxW={{ base: 'full', md: '60%' }} mb={{ base: 6, md: 0 }}>
              <Heading as="h2" size="xl" mb={4}>
                Let's Work Together
              </Heading>
              <Text fontSize="lg" color={textColor}>
                I'm currently available for freelance projects, full-time positions, or consulting work. If you're interested in collaborating, get in touch!
              </Text>
            </Box>
            <Button
              as={RouterLink}
              to="/contact"
              size="lg"
              colorScheme="brand"
              rightIcon={<FiArrowRight />}
              px={8}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}
            >
              Contact Me
            </Button>
          </MotionFlex>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage; 
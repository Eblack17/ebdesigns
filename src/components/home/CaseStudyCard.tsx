import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Tag,
  Text,
  VStack,
  useColorModeValue,
  AspectRatio,
  Badge,
  Icon,
  Divider,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiTool, FiCheckCircle, FiTarget } from 'react-icons/fi';
import { EnhancedProject } from './ProjectShowcase';
import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp } from 'framer-motion';

// Define ChakraBox - a component that accepts both chakra and motion props
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

interface CaseStudyCardProps {
  project: EnhancedProject;
}

/**
 * A modern case study card component that highlights project challenges,
 * solutions, and outcomes in an engaging format.
 */
const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Colors that adapt to color mode
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const subTextColor = useColorModeValue('gray.600', 'gray.400');
  const accentColor = useColorModeValue('brand.500', 'brand.300');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const tagBg = useColorModeValue('gray.100', 'gray.700');
  const hoverBg = useColorModeValue('gray.50', 'gray.700');
  const shadowColor = useColorModeValue('rgba(0, 0, 0, 0.05)', 'rgba(0, 0, 0, 0.3)');
  
  // Animation variants
  const imageVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    initial: { scale: 1, transition: { duration: 0.3 } }
  };
  
  const arrowVariants = {
    hover: { x: 5, transition: { duration: 0.3 } },
    initial: { x: 0, transition: { duration: 0.3 } }
  };
  
  return (
    <ChakraBox
      borderRadius="xl"
      overflow="hidden"
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      boxShadow={`0 10px 30px ${shadowColor}`}
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: `0 20px 40px ${shadowColor}`,
        borderColor: accentColor
      }}
      height="100%"
      position="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured badge if applicable */}
      {project.featured && (
        <Badge
          position="absolute"
          top="16px"
          right="16px"
          zIndex="1"
          colorScheme="brand"
          fontSize="xs"
          px={3}
          py={1}
          borderRadius="full"
          textTransform="uppercase"
          fontWeight="bold"
          letterSpacing="wider"
        >
          Featured
        </Badge>
      )}
      
      {/* Project image */}
      <AspectRatio ratio={16 / 9} width="100%">
        <ChakraBox
          overflow="hidden"
          width="100%"
          height="100%"
          position="relative"
        >
          <ChakraBox
            as={motion.div}
            variants={imageVariants}
            animate={isHovered ? 'hover' : 'initial'}
            position="absolute"
            width="100%"
            height="100%"
            bgImage={`url(${project.image})`}
            bgSize="cover"
            bgPosition="center"
            transition="transform 0.5s ease"
          />
          
          {/* Overlay gradient */}
          <Box
            position="absolute"
            bottom="0"
            left="0"
            right="0"
            height="50%"
            bgGradient="linear(to-t, blackAlpha.600, transparent)"
          />
          
          {/* Tags */}
          <HStack
            position="absolute"
            bottom="4"
            left="4"
            spacing={2}
          >
            {project.tags.slice(0, 3).map(tag => (
              <Tag
                key={tag}
                bgColor={accentColor}
                color="white"
                fontWeight="medium"
                size="sm"
                borderRadius="full"
              >
                {tag}
              </Tag>
            ))}
            {project.tags.length > 3 && (
              <Tag
                bgColor="blackAlpha.700"
                color="white"
                fontWeight="medium"
                size="sm"
                borderRadius="full"
              >
                +{project.tags.length - 3}
              </Tag>
            )}
          </HStack>
        </ChakraBox>
      </AspectRatio>
      
      {/* Content */}
      <VStack
        align="flex-start"
        spacing={5}
        p={6}
      >
        {/* Title and description */}
        <VStack align="flex-start" spacing={2}>
          <Heading
            as="h3"
            size="md"
            color={textColor}
            fontWeight="400"
            lineHeight="tight"
          >
            {project.title}
          </Heading>
          
          <Text color={subTextColor} fontSize="md" noOfLines={2}>
            {project.description}
          </Text>
        </VStack>
        
        {/* Case study highlights */}
        {project.caseStudy && (
          <VStack align="flex-start" spacing={4} width="100%">
            <Divider borderColor={borderColor} />
            
            {/* Challenge */}
            <HStack spacing={3} align="flex-start">
              <Icon as={FiTarget} color={accentColor} boxSize={5} mt={1} />
              <VStack align="flex-start" spacing={1}>
                <Text fontWeight="bold" fontSize="sm" color={textColor}>
                  Challenge
                </Text>
                <Text fontSize="sm" color={subTextColor} noOfLines={2}>
                  {project.caseStudy.challenge}
                </Text>
              </VStack>
            </HStack>
            
            {/* Solution */}
            <HStack spacing={3} align="flex-start">
              <Icon as={FiTool} color={accentColor} boxSize={5} mt={1} />
              <VStack align="flex-start" spacing={1}>
                <Text fontWeight="bold" fontSize="sm" color={textColor}>
                  Solution
                </Text>
                <Text fontSize="sm" color={subTextColor} noOfLines={2}>
                  {project.caseStudy.solution}
                </Text>
              </VStack>
            </HStack>
            
            {/* Results */}
            <HStack spacing={3} align="flex-start">
              <Icon as={FiCheckCircle} color={accentColor} boxSize={5} mt={1} />
              <VStack align="flex-start" spacing={1}>
                <Text fontWeight="bold" fontSize="sm" color={textColor}>
                  Results
                </Text>
                <Text fontSize="sm" color={subTextColor} noOfLines={2}>
                  {project.caseStudy.results}
                </Text>
              </VStack>
            </HStack>
          </VStack>
        )}
        
        {/* Tools */}
        {project.tools && project.tools.length > 0 && (
          <>
            <Divider borderColor={borderColor} />
            <VStack align="flex-start" spacing={2} width="100%">
              <Text fontSize="xs" fontWeight="bold" color={subTextColor} textTransform="uppercase" letterSpacing="wider">
                Tools & Technologies
              </Text>
              <HStack spacing={2} flexWrap="wrap">
                {project.tools.map(tool => (
                  <Tag
                    key={tool}
                    size="sm"
                    bg={tagBg}
                    color={subTextColor}
                    fontWeight="medium"
                    mb={2}
                  >
                    {tool}
                  </Tag>
                ))}
              </HStack>
            </VStack>
          </>
        )}
        
        {/* Call to action */}
        <HStack 
          mt={2} 
          width="100%" 
          justify="flex-end"
        >
          <Button
            as={RouterLink}
            to={project.link}
            variant="ghost"
            colorScheme="brand"
            size="sm"
            rightIcon={
              <ChakraBox
                as={motion.div}
                variants={arrowVariants}
                animate={isHovered ? 'hover' : 'initial'}
              >
                <FiArrowRight />
              </ChakraBox>
            }
            fontWeight="medium"
            _hover={{ bg: 'transparent' }}
          >
            View Case Study
          </Button>
        </HStack>
      </VStack>
    </ChakraBox>
  );
};

export default CaseStudyCard; 
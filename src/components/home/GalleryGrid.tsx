import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useBreakpointValue,
  useColorModeValue,
  AspectRatio,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  HStack,
  Tag,
  VStack,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMaximize2, FiExternalLink } from 'react-icons/fi';
import { EnhancedProject } from './ProjectShowcase';
import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { isValidMotionProp } from 'framer-motion';

// Define ChakraBox - a component that accepts both chakra and motion props
const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

interface GalleryGridProps {
  projects: EnhancedProject[];
}

/**
 * A modern, masonry-style gallery grid for showcasing design projects
 * with interactive hover states and lightbox functionality.
 */
const GalleryGrid: React.FC<GalleryGridProps> = ({ projects }) => {
  const [selectedProject, setSelectedProject] = useState<EnhancedProject | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  // Responsive columns
  const columns = useBreakpointValue({ base: 1, sm: 2, md: 2, lg: 3 });
  
  // Colors that adapt to color mode
  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'gray.100');
  const subTextColor = useColorModeValue('gray.600', 'gray.400');
  const accentColor = useColorModeValue('brand.500', 'brand.300');
  const overlayBg = useColorModeValue('rgba(255, 255, 255, 0.9)', 'rgba(26, 32, 44, 0.9)');
  const modalBg = useColorModeValue('white', 'gray.800');
  const tagBg = useColorModeValue('brand.50', 'brand.900');
  
  // Open project lightbox
  const openLightbox = (project: EnhancedProject, imageIndex: number = 0) => {
    setSelectedProject(project);
    setSelectedImageIndex(imageIndex);
    onOpen();
  };
  
  // Navigate through images in lightbox
  const navigateImage = (direction: number) => {
    if (!selectedProject || !selectedProject.images) return;
    
    const newIndex = selectedImageIndex + direction;
    const maxIndex = selectedProject.images.length - 1;
    
    if (newIndex < 0) {
      setSelectedImageIndex(maxIndex);
    } else if (newIndex > maxIndex) {
      setSelectedImageIndex(0);
    } else {
      setSelectedImageIndex(newIndex);
    }
  };
  
  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }),
  };
  
  // Get aspect ratio for each item (vary to create interest)
  const getAspectRatio = (index: number): number => {
    const ratios = [1, 4/3, 3/4, 16/9, 9/16];
    return ratios[index % ratios.length];
  };
  
  return (
    <>
      <SimpleGrid 
        columns={columns} 
        spacing={6} 
        width="100%"
        mt={6}
      >
        {projects.map((project, index) => (
          <ChakraBox
            key={project.id}
            variants={itemVariants}
            custom={index}
            initial="hidden"
            animate="visible"
            whileHover={{ y: -5 }}
            position="relative"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="md"
            transition="all 0.3s ease"
            cursor="pointer"
            onClick={() => openLightbox(project)}
            height="100%"
          >
            <AspectRatio ratio={getAspectRatio(index)} width="100%">
              <Box
                position="relative"
                width="100%"
                height="100%"
                overflow="hidden"
              >
                {/* Project image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  transition="transform 0.5s ease"
                  _groupHover={{ transform: 'scale(1.05)' }}
                />
                
                {/* Hover overlay */}
                <Flex
                  position="absolute"
                  top="0"
                  left="0"
                  width="100%"
                  height="100%"
                  bgColor="blackAlpha.700"
                  opacity="0"
                  transition="opacity 0.3s ease"
                  _groupHover={{ opacity: 1 }}
                  direction="column"
                  justify="center"
                  align="center"
                  textAlign="center"
                  p={6}
                >
                  <Icon as={FiMaximize2} color="white" mb={3} boxSize={6} />
                  <Heading
                    color="white"
                    fontSize="lg"
                    fontWeight="bold"
                    mb={2}
                  >
                    {project.title}
                  </Heading>
                  <Text color="whiteAlpha.800" fontSize="sm" noOfLines={2}>
                    {project.description}
                  </Text>
                </Flex>
                
                {/* Category tag */}
                <Box
                  position="absolute"
                  top="4"
                  left="4"
                >
                  <Tag
                    bgColor={accentColor}
                    color="white"
                    fontWeight="medium"
                    size="sm"
                    borderRadius="full"
                    textTransform="capitalize"
                  >
                    {project.category}
                  </Tag>
                </Box>
              </Box>
            </AspectRatio>
          </ChakraBox>
        ))}
      </SimpleGrid>
      
      {/* Lightbox Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
        <ModalOverlay backdropFilter="blur(8px)" />
        <ModalContent
          bg={modalBg}
          borderRadius="xl"
          overflow="hidden"
          maxH="90vh"
          position="relative"
        >
          <ModalCloseButton
            color="white"
            zIndex="overlay"
            size="lg"
            top={4}
            right={4}
            bg="blackAlpha.300"
            _hover={{ bg: "blackAlpha.500" }}
          />
          <ModalBody p={0}>
            {selectedProject && (
              <Flex direction="column">
                {/* Image gallery */}
                <Box position="relative" overflow="hidden">
                  <AspectRatio ratio={16/9} w="100%">
                    <Image 
                      src={selectedProject.images?.[selectedImageIndex] || selectedProject.image}
                      alt={selectedProject.title} 
                      objectFit="cover"
                    />
                  </AspectRatio>
                  
                  {/* Navigation arrows if multiple images */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <>
                      <Flex 
                        position="absolute"
                        top="0"
                        left="0"
                        height="100%"
                        width="15%"
                        align="center"
                        justify="center"
                        cursor="pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateImage(-1);
                        }}
                        _hover={{ bg: "blackAlpha.300" }}
                      >
                        <Icon as={FiArrowRight} transform="rotate(180deg)" color="white" boxSize={6} />
                      </Flex>
                      <Flex 
                        position="absolute"
                        top="0"
                        right="0"
                        height="100%"
                        width="15%"
                        align="center"
                        justify="center"
                        cursor="pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateImage(1);
                        }}
                        _hover={{ bg: "blackAlpha.300" }}
                      >
                        <Icon as={FiArrowRight} color="white" boxSize={6} />
                      </Flex>
                    </>
                  )}
                  
                  {/* Image indicator dots */}
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <HStack
                      position="absolute"
                      bottom="3"
                      left="50%"
                      transform="translateX(-50%)"
                      spacing={2}
                    >
                      {selectedProject.images.map((_, index) => (
                        <Box
                          key={index}
                          width="10px"
                          height="10px"
                          borderRadius="full"
                          bg={index === selectedImageIndex ? "white" : "whiteAlpha.600"}
                          cursor="pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImageIndex(index);
                          }}
                        />
                      ))}
                    </HStack>
                  )}
                </Box>
                
                {/* Project info */}
                <Box p={8}>
                  <VStack align="flex-start" spacing={4} width="100%">
                    <HStack wrap="wrap" spacing={2}>
                      {selectedProject.tags.map(tag => (
                        <Tag
                          key={tag}
                          bg={tagBg}
                          color={accentColor}
                          fontWeight="medium"
                          size="sm"
                          mb={2}
                        >
                          {tag}
                        </Tag>
                      ))}
                    </HStack>
                    
                    <Heading
                      as="h3" 
                      size="lg" 
                      color={textColor}
                      fontWeight="400"
                    >
                      {selectedProject.title}
                    </Heading>
                    
                    <Text color={subTextColor} fontSize="md" lineHeight="tall">
                      {selectedProject.description}
                    </Text>
                    
                    <Flex
                      width="100%"
                      justifyContent="flex-end"
                      mt={4}
                    >
                      <Button
                        as={RouterLink}
                        to={selectedProject.link}
                        colorScheme="brand"
                        rightIcon={<FiExternalLink />}
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Full Case Study
                      </Button>
                    </Flex>
                  </VStack>
                </Box>
              </Flex>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default GalleryGrid; 
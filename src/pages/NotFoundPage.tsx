import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import PageTransition from '../components/shared/PageTransition';
import BasicHeading from '../components/shared/BasicHeading';

// Wrap motion components
const MotionBox = motion(Box);

const NotFoundPage = () => {
  const bgGradient = useColorModeValue(
    'linear(to-r, gray.50, purple.50)',
    'linear(to-r, gray.900, purple.900)'
  );
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <PageTransition>
      <Box
        as="main"
        bg={bgGradient}
        minH="100vh"
        py={{ base: 20, md: 28 }}
        display="flex"
        alignItems="center"
      >
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center">
            <MotionBox
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <BasicHeading
                as="h1"
                size="4xl"
                lineHeight="1"
                mb={4}
              >
                404
              </BasicHeading>
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              maxW="400px"
              mx="auto"
            >
              <Image
                src="https://illustrations.popsy.co/amber/crashed-error.svg"
                alt="404 Illustration"
                width="100%"
                height="auto"
              />
            </MotionBox>
            
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <BasicHeading as="h2" size="xl" mb={4}>
                Page Not Found
              </BasicHeading>
              <Text
                fontSize="lg"
                color={textColor}
                maxW="lg"
                mx="auto"
                mb={8}
              >
                Oops! The page you're looking for doesn't exist or has been moved.
              </Text>
              <Button
                as={RouterLink}
                to="/"
                size="lg"
                colorScheme="brand"
                leftIcon={<FiArrowLeft />}
                _hover={{
                  transform: 'translateY(-2px)',
                  boxShadow: 'lg',
                }}
              >
                Back to Home
              </Button>
            </MotionBox>
          </VStack>
        </Container>
      </Box>
    </PageTransition>
  );
};

export default NotFoundPage; 
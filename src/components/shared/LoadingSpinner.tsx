import { Box, Flex, keyframes, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

interface LoadingSpinnerProps {
  size?: string;
  thickness?: string;
  speed?: number;
  color?: string;
}

const LoadingSpinner = ({
  size = '40px',
  thickness = '4px',
  speed = 1,
  color,
}: LoadingSpinnerProps) => {
  const spinAnimation = `${spin} ${speed}s linear infinite`;
  const defaultColor = useColorModeValue('brand.500', 'brand.300');
  const spinnerColor = color || defaultColor;

  return (
    <Flex justify="center" align="center" h="100%" w="100%" minH="200px">
      <Box
        as={motion.div}
        h={size}
        w={size}
        border={thickness}
        borderColor={spinnerColor}
        borderTopColor="transparent"
        borderRadius="50%"
        animation={spinAnimation}
      />
    </Flex>
  );
};

export default LoadingSpinner; 
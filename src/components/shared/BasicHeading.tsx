import { Heading, HeadingProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface BasicHeadingProps extends HeadingProps {
  children: ReactNode;
}

const BasicHeading = ({ children, as = 'h2', ...rest }: BasicHeadingProps) => {
  // Set variant based on heading level
  const variant = as === 'h1' ? 'h1' : as === 'h2' ? 'h2' : undefined;
  
  return (
    <Heading 
      as={as} 
      variant={variant} 
      fontWeight={300} // Explicitly set the font weight to light (300)
      {...rest}
    >
      {children}
    </Heading>
  );
};

export default BasicHeading; 
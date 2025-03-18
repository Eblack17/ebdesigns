import { Heading, HeadingProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface BasicHeadingProps extends HeadingProps {
  children: ReactNode;
}

const BasicHeading = ({ children, as = 'h2', ...rest }: BasicHeadingProps) => {
  // Set variant based on heading level
  const variant = as === 'h1' ? 'h1' : as === 'h2' ? 'h2' : as === 'h3' ? 'h3' : undefined;
  
  // Explicitly set Roboto font-family for h2 and h3
  const fontFamily = (as === 'h2' || as === 'h3') ? "'Roboto', sans-serif" : undefined;
  
  return (
    <Heading 
      as={as} 
      variant={variant} 
      fontWeight={300} // Explicitly set the font weight to light (300)
      fontFamily={fontFamily}
      {...rest}
    >
      {children}
    </Heading>
  );
};

export default BasicHeading; 
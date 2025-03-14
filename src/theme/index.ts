import { extendTheme, type ThemeConfig } from '@chakra-ui/react';

// Foundation styles
import { colors } from './foundations/colors';
import { fonts } from './foundations/fonts';
import { breakpoints } from './foundations/breakpoints';
import { spacing } from './foundations/spacing';
import { shadows } from './foundations/shadows';
import { radii } from './foundations/radii';
import { transition } from './foundations/transition';

// Component style overrides
import { Button } from './components/button';
import { Link } from './components/link';
import { Heading } from './components/heading';
import { Text } from './components/text';
import { Card } from './components/card';
import { Input } from './components/input';

// Color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  colors,
  fonts,
  breakpoints,
  space: spacing,
  shadows,
  radii,
  transition,
  components: {
    Button,
    Link,
    Heading,
    Text,
    Card,
    Input,
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
    }),
  },
});

export default theme; 
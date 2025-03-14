export const Heading = {
  baseStyle: {
    fontFamily: 'heading',
    fontWeight: 'light',
    lineHeight: 'shorter',
    letterSpacing: 'tight',
  },
  sizes: {
    '4xl': {
      fontSize: ['6xl', null, '7xl', '8xl'],
      lineHeight: 1,
    },
    '3xl': {
      fontSize: ['5xl', null, '6xl', '7xl'],
      lineHeight: 1.05,
    },
    '2xl': {
      fontSize: ['4xl', null, '5xl', '6xl'],
      lineHeight: 1.1,
    },
    xl: {
      fontSize: ['3xl', null, '4xl', '5xl'],
      lineHeight: 1.15,
    },
    lg: {
      fontSize: ['2xl', null, '3xl', '4xl'],
      lineHeight: 1.2,
    },
    md: {
      fontSize: ['xl', null, '2xl', '3xl'],
      lineHeight: 1.25,
    },
    sm: {
      fontSize: ['lg', null, 'xl', '2xl'],
      lineHeight: 1.3,
    },
    xs: {
      fontSize: ['md', null, 'lg', 'xl'],
      lineHeight: 1.35,
    },
  },
  variants: {
    h1: {
      as: 'h1',
      fontSize: ['3xl', '4xl', '5xl', '6xl'],
      fontWeight: 'light',
      lineHeight: 'shorter',
    },
    h2: {
      as: 'h2',
      fontSize: ['2xl', '3xl'],
      fontWeight: 'light',
      lineHeight: 'short',
    },
    pageTitle: {
      fontSize: ['3xl', '4xl', '5xl', '6xl'],
      fontWeight: 'light',
      lineHeight: 'shorter',
      mb: 6,
    },
    sectionTitle: {
      fontSize: ['2xl', '3xl'],
      fontWeight: 'light',
      lineHeight: 'short',
      mb: 4,
      position: 'relative',
      _after: {
        content: '""',
        display: 'block',
        width: '40px',
        height: '4px',
        bg: 'brand.500',
        mt: 2,
      },
    },
    cardTitle: {
      fontSize: 'xl',
      fontWeight: 'semibold',
      lineHeight: 'base',
    },
  },
  defaultProps: {
    size: 'md',
  },
}; 
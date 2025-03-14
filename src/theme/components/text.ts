export const Text = {
  baseStyle: {
    fontFamily: 'body',
    lineHeight: 'tall',
  },
  variants: {
    lead: {
      fontSize: ['lg', 'xl'],
      fontWeight: 'normal',
      lineHeight: 'tall',
      mb: 6,
    },
    paragraph: {
      fontSize: 'md',
      mb: 4,
      lineHeight: 'tall',
    },
    subtle: {
      fontSize: 'sm',
      color: 'gray.600',
      _dark: {
        color: 'gray.400',
      },
    },
    caption: {
      fontSize: 'xs',
      color: 'gray.500',
      _dark: {
        color: 'gray.500',
      },
    },
    highlight: {
      bg: 'brand.100',
      px: 2,
      py: 1,
      borderRadius: 'sm',
      fontWeight: 'medium',
    },
    gradient: {
      bgGradient: 'linear(to-r, brand.500, accent.500)',
      bgClip: 'text',
      fontWeight: 'bold',
    },
  },
  defaultProps: {
    variant: 'paragraph',
  },
}; 
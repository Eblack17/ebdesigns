export const Link = {
  baseStyle: {
    position: 'relative',
    color: 'brand.500',
    transition: 'color 0.3s ease',
    _hover: {
      textDecoration: 'none',
      color: 'brand.600',
    },
    _focus: {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  variants: {
    underline: {
      position: 'relative',
      _after: {
        content: '""',
        position: 'absolute',
        width: '0%',
        height: '2px',
        bottom: '-2px',
        left: '50%',
        background: 'brand.500',
        transition: 'all 0.3s ease',
      },
      _hover: {
        _after: {
          width: '100%',
          left: '0',
        },
      },
    },
    nav: {
      color: 'gray.700',
      _dark: { 
        color: 'gray.100'
      },
      fontWeight: 'medium',
      position: 'relative',
      _hover: {
        color: 'brand.500',
      },
      _active: {
        color: 'brand.500',
      },
    },
    button: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      px: 4,
      py: 2,
      borderRadius: 'md',
      fontWeight: 'semibold',
      bg: 'transparent',
      _hover: {
        bg: 'gray.100',
        _dark: {
          bg: 'gray.700',
        },
      },
    },
  },
  defaultProps: {
    variant: 'underline',
  },
}; 
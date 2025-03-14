export const Button = {
  baseStyle: {
    fontWeight: 'semibold',
    borderRadius: 'md',
    transition: 'all 0.3s ease',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 2,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 3,
    },
    lg: {
      fontSize: 'lg',
      px: 8,
      py: 4,
    },
  },
  variants: {
    primary: {
      bg: 'brand.500',
      color: 'white',
      _hover: {
        bg: 'brand.600',
        transform: 'translateY(-2px)',
        boxShadow: 'md',
      },
      _active: {
        bg: 'brand.700',
        transform: 'translateY(0)',
        boxShadow: 'none',
      },
      _disabled: {
        bg: 'gray.300',
        color: 'gray.500',
        cursor: 'not-allowed',
        _hover: {
          transform: 'none',
          boxShadow: 'none',
        },
      },
    },
    secondary: {
      bg: 'transparent',
      border: '1px solid',
      borderColor: 'brand.500',
      color: 'brand.500',
      _hover: {
        bg: 'brand.50',
        transform: 'translateY(-2px)',
        boxShadow: 'sm',
      },
      _active: {
        bg: 'brand.100',
        transform: 'translateY(0)',
        boxShadow: 'none',
      },
      _disabled: {
        borderColor: 'gray.300',
        color: 'gray.500',
        cursor: 'not-allowed',
        _hover: {
          transform: 'none',
          boxShadow: 'none',
        },
      },
    },
    ghost: {
      bg: 'transparent',
      color: 'brand.500',
      _hover: {
        bg: 'brand.50',
      },
      _active: {
        bg: 'brand.100',
      },
      _disabled: {
        color: 'gray.500',
        cursor: 'not-allowed',
        _hover: {
          bg: 'transparent',
        },
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'primary',
  },
}; 
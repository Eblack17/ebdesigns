export const Input = {
  baseStyle: {
    field: {
      width: '100%',
      minWidth: 0,
      outline: 0,
      position: 'relative',
      appearance: 'none',
      transition: 'all 0.2s',
    },
  },
  sizes: {
    md: {
      field: {
        fontSize: 'md',
        px: 4,
        h: 12,
        borderRadius: 'md',
      },
    },
  },
  variants: {
    outline: {
      field: {
        border: '1px solid',
        borderColor: 'gray.300',
        bg: 'white',
        _dark: {
          borderColor: 'gray.600',
          bg: 'gray.800',
        },
        _hover: {
          borderColor: 'gray.400',
          _dark: {
            borderColor: 'gray.500',
          },
        },
        _focus: {
          zIndex: 1,
          borderColor: 'brand.500',
          boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
        },
        _readOnly: {
          boxShadow: 'none !important',
          userSelect: 'all',
        },
        _disabled: {
          opacity: 0.4,
          cursor: 'not-allowed',
        },
        _invalid: {
          borderColor: 'error.500',
          boxShadow: '0 0 0 1px var(--chakra-colors-error-500)',
        },
      },
    },
    filled: {
      field: {
        border: '2px solid',
        borderColor: 'transparent',
        bg: 'gray.100',
        _dark: {
          bg: 'gray.700',
        },
        _hover: {
          bg: 'gray.200',
          _dark: {
            bg: 'gray.600',
          },
        },
        _focus: {
          bg: 'white',
          _dark: {
            bg: 'gray.800',
          },
          borderColor: 'brand.500',
        },
        _invalid: {
          borderColor: 'error.500',
        },
      },
    },
    floating: {
      field: {
        border: '1px solid',
        borderColor: 'gray.300',
        bg: 'white',
        _dark: {
          borderColor: 'gray.600',
          bg: 'gray.800',
        },
        pt: 6,
        pb: 2,
        _focus: {
          borderColor: 'brand.500',
          boxShadow: '0 0 0 1px var(--chakra-colors-brand-500)',
        },
        _invalid: {
          borderColor: 'error.500',
          boxShadow: '0 0 0 1px var(--chakra-colors-error-500)',
        },
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
}; 
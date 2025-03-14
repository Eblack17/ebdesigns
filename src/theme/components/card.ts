export const Card = {
  baseStyle: {
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    _dark: {
      background: 'gray.800',
    },
    borderRadius: 'lg',
    boxShadow: 'md',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
  },
  variants: {
    interactive: {
      cursor: 'pointer',
      _hover: {
        transform: 'translateY(-4px)',
        boxShadow: 'lg',
      },
    },
    project: {
      cursor: 'pointer',
      _hover: {
        transform: 'translateY(-4px)',
        boxShadow: 'lg',
        '& .card-image': {
          transform: 'scale(1.05)',
        },
      },
    },
    outline: {
      boxShadow: 'none',
      border: '1px solid',
      borderColor: 'gray.200',
      _dark: {
        borderColor: 'gray.700',
      },
    },
    solid: {
      boxShadow: 'md',
    },
  },
  defaultProps: {
    variant: 'solid',
  },
}; 
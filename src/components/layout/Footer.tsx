import { Link as RouterLink } from 'react-router-dom'
import {
  Box,
  Container,
  Flex,
  HStack,
  Text,
  Link,
  Icon,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react'
import { FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi'
import { SiBehance, SiDribbble } from 'react-icons/si'

const Footer = () => {
  const bg = useColorModeValue('gray.50', 'gray.900')
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const year = new Date().getFullYear()
  
  const socialLinks = [
    { icon: SiDribbble, label: 'Dribbble', href: 'https://dribbble.com/' },
    { icon: SiBehance, label: 'Behance', href: 'https://behance.net/' },
    { icon: FiGithub, label: 'GitHub', href: 'https://github.com/' },
    { icon: FiLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/' },
    { icon: FiInstagram, label: 'Instagram', href: 'https://instagram.com/' },
  ]
  
  const footerLinks = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Privacy Policy', path: '/privacy' },
  ]
  
  return (
    <Box
      as="footer"
      bg={bg}
      borderTop="1px"
      borderColor={borderColor}
      py={8}
    >
      <Container maxW="container.xl">
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'center', md: 'flex-start' }}
          gap={8}
        >
          {/* Logo and Tagline */}
          <Box textAlign={{ base: 'center', md: 'left' }}>
            <Link
              as={RouterLink}
              to="/"
              fontFamily="heading"
              fontWeight="bold"
              fontSize="xl"
              mb={2}
              display="inline-block"
              _hover={{ textDecoration: 'none' }}
            >
              EB<Box as="span" color="brand.500">Designs</Box>
            </Link>
            <Text color="gray.500" fontSize="sm" maxW="xs">
              Creating beautiful, functional designs for the modern web.
            </Text>
          </Box>
          
          {/* Footer Navigation */}
          <Box>
            <Text fontWeight="semibold" fontSize="sm" mb={4} textAlign={{ base: 'center', md: 'left' }}>
              Quick Links
            </Text>
            <Flex direction={{ base: 'row', md: 'column' }} wrap="wrap" justify="center">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  as={RouterLink}
                  to={link.path}
                  fontSize="sm"
                  color="gray.500"
                  mr={{ base: 4, md: 0 }}
                  mb={{ base: 2, md: 3 }}
                  _hover={{ color: 'brand.500' }}
                >
                  {link.label}
                </Link>
              ))}
            </Flex>
          </Box>
          
          {/* Social Links */}
          <Box>
            <Text fontWeight="semibold" fontSize="sm" mb={4} textAlign={{ base: 'center', md: 'left' }}>
              Connect
            </Text>
            <HStack spacing={4} justify={{ base: 'center', md: 'flex-start' }}>
              {socialLinks.map((social) => (
                <Link 
                  key={social.label}
                  href={social.href} 
                  isExternal
                  aria-label={social.label}
                >
                  <Icon 
                    as={social.icon} 
                    boxSize={5}
                    color="gray.500"
                    transition="all 0.3s ease"
                    _hover={{ 
                      color: 'brand.500',
                      transform: 'translateY(-2px)'
                    }}
                  />
                </Link>
              ))}
            </HStack>
          </Box>
        </Flex>
        
        <Divider my={6} borderColor={borderColor} />
        
        {/* Copyright */}
        <Text fontSize="xs" color="gray.500" textAlign="center">
          &copy; {year} EB Designs. All rights reserved.
        </Text>
      </Container>
    </Box>
  )
}

export default Footer 
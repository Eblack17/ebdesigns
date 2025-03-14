import { useState, useEffect, useMemo } from 'react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorMode,
  useColorModeValue,
  Link,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Image,
} from '@chakra-ui/react'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { motion, useTransform, useSpring, MotionValue } from 'framer-motion'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import ModernNavItem from './ModernNavItem'
import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

const MotionBox = motion(Box)
const MotionFlex = motion(Flex)
const MotionIconButton = motion(IconButton)
const MotionImage = motion(Image)

/**
 * Header component with smooth scroll transitions
 */
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const location = useLocation()
  const { isScrolled, scrollProgress } = useScrollPosition()
  
  // Create spring-animated progress for smoother motion
  const springConfig = { stiffness: 100, damping: 30, mass: 1 }
  const smoothProgress = useSpring(scrollProgress, springConfig)
  
  // Interpolate values based on scroll progress
  const headerHeight = useTransform(smoothProgress, [0, 1], [90, 70])
  const logoHeight = useTransform(smoothProgress, [0, 1], [60, 45])
  const borderRadius = useTransform(smoothProgress, [0, 1], [15, 0])
  const backdropBlur = useTransform(smoothProgress, [0, 1], [0, 10])
  const borderOpacity = useTransform(smoothProgress, [0, 1], [0, 1])
  const logoScale = useTransform(smoothProgress, [0, 1], [1, 0.95])
  
  // Dynamic colors and shadows based on progress and color mode
  const bgOpacity = useTransform(smoothProgress, [0, 1], [0.7, 0.95])
  
  // Calculate background colors based on color mode
  const lightBgColor = useTransform(bgOpacity, (opacity) => `rgba(255, 255, 255, ${opacity})`)
  const darkBgColor = useTransform(bgOpacity, (opacity) => `rgba(26, 32, 44, ${opacity})`)
  
  // Calculate shadow intensity based on scroll progress
  const lightShadow = useTransform(
    smoothProgress,
    [0, 1],
    ['none', '5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.8)']
  )
  
  const darkShadow = useTransform(
    smoothProgress,
    [0, 1],
    ['none', '5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(30, 36, 50, 0.8)']
  )
  
  // Border colors for different modes
  const lightBorderColor = 'rgba(226, 232, 240, 1)'
  const darkBorderColor = 'rgba(74, 85, 104, 1)'
  
  // Border styles with interpolated opacity
  const borderStyle = useTransform(
    borderOpacity,
    (opacity) => `${opacity}px solid ${colorMode === 'light' ? lightBorderColor : darkBorderColor}`
  )
  
  // Backdrop filter with interpolated blur
  const backdropFilterStyle = useTransform(
    backdropBlur,
    (blur) => blur > 0 ? `blur(${blur}px)` : 'none'
  )
  
  // Border radius for navbar
  const borderRadiusStyle = useTransform(
    borderRadius,
    (radius) => `0 0 ${radius}px ${radius}px`
  )
  
  // Nav underline state
  const [underlineProps, setUnderlineProps] = useState({
    width: 0,
    left: 0,
    isActive: false,
  })
  
  const handleHover = (item: { width: number; left: number; }) => {
    setUnderlineProps({
      width: item.width,
      left: item.left,
      isActive: true,
    })
  }
  
  const handleHoverEnd = () => {
    setUnderlineProps((prev) => ({
      ...prev,
      isActive: false,
    }))
  }
  
  return (
    <MotionBox
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      style={{ 
        borderBottom: borderStyle,
        backdropFilter: backdropFilterStyle
      }}
      transition={{ duration: 0.1 }}
    >
      <MotionFlex
        style={{
          height: headerHeight,
          boxShadow: colorMode === 'light' ? lightShadow : darkShadow,
          borderRadius: borderRadiusStyle,
          background: colorMode === 'light' ? lightBgColor : darkBgColor
        }}
        alignItems="center"
        justifyContent="space-between"
        px={{ base: 4, md: 8 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 30
        }}
      >
        {/* Logo */}
        <MotionBox
          style={{ scale: logoScale }}
          transition={{ type: 'spring', stiffness: 200, damping: 26 }}
        >
          <Link
            as={RouterLink}
            to="/"
            _hover={{ textDecoration: 'none' }}
            transition="all 0.3s cubic-bezier(0.33, 1, 0.68, 1)"
            display="flex"
            alignItems="center"
          >
            <MotionImage 
              src="/images/ebdesigns.jpg"
              alt="EB Designs Logo"
              style={{ height: logoHeight }}
              width="auto"
              transition={{ type: 'spring', stiffness: 200, damping: 26 }}
            />
          </Link>
        </MotionBox>
        
        {/* Desktop Navigation */}
        <HStack
          spacing={3}
          display={{ base: 'none', md: 'flex' }}
          onMouseLeave={handleHoverEnd}
          position="relative"
        >
          {navItems.map((item) => (
            <ModernNavItem
              key={item.label}
              to={item.to}
              label={item.label}
              onHover={handleHover}
              isScrolled={isScrolled}
            />
          ))}
          
          {/* Color Mode Toggle */}
          <MotionIconButton
            aria-label="Toggle color mode"
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            ml={2}
            variant="ghost"
            whileHover={{ scale: 1.1, rotate: colorMode === 'light' ? 15 : -15 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          />
        </HStack>
        
        {/* Mobile Navigation Icon */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          aria-label="Open menu"
          fontSize="20px"
          variant="ghost"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          transition="all 0.3s cubic-bezier(0.33, 1, 0.68, 1)"
        />
        
        {/* Mobile Menu Drawer */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="stretch" mt={4}>
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    as={RouterLink}
                    to={item.to}
                    fontSize="lg"
                    fontWeight={location.pathname === item.to ? 'bold' : 'normal'}
                    color={location.pathname === item.to ? 'brand.500' : 'inherit'}
                    onClick={onClose}
                    _hover={{
                      textDecoration: 'none',
                      color: 'brand.500',
                      transform: 'translateX(3px)',
                    }}
                    transition="all 0.3s cubic-bezier(0.33, 1, 0.68, 1)"
                  >
                    {item.label}
                  </Link>
                ))}
                <Flex align="center" justify="space-between" pt={4}>
                  <Box>Color Mode</Box>
                  <IconButton
                    aria-label="Toggle color mode"
                    icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                    onClick={toggleColorMode}
                    variant="ghost"
                    transition="all 0.3s cubic-bezier(0.33, 1, 0.68, 1)"
                  />
                </Flex>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </MotionFlex>
    </MotionBox>
  )
}

export default Header 
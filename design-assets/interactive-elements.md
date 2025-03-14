# EB Designs Portfolio - Interactive Elements & Microinteractions

This document outlines the interactive elements and microinteractions designed to enhance user experience on the EB Designs portfolio website. These subtle animations and feedback mechanisms create a more engaging, intuitive, and polished user experience.

## Core Principles

- **Purpose-Driven**: Every interaction should serve a purpose, enhancing usability rather than merely decorating
- **Subtle & Natural**: Interactions should feel natural and not distract from content
- **Performance-Conscious**: Animations should be lightweight and not impact page performance
- **Accessible**: All interactions must be accessible and not cause issues for users with motion sensitivity
- **Consistent**: Interactions should follow consistent patterns throughout the site

## Hover States

### Link Hover

All interactive elements should communicate their interactive nature through hover states:

```jsx
// Link hover effect in Chakra UI
<Link
  position="relative"
  _hover={{
    textDecoration: "none",
    "&::after": {
      width: "100%",
    },
  }}
  _after={{
    content: '""',
    position: "absolute",
    width: "0%",
    height: "2px",
    bottom: "-2px",
    left: 0,
    bg: "brand.500",
    transition: "width 0.3s ease",
  }}
>
  Learn more
</Link>
```

### Button Hover

Buttons should have a scale effect on hover:

```jsx
// Button with hover animation
<Button
  transition="all 0.3s ease"
  _hover={{
    transform: "translateY(-2px)",
    boxShadow: "lg",
  }}
>
  View Project
</Button>
```

### Card Hover

Project cards should slightly elevate on hover:

```jsx
// Card with hover effect
<Box
  transition="all 0.3s ease"
  _hover={{
    transform: "translateY(-8px)",
    boxShadow: "xl",
  }}
>
  {/* Card content */}
</Box>
```

## Loading States

### Button Loading

Buttons should show loading states during async operations:

```jsx
// Button with loading state
<Button
  isLoading={isSubmitting}
  loadingText="Submitting"
  spinnerPlacement="start"
  onClick={handleSubmit}
>
  Submit
</Button>
```

### Page Transitions

Implement fade transitions between pages:

```jsx
// Page transition component
const PageTransition = (props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.3 }}
    {...props}
  />
);

// Usage
<PageTransition>
  <Box>{/* Page content */}</Box>
</PageTransition>
```

## Scroll-Based Interactions

### Scroll Progress Indicator

A progress bar showing reading progress:

```jsx
// Scroll progress indicator
const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      height="4px"
      zIndex="sticky"
    >
      <Box 
        bg="brand.500" 
        height="100%" 
        width={`${scrollProgress}%`}
        transition="width 0.1s ease-out"
      />
    </Box>
  );
};
```

### Reveal on Scroll

Elements should fade in as they enter the viewport:

```jsx
// Using Framer Motion and Intersection Observer
const FadeInOnScroll = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

// Usage
<FadeInOnScroll>
  <Heading>Project Showcase</Heading>
</FadeInOnScroll>
```

## Form Interactions

### Input Focus Effects

Form inputs should have clear focus states:

```jsx
// Custom focus effect
<FormControl>
  <FormLabel>Your Name</FormLabel>
  <Input
    borderColor="gray.300"
    _focus={{
      borderColor: "brand.500",
      boxShadow: `0 0 0 1px var(--chakra-colors-brand-500)`,
    }}
  />
</FormControl>
```

### Floating Labels

Use floating labels for a cleaner form appearance:

```jsx
// Floating label component
const FloatingLabelInput = ({ label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  
  return (
    <FormControl position="relative">
      <Input
        placeholder=" "
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => {
          setIsFocused(false);
          setHasValue(e.target.value !== "");
        }}
        onChange={(e) => setHasValue(e.target.value !== "")}
        pt="8"
        {...props}
      />
      <FormLabel
        position="absolute"
        top={isFocused || hasValue ? "2" : "4"}
        left="4"
        fontSize={isFocused || hasValue ? "xs" : "md"}
        color={isFocused ? "brand.500" : "gray.500"}
        pointerEvents="none"
        transition="all 0.2s ease"
      >
        {label}
      </FormLabel>
    </FormControl>
  );
};
```

### Form Validation Feedback

Provide immediate feedback on input validation:

```jsx
// Error animations
<FormControl isInvalid={errors.email}>
  <FormLabel>Email</FormLabel>
  <Input
    {...register("email", {
      required: "Email is required",
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: "Invalid email address",
      },
    })}
  />
  <FormErrorMessage
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
  >
    {errors.email && errors.email.message}
  </FormErrorMessage>
</FormControl>
```

## Project Showcase Interactions

### Image Gallery

Interactive image gallery for project details:

```jsx
// Simplified image gallery with thumbnails
const ImageGallery = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  return (
    <Box>
      <Box
        position="relative"
        overflow="hidden"
        borderRadius="md"
        mb="4"
      >
        <Image
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt}
          w="full"
          transition="transform 0.3s ease"
          _hover={{ transform: "scale(1.02)" }}
        />
      </Box>
      
      <HStack spacing="2" overflowX="auto" py="2">
        {images.map((image, index) => (
          <Box
            key={index}
            cursor="pointer"
            opacity={selectedIndex === index ? 1 : 0.6}
            borderWidth={selectedIndex === index ? "2px" : "0"}
            borderColor="brand.500"
            borderRadius="md"
            overflow="hidden"
            transition="all 0.2s ease"
            onClick={() => setSelectedIndex(index)}
          >
            <Image
              src={image.thumbnail}
              alt={`Thumbnail ${index + 1}`}
              boxSize="60px"
              objectFit="cover"
            />
          </Box>
        ))}
      </HStack>
    </Box>
  );
};
```

### Project Filtering

Smooth animations for project filtering:

```jsx
// Animated project filter
const ProjectGrid = ({ projects }) => {
  const [filter, setFilter] = useState("all");
  
  const filteredProjects = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter(project => project.category === filter);
  }, [filter, projects]);
  
  return (
    <Box>
      <HStack spacing="4" mb="8">
        {["all", "web", "mobile", "branding"].map((category) => (
          <Button
            key={category}
            variant={filter === category ? "solid" : "ghost"}
            onClick={() => setFilter(category)}
            size="sm"
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </HStack>
      
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </SimpleGrid>
    </Box>
  );
};
```

## Navigation Interactions

### Navigation Highlight

Highlight the current active page in navigation:

```jsx
// Active nav highlight with animation
const NavLink = ({ children, to, ...props }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      as={RouterLink}
      to={to}
      position="relative"
      fontWeight={isActive ? "semibold" : "normal"}
      color={isActive ? "brand.500" : "inherit"}
      _hover={{ textDecoration: "none", color: "brand.500" }}
      {...props}
    >
      {children}
      <Box
        position="absolute"
        bottom="-2px"
        left="0"
        height="2px"
        bg="brand.500"
        width={isActive ? "100%" : "0%"}
        transition="width 0.3s ease"
        _groupHover={{ width: "100%" }}
      />
    </Link>
  );
};
```

### Mobile Menu Animation

Smooth animation for mobile menu:

```jsx
// Animated mobile menu
<Drawer isOpen={isOpen} placement="right" onClose={onClose}>
  <DrawerOverlay />
  <DrawerContent>
    <DrawerCloseButton />
    <DrawerHeader>Menu</DrawerHeader>
    <DrawerBody>
      <VStack spacing="4" align="stretch">
        {navItems.map((item, index) => (
          <motion.div
            key={item.path}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <NavLink to={item.path} onClick={onClose}>
              {item.label}
            </NavLink>
          </motion.div>
        ))}
      </VStack>
    </DrawerBody>
  </DrawerContent>
</Drawer>
```

## Feedback Microinteractions

### Success Animation

Animated checkmark for form submission success:

```jsx
// Success animation component
const SuccessAnimation = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 100 100"
  >
    <motion.path
      d="M20,50 L40,70 L80,30"
      fill="transparent"
      stroke="green"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    />
    <motion.circle
      cx="50"
      cy="50"
      r="45"
      fill="transparent"
      stroke="green"
      strokeWidth="5"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
  </motion.svg>
);
```

### Error Shake Animation

Subtle shake animation for error states:

```jsx
// Shake animation for form errors
const ShakeBox = ({ children, shouldShake }) => {
  return (
    <motion.div
      animate={shouldShake ? { x: [0, -10, 10, -10, 10, 0] } : {}}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

// Usage
<ShakeBox shouldShake={formSubmitFailed}>
  <FormControl>
    <FormLabel>Password</FormLabel>
    <Input type="password" isInvalid={formSubmitFailed} />
    {formSubmitFailed && (
      <FormErrorMessage>Invalid credentials</FormErrorMessage>
    )}
  </FormControl>
</ShakeBox>
```

## Cursor Interactions

### Custom Cursor

Custom cursor for portfolio elements (optional):

```jsx
// Custom cursor component
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e) => {
      const target = e.target;
      const isLink = target.tagName.toLowerCase() === 'a' || 
                     target.tagName.toLowerCase() === 'button' ||
                     target.closest('a') || 
                     target.closest('button') ||
                     window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isLink);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);
  
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      zIndex="tooltip"
      pointerEvents="none"
      style={{ mixBlendMode: 'difference' }}
    >
      <motion.div
        style={{
          position: 'absolute',
          transform: `translate(${position.x - 5}px, ${position.y - 5}px)`,
          width: isPointer ? '50px' : '10px',
          height: isPointer ? '50px' : '10px',
          borderRadius: '50%',
          backgroundColor: 'white',
          transition: 'width 0.3s, height 0.3s',
          opacity: 0.6,
        }}
        animate={{
          scale: isPointer ? 1.5 : 1
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      />
    </Box>
  );
};
```

## Implementation Guidelines

### Animation Libraries

- **Framer Motion**: For complex animations and transitions
- **Chakra UI transitions**: For simple hover/focus states
- **CSS transitions**: For performance-sensitive microinteractions

### Performance Considerations

- Use the CSS `will-change` property sparingly and only for elements that will animate
- Prefer CSS transforms and opacity for animations (better performance)
- Implement throttling for scroll-based animations
- Consider disabling animations based on user preference (prefers-reduced-motion)

### Accessibility Requirements

- All animations must respect the `prefers-reduced-motion` media query:

```jsx
// Respect user motion preferences
const mightAnimate = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Usage with Framer Motion
<motion.div
  initial={{ opacity: mightAnimate ? 0 : 1 }}
  animate={{ opacity: 1 }}
  transition={{ duration: mightAnimate ? 0.5 : 0 }}
>
  {/* Content */}
</motion.div>
```

- Interactive elements must be keyboard accessible
- Animation should not interfere with screen readers

## Motion Design System

Create a consistent motion design system with predefined animations:

```jsx
// Motion variants for reusable animations
export const motionVariants = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.3 }
  },
  slideIn: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
    transition: { duration: 0.3 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.3 }
  }
};

// Usage
<motion.div
  variants={motionVariants.fadeIn}
  initial="initial"
  animate="animate"
  exit="exit"
>
  {/* Content */}
</motion.div>
```

## Testing and Quality Assurance

- Test all animations across different devices and browsers
- Verify animations don't cause layout shifts
- Ensure animations work properly at different screen sizes
- Test with reduced motion settings enabled
- Verify keyboard navigation isn't affected by animations

---

## Implementation Checklist

- [ ] Install required libraries (Framer Motion)
- [ ] Create reusable animation components
- [ ] Implement page transitions
- [ ] Add hover animations to interactive elements
- [ ] Implement scroll-based animations
- [ ] Create form interaction animations
- [ ] Add loading state animations
- [ ] Implement feedback microinteractions
- [ ] Test accessibility compliance
- [ ] Optimize performance 
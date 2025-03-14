# EB Designs Portfolio - Responsive Design Principles

This document outlines the responsive design principles for the EB Designs portfolio website. Following these guidelines will ensure a consistent, accessible, and optimized experience across all devices and screen sizes.

## Core Principles

Our responsive design approach is built on the following core principles:

1. **Mobile-First Development:** Design and develop for mobile devices first, then progressively enhance for larger screens.

2. **Fluid & Flexible:** Use relative units and fluid layouts that adapt to any screen size.

3. **Content-Driven Breakpoints:** Define breakpoints based on where content needs to adapt, not on specific device dimensions.

4. **Progressive Enhancement:** Ensure core functionality and content are available on all devices, with enhanced experiences on capable devices.

5. **Performance-Focused:** Optimize assets and code for all devices, with special consideration for mobile networks.

6. **Consistent Experience:** Maintain design consistency and brand identity across all breakpoints.

## Breakpoint System

The EB Designs portfolio uses a comprehensive breakpoint system aligned with Chakra UI's default breakpoints. These breakpoints represent the minimum viewport width at which the design changes.

### Standard Breakpoints

| Name | Value (em/px) | Typical Devices |
|------|---------------|-----------------|
| Base | 0em (0px)     | Small mobile devices |
| sm   | 30em (480px)  | Mobile devices |
| md   | 48em (768px)  | Tablets, large mobile |
| lg   | 62em (992px)  | Laptops, small desktops |
| xl   | 80em (1280px) | Large desktops |
| 2xl  | 96em (1536px) | Extra large screens |

### Usage in Chakra UI

```tsx
// Example of responsive styles using Chakra UI's props
<Box
  padding={{ base: "4", md: "6", lg: "8" }}
  width={{ base: "100%", md: "50%", lg: "33%" }}
>
  Content
</Box>
```

### Custom Media Queries (if needed)

```tsx
// For custom components or specific needs, use these standard breakpoint values
import { useBreakpointValue } from "@chakra-ui/react";

// In a component
const isMobile = useBreakpointValue({ base: true, md: false });

// Or in styled components or CSS
const CustomComponent = styled.div`
  /* Mobile styles (default) */
  display: block;
  
  /* Tablet and above */
  @media (min-width: 48em) {
    display: flex;
  }
  
  /* Desktop and above */
  @media (min-width: 62em) {
    max-width: 1200px;
  }
`;
```

## Common Responsive Patterns

The following patterns should be used consistently throughout the portfolio:

### 1. Stacking to Grid/Columns

Content blocks that appear side-by-side on larger screens should stack vertically on smaller screens:

```tsx
<Flex
  direction={{ base: "column", md: "row" }}
  gap={{ base: "4", md: "6" }}
>
  <Box flex="1">First item</Box>
  <Box flex="1">Second item</Box>
</Flex>
```

### 2. Grid Adjustments

Adjust the number of columns in grid layouts based on screen size:

```tsx
<SimpleGrid
  columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
  spacing={{ base: "4", md: "6" }}
>
  {/* Grid items */}
</SimpleGrid>
```

### 3. Responsive Typography

Typography should scale appropriately across devices:

```tsx
<Heading
  fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
  lineHeight={{ base: "1.4", md: "1.2" }}
>
  Responsive Heading
</Heading>
```

### 4. Navigation Transformation

Navigation menu transforms from desktop horizontal menu to mobile hamburger menu:

```tsx
// Simplified example
<Box>
  {/* Mobile hamburger button */}
  <IconButton
    aria-label="Open menu"
    display={{ base: "flex", md: "none" }}
    icon={<HamburgerIcon />}
    onClick={onToggle}
  />
  
  {/* Desktop horizontal menu */}
  <HStack spacing="6" display={{ base: "none", md: "flex" }}>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/projects">Projects</NavLink>
    <NavLink to="/contact">Contact</NavLink>
  </HStack>
  
  {/* Mobile menu drawer/dropdown */}
  <Collapse in={isOpen} animateOpacity display={{ md: "none" }}>
    <VStack spacing="4" p="4">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </VStack>
  </Collapse>
</Box>
```

### 5. Reduced Content on Mobile

Some non-essential content can be hidden on smaller screens:

```tsx
<Box display={{ base: "none", md: "block" }}>
  Additional supporting content that's not critical on mobile
</Box>
```

### 6. Touch-Friendly Interactions

Ensure interactive elements have appropriate sizes for touch interaction:

```tsx
<Button
  p={{ base: "4", md: "2" }}
  height={{ base: "48px", md: "40px" }}
>
  Click Me
</Button>
```

## Page-Specific Responsive Strategies

### Home Page

1. **Hero Section**
   - Full-width on all devices
   - Text centered on mobile, left-aligned on desktop
   - Background image scales or crops appropriately
   - CTA button remains prominent at all sizes

2. **Project Showcase**
   - Single column on mobile
   - 2 columns on tablet
   - 3 columns on desktop
   - 4 columns on large desktop

3. **Testimonials**
   - Single testimonial visible on mobile
   - Multiple testimonials with arrows/pagination on larger screens

### Project Detail Page

1. **Project Header**
   - Stacked layout on mobile (image → title → description)
   - Side-by-side on desktop (image on left, text on right)

2. **Project Gallery**
   - Single column on mobile
   - Grid layout on larger screens
   - Lightbox/modal remains full-screen on all devices

3. **Related Projects**
   - Horizontal scrolling container on mobile
   - Grid display on desktop

### Contact Page

1. **Contact Form**
   - Full-width on mobile
   - Contained width with margins on desktop
   - Input fields stack on mobile, may have side-by-side layout on desktop

2. **Contact Information**
   - Stacked on mobile
   - Side-by-side with form on desktop

## Responsive Images & Media

### Image Optimization

1. **Responsive Images Using Next.js**

```tsx
import Image from "next/image";

// Automatically responsive image with Next.js Image component
<Image
  src="/projects/project-1-hero.jpg"
  alt="Project hero image"
  layout="responsive"
  width={1200}
  height={600}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority={isHeroImage} // Use for above-the-fold images
/>
```

2. **Art Direction (Different Images for Different Breakpoints)**

For cases where you need different image crops or compositions at different screen sizes:

```tsx
// Simplified example - in practice, use picture element or CSS
const imageSrc = useBreakpointValue({
  base: "/images/mobile-hero.jpg",
  md: "/images/tablet-hero.jpg",
  lg: "/images/desktop-hero.jpg"
});

<Image
  src={imageSrc}
  alt="Hero image"
  layout="fill"
  objectFit="cover"
/>
```

3. **Background Images**

```tsx
<Box
  backgroundImage={{
    base: "url('/images/mobile-bg.jpg')",
    md: "url('/images/desktop-bg.jpg')"
  }}
  backgroundSize="cover"
  backgroundPosition="center"
>
  Content
</Box>
```

### Video Considerations

1. **Responsive Video Embeds**

```tsx
// Responsive video container with 16:9 aspect ratio
<Box position="relative" paddingTop="56.25%" width="100%">
  <iframe
    src="https://www.youtube.com/embed/videoId"
    title="Video title"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%"
    }}
    allowFullScreen
  />
</Box>
```

2. **Video Optimization**
   - Consider serving different video resolutions based on screen size and connection speed
   - Provide poster images for videos
   - Make videos optional on mobile (or auto-play only on WiFi)

## Performance Considerations

### Responsive Performance Optimization

1. **Conditional Loading**

```tsx
// Only load heavy components on desktop
const isDesktop = useBreakpointValue({ base: false, lg: true });

return (
  <Box>
    {isDesktop ? (
      <HeavyComponent />
    ) : (
      <LightweightAlternative />
    )}
  </Box>
);
```

2. **Image Loading Strategies**
   - Use lazy loading for below-the-fold images
   - Prioritize loading for above-the-fold images
   - Implement proper caching strategies

3. **CSS and JS Optimization**
   - Keep critical CSS inline for fast first render
   - Defer non-critical JavaScript
   - Implement code-splitting for route-based loading

## Testing Responsive Design

### Testing Methodology

1. **Device Testing**
   - Test on actual physical devices when possible
   - At minimum, test on:
     - iPhone SE or equivalent (small mobile)
     - iPhone 12/13 or equivalent (standard mobile)
     - iPad or equivalent (tablet)
     - Laptop/desktop at various window sizes

2. **Browser Testing**
   - Chrome (desktop and mobile)
   - Safari (desktop and mobile)
   - Firefox
   - Edge

3. **Testing Tools**
   - Chrome DevTools Device Mode
   - Responsive Design Mode in Firefox/Safari
   - BrowserStack for cross-browser testing
   - Lighthouse for performance testing

### Responsive Testing Checklist

- [ ] All content is accessible and readable on all screen sizes
- [ ] Interactive elements have appropriate touch targets (minimum 44×44px)
- [ ] Images render correctly and maintain proper aspect ratios
- [ ] Text is readable without zooming (minimum 16px font size for body text)
- [ ] Layouts adjust appropriately at each breakpoint
- [ ] Forms and input fields are usable on touch devices
- [ ] Navigation is accessible and usable across all screen sizes
- [ ] Performance metrics meet targets on mobile devices
- [ ] Functionality is consistent across all devices

## Implementation in Chakra UI

Chakra UI provides excellent tools for responsive design that we'll leverage throughout the portfolio.

### Layout Components

Use these Chakra UI components for responsive layouts:

```tsx
// Container for content width constraints
<Container
  maxW={{ base: "100%", md: "container.md", lg: "container.lg" }}
  px={{ base: "4", md: "6" }}
>
  Content
</Container>

// Stack for vertical or horizontal arrangement
<Stack
  direction={{ base: "column", md: "row" }}
  spacing={{ base: "4", md: "8" }}
>
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Stack>

// Grid for more complex layouts
<Grid
  templateColumns={{
    base: "1fr",
    md: "repeat(2, 1fr)",
    lg: "repeat(3, 1fr)"
  }}
  gap={{ base: "4", md: "6" }}
>
  <GridItem>Item 1</GridItem>
  <GridItem>Item 2</GridItem>
  <GridItem>Item 3</GridItem>
</Grid>
```

### Responsive Style Props

Most Chakra UI components accept responsive style props:

```tsx
<Box
  width={{ base: "100%", md: "50%" }}
  p={{ base: "4", md: "6", lg: "8" }}
  bg={{ base: "gray.100", md: "white" }}
  border={{ base: "none", md: "1px solid" }}
  borderColor={{ md: "gray.200" }}
>
  Content adapts at different breakpoints
</Box>
```

### Creating a Responsive Theme

Extend Chakra UI's theme to incorporate EB Designs' responsive design principles:

```tsx
// theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  breakpoints: {
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  
  // Custom components with responsive defaults
  components: {
    Container: {
      baseStyle: {
        maxW: { base: "100%", md: "container.md", lg: "container.lg", xl: "container.xl" },
        px: { base: "4", md: "6", lg: "8" },
      },
    },
    
    // Custom card component example
    ProjectCard: {
      baseStyle: {
        display: "flex",
        flexDirection: { base: "column", md: "row" },
        padding: { base: "4", md: "6" },
        gap: { base: "4", md: "6" },
      },
    },
  },
});

export default theme;
```

## Accessibility Considerations

### Responsive Accessibility

1. **Zoom Support**
   - Ensure the design remains functional when zoomed to 200%
   - Use relative units (rem, em) rather than fixed pixel values for text and containers

2. **Touch Targets**
   - Ensure interactive elements have sufficient size (minimum 44×44px)
   - Provide adequate spacing between touch targets

3. **Focus Management**
   - Ensure visible focus indicators at all screen sizes
   - Maintain logical tab order in responsive layouts

4. **Screen Reader Considerations**
   - Use proper landmark roles and semantic HTML
   - Ensure content order makes sense when linearized
   - Add screen reader specific context when content changes based on screen size

```tsx
// Example of screen reader context for responsive changes
<Box>
  <Heading display={{ base: "none", md: "block" }}>Project Gallery</Heading>
  <Heading display={{ base: "block", md: "none" }}>Projects</Heading>
  
  {/* For screen readers to explain the difference */}
  <span className="sr-only">
    Project gallery showing selected works
  </span>
</Box>
```

## Responsive Design Best Practices

1. **Don't Hide Critical Content**
   - Ensure important content is available across all devices
   - If content must be hidden on mobile, ensure it's non-essential

2. **Maintain Consistent Branding**
   - Keep brand identity consistent across breakpoints
   - Maintain color schemes, typography hierarchies, and visual styles

3. **Design for Touch and Mouse**
   - Design interactions that work well with both touch and mouse inputs
   - Avoid hover-only interactions without touch alternatives

4. **Maintain Visual Hierarchy**
   - Ensure the visual hierarchy remains clear at all screen sizes
   - Primary actions should remain prominent on all devices

5. **Test Real User Conditions**
   - Test on actual devices with various connection speeds
   - Consider factors like outdoor visibility and one-handed usage

## Future Considerations

1. **Progressive Web App (PWA) Features**
   - Prepare for offline functionality
   - Consider installable app features
   - Optimize for various device capabilities

2. **Newer Form Factors**
   - Be prepared to adapt for foldable devices
   - Consider ultra-wide displays (beyond 2xl breakpoint)
   - Plan for consistent display on non-rectangular screens

3. **CSS Container Queries**
   - As browser support improves, consider implementing container queries for component-based responsive design
   - This allows components to respond to their container size rather than viewport size 
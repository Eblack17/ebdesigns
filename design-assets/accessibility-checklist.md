# EB Designs Portfolio - Accessibility Checklist

This document outlines the accessibility requirements, standards, and implementation strategies for the portfolio website. Ensuring accessibility is not just a legal or ethical consideration but also improves the overall user experience and SEO performance.

## Accessibility Standards

The portfolio will aim to meet **WCAG 2.1 Level AA** compliance, which includes:

### 1. Perceivable

| Requirement | Description | Implementation |
|-------------|-------------|----------------|
| Text Alternatives | Provide text alternatives for non-text content | Alt text for all images, ARIA labels for interactive elements |
| Time-based Media | Provide alternatives for time-based media | Transcripts/captions for videos |
| Adaptable | Create content that can be presented in different ways | Semantic HTML, logical reading order |
| Distinguishable | Make it easier for users to see and hear content | Sufficient color contrast, text resizing, audio control |

### 2. Operable

| Requirement | Description | Implementation |
|-------------|-------------|----------------|
| Keyboard Accessible | Make all functionality available from keyboard | Focus management, keyboard navigation |
| Enough Time | Provide users enough time to read and use content | No time limits, pause/stop/hide for moving content |
| Seizures & Physical Reactions | Do not design content that causes seizures | No flashing content, respect reduced motion |
| Navigable | Provide ways to help users navigate and find content | Clear page titles, meaningful links, multiple ways to find pages |
| Input Modalities | Make it easier to use functionality with various inputs | Large tap targets, labels for input fields |

### 3. Understandable

| Requirement | Description | Implementation |
|-------------|-------------|----------------|
| Readable | Make text content readable and understandable | Use clear language, identify language of page |
| Predictable | Make web pages appear and operate in predictable ways | Consistent navigation, predictable UI behavior |
| Input Assistance | Help users avoid and correct mistakes | Clear error messages, suggestions for correction |

### 4. Robust

| Requirement | Description | Implementation |
|-------------|-------------|----------------|
| Compatible | Maximize compatibility with current/future user tools | Valid HTML, complete start/end tags, unique IDs |
| Status Messages | Status messages can be presented without receiving focus | ARIA roles for status messages |

## Implementation with Chakra UI

Chakra UI provides many accessible components out of the box, but we need to ensure proper implementation:

### Accessible Component Usage

#### Buttons and Interactive Elements

```tsx
// Accessible button example
import { Button } from '@chakra-ui/react';

// Good: Uses proper semantics, manages focus
<Button 
  onClick={handleClick}
  aria-label="Submit form" // When button has no text
  isDisabled={!isValid}
>
  Submit
</Button>

// Avoid: Using non-button elements as buttons without proper ARIA
<div onClick={handleClick}>Submit</div>
```

#### Forms and Inputs

```tsx
// Accessible form elements
import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';

<FormControl isInvalid={!!errors.name} isRequired>
  <FormLabel htmlFor="name">Name</FormLabel>
  <Input 
    id="name"
    placeholder="Enter your name"
    aria-describedby="name-error"
    {...register('name')}
  />
  <FormErrorMessage id="name-error">
    {errors.name && errors.name.message}
  </FormErrorMessage>
</FormControl>
```

#### Navigation

```tsx
// Accessible navigation
import { Box, Link as ChakraLink } from '@chakra-ui/react';

<Box as="nav" aria-label="Main navigation">
  <ChakraLink 
    href="/about"
    aria-current={isActive('/about') ? 'page' : undefined}
  >
    About
  </ChakraLink>
</Box>
```

### Focus Management

```tsx
// Focus management for modals
import { useRef, useEffect } from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';

const ModalComponent = ({ isOpen, onClose }) => {
  const initialFocusRef = useRef();
  
  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      initialFocusRef={initialFocusRef}
      returnFocusOnClose={true}
    >
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Button ref={initialFocusRef}>This gets focus</Button>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
```

### Skip Links

```tsx
// Skip to main content link
import { Box, Link } from '@chakra-ui/react';

const SkipLink = () => (
  <Link
    href="#main-content"
    position="absolute"
    top="-40px"
    left="0"
    p="2"
    bg="brand.500"
    color="white"
    zIndex="skipLink"
    _focus={{
      top: "0",
      outline: "2px solid",
      outlineOffset: "2px",
      outlineColor: "brand.500"
    }}
  >
    Skip to main content
  </Link>
);
```

## Color and Contrast

### Contrast Requirements

- **Normal Text (< 18pt)**: Minimum contrast ratio of 4.5:1
- **Large Text (≥ 18pt or ≥ 14pt bold)**: Minimum contrast ratio of 3:1
- **UI Components and Graphical Objects**: Minimum contrast ratio of 3:1

### Contrast Checking Tools

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio](https://contrast-ratio.com/)
- Chrome DevTools Accessibility Audit

### Implementation in Chakra Theme

```tsx
// src/theme/colors.ts - Ensuring accessible color combinations
const colors = {
  brand: {
    50: "#EBF8FF",  // Light Blue
    500: "#2D5BFF", // Primary Blue - Ensure 4.5:1 with white text
    700: "#1A365D"  // Dark Blue - Ensure 4.5:1 with light backgrounds
  },
  // Other colors omitted for brevity
};

// src/theme/components/button.ts - Ensuring accessible buttons
const Button = {
  baseStyle: {
    // Base styles for all buttons
  },
  variants: {
    solid: (props) => ({
      bg: 'brand.500',
      color: 'white', // Ensures good contrast with brand.500
      _hover: {
        bg: 'brand.600',
        // Still maintains contrast with white text
      }
    }),
    outline: (props) => ({
      color: 'brand.500',
      borderColor: 'brand.500',
      // Ensure focus and hover states maintain contrast
      _focus: {
        boxShadow: `0 0 0 3px ${transparentize('brand.500', 0.6)(props)}`,
      }
    })
  }
};
```

## Semantic HTML & ARIA

### Semantic Structure

```tsx
// Page structure with semantic HTML
const PortfolioPage = () => (
  <>
    <header>
      <nav aria-label="Main navigation">
        {/* Navigation items */}
      </nav>
    </header>
    <main id="main-content">
      <section aria-labelledby="portfolio-heading">
        <h1 id="portfolio-heading">My Portfolio</h1>
        {/* Portfolio content */}
      </section>
    </main>
    <footer>
      {/* Footer content */}
    </footer>
  </>
);
```

### ARIA Landmarks

| Landmark | HTML5 | ARIA Role | Usage in Portfolio |
|----------|-------|-----------|-------------------|
| Header | `<header>` | `role="banner"` | Site header with logo and main navigation |
| Navigation | `<nav>` | `role="navigation"` | Main menu, footer links |
| Main | `<main>` | `role="main"` | Primary content area |
| Footer | `<footer>` | `role="contentinfo"` | Copyright, secondary links |
| Search | N/A | `role="search"` | Portfolio search functionality |
| Form | `<form>` | `role="form"` | Contact form |

### ARIA States and Properties

```tsx
// Using ARIA attributes appropriately
<Tabs>
  <TabList aria-label="Portfolio categories">
    <Tab aria-selected={selectedTab === 0}>Web Design</Tab>
    <Tab aria-selected={selectedTab === 1}>Graphic Design</Tab>
  </TabList>
  <TabPanels>
    <TabPanel id="web-design" aria-labelledby="tab-web-design">
      {/* Web design content */}
    </TabPanel>
    <TabPanel id="graphic-design" aria-labelledby="tab-graphic-design">
      {/* Graphic design content */}
    </TabPanel>
  </TabPanels>
</Tabs>
```

## Keyboard Navigation

### Focus Indicators

Maintain visible focus indicators in the theme:

```tsx
// src/theme/foundations/global.ts
const global = {
  styles: {
    global: {
      // Other global styles
      '*:focus': {
        boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
        outline: 'none',
      },
      // Only hide outline when also using box-shadow for focus
      '*:focus:not(:focus-visible)': {
        boxShadow: 'none',
      },
      '*:focus-visible': {
        boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.6)',
        outline: 'none',
      },
    }
  }
};
```

### Keyboard Traps

- Ensure modals, dropdown menus and other overlay elements don't trap keyboard focus
- Use `returnFocusOnClose` for modals and popovers
- Implement keyboard shortcuts for complex widgets (data tables, sliders)

## Responsive Accessibility

### Font Sizing

Use relative units for text:

```tsx
// src/theme/foundations/typography.ts
const typography = {
  fontSizes: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    md: '1rem',       // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    // Additional sizes omitted for brevity
  }
};
```

### Zoom Support

- Ensure layouts don't break when zoomed to 200%
- Test with browser zoom at 200% on mobile and desktop
- Avoid horizontal scrolling when zoomed

## Reduced Motion

Respect user preferences for reduced motion:

```tsx
// src/hooks/useReducedMotion.ts
import { useEffect, useState } from 'react';

export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const onChange = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    mediaQuery.addEventListener('change', onChange);
    return () => {
      mediaQuery.removeEventListener('change', onChange);
    };
  }, []);

  return prefersReducedMotion;
};
```

Using the hook with animations:

```tsx
// Component with animation
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

const AnimatedComponent = () => {
  const prefersReducedMotion = useReducedMotion();
  
  const variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: prefersReducedMotion ? 0.1 : 0.5 
      }
    }
  };
  
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      Content
    </motion.div>
  );
};
```

## Content Accessibility

### Text Clarity

- Minimum text size of 16px (1rem) for body text
- Line height of at least 1.5 for body text
- Maximum line length of 80 characters
- Sufficient spacing between paragraphs (1.5× the line height)

### Link Text

- Make link text descriptive and unique
- Avoid "click here" or "read more" without context
- Indicate external links visually and with screen reader cues

```tsx
// Accessible link component
import { Link, Icon, VisuallyHidden } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const ExternalLink = ({ href, children }) => (
  <Link href={href} isExternal>
    {children}
    <Icon as={ExternalLinkIcon} mx="2px" verticalAlign="text-bottom" />
    <VisuallyHidden>(Opens in a new window)</VisuallyHidden>
  </Link>
);
```

## Testing Procedures

### Automated Testing

- Integrate [axe-core](https://github.com/dequelabs/axe-core) for automated testing
- Run accessibility checks in CI/CD pipeline
- Include accessibility tests in component tests

```tsx
// Example Jest test with axe-core
import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from '../components';

expect.extend(toHaveNoViolations);

test('Button component should have no accessibility violations', async () => {
  const { container } = render(<Button>Click me</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

### Manual Testing

#### Keyboard Testing Checklist

- [ ] Tab through the entire page, ensuring focus order is logical
- [ ] Verify all interactive elements are keyboard accessible
- [ ] Check that focus indicators are visible
- [ ] Ensure keyboard traps are avoided
- [ ] Test skip links functionality

#### Screen Reader Testing

Test with at least one screen reader from each category:

| Platform | Screen Reader | Browser |
|----------|--------------|---------|
| Windows | NVDA | Firefox or Chrome |
| macOS | VoiceOver | Safari |
| Mobile | VoiceOver (iOS) or TalkBack (Android) | Mobile Safari or Chrome |

#### Screen Reader Testing Checklist

- [ ] Page title provides adequate description
- [ ] Landmarks are properly defined and labeled
- [ ] Headings have proper hierarchy
- [ ] Images have appropriate alt text
- [ ] Form controls have associated labels
- [ ] Custom components announce their role, state, and value
- [ ] Dynamic content changes are announced

## Accessibility Statement

Include an accessibility statement on the website that:

1. States commitment to accessibility
2. Lists accessibility features
3. Known limitations
4. Contact information for accessibility feedback
5. Date of the last accessibility review

## Continuous Improvement

### Monitoring and Evaluation

- Schedule quarterly accessibility audits
- Incorporate accessibility feedback from users
- Keep up with evolving accessibility standards
- Document and track accessibility improvements

## Resources

### Tools

- [axe DevTools](https://www.deque.com/axe/) - Browser extension for testing
- [WAVE](https://wave.webaim.org/) - Web accessibility evaluation tool
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Automated auditing tool
- [Color Contrast Analyzer](https://developer.paciellogroup.com/resources/contrastanalyser/) - Desktop application for checking color contrast

### Guidelines and References

- [WCAG 2.1](https://www.w3.org/TR/WCAG21/)
- [A11y Project Checklist](https://www.a11yproject.com/checklist/)
- [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/)
- [Chakra UI Accessibility](https://chakra-ui.com/docs/features/accessibility) 
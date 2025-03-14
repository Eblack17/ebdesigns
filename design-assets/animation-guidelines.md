# EB Designs Portfolio - Animation Guidelines

This document outlines the motion design principles and animation specifications for the EB Designs portfolio website. Consistent animation enhances user experience by providing visual feedback, guiding attention, and creating a more engaging interface.

## Motion Design Principles

### Purpose-Driven Motion

All animations should serve a specific purpose:
- **Provide Feedback**: Confirm user actions
- **Guide Attention**: Direct users to important elements
- **Create Continuity**: Connect different states and screens
- **Express Personality**: Reflect the brand identity
- **Improve Usability**: Make the interface more intuitive

### Animation Characteristics

| Characteristic | Description | Application |
|----------------|-------------|-------------|
| **Duration** | How long an animation lasts | Keep most UI animations between 200-500ms |
| **Easing** | How an animation accelerates and decelerates | Use natural easing curves that start fast and end slowly |
| **Direction** | The path an element takes during animation | Consistent directionality based on user flow |
| **Hierarchy** | Order and emphasis of animated elements | Primary actions get more pronounced animations |
| **Dimensionality** | How elements move in space | Subtle depth cues through shadows and scaling |

## Animation Timing

### Duration Guidelines

| Element Type | Duration (ms) | Usage |
|--------------|---------------|-------|
| Micro-interactions | 100-300 | Button clicks, toggles, small UI elements |
| Transitions | 300-500 | Page transitions, modal dialogs |
| Feature animations | 500-1500 | Hero animations, showcased interactions |
| Loading states | Variable | Progress indicators, skeleton screens |

### Easing Functions

| Function | CSS/JS Value | Usage |
|----------|--------------|-------|
| Standard | `cubic-bezier(0.4, 0.0, 0.2, 1)` | Most UI elements |
| Enter | `cubic-bezier(0.0, 0.0, 0.2, 1)` | Elements entering the screen |
| Exit | `cubic-bezier(0.4, 0.0, 1, 1)` | Elements exiting the screen |
| Sharp | `cubic-bezier(0.4, 0.0, 0.6, 1)` | Quick emphasis, attention-grabbing |

## Animation Categories

### Page Transitions

- **Initial Load**: Staggered fade-in of page elements from bottom (200ms delay between major sections)
- **Page-to-Page**: Fade out current page (300ms), fade in new page (400ms)
- **Section-to-Section**: Smooth scroll with subtle parallax effect

### Component Animations

#### Navigation

- **Menu Toggle**: Smooth expansion/collapse (250ms)
- **Hover States**: Subtle scale (1.02) and color shift (150ms)
- **Active States**: Color and position shift (100ms)
- **Mobile Menu**: Slide in from right (350ms)

#### Project Cards

- **Hover**: Subtle lift effect with increased shadow (200ms)
- **Click/Tap**: Quick scale down (50ms) then up (100ms)
- **Image Load**: Fade in (400ms) with subtle zoom (from 98% to 100%)
- **Details Reveal**: Slide up animation (300ms)

#### Modal Dialogs

- **Opening**: Fade in backdrop (200ms), scale up content from 95% to 100% (350ms)
- **Closing**: Fade out backdrop and content (250ms)
- **Content Loading**: Staggered fade in of elements (100ms delay between items)

#### Form Elements

- **Focus States**: Subtle highlight pulse (300ms)
- **Validation Feedback**: Shake animation for errors (400ms), checkmark animation for success (350ms)
- **Submit Button**: Loading state with subtle pulse or spinner (continuous)

#### Scrolling Effects

- **Parallax**: Subtle parallax on hero images (scroll speed * 0.85)
- **Section Reveals**: Elements fade and slide up as they enter viewport (400ms)
- **Scroll Progress**: Smooth updates to progress indicators (60fps)

### Loading States

- **Initial Page Load**: Branded loading animation (1.5s max)
- **Content Loading**: Skeleton screens with subtle pulse animation (continuous)
- **Action Feedback**: Inline loaders for form submissions and data actions (continuous)
- **Image Loading**: Progressive loading with blur-up effect (variable duration)

## Interaction Patterns

### Hover States

- Subtle scaling (1.02-1.05)
- Color shifts using theme colors
- Shadow enhancement
- Reveal of additional information
- Cursor changes for interactive elements

### Click/Tap States

- Quick scale down (0.98) then up to normal size
- Color change confirmation
- Ripple effect from point of contact (mobile)
- Visible focus states for accessibility

### Scroll-Based Animations

- Opacity and transform changes based on scroll position
- Parallax effects for depth
- Progress-based animations (timelines, progress bars)
- Sticky elements with smooth transitions

### State Changes

- Smooth transitions between interactive states
- Animated property changes (height, width, color)
- Content swaps with fade transitions
- List item animations (add, remove, reorder)

## Implementation Guidelines

### Implementation with Framer Motion

```tsx
// Example button animation with Framer Motion
import { motion } from 'framer-motion';

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.98 },
};

function AnimatedButton({ children, ...props }) {
  return (
    <motion.button
      variants={buttonVariants}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      transition={{ 
        duration: 0.2, 
        ease: [0.4, 0, 0.2, 1] 
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
```

### Implementation with CSS Transitions/Animations

```css
/* Example button animation with CSS */
.button {
  transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1),
              box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.button:active {
  transform: scale(0.98);
}
```

### Implementation with Chakra UI

```tsx
// Example button animation with Chakra UI
import { Button, Box } from "@chakra-ui/react";

function AnimatedButton({ children, ...props }) {
  return (
    <Button
      transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
      _hover={{ transform: "scale(1.05)", boxShadow: "md" }}
      _active={{ transform: "scale(0.98)" }}
      {...props}
    >
      {children}
    </Button>
  );
}

// Example page transition container
function PageTransition({ children }) {
  return (
    <Box
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </Box>
  );
}
```

### Optimization Techniques

- **GPU Acceleration**: Use `transform` and `opacity` properties when possible
- **Will-change**: Apply sparingly to hint browser about upcoming animations
- **Animation Throttling**: Reduce animation complexity on low-power devices
- **Batching**: Group animations that occur simultaneously
- **Debouncing**: Prevent animation thrashing from rapid user interactions

```css
/* Example of optimized animation CSS */
.optimized-animation {
  transform: translateZ(0); /* Force GPU acceleration */
  will-change: transform, opacity; /* Hint browser */
  transition: transform 300ms, opacity 300ms;
}
```

## Accessibility Considerations

### Reduced Motion Preferences

Always respect user preferences for reduced motion:

```css
/* Base animations */
.animated-element {
  transition: transform 300ms, opacity 300ms;
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .animated-element {
    transition: none;
  }
}
```

```tsx
// React implementation
import { useReducedMotion } from 'framer-motion';

function AccessibleAnimation() {
  const shouldReduceMotion = useReducedMotion();
  
  const variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <motion.div
      variants={variants}
      transition={{ duration: shouldReduceMotion ? 0.1 : 0.5 }}
    >
      Content
    </motion.div>
  );
}
```

### Animation Control

- Provide controls to pause/stop animations where appropriate
- Ensure no animations flash or pulse at rates that could trigger seizures
- Limit animation that could cause vestibular disorders (excessive movement)
- Ensure all animated content is accessible to screen readers

## Performance Budget

| Metric | Target | Notes |
|--------|--------|-------|
| Animation FPS | 60fps | Maintain smooth frame rate |
| CPU Usage | <30% | Monitor with Performance panel |
| Animation Duration | <500ms | Most UI animations |
| Concurrent Animations | <5 | Limit simultaneous animations |
| Total Animation Load | <20% | Percentage of total interaction time |

## Testing Procedures

### Browser Testing

- Test animations in all target browsers (Chrome, Firefox, Safari, Edge)
- Verify animations work on both desktop and mobile versions
- Check hardware acceleration is working properly

### Performance Testing

- Use Chrome DevTools Performance panel to identify jank
- Test on low-powered devices to ensure smooth performance
- Measure Time to Interactive (TTI) with and without animations

### Accessibility Testing

- Test with prefers-reduced-motion media query
- Verify screen reader compatibility
- Ensure animations don't interfere with keyboard navigation

## Animation Library

The EB Designs portfolio uses a combination of:
- **Framer Motion**: For complex, interactive animations
- **Chakra UI Motion**: For standard component animations
- **CSS Animations**: For simple, static animations

## Version Control

All animation specifications should be version-controlled alongside the codebase. Updates to animation specifications should be documented in the project changelog.

## Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Animation Principles for UX](https://www.invisionapp.com/inside-design/animation-principles-for-ux/)
- [Web Animation Performance Fundamentals](https://www.smashingmagazine.com/2021/01/web-animation-performance-fundamentals/) 
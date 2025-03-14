# EB Designs Portfolio - Component Design

## Button Components

### Primary Button
- **Style**: Filled background with Primary Blue (#2D5BFF)
- **Text**: White, Inter Medium, 16px
- **States**:
  - **Default**: 8px padding, 4px border radius
  - **Hover**: Darkened by 10%, subtle scale transform
  - **Active**: Darkened by 15%, scale down slightly
  - **Disabled**: 50% opacity, not clickable
- **Variants**: Small (padding 6px), Regular (padding 8px), Large (padding 10px)

### Secondary Button
- **Style**: Outlined with 1.5px border using Primary Blue (#2D5BFF)
- **Text**: Primary Blue, Inter Medium, 16px
- **States**: Similar to Primary with appropriate color adaptations
- **Usage**: Less important actions, alternatives, cancel options

### Text Button
- **Style**: No background or border, just text with optional icon
- **Text**: Primary Blue, Inter Medium, 16px, optional underline on hover
- **Usage**: Inline actions, navigation, menu items

## Card Components

### Project Card
- **Style**: White background, subtle shadow, 16px border radius
- **Content**:
  - Project thumbnail image (16:9 ratio)
  - Project title (H4, 24px, Playfair Display)
  - Category (Small text, 14px, Medium weight)
  - Brief description (optional, 16px)
- **States**:
  - **Default**: Subtle shadow (0 4px 6px rgba(0,0,0,0.1))
  - **Hover**: Elevated shadow, slight scale up
- **Animation**: Smooth transition on hover

### Content Card
- **Style**: White background, subtle shadow, 16px border radius
- **Content**: Flexible for different content types (text, images, mixed)
- **Padding**: 24px
- **Usage**: About page sections, service offerings, testimonials

## Navigation Components

### Main Navigation
- **Style**: Clean, minimal with subtle separators
- **Desktop**: Horizontal menu with hover underline effect
- **Mobile**: Collapsible hamburger menu
- **Active State**: Bold weight or underline indicator
- **Transition**: Smooth slide-in/out animations

### Footer Navigation
- **Style**: Grouped links with section headers
- **Organization**: Multiple columns on desktop, stacked on mobile
- **Social Icons**: Consistent size (24px), hover effects

## Form Components

### Input Field
- **Style**: 
  - Clean, minimal with bottom border or full border
  - Label animation (floating label on focus)
- **States**:
  - **Default**: Light border
  - **Focus**: Primary Blue border/highlight
  - **Error**: Error Red border with error message
  - **Disabled**: Gray background, reduced opacity
- **Validation**: Inline validation with appropriate feedback

### Contact Form
- **Layout**: Stacked fields with consistent spacing
- **Submit Button**: Primary button style
- **Feedback**: Success/error messages with appropriate colors
- **Features**: 
  - CAPTCHA integration
  - Form validation
  - Loading state during submission

## Interactive Elements

### Image Gallery
- **Style**: Clean, minimal frames
- **Navigation**: Arrows or dots for multi-image galleries
- **Features**:
  - Lightbox on click
  - Swipe support for mobile
  - Lazy loading for performance

### Progress Indicators
- **Style**: Clean, minimal with Primary Blue
- **Types**: 
  - Linear progress for page loading
  - Circular progress for actions
  - Skeleton loaders for content

### Tooltips
- **Style**: Subtle dark background with white text
- **Behavior**: Appear on hover, with slight delay
- **Animation**: Fade in/out with slight scaling

## Layout Components

### Section Containers
- **Style**: Consistent padding (80px vertical on desktop, 40px on mobile)
- **Variants**: 
  - Full width with contained content
  - Alternating background colors
  - Feature highlight with accent background

### Grid System
- **Layout**: Based on Chakra UI's responsive grid
- **Breakpoints**: 
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3+ columns
- **Spacing**: Consistent gap (24px default)

## Animation Guidelines

### Micro-interactions
- **Duration**: Quick (150-300ms)
- **Easing**: Ease-out for natural feeling
- **Types**:
  - Hover state changes
  - Button click effects
  - Form element focus

### Page Transitions
- **Duration**: Medium (300-500ms)
- **Types**:
  - Fade transitions between pages
  - Slide transitions for related content
  - Scale transitions for modals/overlays

### Scroll Animations
- **Behavior**: Reveal content as user scrolls
- **Performance**: Use CSS transforms and opacity for smooth performance
- **Timing**: Staggered for related elements

## Implementation Notes

All components will be implemented using Chakra UI with custom theme extensions. The component design system will leverage Chakra's built-in features:

- Style props for consistent spacing and styling
- Responsive array syntax for breakpoint adaptation
- Component composition for complex UI elements
- Reusable custom components for portfolio-specific elements

Each component will be built with accessibility in mind, ensuring proper focus states, keyboard navigation, and screen reader support. 
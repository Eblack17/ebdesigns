# EB Designs Portfolio - Grid & Layout Guidelines

This document outlines the grid system, layout principles, and spacing rules for the EB Designs portfolio website. Following these guidelines ensures consistent, responsive, and visually harmonious layouts across all pages and components.

## Grid System

The portfolio uses a flexible grid system based on Chakra UI's implementation of CSS Grid and Flexbox. This system provides a solid foundation for responsive layouts while allowing for creative expression.

### Base Grid

- **Columns**: 12-column grid system for desktop, adapting for smaller viewports
- **Gutters**: 24px (desktop), 16px (tablet), 12px (mobile)
- **Margin**: 64px (desktop), 32px (tablet), 16px (mobile)
- **Container Max Width**: 1280px centered on screen

```
┌────────────────────────────────────────────────────────────┐
│ MARGIN                                              MARGIN │
│ ┌────────────────────────────────────────────────────┐     │
│ │ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐ ┌───┐    │     │
│ │ │   │ │   │ │   │ │   │ │   │ │   │ │   │ │   │    │     │
│ │ │   │ │   │ │   │ │   │ │   │ │   │ │   │ │   │    │     │
│ │ │ 1 │ │ 2 │ │ 3 │ │ 4 │ │ 5 │ │ 6 │ │ 7 │ │ 8 │... │     │
│ │ │   │ │   │ │   │ │   │ │   │ │   │ │   │ │   │    │     │
│ │ │   │ │   │ │   │ │   │ │   │ │   │ │   │ │   │    │     │
│ │ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘ └───┘    │     │
│ │                                                    │     │
│ │                  CONTAINER (max 1280px)            │     │
│ └────────────────────────────────────────────────────┘     │
└────────────────────────────────────────────────────────────┘
                          VIEWPORT
```

### Responsive Grid Behavior

The grid adapts to different viewport sizes with the following adjustments:

| Breakpoint | Width | Columns | Gutter | Margin | Container |
|------------|-------|---------|--------|--------|-----------|
| xs (mobile)| <480px | 4 | 12px | 16px | 100% - 32px |
| sm (mobile landscape) | 480-767px | 4 | 16px | 16px | 100% - 32px |
| md (tablet) | 768-991px | 8 | 16px | 32px | 100% - 64px |
| lg (desktop) | 992-1279px | 12 | 24px | 64px | 100% - 128px |
| xl (large desktop) | ≥1280px | 12 | 24px | 64px | 1280px |

### Implementation with Chakra UI

```tsx
// Grid container example
<Box maxWidth="1280px" mx="auto" px={{ base: 4, md: 8, lg: 16 }}>
  <SimpleGrid 
    columns={{ base: 1, sm: 2, md: 3, lg: 4 }} 
    spacing={{ base: 3, md: 4, lg: 6 }}
  >
    {/* Grid items */}
  </SimpleGrid>
</Box>
```

## Spacing System

The spacing system ensures consistent rhythm throughout the design by using a set scale of values rather than arbitrary spacing.

### Spacing Scale

The spacing scale follows a pattern based on 4px increments, providing a wide range of options while maintaining consistency.

| Token | Value | Example Usage |
|-------|-------|---------------|
| space.0 | 0 | No margin or padding |
| space.1 | 0.25rem (4px) | Tight spacing between related elements |
| space.2 | 0.5rem (8px) | Default spacing for inline elements |
| space.3 | 0.75rem (12px) | Spacing between small components |
| space.4 | 1rem (16px) | Standard spacing unit, paragraph margins |
| space.5 | 1.5rem (24px) | Medium spacing between components |
| space.6 | 2rem (32px) | Large spacing between sections |
| space.8 | 3rem (48px) | Extra large spacing between major sections |
| space.10 | 4rem (64px) | Section padding on desktop |
| space.12 | 5rem (80px) | Hero section spacing |
| space.16 | 8rem (128px) | Maximum spacing for page sections |

### Spacing Usage Patterns

- **Component Internal Spacing**: Use smaller values (1-4) for spacing within components
- **Component External Spacing**: Use medium values (4-6) for spacing between components
- **Section Spacing**: Use larger values (6-16) for spacing between sections
- **Page Padding**: Use responsive spacing for page margins and padding

```tsx
// Example of spacing application
<VStack spacing="4">
  <Heading mb="2">Title</Heading>
  <Text>Description text</Text>
  <Button mt="4">Action</Button>
</VStack>
```

## Layout Principles

### 1. Hierarchy & Focus

- **Primary Content**: Positioned in the most prominent area (typically top-left quadrant)
- **Visual Weight**: Most important elements receive more visual weight through size, color, and spacing
- **Scanning Patterns**: Layouts respect F-pattern and Z-pattern reading flows
- **Focal Points**: Each page section has a clear focal point

### 2. Alignment & Consistency

- **Grid Alignment**: All elements align to the grid system
- **Edge Alignment**: Related elements share common alignment edges
- **Consistent Patterns**: Similar content uses consistent layout patterns
- **Predictable Locations**: Navigation, actions, and information follow predictable patterns

### 3. Breathing Room

- **White Space**: Generous white space improves readability and focus
- **Content Density**: Appropriate density based on content type and user goals
- **Padding Consistency**: Consistent padding within similar components
- **Responsive Spacing**: Space adjusts appropriately across viewport sizes

### 4. Responsive Layout Shifts

When adapting layouts for different viewport sizes, follow these principles:

- **Reflow, Don't Resize**: Content should reflow into new arrangements rather than simply scaling
- **Mobile-First Priority**: Ensure critical content is prioritized on smaller viewports
- **Progressive Enhancement**: Add visual complexity and features as viewport size increases
- **Maintain Readability**: Text columns should maintain 45-75 characters per line across all devices

## Page-Specific Layouts

### Homepage Layout

Desktop Layout:
```
┌──────────────────────────────────────────────────┐
│                                                  │
│                  HERO SECTION                    │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│               FEATURED PROJECTS                  │
│  ┌────────┐   ┌────────┐   ┌────────┐   ┌────────┐
│  │        │   │        │   │        │   │        │
│  │        │   │        │   │        │   │        │
│  └────────┘   └────────┘   └────────┘   └────────┘
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│                 SKILLS SECTION                   │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│                 CONTACT PREVIEW                  │
│                                                  │
└──────────────────────────────────────────────────┘
```

Mobile Layout:
```
┌─────────────────┐
│                 │
│  HERO SECTION   │
│                 │
├─────────────────┤
│                 │
│    FEATURED     │
│    PROJECTS     │
│  ┌───────────┐  │
│  │           │  │
│  │           │  │
│  └───────────┘  │
│  ┌───────────┐  │
│  │           │  │
│  │           │  │
│  └───────────┘  │
│                 │
├─────────────────┤
│                 │
│  SKILLS SECTION │
│                 │
├─────────────────┤
│                 │
│ CONTACT PREVIEW │
│                 │
└─────────────────┘
```

### Project Page Layout

Desktop Layout:
```
┌──────────────────────────────────────────────────┐
│                                                  │
│                  PROJECT HEADER                  │
│                                                  │
├──────────────────────────────────────────────────┤
│                      │                           │
│   PROJECT DETAILS    │      PROJECT IMAGE        │
│                      │                           │
├──────────────────────┴───────────────────────────┤
│                                                  │
│               PROJECT DESCRIPTION                │
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│                 IMAGE GALLERY                    │
│  ┌────────┐   ┌────────┐   ┌────────┐   ┌────────┐
│  │        │   │        │   │        │   │        │
│  │        │   │        │   │        │   │        │
│  └────────┘   └────────┘   └────────┘   └────────┘
│                                                  │
├──────────────────────────────────────────────────┤
│                                                  │
│               RELATED PROJECTS                   │
│                                                  │
└──────────────────────────────────────────────────┘
```

Mobile Layout:
```
┌─────────────────┐
│                 │
│ PROJECT HEADER  │
│                 │
├─────────────────┤
│                 │
│  PROJECT IMAGE  │
│                 │
├─────────────────┤
│                 │
│ PROJECT DETAILS │
│                 │
├─────────────────┤
│                 │
│    PROJECT      │
│  DESCRIPTION    │
│                 │
├─────────────────┤
│                 │
│  IMAGE GALLERY  │
│                 │
│  ┌───────────┐  │
│  │           │  │
│  │           │  │
│  └───────────┘  │
│                 │
├─────────────────┤
│                 │
│    RELATED      │
│    PROJECTS     │
│                 │
└─────────────────┘
```

## Component Layout Guidelines

### Card Components

- **Aspect Ratio**: Maintain consistent aspect ratios within card groups
- **Padding**: Internal padding of 16px (sm), 24px (md), 32px (lg)
- **Image Placement**: Images typically span full width at top of card
- **Text Alignment**: Left-aligned text for better readability
- **Action Placement**: Primary actions at bottom of card

```
┌────────────────────────┐
│                        │
│         IMAGE          │
│                        │
├────────────────────────┤
│                        │
│ TITLE                  │
│                        │
│ Description text that  │
│ may wrap to multiple   │
│ lines depending on     │
│ available space.       │
│                        │
│                        │
│ [ACTION]       META →  │
└────────────────────────┘
```

### Form Layout

- **Label Position**: Labels positioned above inputs
- **Field Spacing**: 24px between form fields
- **Group Alignment**: Related fields aligned horizontally when space permits
- **Action Alignment**: Primary actions aligned with inputs, typically right-aligned on desktop
- **Error Messages**: Positioned directly below the relevant input field

```
┌────────────────────────────────────────┐
│                                        │
│ LABEL                                  │
│ ┌──────────────────────────────────┐   │
│ │ Input field                      │   │
│ └──────────────────────────────────┘   │
│                                        │
│ LABEL                                  │
│ ┌──────────────────────────────────┐   │
│ │ Input field                      │   │
│ └──────────────────────────────────┘   │
│ Error message appears here             │
│                                        │
│ ┌─────────┐    ┌─────────────────┐     │
│ │ CANCEL  │    │ PRIMARY ACTION  │     │
│ └─────────┘    └─────────────────┘     │
│                                        │
└────────────────────────────────────────┘
```

## Layout Implementation Best Practices

### 1. Using the Grid System Effectively

- **Consistent Container Use**: Wrap page content in the standard container
- **Grid for Layout, Flex for Alignment**: Use Grid for page-level layouts and Flex for component-level alignments
- **Avoid Nesting Grids**: Keep grid nesting to a minimum to avoid complexity
- **Match Design Grid**: Ensure implementation matches the design grid system

### 2. Responsive Implementation

- **Mobile-First Approach**: Start with mobile layout and progressively enhance
- **Breakpoint Consistency**: Use standard breakpoints consistently
- **Test Intermediate Sizes**: Ensure layouts work at in-between breakpoint sizes
- **Viewport Testing**: Test all layouts across multiple viewport sizes and orientations

### 3. Accessibility Considerations

- **Logical Flow**: Ensure content has a logical flow in the document structure
- **Zoom Support**: Layouts should support browser zoom up to 200%
- **Content Reflow**: Content should reflow rather than requiring horizontal scrolling
- **Focus Order**: Keyboard focus should follow a logical order through the layout

### 4. Performance Optimization

- **Minimize Reflows**: Optimize layout changes to reduce reflows
- **Container Queries**: Consider container queries for component-specific layouts
- **Lazy Rendering**: Consider lazy rendering for off-screen content
- **Layout Shifts**: Minimize cumulative layout shift (CLS) by reserving space for dynamic content

## Implementation in Chakra UI

Chakra UI provides several components and utilities to implement these layout guidelines effectively:

### Grid Implementation

```tsx
// Example of responsive grid layout
<SimpleGrid
  columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
  spacing={{ base: 4, md: 6, lg: 8 }}
>
  {projects.map(project => (
    <ProjectCard key={project.id} project={project} />
  ))}
</SimpleGrid>
```

### Container Implementation

```tsx
// Example of container with responsive padding
<Container
  maxW="1280px"
  px={{ base: 4, md: 8, lg: 16 }}
  py={{ base: 8, md: 12, lg: 16 }}
>
  <Heading>Section Title</Heading>
  {/* Section content */}
</Container>
```

### Responsive Stack Implementation

```tsx
// Example of responsive stacking layout
<Stack
  direction={{ base: 'column', md: 'row' }}
  spacing={{ base: 4, md: 8 }}
  align={{ base: 'stretch', md: 'center' }}
>
  <Box flex="1">
    <Heading>Content Title</Heading>
    <Text>Description text</Text>
  </Box>
  <Box flex="1">
    <Image src="/images/content-image.jpg" alt="Description" />
  </Box>
</Stack>
```

### Responsive Spacing Implementation

```tsx
// Example of responsive spacing and padding
<Box 
  mt={{ base: 4, md: 8, lg: 12 }}
  p={{ base: 4, md: 6, lg: 8 }}
  borderRadius="md"
  bg="gray.50"
>
  <Heading mb={{ base: 2, md: 4 }}>Section Title</Heading>
  <Text>Content goes here</Text>
</Box>
```

## Key Layout Considerations for Common Page Elements

### Navigation

- **Desktop**: Horizontal navigation with logo at left
- **Mobile**: Collapsible menu with hamburger icon
- **Active States**: Clear visual indication of current page
- **Spacing**: Consistent spacing between navigation items

### Hero Sections

- **Height**: Approximately 80vh on desktop, adapted for mobile
- **Content Alignment**: Left-aligned content for better readability
- **Call to Action**: Prominent placement of primary CTA
- **Padding**: Responsive padding that increases with viewport size

### Section Headers

- **Consistent Spacing**: Maintain consistent spacing before and after headers
- **Alignment**: Typically left-aligned for better readability
- **Margins**: Bottom margin larger than top margin to connect with content

### Content Sections

- **Column Width**: Limit text columns to approximately 70 characters for readability
- **Visual Balance**: Create balance between text and visual elements
- **Section Spacing**: Clear delineation between different content sections
- **Progressive Disclosure**: Consider progressive disclosure for lengthy content

## Conclusion

Following these grid and layout guidelines will ensure that the EB Designs portfolio maintains consistent, well-structured, and responsive layouts across all pages. This consistency improves user experience, accessibility, and visual harmony, while allowing for creative expression within a coherent system. 
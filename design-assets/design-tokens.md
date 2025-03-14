# EB Designs Portfolio - Design Tokens

This document defines the fundamental design tokens used throughout the EB Designs portfolio website. Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. These tokens are used in place of hard-coded values to ensure flexibility, consistency, and maintainability.

## Spacing

Spacing tokens define the whitespace system used throughout the UI, including margins, padding, and layout spacing.

| Token Name | Pixel Value | rem Value | Description |
|------------|-------------|-----------|-------------|
| `space.0` | 0px | 0rem | No spacing |
| `space.1` | 4px | 0.25rem | Extra small spacing |
| `space.2` | 8px | 0.5rem | Small spacing |
| `space.3` | 12px | 0.75rem | Medium-small spacing |
| `space.4` | 16px | 1rem | Base spacing unit |
| `space.5` | 24px | 1.5rem | Medium spacing |
| `space.6` | 32px | 2rem | Medium-large spacing |
| `space.8` | 48px | 3rem | Large spacing |
| `space.10` | 64px | 4rem | Extra large spacing |
| `space.12` | 80px | 5rem | Extra extra large spacing |
| `space.16` | 128px | 8rem | Maximum spacing |

### Usage Patterns

- **Component Internal Spacing**: Use smaller tokens (`space.1` to `space.4`)
- **Component Margins**: Use medium tokens (`space.4` to `space.6`)
- **Section Spacing**: Use larger tokens (`space.8` to `space.16`)
- **Grid Gutters**: Generally use `space.4` to `space.6`

## Borders

Border tokens define the thickness, style, and radius of borders throughout the UI.

### Border Width

| Token Name | Value | Description |
|------------|-------|-------------|
| `borderWidths.none` | 0px | No border |
| `borderWidths.thin` | 1px | Thin border |
| `borderWidths.medium` | 2px | Medium border |
| `borderWidths.thick` | 4px | Thick border |

### Border Style

| Token Name | Value | Description |
|------------|-------|-------------|
| `borderStyles.solid` | solid | Solid border |
| `borderStyles.dashed` | dashed | Dashed border |
| `borderStyles.dotted` | dotted | Dotted border |

### Border Radius

| Token Name | Value | Description |
|------------|-------|-------------|
| `radii.none` | 0px | No radius (square corners) |
| `radii.sm` | 4px | Small radius |
| `radii.md` | 8px | Medium radius |
| `radii.lg` | 16px | Large radius |
| `radii.xl` | 24px | Extra large radius |
| `radii.full` | 9999px | Fully rounded (for pills, circles) |

## Shadows

Shadow tokens define the elevation system and depth perception in the UI.

| Token Name | Value | Description |
|------------|-------|-------------|
| `shadows.none` | none | No shadow |
| `shadows.xs` | 0 1px 2px rgba(0, 0, 0, 0.05) | Extra small shadow |
| `shadows.sm` | 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08) | Small shadow |
| `shadows.md` | 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06) | Medium shadow |
| `shadows.lg` | 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05) | Large shadow |
| `shadows.xl` | 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04) | Extra large shadow |
| `shadows.2xl` | 0 25px 50px rgba(0, 0, 0, 0.15) | 2x extra large shadow |
| `shadows.inner` | inset 0 2px 4px rgba(0, 0, 0, 0.06) | Inner shadow |

### Usage Patterns

- **Cards/Containers**: `shadows.sm` to `shadows.md`
- **Dropdowns/Popovers**: `shadows.md` to `shadows.lg`
- **Modals/Dialogs**: `shadows.lg` to `shadows.xl`
- **Hover States**: Generally increase shadow size by one level (e.g., `sm` to `md`)

## Z-Index

Z-index tokens define the stacking order of elements.

| Token Name | Value | Description |
|------------|-------|-------------|
| `zIndices.hide` | -1 | Hidden below other content |
| `zIndices.base` | 0 | Default stacking context |
| `zIndices.docked` | 10 | Docked elements (sticky header) |
| `zIndices.dropdown` | 1000 | Dropdown menus, popovers |
| `zIndices.sticky` | 1100 | Sticky elements |
| `zIndices.banner` | 1200 | Banner notifications |
| `zIndices.overlay` | 1300 | Overlays |
| `zIndices.modal` | 1400 | Modal dialogs |
| `zIndices.popover` | 1500 | Popovers, tooltips |
| `zIndices.toast` | 1700 | Toast notifications |
| `zIndices.tooltip` | 1800 | Tooltips |

## Transitions

Transition tokens define the duration and easing functions for animations.

### Duration

| Token Name | Value | Description |
|------------|-------|-------------|
| `transition.duration.ultra-fast` | 50ms | Ultra-fast transitions |
| `transition.duration.faster` | 100ms | Faster transitions |
| `transition.duration.fast` | 150ms | Fast transitions |
| `transition.duration.normal` | 200ms | Default transition speed |
| `transition.duration.slow` | 300ms | Slow transitions |
| `transition.duration.slower` | 400ms | Slower transitions |
| `transition.duration.ultra-slow` | 500ms | Ultra-slow transitions |

### Easing

| Token Name | Value | Description |
|------------|-------|-------------|
| `transition.easing.default` | cubic-bezier(0.4, 0, 0.2, 1) | Default easing for most transitions |
| `transition.easing.in` | cubic-bezier(0.4, 0, 1, 1) | Easing for elements entering the screen |
| `transition.easing.out` | cubic-bezier(0, 0, 0.2, 1) | Easing for elements leaving the screen |
| `transition.easing.in-out` | cubic-bezier(0.4, 0, 0.2, 1) | Smooth in-out easing |

### Common Transitions

| Token Name | Value | Description |
|------------|-------|-------------|
| `transition.common.button` | all 200ms cubic-bezier(0.4, 0, 0.2, 1) | Standard button transition |
| `transition.common.link` | color 200ms cubic-bezier(0.4, 0, 0.2, 1) | Standard link transition |
| `transition.common.card` | transform 200ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1) | Card hover transition |

## Opacity

Opacity tokens define the transparency levels used in the UI.

| Token Name | Value | Description |
|------------|-------|-------------|
| `opacity.0` | 0 | Completely transparent |
| `opacity.5` | 0.05 | Nearly transparent |
| `opacity.10` | 0.1 | Very light opacity |
| `opacity.20` | 0.2 | Light opacity |
| `opacity.30` | 0.3 | Medium-light opacity |
| `opacity.40` | 0.4 | Medium opacity |
| `opacity.50` | 0.5 | Half opacity |
| `opacity.60` | 0.6 | Medium-high opacity |
| `opacity.70` | 0.7 | High opacity |
| `opacity.80` | 0.8 | Very high opacity |
| `opacity.90` | 0.9 | Nearly opaque |
| `opacity.100` | 1 | Fully opaque |

## Size Scales

Size tokens define common widths and heights used throughout the UI.

### Container Widths

| Token Name | Value | Description |
|------------|-------|-------------|
| `sizes.container.sm` | 640px | Small container width |
| `sizes.container.md` | 768px | Medium container width |
| `sizes.container.lg` | 1024px | Large container width |
| `sizes.container.xl` | 1280px | Extra large container width |
| `sizes.container.2xl` | 1536px | 2x extra large container width |

### Icon Sizes

| Token Name | Value | Description |
|------------|-------|-------------|
| `sizes.icon.xs` | 16px | Extra small icons |
| `sizes.icon.sm` | 20px | Small icons |
| `sizes.icon.md` | 24px | Medium icons (default) |
| `sizes.icon.lg` | 32px | Large icons |
| `sizes.icon.xl` | 40px | Extra large icons |

### Button Sizes

| Token Name | Height | Padding X | Font Size | Description |
|------------|--------|-----------|-----------|-------------|
| `sizes.button.xs` | 24px | 10px | 12px | Extra small buttons |
| `sizes.button.sm` | 32px | 12px | 14px | Small buttons |
| `sizes.button.md` | 40px | 16px | 16px | Medium buttons (default) |
| `sizes.button.lg` | 48px | 20px | 18px | Large buttons |
| `sizes.button.xl` | 56px | 24px | 20px | Extra large buttons |

## Layout Tokens

Layout tokens define common grid and layout values.

### Grid

| Token Name | Value | Description |
|------------|-------|-------------|
| `grid.gutter.xs` | 8px | Extra small grid gutter |
| `grid.gutter.sm` | 16px | Small grid gutter |
| `grid.gutter.md` | 24px | Medium grid gutter |
| `grid.gutter.lg` | 32px | Large grid gutter |
| `grid.gutter.xl` | 48px | Extra large grid gutter |

### Breakpoints

| Token Name | Value | Description |
|------------|-------|-------------|
| `breakpoints.sm` | 640px | Small devices |
| `breakpoints.md` | 768px | Medium devices (tablets) |
| `breakpoints.lg` | 1024px | Large devices (desktops) |
| `breakpoints.xl` | 1280px | Extra large devices |
| `breakpoints.2xl` | 1536px | 2x extra large devices |

## CSS Implementation

```css
:root {
  /* Spacing */
  --space-0: 0;
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.5rem;
  --space-6: 2rem;
  --space-8: 3rem;
  --space-10: 4rem;
  --space-12: 5rem;
  --space-16: 8rem;
  
  /* Border Widths */
  --border-width-none: 0;
  --border-width-thin: 1px;
  --border-width-medium: 2px;
  --border-width-thick: 4px;
  
  /* Border Radius */
  --radius-none: 0;
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-none: none;
  --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);
  --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.15);
  --shadow-inner: inset 0 2px 4px rgba(0, 0, 0, 0.06);
  
  /* Z-indices */
  --z-hide: -1;
  --z-base: 0;
  --z-docked: 10;
  --z-dropdown: 1000;
  --z-sticky: 1100;
  --z-banner: 1200;
  --z-overlay: 1300;
  --z-modal: 1400;
  --z-popover: 1500;
  --z-toast: 1700;
  --z-tooltip: 1800;
  
  /* Transitions */
  --duration-ultra-fast: 50ms;
  --duration-faster: 100ms;
  --duration-fast: 150ms;
  --duration-normal: 200ms;
  --duration-slow: 300ms;
  --duration-slower: 400ms;
  --duration-ultra-slow: 500ms;
  
  --easing-default: cubic-bezier(0.4, 0, 0.2, 1);
  --easing-in: cubic-bezier(0.4, 0, 1, 1);
  --easing-out: cubic-bezier(0, 0, 0.2, 1);
  --easing-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Common transitions */
  --transition-button: all 200ms var(--easing-default);
  --transition-link: color 200ms var(--easing-default);
  --transition-card: transform 200ms var(--easing-default), box-shadow 200ms var(--easing-default);
  
  /* Opacities */
  --opacity-0: 0;
  --opacity-5: 0.05;
  --opacity-10: 0.1;
  --opacity-20: 0.2;
  --opacity-30: 0.3;
  --opacity-40: 0.4;
  --opacity-50: 0.5;
  --opacity-60: 0.6;
  --opacity-70: 0.7;
  --opacity-80: 0.8;
  --opacity-90: 0.9;
  --opacity-100: 1;
  
  /* Container Widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1536px;
  
  /* Icon Sizes */
  --icon-xs: 16px;
  --icon-sm: 20px;
  --icon-md: 24px;
  --icon-lg: 32px;
  --icon-xl: 40px;
  
  /* Grid */
  --grid-gutter-xs: 8px;
  --grid-gutter-sm: 16px;
  --grid-gutter-md: 24px;
  --grid-gutter-lg: 32px;
  --grid-gutter-xl: 48px;
  
  /* Breakpoints */
  /* Note: These can't be used in media queries directly as CSS variables,
     they're listed here for reference and for use in JavaScript */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

## Implementation in Chakra UI Theme

```tsx
// src/theme/foundations/tokens.ts
export const space = {
  0: "0",
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.5rem",
  6: "2rem",
  8: "3rem",
  10: "4rem",
  12: "5rem",
  16: "8rem",
};

export const borderWidths = {
  none: "0",
  thin: "1px",
  medium: "2px",
  thick: "4px",
};

export const radii = {
  none: "0",
  sm: "4px",
  md: "8px",
  lg: "16px",
  xl: "24px",
  full: "9999px",
};

export const shadows = {
  none: "none",
  xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.08)",
  md: "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px rgba(0, 0, 0, 0.15)",
  inner: "inset 0 2px 4px rgba(0, 0, 0, 0.06)",
};

export const zIndices = {
  hide: -1,
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  toast: 1700,
  tooltip: 1800,
};

export const transition = {
  duration: {
    "ultra-fast": "50ms",
    faster: "100ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "400ms",
    "ultra-slow": "500ms",
  },
  easing: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    in: "cubic-bezier(0.4, 0, 1, 1)",
    out: "cubic-bezier(0, 0, 0.2, 1)",
    "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  common: {
    button: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
    link: "color 200ms cubic-bezier(0.4, 0, 0.2, 1)",
    card: "transform 200ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 200ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

// src/theme/index.ts
import { extendTheme } from "@chakra-ui/react";
import { space, borderWidths, radii, shadows, zIndices, transition } from "./foundations/tokens";
import { colors } from "./foundations/colors";
import { typography } from "./foundations/typography";

const theme = extendTheme({
  space,
  borderWidths,
  radii,
  shadows,
  zIndices,
  transition,
  colors,
  ...typography,
  // Component-specific theme overrides would go here
});

export default theme;
```

## Usage Examples

### Spacing

```tsx
// Consistent spacing in a component
import { Box, Stack } from "@chakra-ui/react";

function ExampleComponent() {
  return (
    <Box p="4" mb="6">
      <Stack spacing="3">
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </Stack>
    </Box>
  );
}
```

### Borders & Shadows

```tsx
// Card component using border and shadow tokens
import { Box } from "@chakra-ui/react";

function Card({ children }) {
  return (
    <Box
      borderWidth="thin"
      borderStyle="solid"
      borderColor="gray.200"
      borderRadius="md"
      boxShadow="md"
      _hover={{ boxShadow: "lg" }}
      transition="common.card"
      p="5"
    >
      {children}
    </Box>
  );
}
```

### Z-Index

```tsx
// Modal component using z-index tokens
import { Box } from "@chakra-ui/react";

function ModalOverlay() {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      bg="rgba(0, 0, 0, 0.5)"
      zIndex="overlay"
    />
  );
}

function ModalContent({ children }) {
  return (
    <Box
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      bg="white"
      borderRadius="md"
      boxShadow="xl"
      zIndex="modal"
      p="6"
      maxWidth="container.md"
      width="90%"
    >
      {children}
    </Box>
  );
}
```

## Design Token Maintenance

Design tokens should be:

1. **Single Source of Truth**: Tokens are defined once and referenced throughout the codebase.
2. **Versioned**: Major changes to tokens should be versioned to avoid breaking changes.
3. **Documented**: All tokens should have clear descriptions and usage guidelines.
4. **Consistent**: Naming conventions should be consistent across token categories.
5. **Scalable**: The token system should be designed to accommodate future expansion.

### Adding New Tokens

When adding new tokens:

1. Determine if the token fits within an existing category
2. Follow the established naming convention
3. Update this documentation with the new token
4. Update the theme implementation
5. Create usage examples to demonstrate proper application

### Deprecating Tokens

When deprecating tokens:

1. Mark the token as deprecated in documentation
2. Provide migration guidance to alternative tokens
3. Consider maintaining the token through one release cycle
4. Monitor usage and assist with migration

## Resources

- [Chakra UI Theming Documentation](https://chakra-ui.com/docs/styled-system/theming/theme)
- [Design Tokens Community Group](https://www.designtokens.org/)
- [Figma Tokens Plugin](https://www.figma.com/community/plugin/843461159747178978/Tokens-Studio-for-Figma-(Figma-Tokens)) 
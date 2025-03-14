# EB Designs Portfolio - Typography System

## Font Families

### Primary Font: Inter
- **Usage**: Body text, UI elements, navigation, forms
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)

### Secondary Font: Playfair Display
- **Usage**: Main headings, hero text, featured quotes
- **Weights**: 700 (Bold), 900 (Black)

### Monospace Font: JetBrains Mono
- **Usage**: Code examples, technical specifications
- **Weights**: 400 (Regular), 700 (Bold)

## Type Scale

| Element | Size (px) | Size (rem) | Line Height | Font Weight | Font Family |
|---------|-----------|------------|-------------|-------------|-------------|
| Hero Title | 60px | 3.75rem | 1.1 | 900 | Playfair Display |
| H1 | 48px | 3rem | 1.1 | 700 | Playfair Display |
| H2 | 36px | 2.25rem | 1.2 | 700 | Playfair Display |
| H3 | 30px | 1.875rem | 1.3 | 600 | Inter |
| H4 | 24px | 1.5rem | 1.4 | 600 | Inter |
| H5 | 20px | 1.25rem | 1.5 | 600 | Inter |
| H6 | 18px | 1.125rem | 1.5 | 600 | Inter |
| Body | 16px | 1rem | 1.6 | 400 | Inter |
| Small | 14px | 0.875rem | 1.5 | 400 | Inter |
| Caption | 12px | 0.75rem | 1.5 | 400 | Inter |

## Responsive Typography

Typography scales down on smaller screens:

### Mobile (< 480px)
- Hero Title: 36px
- H1: 32px
- H2: 28px
- H3: 24px
- Body: 16px

### Tablet (768px - 991px)
- Hero Title: 48px
- H1: 40px
- H2: 32px
- Body: 16px

## Implementation in Chakra UI

```tsx
// Chakra UI theme extension
const typography = {
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Inter', sans-serif",
    mono: "'JetBrains Mono', monospace",
  },
  fontSizes: {
    xs: "0.75rem",     // 12px
    sm: "0.875rem",    // 14px
    md: "1rem",        // 16px
    lg: "1.125rem",    // 18px
    xl: "1.25rem",     // 20px
    "2xl": "1.5rem",   // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem",  // 36px
    "5xl": "3rem",     // 48px
    "6xl": "3.75rem",  // 60px
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.1,
    short: 1.2,
    base: 1.3,
    tall: 1.4,
    taller: 1.5,
    tallest: 1.6,
  }
}
``` 
# EB Designs Portfolio - Logo & Brand Guidelines

This document outlines the brand identity guidelines for the EB Designs portfolio website. It provides specifications for the logo, usage rules, and recommendations for maintaining brand consistency across all portfolio materials.

## Logo Specifications

### Primary Logo

The EB Designs primary logo consists of two elements:
- **Wordmark**: "EB Designs" in the primary font (Inter Bold)
- **Symbol**: A minimalist geometric emblem representing creativity and precision

### Logo Variations

| Version | Purpose | Background | File Format |
|---------|---------|------------|-------------|
| Full Color | Primary usage | Light backgrounds | SVG, PNG |
| Reversed | Dark backgrounds | Dark backgrounds | SVG, PNG |
| Monochrome | Single color applications | Any solid background | SVG |
| Symbol Only | Social media avatars, favicons | Any solid background | SVG, PNG, ICO |

### Logo Construction

- **Clear Space**: Maintain minimum clear space equal to the height of the "E" in "EB" on all sides of the logo
- **Minimum Size**: Do not reproduce the logo smaller than 30px in height for digital or 10mm in print
- **Proportions**: Do not alter the proportions, spacing, or arrangement of the logo elements

## Logo Usage Guidelines

### Correct Usage

- Always use the logo files provided in the assets library
- Position the logo prominently in the header of the portfolio website
- Use the appropriate version (full color, reversed, etc.) based on the background

### Incorrect Usage

- Do not rotate, distort, or alter the proportions of the logo
- Do not change the logo colors outside the approved color palette
- Do not add effects such as shadows, gradients, or outlines
- Do not place the logo on busy backgrounds that compromise legibility
- Do not remove or rearrange any elements of the logo

### Digital Usage

- **Website Header**: Full color logo, left-aligned
- **Favicon**: Symbol only, optimized for 16×16px, 32×32px, and 96×96px
- **Social Media**: Symbol only or full logo depending on platform requirements
- **Email Signature**: Full color logo with clear space preserved

## Color Application

The EB Designs brand uses a carefully selected color palette as defined in [color-palette.md](./color-palette.md).

### Primary Brand Colors

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Blue | `#2D5BFF` | Logo, primary buttons, accents |
| Dark Blue | `#1A365D` | Headers, navigation |
| Light Blue | `#EBF8FF` | Backgrounds, highlights |

### Color Usage in Brand Applications

- **Logo**: Primary Blue for symbol, Dark Blue for wordmark
- **Website**: 
  - Primary Blue for interactive elements, calls-to-action
  - Dark Blue for primary text, headers
  - Light Blue for section backgrounds
- **Documents**: Consistent application of brand colors in all documents
- **Social Media**: Consistent usage of brand colors in all social media assets

## Typography Application

EB Designs uses a carefully selected type system as defined in [typography.md](./typography.md).

### Brand Typography

| Font | Usage | Weight |
|------|-------|--------|
| Playfair Display | Logo wordmark, main headings | 700 (Bold), 900 (Black) |
| Inter | Body text, UI elements, secondary headings | 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold) |

### Typography Guidelines

- Use Playfair Display for major headings and feature text
- Use Inter for all body copy, navigation, and UI elements
- Maintain consistent type hierarchy throughout all materials
- Follow spacing and line height guidelines in the typography document

## Visual Language

### Design Elements

- **Grid System**: Align all elements to the defined grid system
- **Spacing**: Use consistent spacing as defined in design tokens
- **Borders & Dividers**: Use subtle borders and dividers sparingly
- **Shadows**: Apply consistent shadow styles for depth

### Photography Style

- High-quality, crisp images
- Clean, uncluttered compositions
- Natural lighting preferred
- Consistent color treatment
- Professional and modern appearance

### Illustration Style

- Clean, geometric style
- Limited color palette using brand colors
- Consistent stroke weights
- Minimal detail, focused on clarity

## Voice & Tone

### Brand Personality

- **Professional**: Demonstrates expertise and quality
- **Creative**: Shows innovative thinking and design solutions
- **Approachable**: Warm and personable, not corporate or stiff
- **Precise**: Clear, concise communication without unnecessary jargon

### Writing Guidelines

- Use clear, concise language
- Avoid technical jargon unless necessary
- Write in first person for personal portfolio sections
- Use active voice rather than passive
- Keep sentences and paragraphs brief and scannable

### Tone Examples

| Section | Tone | Example |
|---------|------|---------|
| About | Personal, warm | "I'm Emily, a designer passionate about creating intuitive digital experiences." |
| Project descriptions | Professional, descriptive | "This project focused on solving key navigation challenges for a complex e-commerce platform." |
| Contact | Approachable, inviting | "Have a project in mind? Let's discuss how we can work together." |

## Application Across Platforms

### Website

- Consistent header and footer design across all pages
- Standardized navigation pattern
- Cohesive project card design
- Unified form elements and interactive components

### Social Media

- Consistent avatar usage across platforms
- Coordinated cover/header images
- Templated post designs using brand colors and typography
- Unified hashtag strategy

### Presentation Materials

- Branded PowerPoint/Keynote template
- Consistent slide layouts
- Unified chart and graph styling
- Cohesive icon system

### Print Materials

- Standardized business card design
- Coordinated resume/CV styling
- Consistent portfolio print layout
- Unified document headers and footers

## Logo Files

### File Naming Convention

Logo files follow this naming convention:
`ebdesigns_logo_[version]_[color]_[size].[format]`

Examples:
- `ebdesigns_logo_primary_fullcolor_large.svg`
- `ebdesigns_logo_symbol_reversed_small.png`

### File Formats

- **SVG**: Primary format for web and print
- **PNG**: With transparency for digital applications
- **JPG**: For applications where transparency is not needed
- **ICO**: For favicon usage

### File Location

All brand assets are stored in:
`/public/images/brand/`

## Brand Maintenance

### Version Control

- All brand assets should be version-controlled
- Major design updates should be documented in change log
- Archive older versions of brand assets

### Quality Control

- Regular audit of brand application
- Check for consistency across all touchpoints
- Ensure all team members have access to current brand assets

### Brand Evolution

- Annual review of brand effectiveness
- Scheduled refresh cycles (every 2-3 years)
- Documented process for brand updates

## Implementation in Code

### CSS Variables

```css
:root {
  /* Brand Colors */
  --color-primary: #2D5BFF;
  --color-dark: #1A365D;
  --color-light: #EBF8FF;
  
  /* Typography */
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Inter', sans-serif;
}
```

### Chakra UI Theme Extension

```tsx
// Example of brand implementation in Chakra UI theme
const theme = extendTheme({
  colors: {
    brand: {
      primary: "#2D5BFF",
      dark: "#1A365D",
      light: "#EBF8FF",
    },
  },
  fonts: {
    heading: "'Playfair Display', serif",
    body: "'Inter', sans-serif",
  },
  components: {
    Button: {
      // Custom button styles using brand colors
      baseStyle: {
        fontWeight: "500",
        borderRadius: "4px",
      },
      variants: {
        primary: {
          bg: "brand.primary",
          color: "white",
        },
        secondary: {
          border: "2px solid",
          borderColor: "brand.primary",
          color: "brand.primary",
        },
      },
    },
    // Other component styles
  },
});
``` 
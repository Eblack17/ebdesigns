# EB Designs Portfolio - Color Palette

## Primary Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Primary Blue | `#2D5BFF` | rgb(45, 91, 255) | Primary brand color, call-to-action buttons, links |
| Dark Blue | `#1A365D` | rgb(26, 54, 93) | Headers, emphasis text, navigation |
| Light Blue | `#EBF8FF` | rgb(235, 248, 255) | Backgrounds, cards, subtle highlights |

## Secondary Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Accent Purple | `#805AD5` | rgb(128, 90, 213) | Accents, highlights, secondary actions |
| Accent Teal | `#38B2AC` | rgb(56, 178, 172) | Highlights, success states, category indicators |

## Neutral Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Dark Gray | `#1A202C` | rgb(26, 32, 44) | Body text, footers |
| Medium Gray | `#718096` | rgb(113, 128, 150) | Secondary text, icons, borders |
| Light Gray | `#E2E8F0` | rgb(226, 232, 240) | Subtle backgrounds, separators, disabled states |
| Off White | `#F7FAFC` | rgb(247, 250, 252) | Background, card backgrounds |
| Pure White | `#FFFFFF` | rgb(255, 255, 255) | Container backgrounds, text backgrounds |

## Feedback Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Success Green | `#38A169` | rgb(56, 161, 105) | Success messages, confirmations |
| Warning Yellow | `#DD6B20` | rgb(221, 107, 32) | Warnings, pending states |
| Error Red | `#E53E3E` | rgb(229, 62, 62) | Error messages, destructive actions |
| Info Blue | `#3182CE` | rgb(49, 130, 206) | Information messages, hints |

## Color Usage Guidelines

### Accessibility

- Maintain a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text
- Primary action buttons should use Primary Blue with white text
- Body text should use Dark Gray on light backgrounds for optimal readability

### Color Combinations

Recommended color combinations:
- Primary Blue + White (buttons, focused elements)
- Dark Blue + Light Blue (section headers)
- Dark Gray + Off White (body text)
- Accent Purple + White (secondary buttons, highlights)

### Dark Mode Adaptation

For dark mode, these colors will be adapted as follows:
- Off White becomes Dark Gray
- Dark Gray becomes Off White
- Light backgrounds will use a dark blue-gray (`#171923`)
- Accent colors will be brightened for better visibility
- White text will be slightly muted to reduce eye strain

## Implementation in Chakra UI

The colors will be integrated into the Chakra UI theme as follows:

```tsx
// Example theme extension in Chakra UI
const colors = {
  brand: {
    50: "#EBF8FF",  // Light Blue
    100: "#D6E4FF",
    200: "#ADC8FF",
    300: "#84A9FF",
    400: "#527CFF",
    500: "#2D5BFF",  // Primary Blue
    600: "#2348CC",
    700: "#1A365D",  // Dark Blue
    800: "#142952",
    900: "#0E1B38",
  },
  accent: {
    purple: "#805AD5",
    teal: "#38B2AC",
  },
  // For Chakra, we'll also use their built-in color scales
  // but customize specific values as needed
}
``` 
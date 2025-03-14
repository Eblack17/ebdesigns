# EB Designs Portfolio - Image Guidelines

This document outlines the standards and best practices for handling images throughout the portfolio website. Since this is a design portfolio, image quality and presentation are paramount while still maintaining optimal site performance.

## Image Quality Standards

### Resolution Requirements

| Image Type | Minimum Resolution | Optimal Resolution | Notes |
|------------|-------------------|-------------------|-------|
| Hero/Feature Images | 1920 × 1080px | 2560 × 1440px | Supports high-res displays |
| Project Thumbnails | 800 × 600px | 1200 × 900px | 4:3 aspect ratio |
| Project Detail Images | 1200 × 900px | 2000 × 1500px | Quality for zoom/detail view |
| Gallery Images | 1200 × 900px | 2000 × 1500px | Consistent sizing for galleries |
| About Page Photos | 800 × 800px | 1200 × 1200px | Square format recommended |
| Icons/UI Elements | 100 × 100px | SVG preferred | Vector format for sharpness |
| Logos | 300 × 150px | SVG preferred | Vector format when possible |

### Quality Settings

| Format | Quality Setting | Use Case |
|--------|----------------|----------|
| JPEG | 80-85% | Photographs, complex imagery |
| WebP | 75-80% | All raster images (with JPEG fallback) |
| PNG | N/A | Images requiring transparency |
| SVG | N/A | Icons, logos, simple illustrations |
| AVIF | 70-75% | Next-gen format for advanced browsers |

## File Size Guidelines

| Image Type | Target Size | Maximum Size |
|------------|------------|--------------|
| Hero Images | < 200KB | 400KB |
| Project Thumbnails | < 100KB | 150KB |
| Project Detail Images | < 250KB | 500KB |
| Gallery Images | < 200KB | 400KB |
| Profile Photos | < 100KB | 150KB |
| Icons/UI Elements | < 20KB | 50KB |

## Image Formats

### Format Selection Guide

| Format | Best For | Advantages | Disadvantages |
|--------|----------|------------|---------------|
| WebP | Primary format for all raster images | Superior compression, transparency support | Requires fallbacks for older browsers |
| JPEG | Photos, complex images | Universal support, good compression | No transparency, lossy compression |
| PNG | Images with transparency, screenshots | Lossless quality, transparency support | Larger file sizes than JPEG/WebP |
| SVG | Icons, logos, simple graphics | Scalable, tiny file size, animatable | Not suitable for photos, complex images |
| AVIF | Future-proofing high-quality images | Superior compression to WebP | Limited browser support currently |

### Format Strategy

1. **Primary Delivery**: WebP with appropriate fallbacks
2. **Vector Graphics**: SVG for all icons, logos, UI elements where possible
3. **Photography**: WebP with JPEG fallbacks
4. **Future Enhancement**: AVIF for supporting browsers through `<picture>` element

## Responsive Image Strategy

### Art Direction Approach

Use the `<picture>` element for art direction (different crops/images at different breakpoints):

```html
<picture>
  <source 
    media="(min-width: 992px)" 
    srcset="/images/project-hero-desktop.webp" 
    type="image/webp">
  <source 
    media="(min-width: 992px)" 
    srcset="/images/project-hero-desktop.jpg">
  <source 
    media="(min-width: 768px)" 
    srcset="/images/project-hero-tablet.webp" 
    type="image/webp">
  <source 
    media="(min-width: 768px)" 
    srcset="/images/project-hero-tablet.jpg">
  <source 
    srcset="/images/project-hero-mobile.webp" 
    type="image/webp">
  <img 
    src="/images/project-hero-mobile.jpg" 
    alt="Project Hero Image"
    loading="eager" 
    width="800" 
    height="600">
</picture>
```

### Resolution Switching

Use srcset for serving different resolutions of the same image:

```html
<img 
  src="/images/project-thumbnail.jpg" 
  srcset="/images/project-thumbnail-400.jpg 400w,
          /images/project-thumbnail-800.jpg 800w,
          /images/project-thumbnail-1200.jpg 1200w" 
  sizes="(min-width: 992px) 33vw,
         (min-width: 768px) 50vw,
         100vw" 
  alt="Project Thumbnail"
  loading="lazy" 
  width="400" 
  height="300">
```

### Breakpoint Reference

| Breakpoint | Width | Image Sizing |
|------------|-------|--------------|
| Mobile | < 480px | Full width (100vw) |
| Mobile Landscape | 480-767px | Full width (100vw) |
| Tablet | 768-991px | Half width (50vw) or full width |
| Desktop | 992-1279px | Third width (33vw) or half width |
| Large Desktop | ≥ 1280px | Quarter width (25vw) or custom |

## Image Optimization Workflow

### Optimization Process

1. **Source files**: Maintain high-quality originals (PSD, AI, etc.) in source repository
2. **Export baseline**: Export high-quality images in appropriate format
3. **Resize variations**: Create multiple sizes for responsive delivery
4. **Compression**: Optimize using appropriate tools
5. **Format conversion**: Generate WebP and AVIF versions
6. **Verification**: Check quality and file size against guidelines

### Recommended Tools

- **Squoosh**: Browser-based image compression tool
- **ImageOptim**: Desktop app for lossless optimization
- **Sharp**: Node.js library for image transformation pipeline
- **Next-gen formats**: `cwebp` and `avifenc` command-line tools

### Automation

Use Vite plugins to automate the image optimization process during build:

```js
// vite.config.js example
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
  plugins: [
    imagetools({
      defaultDirectives: new URLSearchParams([
        ['format', 'webp;avif;jpg'],
        ['quality', '75'],
        ['w', '400;800;1200'],
        ['as', 'picture']
      ])
    })
  ]
});
```

## Lazy Loading Strategy

### Implementation Approach

1. **Critical Images**: Load eagerly (no lazy loading)
   - Hero images
   - Above-the-fold content
   - Primary project thumbnails

2. **Non-Critical Images**: Use native lazy loading
   - Below-the-fold content
   - Gallery images
   - Secondary project images

3. **Technique**: Use both native and JS fallback
   ```html
   <img 
     src="image.jpg" 
     loading="lazy" 
     class="lazyload" 
     data-src="image.jpg" 
     alt="Description">
   ```

### Loading Priority

1. **High Priority**: `loading="eager"` or no attribute
   - Hero images, featured project images

2. **Medium Priority**: `loading="lazy"` with preload for near-viewport images
   - Images just below the fold

3. **Low Priority**: `loading="lazy"`
   - Deep-page content, secondary images

## Image Accessibility

### Requirements

1. **Alt text**: All images must have appropriate alt text
   - Descriptive for informational images
   - Empty (`alt=""`) for decorative images

2. **Context**: No critical information conveyed only through images

3. **Color contrast**: Ensure sufficient contrast for text overlays

4. **Image text**: Minimize text in images, use actual text elements when possible

### Alt Text Guidelines

| Image Type | Alt Text Approach | Example |
|------------|-------------------|---------|
| Portfolio Work | Describe project, style, key elements | "Minimalist branding design for Acme Corp featuring geometric logo" |
| UI/UX Work | Describe interface purpose and key elements | "Mobile app dashboard showing user statistics with colorful data visualization" |
| Decorative | Empty alt attribute | `alt=""` |
| Logos | Company/brand name | "EB Designs logo" |
| Icons | Function of the icon | "Search icon" or empty if accompanied by text |

## Image Content Guidelines

### Project Images

1. **Consistency**:
   - Maintain consistent aspect ratios within project categories
   - Use consistent framing and presentation style

2. **Context**:
   - Show work in context where appropriate (mockups, device frames)
   - Include before/after comparisons for redesign projects

3. **Detail**:
   - Include close-up shots of important design details
   - Use appropriate cropping to highlight key elements

### Mockup Standards

1. **Device Mockups**:
   - Use current device frames for UI/UX work
   - Present responsive designs across multiple devices

2. **Print Mockups**:
   - Use realistic mockups for print work
   - Show multiple angles and contexts

3. **Branding Mockups**:
   - Demonstrate brand application across various touchpoints
   - Include mockups of real-world applications

## Implementation in React/TypeScript

### Image Component Example

```tsx
// src/components/common/Image/Image.tsx
import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

interface ImageProps extends Omit<BoxProps, 'as'> {
  src: string;
  webpSrc?: string;
  avifSrc?: string;
  alt: string;
  width: number;
  height: number;
  lazy?: boolean;
  sizes?: string;
  srcSet?: string;
  objectFit?: string;
}

export const Image: React.FC<ImageProps> = ({
  src,
  webpSrc,
  avifSrc,
  alt,
  width,
  height,
  lazy = true,
  sizes,
  srcSet,
  objectFit = 'cover',
  ...rest
}) => {
  if (webpSrc || avifSrc) {
    return (
      <Box as="picture" {...rest}>
        {avifSrc && <source srcSet={avifSrc} type="image/avif" sizes={sizes} />}
        {webpSrc && <source srcSet={webpSrc} type="image/webp" sizes={sizes} />}
        <Box
          as="img"
          src={src}
          alt={alt}
          loading={lazy ? 'lazy' : 'eager'}
          width={width}
          height={height}
          objectFit={objectFit}
          srcSet={srcSet}
          sizes={sizes}
        />
      </Box>
    );
  }

  return (
    <Box
      as="img"
      src={src}
      alt={alt}
      loading={lazy ? 'lazy' : 'eager'}
      width={width}
      height={height}
      objectFit={objectFit}
      srcSet={srcSet}
      sizes={sizes}
      {...rest}
    />
  );
};
```

### Usage Example

```tsx
// Usage example
<Image
  src="/images/project-thumbnail.jpg"
  webpSrc="/images/project-thumbnail.webp"
  avifSrc="/images/project-thumbnail.avif"
  srcSet="/images/project-thumbnail-400.jpg 400w, /images/project-thumbnail-800.jpg 800w"
  sizes="(min-width: 992px) 33vw, (min-width: 768px) 50vw, 100vw"
  alt="Project thumbnail showing mobile app interface design"
  width={400}
  height={300}
  lazy={true}
  borderRadius="md"
/>
``` 
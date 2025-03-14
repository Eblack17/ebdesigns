# EB Designs Portfolio - Image & Media Guidelines

This document outlines the specifications and best practices for all image and media assets used in the EB Designs portfolio website. Adherence to these guidelines ensures visual consistency, optimal performance, and accessibility compliance.

## Image Types & Purposes

| Image Type | Purpose | Format | Examples |
|------------|---------|--------|----------|
| **Hero Images** | Large feature images for home and section headers | JPG/WebP | Homepage banner, project headers |
| **Project Thumbnails** | Showcasing projects in grid layouts | JPG/WebP | Portfolio grid items, related projects |
| **Gallery Images** | Multiple detailed images in project pages | JPG/WebP | Project process shots, final deliverables |
| **Icon Graphics** | UI elements and small illustrations | SVG | Service icons, social media links |
| **Profile Photos** | Personal/team imagery | JPG/WebP | About section, team members |
| **Logos** | Brand identifiers | SVG | Personal logo, client logos, technologies |
| **Background Textures** | Subtle patterns for visual interest | SVG/WebP | Section backgrounds, dividers |
| **Video Content** | Animated demonstrations | MP4/WebM | Project walkthroughs, process videos |

## Image Specifications

### Resolution & Dimensions

| Image Use | Dimensions (px) | Aspect Ratio | Notes |
|-----------|----------------|--------------|-------|
| Hero - Desktop | 1920×1080 | 16:9 | Allow for cropping on ultrawide screens |
| Hero - Mobile | 750×1200 | 5:8 | Focus on central elements |
| Project Thumbnails | 600×450 | 4:3 | Consistent size for grid layouts |
| Gallery Images | 1200×900 | 4:3 | Maintain consistency within projects |
| Profile Photos | 500×500 | 1:1 | Square format for easy layout |
| Icon Graphics | 64×64 | 1:1 | Maintain even padding around icons |
| Client Logos | 200×100 | 2:1 | Flexible width with consistent height |
| Blog Post Images | 1200×630 | 1.91:1 | Optimized for social sharing |

### File Formats

| Format | Use Cases | Benefits | Limitations |
|--------|-----------|----------|-------------|
| **SVG** | Icons, logos, simple illustrations | Scalable, small file size, can be animated | Not suitable for complex images |
| **WebP** | Photos, complex images with transparency | Superior compression, supports transparency | Requires fallback for older browsers |
| **JPG** | Photos, complex images without transparency | Widely supported, good compression | No transparency support |
| **PNG** | UI elements requiring transparency | Lossless, transparency support | Larger file sizes than WebP |
| **MP4** | Standard video content | Wide browser support, good compression | Larger than WebM |
| **WebM** | Modern video content | Better compression than MP4 | Limited support in Safari |

### Image Quality

| Image Type | JPG/WebP Quality | Filesize Target | Notes |
|------------|-----------------|----------------|-------|
| Hero Images | 80-85% | <350KB | Balance quality and load time |
| Thumbnails | 75-80% | <100KB | Prioritize load time |
| Gallery Images | 85-90% | <250KB | Higher quality for detailed viewing |
| Background Images | 70-75% | <150KB | Can be lower quality as often overlaid |
| Profile Photos | 85-90% | <120KB | Maintain facial detail |

## Responsive Images

Implement responsive images using:
1. HTML `srcset` and `sizes` attributes
2. CSS `@media` queries for background images
3. Appropriately sized images for different viewports

### Example Implementation

```html
<!-- Responsive image example -->
<img 
  src="/images/projects/project-thumbnail-600.jpg" 
  srcset="/images/projects/project-thumbnail-600.jpg 600w,
          /images/projects/project-thumbnail-900.jpg 900w, 
          /images/projects/project-thumbnail-1200.jpg 1200w"
  sizes="(max-width: 640px) 100vw, 
         (max-width: 1024px) 50vw, 
         33vw"
  alt="Project: E-commerce redesign for Fashion Brand"
  loading="lazy"
  width="600" 
  height="450"
/>
```

```css
/* Responsive background image example */
.hero-section {
  background-image: url('/images/hero-mobile.jpg');
  
  @media (min-width: 768px) {
    background-image: url('/images/hero-tablet.jpg');
  }
  
  @media (min-width: 1200px) {
    background-image: url('/images/hero-desktop.jpg');
  }
}
```

## Image Optimization

### Optimization Workflow

1. **Resize** to the appropriate dimensions
2. **Compress** using appropriate tools
3. **Convert** to modern formats (WebP with fallbacks)
4. **Lazy load** non-critical images
5. **Implement** responsive image techniques

### Optimization Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| [Sharp](https://sharp.pixelplumbing.com/) | Node.js image processing | Automated build-time optimization |
| [ImageOptim](https://imageoptim.com/) | Lossless compression | Pre-commit optimization for jpg/png |
| [SVGO](https://github.com/svg/svgo) | SVG optimization | Remove unnecessary metadata |
| [Squoosh](https://squoosh.app/) | WebP conversion | Interactive optimization |
| [TinyPNG](https://tinypng.com/) | PNG compression | Smart lossy compression for PNGs |

### Implementation with Next.js Image Component

```tsx
// Example using Next.js Image component
import Image from 'next/image';

export function ProjectThumbnail({ project }) {
  return (
    <div className="project-card">
      <Image
        src={project.thumbnailUrl}
        alt={project.title}
        width={600}
        height={450}
        placeholder="blur"
        blurDataURL={project.blurDataUrl}
        priority={project.featured}
      />
      <h3>{project.title}</h3>
    </div>
  );
}
```

## Accessibility Requirements

### Alt Text Guidelines

| Image Type | Alt Text Approach | Example |
|------------|-------------------|---------|
| Decorative | Empty alt (`alt=""`) | Background textures, dividers |
| Informative | Brief description | `alt="Dashboard interface showing user statistics"` |
| Functional | Describe purpose | `alt="Search button"` |
| Complex | Link to longer description | `alt="Project flowchart (see description below)"` |
| Text in image | Include all text | `alt="Poster: Design Conference 2023 - June 10-12"` |

### Focus on Context

- Alt text should fit the context of the surrounding content
- Don't include "image of" or "picture of" (screen readers announce this already)
- Be concise but descriptive (generally 125 characters or less)
- For complex images, provide extended descriptions in the surrounding text

### ARIA Implementation for Complex Media

```html
<!-- Complex media with extended description -->
<figure>
  <img 
    src="/images/design-process.jpg" 
    alt="Design process workflow diagram" 
    aria-describedby="design-process-description"
  />
  <figcaption id="design-process-description">
    Five-stage iterative design process showing research, ideation, 
    prototyping, testing, and implementation with feedback loops between stages.
  </figcaption>
</figure>
```

## Video Guidelines

### Video Specifications

| Use Case | Format | Resolution | Frame Rate | Bitrate | Max Duration |
|----------|--------|------------|------------|---------|--------------|
| Project Showcase | MP4/WebM | 1080p | 30fps | 5-8 Mbps | 2-3 minutes |
| UI Animations | MP4/WebM | 720p | 30fps | 3-5 Mbps | 15-30 seconds |
| Background Video | MP4/WebM | 720p | 24fps | 2-4 Mbps | 15-30 seconds |
| Tutorial Content | MP4/WebM | 1080p | 30fps | 5-8 Mbps | 5-10 minutes |

### Video Accessibility

- Always include captions (preferably closed captions)
- Provide transcript for longer videos
- Ensure play/pause controls are accessible
- Add appropriate poster image
- Avoid autoplay or implement with caution (muted and with controls)

### HTML Implementation

```html
<!-- Accessible video implementation -->
<video 
  controls
  preload="metadata"
  poster="/images/video-thumbnail.jpg"
  width="1280" 
  height="720"
>
  <source src="/videos/project-showcase.webm" type="video/webm">
  <source src="/videos/project-showcase.mp4" type="video/mp4">
  <track 
    kind="captions" 
    label="English" 
    src="/videos/captions-en.vtt" 
    srclang="en" 
    default
  >
  <p>
    Your browser does not support HTML video. 
    <a href="/videos/project-showcase.mp4">Download the video</a> instead.
  </p>
</video>
```

### React Implementation

```tsx
// Accessible video component in React
function ProjectVideo({ src, posterImage, captionSrc, title }) {
  return (
    <div className="video-container">
      <h3 id="video-title">{title}</h3>
      <video
        controls
        preload="metadata"
        poster={posterImage}
        aria-labelledby="video-title"
        width="1280"
        height="720"
      >
        <source src={`${src}.webm`} type="video/webm" />
        <source src={`${src}.mp4`} type="video/mp4" />
        <track
          kind="captions"
          label="English"
          src={captionSrc}
          srcLang="en"
          default
        />
        <p>
          Your browser does not support HTML video.
          <a href={`${src}.mp4`}>Download the video</a> instead.
        </p>
      </video>
    </div>
  );
}
```

## Image Content Guidelines

### Project Images

- Use consistent framing and composition across project images
- Showcase work in context (e.g., mockups in realistic environments)
- Highlight key details with closeup shots
- Include process work alongside final deliverables
- Maintain consistent lighting and color treatment

### Photography Style

- Clean, well-lit imagery
- Natural, authentic feeling
- Consistent color grading that matches brand colors
- Deliberate composition with clear focal points
- High-quality, professional appearance

### Illustration Style

- Consistent illustration style that complements brand identity
- Limited, focused color palette using brand colors
- Coherent line weights and stylistic choices
- Scalable vector format where possible

## File Organization & Naming

### Directory Structure

```
/public
  /images
    /projects
      /[project-slug]
        /thumbnails
        /gallery
        /process
    /team
    /blog
    /icons
    /backgrounds
  /videos
    /projects
    /tutorials
```

### Naming Conventions

Format: `[content-type]-[descriptor]-[size].[format]`

Examples:
- `project-ecommerce-thumbnail-600.jpg`
- `hero-about-1920.webp`
- `icon-arrow-24.svg`
- `bg-pattern-light.svg`
- `profile-emily-500.jpg`

## Implementation in Chakra UI

```tsx
// Example image implementation with Chakra UI
import { Box, Image } from "@chakra-ui/react";

function ProjectImage({ src, alt, width, height }) {
  return (
    <Box
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      transition="transform 0.3s ease"
      _hover={{ transform: "scale(1.02)" }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        objectFit="cover"
        loading="lazy"
      />
    </Box>
  );
}
```

## Performance Considerations

### LCP Optimization (Largest Contentful Paint)

- Preload hero images critical for LCP
- Inline critical CSS for above-the-fold images
- Use priority loading for key images
- Implement AVIF/WebP formats with appropriate fallbacks
- Consider LQIP (Low Quality Image Placeholders) technique

```html
<!-- Preload critical images -->
<link rel="preload" as="image" href="/images/hero-1920.webp" media="(min-width: 1200px)">
<link rel="preload" as="image" href="/images/hero-768.webp" media="(max-width: 1199px)">
```

### Image Loading Strategies

| Strategy | Usage | Implementation |
|----------|-------|----------------|
| Eager Loading | Hero images, critical content | `loading="eager"` or Next.js `priority` |
| Lazy Loading | Below-fold content | `loading="lazy"` |
| LQIP | Complex images | Blur placeholder technique |
| Progressive Loading | Large detailed images | Progressive JPEGs or similar |

## Content Creation Resources

### Photography Resources

- Use consistent stock photo sources
- Prefer original photography where possible
- Recommended stock photo sources:
  - [Unsplash](https://unsplash.com/) (free, attribution appreciated)
  - [Pexels](https://www.pexels.com/) (free, diverse options)
  - [Adobe Stock](https://stock.adobe.com/) (premium, consistent style)

### Icon Libraries

- Primary usage: Custom SVG icons matching brand style
- Supplementary sources:
  - [Heroicons](https://heroicons.com/) (open source, minimal)
  - [Phosphor Icons](https://phosphoricons.com/) (open source, flexible)
  - [Font Awesome Pro](https://fontawesome.com/) (if licensed)

## Visual Quality Checklist

Before publishing any image or media asset, ensure:

- [ ] Proper sizing for intended use case
- [ ] Appropriate file format and compression
- [ ] Responsive delivery implementation
- [ ] Alternative text for accessibility
- [ ] Consistent with brand style
- [ ] Properly optimized for web performance
- [ ] Copyright and usage rights secured
- [ ] Fallbacks for unsupported formats
- [ ] Tested across target devices

## Appendix: Image Audit Tool

Use the following command to audit image sizes:

```bash
# Find all images over 300KB
find public/images -type f \( -name "*.jpg" -o -name "*.png" -o -name "*.webp" \) -size +300k | xargs ls -lh
``` 
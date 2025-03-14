# EB Designs Portfolio - SEO & Metadata Guidelines

This document outlines the search engine optimization (SEO) and metadata guidelines for the EB Designs portfolio website. Following these guidelines will improve the site's visibility in search engines, enhance social sharing, and provide a better user experience.

## Meta Tags & Title Structure

### Page Titles

Page titles are one of the most important on-page SEO elements. They should be:

- **Unique**: Each page should have a distinct title
- **Concise**: 50-60 characters maximum (to avoid truncation in search results)
- **Descriptive**: Clearly describe the page content
- **Front-loaded**: Place important keywords at the beginning
- **Brand-inclusive**: Include the brand name, typically at the end

**Title Pattern for Pages:**
`{Page-Specific Title} | EB Designs`

**Examples:**
- Home: `UI/UX Designer & Web Developer | EB Designs`
- About: `About Emily Baxter - UI/UX Designer | EB Designs`
- Contact: `Get in Touch - UI/UX Design Services | EB Designs`
- Project: `{Project Name} - {Project Type} Case Study | EB Designs`

### Meta Descriptions

Meta descriptions provide a summary of the page content. They should be:

- **Compelling**: Entice users to click through from search results
- **Informative**: Clearly summarize the page content
- **Appropriate length**: 150-160 characters maximum
- **Keyword-rich**: Include relevant keywords naturally
- **Call-to-action**: When appropriate, include a call to action

**Meta Description Pattern for Pages:**
`{Brief description of page content, including key terms and a call to action when appropriate.}`

**Examples:**
- Home: `Emily Baxter is a UI/UX designer specializing in creating intuitive, accessible digital experiences for startups and established brands. View portfolio and services.`
- About: `Learn about Emily Baxter's expertise in UI/UX design, web development, and digital product strategy. Over 5 years of experience creating user-centered solutions.`
- Project: `Explore how EB Designs helped {Client Name} solve {Problem} through strategic UX design and development, resulting in {Key Result}. View the full case study.`

### Implementation in Next.js

```tsx
// pages/index.tsx (Home page example)
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>UI/UX Designer & Web Developer | EB Designs</title>
        <meta 
          name="description" 
          content="Emily Baxter is a UI/UX designer specializing in creating intuitive, accessible digital experiences for startups and established brands. View portfolio and services."
        />
        {/* Other meta tags */}
      </Head>
      {/* Page content */}
    </>
  );
}
```

## Social Media Metadata

### Open Graph Protocol

Open Graph (OG) tags optimize how content appears when shared on social media platforms like Facebook and LinkedIn.

**Required OG Tags:**

```html
<meta property="og:title" content="Page Title" />
<meta property="og:description" content="Page description" />
<meta property="og:image" content="https://ebdesigns.com/og-image.jpg" />
<meta property="og:url" content="https://ebdesigns.com/page-url" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="EB Designs" />
```

### Twitter Card Metadata

Twitter Card tags determine how content appears when shared on Twitter.

**Required Twitter Card Tags:**

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Page Title" />
<meta name="twitter:description" content="Page description" />
<meta name="twitter:image" content="https://ebdesigns.com/twitter-image.jpg" />
<meta name="twitter:creator" content="@emilybaxter" />
<meta name="twitter:site" content="@ebdesigns" />
```

### Social Image Guidelines

Create consistent, high-quality images for social sharing:

| Platform | Dimensions | Format | Max Size |
|----------|------------|--------|----------|
| Facebook/LinkedIn | 1200×630px | JPG, PNG | 8MB |
| Twitter | 1200×600px | JPG, PNG | 5MB |
| General OG Image | 1200×630px | JPG, PNG | 8MB |

**Social Image Content Guidelines:**
- Include the EB Designs logo
- For project pages, include a project visual
- Use consistent branding elements
- Ensure text is readable at small sizes
- Keep design simple and high-contrast

### Implementation in Next.js

```tsx
// components/SEO.tsx
interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical = "https://ebdesigns.com",
  ogImage = "https://ebdesigns.com/images/og-default.jpg",
  ogType = "website",
}) => {
  const pageTitle = `${title} | EB Designs`;
  
  return (
    <Head>
      {/* Standard metadata */}
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="EB Designs" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@emilybaxter" />
      <meta name="twitter:site" content="@ebdesigns" />
    </Head>
  );
};
```

## Structured Data

Structured data helps search engines understand the context of your content and can enhance search results with rich snippets.

### Person Schema

Add structured data about Emily Baxter using the Person schema:

```jsx
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Emily Baxter",
  "jobTitle": "UI/UX Designer & Web Developer",
  "url": "https://ebdesigns.com",
  "sameAs": [
    "https://linkedin.com/in/emilybaxter",
    "https://twitter.com/emilybaxter",
    "https://dribbble.com/emilybaxter"
  ],
  "image": "https://ebdesigns.com/images/emily-baxter.jpg",
  "description": "UI/UX designer specializing in creating intuitive, accessible digital experiences."
}
</script>
```

### Portfolio Project Schema

For each portfolio project, use the CreativeWork schema:

```jsx
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Project Title",
  "creator": {
    "@type": "Person",
    "name": "Emily Baxter"
  },
  "description": "Project description",
  "image": "https://ebdesigns.com/projects/project-name/thumbnail.jpg",
  "datePublished": "2023-03-15",
  "keywords": "UX Design, UI Design, Web Development",
  "genre": "Web Design",
  "url": "https://ebdesigns.com/projects/project-name"
}
</script>
```

### Website Schema

Add overall website schema:

```jsx
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "EB Designs",
  "url": "https://ebdesigns.com",
  "description": "UI/UX design portfolio of Emily Baxter",
  "author": {
    "@type": "Person",
    "name": "Emily Baxter"
  }
}
</script>
```

## URL Structure

Implement a clean, hierarchical URL structure:

- **Homepage**: `https://ebdesigns.com/`
- **Main sections**: `https://ebdesigns.com/about/`, `https://ebdesigns.com/projects/`, `https://ebdesigns.com/contact/`
- **Projects**: `https://ebdesigns.com/projects/project-name/`
- **Categories**: `https://ebdesigns.com/projects/category/`

**URL Guidelines:**
- Use lowercase letters
- Separate words with hyphens (-), not underscores (_)
- Keep URLs short and descriptive
- Avoid unnecessary parameters
- Use clean, semantic slugs for projects (e.g., "brand-redesign" not "project-123")

## Image SEO

Optimize images for search engines and user experience:

1. **Descriptive Filenames**:
   - Use descriptive, keyword-rich filenames
   - Example: `eb-designs-ecommerce-dashboard-ui.jpg` (not `IMG1234.jpg`)

2. **Alt Text**:
   - Provide descriptive alt text for all images
   - Include relevant keywords naturally
   - Keep alt text concise (125 characters maximum)
   - Example: `Dashboard UI design for BeautyBox e-commerce platform showing sales analytics`

3. **Image Optimization**:
   - Compress images for fast loading
   - Use appropriate formats (WebP with JPEG/PNG fallbacks)
   - Implement responsive images using `srcset` and `sizes`
   - Lazy load images below the fold

4. **Image Structured Data**:
   - Add structured data for important images, especially portfolio pieces
   - Use ImageObject schema where appropriate

## Content SEO Guidelines

### Heading Structure

Implement a proper heading hierarchy:

- Use only one H1 per page, containing the primary page title
- Use H2 headings for major sections
- Use H3-H6 for subsections as needed
- Include relevant keywords in headings
- Maintain a logical heading hierarchy (don't skip levels)

Example heading structure for a project page:

```
H1: Project Title
H2: Project Overview
H2: The Challenge
H2: The Solution
  H3: Research & Strategy
  H3: Design Process
  H3: Development
H2: Results & Outcomes
H2: Related Projects
```

### Content Optimization

Create SEO-friendly content:

- Target primary keywords in the first 100 words
- Use related terms and semantic keywords throughout
- Break text into scannable sections with descriptive subheadings
- Include bulleted or numbered lists where appropriate
- Aim for at least 300 words of content on key pages
- Keep paragraphs short (3-4 sentences maximum)
- Link naturally to related content (internal linking)
- Include relevant external links where appropriate

## Technical SEO

### Canonical Tags

Use canonical tags to prevent duplicate content issues:

```html
<link rel="canonical" href="https://ebdesigns.com/current-page/" />
```

### Pagination

For paginated content, implement proper pagination tags:

```html
<link rel="prev" href="https://ebdesigns.com/projects/page/1/" />
<link rel="next" href="https://ebdesigns.com/projects/page/3/" />
```

### XML Sitemap

Create and maintain an XML sitemap:

- Include all important pages
- Update when new content is added
- Submit to Google Search Console
- Reference in robots.txt

Example sitemap structure:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://ebdesigns.com/</loc>
    <lastmod>2023-03-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://ebdesigns.com/about/</loc>
    <lastmod>2023-03-10</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  <!-- Additional URLs -->
</urlset>
```

### Robots.txt

Create a robots.txt file to guide search engine crawlers:

```
User-agent: *
Allow: /

Sitemap: https://ebdesigns.com/sitemap.xml

# Disallow admin or utility pages
Disallow: /admin/
Disallow: /includes/
Disallow: /temp/
```

### Hreflang Tags

If implementing multiple languages in the future, use hreflang tags:

```html
<link rel="alternate" hreflang="en" href="https://ebdesigns.com/" />
<link rel="alternate" hreflang="es" href="https://ebdesigns.com/es/" />
```

## Performance SEO

Performance affects both user experience and search rankings:

### Core Web Vitals Optimization

Focus on optimizing Core Web Vitals:

- **LCP (Largest Contentful Paint)**: <2.5s
  - Optimize critical rendering path
  - Defer non-critical resources
  - Preload key resources
  
- **FID (First Input Delay)**: <100ms
  - Minimize JavaScript execution time
  - Break up long tasks
  - Optimize event handlers
  
- **CLS (Cumulative Layout Shift)**: <0.1
  - Specify image dimensions
  - Reserve space for dynamic content
  - Avoid inserting content above existing content

### Mobile Optimization

Ensure the site is fully optimized for mobile devices:

- Implement responsive design
- Ensure tap targets are appropriately sized (minimum 48×48px)
- Avoid intrusive interstitials
- Test on various mobile devices and screen sizes

## Implementation in Next.js

Use Next.js's built-in SEO features:

### Document Structure

```tsx
// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          
          {/* Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700;900&display=swap"
            rel="stylesheet"
          />
          
          {/* Global structured data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `{
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "EB Designs",
                "url": "https://ebdesigns.com"
              }`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

### Dynamic SEO Component

Create a reusable SEO component:

```tsx
// components/SEO/index.tsx
import Head from 'next/head';
import { useRouter } from 'next/router';

interface SEOProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogType?: string;
  articleMeta?: {
    publishedTime: string;
    modifiedTime?: string;
    tags?: string[];
  };
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'UI/UX Designer & Web Developer',
  description = 'Emily Baxter is a UI/UX designer specializing in creating intuitive, accessible digital experiences for startups and established brands.',
  ogImage = '/images/og-default.jpg',
  ogType = 'website',
  articleMeta,
  noindex = false,
}) => {
  const router = useRouter();
  const canonical = `https://ebdesigns.com${router.asPath}`;
  const fullTitle = `${title} | EB Designs`;
  
  // Construct absolute URL for OG image
  const ogImageUrl = 
    ogImage.startsWith('http') 
      ? ogImage 
      : `https://ebdesigns.com${ogImage}`;
  
  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="EB Designs" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:creator" content="@emilybaxter" />
      
      {/* Article metadata if applicable */}
      {articleMeta && (
        <>
          <meta property="article:published_time" content={articleMeta.publishedTime} />
          {articleMeta.modifiedTime && (
            <meta property="article:modified_time" content={articleMeta.modifiedTime} />
          )}
          {articleMeta.tags && 
            articleMeta.tags.map(tag => (
              <meta property="article:tag" content={tag} key={tag} />
            ))
          }
        </>
      )}
      
      {/* Noindex directive if needed */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}
    </Head>
  );
};
```

### Usage in Pages

```tsx
// pages/projects/[slug].tsx
import { SEO } from '../../components/SEO';
import { getProjectBySlug, getAllProjects } from '../../lib/api';

export default function ProjectPage({ project }) {
  return (
    <>
      <SEO 
        title={`${project.title} - ${project.category} Case Study`}
        description={project.summary}
        ogImage={project.coverImage.src}
        ogType="article"
        articleMeta={{
          publishedTime: project.date.start,
          tags: project.tags
        }}
      />
      
      {/* Project content */}
    </>
  );
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug);
  return {
    props: { project }
  };
}

export async function getStaticPaths() {
  const projects = getAllProjects();
  return {
    paths: projects.map(project => ({
      params: { slug: project.slug }
    })),
    fallback: false
  };
}
```

## Monitoring & Improvement

Continuously monitor and improve SEO performance:

1. **Set up analytics**:
   - Google Analytics for user behavior
   - Google Search Console for search performance

2. **Regular audits**:
   - Quarterly SEO audits using Lighthouse or SEO tools
   - Check for broken links, missing meta tags, etc.

3. **Content updates**:
   - Refresh content regularly
   - Update case studies with new information or results
   - Add new portfolio projects promptly

4. **Performance monitoring**:
   - Track Core Web Vitals
   - Optimize based on real user metrics

## SEO Checklist

Use this checklist for each new page or significant update:

### On-Page SEO
- [ ] Unique, descriptive title tag (50-60 characters)
- [ ] Meta description (150-160 characters)
- [ ] Proper heading hierarchy (H1, H2, etc.)
- [ ] Optimized content with relevant keywords
- [ ] SEO-friendly URL structure
- [ ] Internal links to related content
- [ ] Optimized images with alt text
- [ ] Responsive design for all devices

### Technical SEO
- [ ] Canonical tag
- [ ] Structured data where appropriate
- [ ] XML sitemap updated
- [ ] No duplicate content issues
- [ ] Page loads in <3 seconds
- [ ] No crawl errors or broken links
- [ ] Schema markup validated
- [ ] Mobile-friendly design

### Social SEO
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Social sharing image (1200×630px)
- [ ] Social sharing buttons

## Resources

- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- [Web.dev Core Web Vitals](https://web.dev/vitals/) 
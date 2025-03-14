# EB Designs Portfolio - Wireframes & Page Layouts

This document outlines the wireframe layouts for key pages in the EB Designs portfolio website. These wireframes serve as a structural blueprint to guide the implementation of consistent, user-friendly interfaces throughout the site.

## Global Layout Structure

All pages in the portfolio share a common layout structure:

```
┌─────────────────────────────────────────┐
│               HEADER                    │
├─────────────────────────────────────────┤
│                                         │
│                                         │
│                                         │
│               CONTENT                   │
│                                         │
│                                         │
│                                         │
├─────────────────────────────────────────┤
│               FOOTER                    │
└─────────────────────────────────────────┘
```

### Header Component

The header remains consistent across all pages:

```
┌─────────────────────────────────────────┐
│ LOGO                     NAV    THEME   │
│                                TOGGLE   │
└─────────────────────────────────────────┘
```

**Components:**
- **Logo**: EB Designs logo, links to homepage
- **Navigation**: Primary site navigation (Home, Projects, About, Contact)
- **Theme Toggle**: Switch between light and dark mode

**Responsive Behavior:**
- On mobile, navigation collapses into a hamburger menu
- Logo remains visible but may be reduced in size
- Theme toggle remains accessible

## Homepage Layout

The homepage showcases the designer's work and personality through a structured presentation:

```
┌─────────────────────────────────────────┐
│               HEADER                    │
├─────────────────────────────────────────┤
│                                         │
│              HERO SECTION               │
│           (Name, Title, CTA)            │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│            FEATURED PROJECTS            │
│            (3-4 project cards)          │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│             SKILLS SECTION              │
│      (Key skills with visual icons)     │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│         TESTIMONIALS (Optional)         │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│            CONTACT PREVIEW              │
│          (Brief contact form)           │
│                                         │
├─────────────────────────────────────────┤
│               FOOTER                    │
└─────────────────────────────────────────┘
```

### Hero Section

```
┌─────────────────────────────────────────┐
│                                         │
│  ┌─────────────┐                        │
│  │             │  HEADLINE              │
│  │   PROFILE   │  SUBHEADLINE           │
│  │    IMAGE    │                        │
│  │             │  SHORT BIO             │
│  │             │                        │
│  └─────────────┘  [CTA BUTTON]          │
│                                         │
└─────────────────────────────────────────┘
```

**Components:**
- **Profile Image**: Professional headshot or creative portrait
- **Headline**: Name and professional title (e.g., "Emily Baxter - UI/UX Designer")
- **Subheadline**: Brief tagline highlighting expertise
- **Short Bio**: 1-2 sentences about professional focus
- **CTA Button**: Primary call-to-action ("View My Work" or "Get in Touch")

**Responsive Behavior:**
- On mobile, layout shifts to vertical stacking
- Image may reduce in size or move above/below text
- Text becomes center-aligned on smallest screens

### Featured Projects Section

```
┌─────────────────────────────────────────┐
│  SECTION HEADING                        │
│                                         │
│  ┌─────────┐    ┌─────────┐             │
│  │PROJECT 1│    │PROJECT 2│             │
│  └─────────┘    └─────────┘             │
│                                         │
│  ┌─────────┐    ┌─────────┐             │
│  │PROJECT 3│    │PROJECT 4│             │
│  └─────────┘    └─────────┘             │
│                                         │
│  [VIEW ALL PROJECTS BUTTON]             │
└─────────────────────────────────────────┘
```

**Components:**
- **Section Heading**: "Featured Projects" or "My Work"
- **Project Cards**: 3-4 featured projects displaying:
  - Project thumbnail image
  - Project title
  - Brief description (1-2 lines)
  - Technologies/skills used (optional)
- **View All Button**: Links to the full projects page

**Responsive Behavior:**
- Grid adapts from 4 columns → 2 columns → 1 column
- Card size increases on smaller screens for better visibility
- Cards maintain consistent aspect ratio across breakpoints

### Skills Section

```
┌─────────────────────────────────────────┐
│  SECTION HEADING                        │
│                                         │
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐     │
│  │SKILL│  │SKILL│  │SKILL│  │SKILL│     │
│  │  1  │  │  2  │  │  3  │  │  4  │     │
│  └─────┘  └─────┘  └─────┘  └─────┘     │
│                                         │
│  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐     │
│  │SKILL│  │SKILL│  │SKILL│  │SKILL│     │
│  │  5  │  │  6  │  │  7  │  │  8  │     │
│  └─────┘  └─────┘  └─────┘  └─────┘     │
│                                         │
└─────────────────────────────────────────┘
```

**Components:**
- **Section Heading**: "Skills & Expertise"
- **Skill Items**: Visual representation of key skills including:
  - Icon/visual representation
  - Skill name
  - Optional proficiency indicator

**Responsive Behavior:**
- Grid adapts from 4 columns → 3 columns → 2 columns
- Icons maintain consistent size across breakpoints
- Text may truncate on smallest screens with tooltip for full text

## Projects Page Layout

The projects page displays the complete portfolio in a browsable, filterable format:

```
┌─────────────────────────────────────────┐
│               HEADER                    │
├─────────────────────────────────────────┤
│                                         │
│           PAGE HEADING                  │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│           FILTER CONTROLS               │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│                                         │
│           PROJECT GRID                  │
│                                         │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│           PAGINATION                    │
│                                         │
├─────────────────────────────────────────┤
│               FOOTER                    │
└─────────────────────────────────────────┘
```

### Filter Controls

```
┌─────────────────────────────────────────┐
│  [ALL] [WEB] [MOBILE] [BRANDING] [UX]   │
│                                         │
│         SEARCH BOX                      │
└─────────────────────────────────────────┘
```

**Components:**
- **Category Filters**: Toggle buttons for project categories
- **Search**: Text search across project titles and descriptions

**Responsive Behavior:**
- Filters may collapse into a dropdown on mobile
- Search box remains highly visible
- May add horizontal scrolling for categories on intermediate breakpoints

### Project Grid

```
┌─────────────────────────────────────────┐
│  ┌─────────┐    ┌─────────┐    ┌─────────┐
│  │         │    │         │    │         │
│  │ PROJECT │    │ PROJECT │    │ PROJECT │
│  │    1    │    │    2    │    │    3    │
│  │         │    │         │    │         │
│  └─────────┘    └─────────┘    └─────────┘
│                                         │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐
│  │         │    │         │    │         │
│  │ PROJECT │    │ PROJECT │    │ PROJECT │
│  │    4    │    │    5    │    │    6    │
│  │         │    │         │    │         │
│  └─────────┘    └─────────┘    └─────────┘
│                                         │
└─────────────────────────────────────────┘
```

**Project Card Components:**
- Thumbnail image (consistent aspect ratio)
- Project title
- Brief description
- Category tags/skills used
- Year completed (optional)

**Responsive Behavior:**
- Grid adapts from 3 columns → 2 columns → 1 column
- Cards increase in size on smaller screens
- Hover effects translate to tap/click effects on touch devices

## Project Detail Page Layout

The project detail page provides comprehensive information about a specific project:

```
┌─────────────────────────────────────────┐
│               HEADER                    │
├─────────────────────────────────────────┤
│                                         │
│            PROJECT HEADER               │
│       (Title, Tags, Overview)           │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│           PROJECT DETAILS               │
│      (Client, Timeline, Role, etc)      │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│           PROJECT CONTENT               │
│    (Challenge, Solution, Process)       │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│           PROJECT GALLERY               │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│           OUTCOMES/RESULTS              │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│           RELATED PROJECTS              │
│                                         │
├─────────────────────────────────────────┤
│               FOOTER                    │
└─────────────────────────────────────────┘
```

### Project Header

```
┌─────────────────────────────────────────┐
│  [BACK TO PROJECTS]                     │
│                                         │
│  PROJECT TITLE                          │
│  Category Tags                          │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │                                     ││
│  │           HERO IMAGE                ││
│  │                                     ││
│  └─────────────────────────────────────┘│
│                                         │
│  Brief project overview (1-2 paragraphs)│
│                                         │
└─────────────────────────────────────────┘
```

### Project Details

```
┌─────────────────────────────────────────┐
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│  │ CLIENT  │  │ TIMELINE│  │  ROLE   │  │
│  │ [Value] │  │ [Value] │  │ [Value] │  │
│  └─────────┘  └─────────┘  └─────────┘  │
│                                         │
│  ┌─────────┐  ┌─────────┐               │
│  │  TOOLS  │  │  LINK   │               │
│  │ [Values]│  │[Website]│               │
│  └─────────┘  └─────────┘               │
└─────────────────────────────────────────┘
```

### Project Content

```
┌─────────────────────────────────────────┐
│  CHALLENGE                              │
│  Description of the problem or challenge │
│  the project addressed                  │
│                                         │
│  SOLUTION                               │
│  Overview of the approach and solution   │
│  implemented                            │
│                                         │
│  PROCESS                                │
│  Step-by-step breakdown of design       │
│  process with supporting images         │
│  ┌─────────────────────────────────────┐│
│  │ Process Image/Diagram               ││
│  └─────────────────────────────────────┘│
│                                         │
└─────────────────────────────────────────┘
```

### Project Gallery

```
┌─────────────────────────────────────────┐
│  GALLERY                                │
│                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│  │ IMAGE 1 │  │ IMAGE 2 │  │ IMAGE 3 │  │
│  └─────────┘  └─────────┘  └─────────┘  │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │            LARGE IMAGE              ││
│  │            (Selected)               ││
│  └─────────────────────────────────────┘│
│                                         │
└─────────────────────────────────────────┘
```

**Components:**
- **Thumbnail Strip**: Clickable thumbnails for gallery navigation
- **Featured Image**: Large display of selected image
- **Caption**: Optional description of displayed image
- **Controls**: Previous/next buttons and fullscreen option

**Responsive Behavior:**
- Gallery may switch to a swipeable carousel on mobile
- Thumbnails may move to horizontal scrolling strip
- Images load responsively based on viewport size

## About Page Layout

The about page provides personal and professional information about the designer:

```
┌─────────────────────────────────────────┐
│               HEADER                    │
├─────────────────────────────────────────┤
│                                         │
│              BIO SECTION                │
│           (Image and Text)              │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│         EXPERIENCE/EDUCATION            │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│         SKILLS/EXPERTISE                │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│         PERSONAL INTERESTS              │
│              (Optional)                 │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│           DOWNLOAD RESUME               │
│                                         │
├─────────────────────────────────────────┤
│               FOOTER                    │
└─────────────────────────────────────────┘
```

### Bio Section

```
┌─────────────────────────────────────────┐
│                                         │
│  ┌─────────────┐                        │
│  │             │  HEADLINE              │
│  │   PROFILE   │                        │
│  │    IMAGE    │  SUBHEADLINE           │
│  │             │                        │
│  │             │                        │
│  └─────────────┘                        │
│                                         │
│  PARAGRAPH 1                            │
│  Professional background and approach   │
│                                         │
│  PARAGRAPH 2                            │
│  Current focus and specialties          │
│                                         │
│  PARAGRAPH 3                            │
│  Personal philosophy or work ethic      │
│                                         │
└─────────────────────────────────────────┘
```

### Experience/Education Section

```
┌─────────────────────────────────────────┐
│  EXPERIENCE                             │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ POSITION TITLE    DATES             ││
│  │ Company Name                        ││
│  │ Description of role and key         ││
│  │ achievements                        ││
│  └─────────────────────────────────────┘│
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ POSITION TITLE    DATES             ││
│  │ Company Name                        ││
│  │ Description of role and key         ││
│  │ achievements                        ││
│  └─────────────────────────────────────┘│
│                                         │
│  EDUCATION                              │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ DEGREE             DATES            ││
│  │ Institution                         ││
│  │ Additional relevant details         ││
│  └─────────────────────────────────────┘│
│                                         │
└─────────────────────────────────────────┘
```

## Contact Page Layout

The contact page provides multiple ways to get in touch:

```
┌─────────────────────────────────────────┐
│               HEADER                    │
├─────────────────────────────────────────┤
│                                         │
│           CONTACT HEADING               │
│           Introduction Text             │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────┐  ┌─────────────────┐   │
│  │             │  │                 │   │
│  │  CONTACT    │  │                 │   │
│  │   INFO      │  │     CONTACT     │   │
│  │             │  │      FORM       │   │
│  │  Social     │  │                 │   │
│  │  Links      │  │                 │   │
│  │             │  │                 │   │
│  └─────────────┘  └─────────────────┘   │
│                                         │
├─────────────────────────────────────────┤
│               FOOTER                    │
└─────────────────────────────────────────┘
```

### Contact Form

```
┌─────────────────────────────────────────┐
│  NAME                                   │
│  ┌─────────────────────────────────────┐│
│  │                                     ││
│  └─────────────────────────────────────┘│
│                                         │
│  EMAIL                                  │
│  ┌─────────────────────────────────────┐│
│  │                                     ││
│  └─────────────────────────────────────┘│
│                                         │
│  PROJECT TYPE                           │
│  ┌─────────────────────────────────────┐│
│  │ [DROPDOWN]                          ││
│  └─────────────────────────────────────┘│
│                                         │
│  MESSAGE                                │
│  ┌─────────────────────────────────────┐│
│  │                                     ││
│  │                                     ││
│  │                                     ││
│  └─────────────────────────────────────┘│
│                                         │
│  [SUBMIT BUTTON]                        │
└─────────────────────────────────────────┘
```

### Contact Info

```
┌─────────────────────────────────────────┐
│  EMAIL                                  │
│  contact@ebdesigns.com                  │
│                                         │
│  PHONE (Optional)                       │
│  (555) 123-4567                         │
│                                         │
│  LOCATION                               │
│  City, Country                          │
│                                         │
│  AVAILABILITY                           │
│  Current status for new projects        │
│                                         │
│  SOCIAL LINKS                           │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐       │
│  │  1  │ │  2  │ │  3  │ │  4  │       │
│  └─────┘ └─────┘ └─────┘ └─────┘       │
└─────────────────────────────────────────┘
```

## Responsive Design Principles

These wireframes will adapt across breakpoints following these principles:

### Desktop (1200px+)
- Full layouts as shown in the wireframes
- Multiple columns for grid layouts
- Side-by-side content where appropriate

### Tablet (768px - 1199px)
- Reduced horizontal margins
- Navigation remains horizontal but may condense
- Grids reduce column count (typically by 1)
- Some side-by-side sections stack

### Mobile (320px - 767px)
- Single column layouts
- Vertical stacking of most elements
- Hamburger menu for navigation
- Reduced padding and margins
- Touch-friendly tap targets (min 44px)
- Scrolling tables/horizontal content

## Interaction States

All interactive elements should have clear visual states:

- **Default**: Normal appearance
- **Hover**: Visual feedback on mouse hover
- **Focus**: Keyboard focus indicator (accessibility)
- **Active**: Pressed/clicked state
- **Disabled**: Unavailable state

## Implementation Notes

1. **Component-Based Architecture**: Implement these layouts using reusable components
2. **Responsive Grid System**: Utilize Chakra UI's grid and responsive utilities
3. **Progressive Enhancement**: Ensure core functionality works without JavaScript
4. **Performance**: Optimize for minimal layout shifts and fast rendering
5. **Accessibility**: Ensure proper landmark regions and semantic structure

## Next Steps

1. Create high-fidelity mockups based on these wireframes
2. Develop component prototypes
3. Test layouts across various devices and screen sizes
4. Implement responsive layouts in code 
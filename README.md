# EB Designs Portfolio

A modern, responsive portfolio website for Emily Baxter designed to showcase her design and development projects in a clean, accessible, and engaging way.

## Project Overview

This portfolio site is built with React, TypeScript, and Chakra UI, focusing on performance, accessibility, and responsive design. It features a dark mode toggle, filterable project grid, and detailed project case studies to effectively demonstrate Emily's skills and work to potential clients and employers.

![Portfolio Screenshot](./public/images/portfolio-preview.png)

## Features

- **Responsive Layout**: Optimized for all device sizes from mobile to desktop
- **Dark Mode Support**: Theme toggle with user preference detection
- **Project Showcase**: Filterable grid of projects with detailed case study pages
- **Contact Form**: Interactive form with validation
- **Performance Optimized**: Fast loading with optimized images and code splitting
- **Fully Accessible**: WCAG 2.1 AA compliant
- **Modern Design**: Clean, professional aesthetic to showcase work effectively
- **Animation & Interaction**: Subtle animations for enhanced user experience
- **SEO Ready**: Optimized for search engines with meta tags and structured data

## Technologies

- **Framework**: [React](https://reactjs.org/) with [Next.js](https://nextjs.org/)
- **Type Safety**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Chakra UI](https://chakra-ui.com/) for components and theming
- **Animation**: [Framer Motion](https://www.framer.com/motion/) for UI animations
- **Form Handling**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://github.com/colinhacks/zod) for type validation
- **Data Fetching**: [React Query](https://react-query.tanstack.com/)
- **State Management**: React Context API
- **Testing**: Jest & React Testing Library
- **Code Quality**: ESLint, Prettier, Husky
- **Deployment**: Vercel or Netlify

## Project Structure

```
ebdesigns/
│
├── public/                # Static assets
│   ├── images/            # Images and graphics
│   ├── fonts/             # Custom fonts
│   └── favicon.ico        # Site favicon
│
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── layout/        # Layout components
│   │   ├── ui/            # UI components
│   │   ├── forms/         # Form components
│   │   ├── projects/      # Project-related components
│   │   └── sections/      # Page section components
│   │
│   ├── pages/             # Next.js pages
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── theme/             # Chakra UI theme configuration
│   ├── types/             # TypeScript type definitions
│   ├── data/              # Data files (projects, skills, etc.)
│   ├── context/           # React context providers
│   └── api/               # API routes
│
├── design-assets/         # Design documentation
│   ├── color-palette.md   # Color specifications
│   ├── typography.md      # Typography system
│   ├── component-design.md # Component specifications
│   ├── logo-brand.md      # Logo and brand guidelines
│   ├── animation-guidelines.md # Animation specifications
│   ├── accessibility-checklist.md # Accessibility requirements
│   ├── image-media-guidelines.md # Image and media guidelines
│   ├── design-tokens.md   # Design system tokens
│   └── wireframes.md      # Page layout wireframes
│
├── project-docs/          # Project documentation
│   ├── overview.md        # Project overview
│   ├── requirements.md    # Project requirements
│   ├── tech-specs.md      # Technical specifications
│   ├── user-structure.md  # User flow & structure
│   └── timeline.md        # Project timeline
│
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── tsconfig.json          # TypeScript configuration
├── jest.config.js         # Jest configuration
├── next.config.js         # Next.js configuration
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Node.js 14+ and npm/yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/username/ebdesigns.git
   cd ebdesigns
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## Design System

The portfolio follows a cohesive design system with the following components:

- **Color Palette**: A carefully selected color palette with primary, secondary, and neutral colors
- **Typography**: Clear typographic hierarchy using Inter and Playfair Display fonts
- **Spacing System**: Consistent spacing using a base-4 scale
- **Components**: Reusable UI components with consistent styling
- **Animations**: Subtle, purpose-driven animations to enhance the user experience
- **Accessibility**: WCAG 2.1 AA compliant design patterns throughout

Refer to the files in the `design-assets/` directory for detailed specifications.

## Content Management

Project data is stored in structured JSON format in the `src/data/` directory. To add or edit projects:

1. Modify the appropriate JSON file(s)
2. Add project images to the `public/images/projects/` directory
3. Rebuild or restart the development server to see changes

## Deployment

### Building for Production

```bash
npm run build
# or
yarn build
```

### Deployment Options

The site can be deployed to:

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Connect your GitHub repository or manually deploy the `out` directory
- **GitHub Pages**: Deploy the `out` directory to GitHub Pages

## Accessibility

This project aims to meet or exceed WCAG 2.1 AA standards. Key accessibility features include:

- Proper heading structure
- ARIA attributes where appropriate
- Keyboard navigation
- Color contrast compliance
- Screen reader friendly
- Reduced motion support

Refer to `design-assets/accessibility-checklist.md` for the complete accessibility guidelines.

## Browser Support

The portfolio is tested and supported on:

- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- iOS Safari (latest 2 versions)
- Android Chrome (latest 2 versions)

## Performance

The site is optimized for performance with:

- Next.js image optimization
- Code splitting
- Tree shaking
- Responsive image loading
- Deferred loading of non-critical resources
- Optimized fonts with font display swap

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Emily Baxter - contact@ebdesigns.com

Project Link: [https://github.com/username/ebdesigns](https://github.com/username/ebdesigns) 
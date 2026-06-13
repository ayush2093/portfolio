# Project Structure Documentation

## Directory Overview

```
profile/
├── public/                    # Static assets (robots.txt, favicon, etc.)
│
├── src/
│   ├── assets/
│   │   ├── images/           # Project images, profile pictures
│   │   ├── icons/            # SVG icons and icon assets
│   │   └── react.svg         # Placeholder assets
│   │
│   ├── components/           # React components
│   │   ├── common/           # Shared layout components
│   │   │   ├── Navbar.jsx    # Navigation component
│   │   │   └── Footer.jsx    # Footer component
│   │   │
│   │   ├── sections/         # Page section components
│   │   │   ├── Hero.jsx      # Hero/landing section
│   │   │   ├── About.jsx     # About me section
│   │   │   ├── Skills.jsx    # Skills showcase
│   │   │   ├── Projects.jsx  # Projects display
│   │   │   ├── Education.jsx # Education timeline
│   │   │   └── Contact.jsx   # Contact form
│   │   │
│   │   └── ui/               # Base UI components (shadcn/ui)
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── input.jsx
│   │       ├── toast.jsx
│   │       ├── toaster.jsx
│   │       ├── tooltip.jsx
│   │       └── sonner.jsx
│   │
│   ├── config/               # Configuration files
│   │   └── index.js          # App config, EmailJS settings, API endpoints
│   │
│   ├── constants/            # Application constants
│   │   └── index.js          # Nav links, social links, skill data, etc.
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── use-toast.js      # Toast notification hook
│   │   └── use-mobile.jsx    # Mobile detection hook
│   │
│   ├── layouts/              # Layout components
│   │   └── MainLayout.jsx    # Main page layout with Navbar & Footer
│   │
│   ├── lib/                  # Utility libraries
│   │   └── utils.js          # Tailwind CSS utility merger (cn function)
│   │
│   ├── pages/                # Page components
│   │   ├── Index.jsx         # Home page (all sections)
│   │   ├── Resume.jsx        # Resume page with PDF
│   │   ├── NotFound.jsx      # 404 error page
│   │   └── resume.pdf        # Resume file
│   │
│   ├── styles/               # Global styles
│   │   └── (future custom styles)
│   │
│   ├── utils/                # Utility functions
│   │   └── helpers.js        # Helper functions (scroll, icons, validation, etc.)
│   │
│   ├── App.jsx               # Main App component with routing
│   ├── App.css               # App-level styles
│   ├── index.css             # Global styles & Tailwind directives
│   └── main.jsx              # React entry point
│
├── .env.example              # Environment variables template
├── .env.local                # Local environment variables (not committed)
├── .gitignore                # Git ignore patterns
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
├── eslint.config.js          # ESLint configuration
└── README.md                 # Project documentation
```

## Component Organization

### Common Components (`src/components/common/`)
Components shared across multiple pages:
- **Navbar**: Navigation with active section highlighting
- **Footer**: Footer with copyright information

### Section Components (`src/components/sections/`)
Components representing different sections of the portfolio:
- **Hero**: Landing section with profile image and CTA
- **About**: About me with highlights
- **Skills**: Animated skills showcase by category
- **Projects**: Project cards with links
- **Education**: Education timeline
- **Contact**: Contact form with validation

### UI Components (`src/components/ui/`)
Base components built with shadcn/ui and Radix UI:
- **Button**: Reusable button with variants
- **Card**: Container component
- **Input**: Form input field
- **Toast/Toaster**: Notification system
- **Tooltip**: Hover information component
- **Sonner**: Toast notifications

## Configuration Files

### `src/config/index.js`
```javascript
- EMAILJS_CONFIG: Email service configuration
- API_ENDPOINTS: API routes
- APP_CONFIG: Application metadata
- TOAST_CONFIG: Toast behavior settings
- ANIMATION_CONFIG: Animation timing
```

### `src/constants/index.js`
```javascript
- NAV_LINKS: Navigation menu items
- SOCIAL_LINKS: Social media links
- CONTACT_INFO: Contact details
- SKILL_CATEGORIES: Skills data by category
- EDUCATION_DATA: Education history
- ABOUT_HIGHLIGHTS: About section highlights
```

### `src/utils/helpers.js`
```javascript
- scrollToElement(): Smooth scroll to element
- getTechIcon(): Get emoji for tech names
- validateEmail(): Email validation
- formatDate(): Format date strings
- debounce/throttle: Performance utilities
- copyToClipboard(): Clipboard functionality
- getContrastColor(): Color contrast calculation
```

## Best Practices

### 1. Component Structure
- Keep components focused on single responsibility
- Extract reusable logic into hooks
- Use composition over inheritance

### 2. Imports
- Use path aliases: `@/` for `src/`
- Group imports: React first, then external, then internal
- Keep imports organized alphabetically

### 3. Naming Conventions
- Components: PascalCase (Hero.jsx, Navbar.jsx)
- Files: Same as component name or kebab-case for utilities
- Functions: camelCase (scrollToElement, getTechIcon)
- Constants: UPPER_SNAKE_CASE (NAV_LINKS, SKILL_CATEGORIES)

### 4. File Organization
- One component per file
- Related files close together
- Utilities grouped by function
- Constants centralized

### 5. Environment Variables
- Copy `.env.example` to `.env.local`
- Add EmailJS credentials
- Never commit `.env.local`

## Adding New Components

### To add a new section:
1. Create `src/components/sections/YourSection.jsx`
2. Import section data from `src/constants/index.js`
3. Use utility functions from `src/utils/helpers.js`
4. Import in `src/pages/Index.jsx`

### To add a new utility:
1. Add to `src/utils/helpers.js` or create new file
2. Export function
3. Import where needed using path alias

### To add a new constant:
1. Add to `src/constants/index.js`
2. Export from index
3. Use throughout app

## Development Workflow

1. **Starting development:**
   ```bash
   npm run dev
   ```

2. **Building for production:**
   ```bash
   npm run build
   ```

3. **Linting code:**
   ```bash
   npm run lint
   ```

4. **Previewing production build:**
   ```bash
   npm run preview
   ```

## Key Technologies

- **React 18**: UI library
- **Vite**: Build tool
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **React Hook Form**: Form handling
- **React Router**: Navigation
- **React Query**: Data fetching
- **EmailJS**: Email service
- **shadcn/ui**: Component library


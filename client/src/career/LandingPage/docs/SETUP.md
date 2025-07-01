# Setup & Installation Guide

Complete setup guide for the Landing Page component system.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Routing Setup](#routing-setup)
- [Environment Setup](#environment-setup)
- [Development Workflow](#development-workflow)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## ✅ Prerequisites

### System Requirements

- **Node.js:** 16.0.0 or higher
- **npm:** 8.0.0 or higher (or yarn 1.22.0+)
- **React:** 18.0.0 or higher
- **React Router:** 6.0.0 or higher

### Development Tools

- **Code Editor:** VS Code (recommended)
- **Browser:** Chrome/Firefox/Safari (latest versions)
- **Git:** For version control

### Verify Prerequisites

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check React version (in your project)
npm list react
```

## 🚀 Installation

### Option 1: Already Integrated (Current Setup)

The Landing Page is already integrated into your project. You can access it at:

```
http://localhost:3000/landing
```

### Option 2: Manual Installation

If setting up in a new project:

```bash
# 1. Create the directory structure
mkdir -p src/components/LandingPage/components
mkdir -p src/components/LandingPage/docs

# 2. Copy component files
# Copy all .jsx files from the LandingPage directory
# Copy LandingPage.css
# Copy documentation files

# 3. Install dependencies (if needed)
npm install react-router-dom@^7.0.0
```

### Dependencies Check

Ensure these packages are in your `package.json`:

```json
{
  "dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-router-dom": "^7.6.2",
    "react-icons": "^5.5.0"
  }
}
```

## 📁 Project Structure

### Expected File Structure

```
src/
├── components/
│   └── LandingPage/
│       ├── LandingPage.jsx              # Main component
│       ├── LandingPage.css              # Styles
│       ├── README.md                    # Documentation
│       ├── components/                  # Sub-components
│       │   ├── Header.jsx
│       │   ├── HeroSection.jsx
│       │   ├── ClientsSection.jsx
│       │   ├── CommunitySection.jsx
│       │   ├── UnlockSection.jsx
│       │   ├── AchievementsSection.jsx
│       │   ├── CalendarSection.jsx
│       │   ├── TestimonialsSection.jsx
│       │   ├── BlogSection.jsx
│       │   ├── ContactForm.jsx
│       │   ├── EmailSignup.jsx
│       │   ├── ContactFormSection.jsx
│       │   ├── CTASection.jsx
│       │   ├── FooterSection.jsx
│       │   └── MobileNavigation.jsx
│       └── docs/                        # Documentation
│           ├── COMPONENTS.md
│           ├── API.md
│           ├── CUSTOMIZATION.md
│           └── SETUP.md
├── App.jsx                              # Main app with routing
└── index.js                             # App entry point
```

### Verify File Structure

```bash
# Check if all files exist
ls -la src/components/LandingPage/
ls -la src/components/LandingPage/components/
ls -la src/components/LandingPage/docs/
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in your project root:

```env
# API Endpoints
REACT_APP_API_BASE_URL=http://localhost:3001/api
REACT_APP_CONTACT_ENDPOINT=/contact
REACT_APP_NEWSLETTER_ENDPOINT=/newsletter

# Feature Flags
REACT_APP_ENABLE_ANALYTICS=true
REACT_APP_ENABLE_CHAT=false

# Third-party Services
REACT_APP_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
REACT_APP_MAILCHIMP_API_KEY=your_mailchimp_key
```

### Configuration File

Create `src/config/landing.js`:

```javascript
export const landingConfig = {
  // API Configuration
  api: {
    baseUrl: process.env.REACT_APP_API_BASE_URL || "/api",
    endpoints: {
      contact: process.env.REACT_APP_CONTACT_ENDPOINT || "/contact",
      newsletter: process.env.REACT_APP_NEWSLETTER_ENDPOINT || "/newsletter",
    },
    timeout: 10000,
  },

  // Feature Flags
  features: {
    analytics: process.env.REACT_APP_ENABLE_ANALYTICS === "true",
    chat: process.env.REACT_APP_ENABLE_CHAT === "true",
    forms: true,
    mobileNav: true,
  },

  // UI Configuration
  ui: {
    theme: "light", // 'light' | 'dark'
    animations: true,
    showMobileNav: true,
    headerStyle: "fixed", // 'fixed' | 'static'
  },

  // Content Configuration
  content: {
    companyName: "Your Company",
    tagline: "Transform your business",
    supportEmail: "support@yourcompany.com",
    phone: "+1-234-567-8900",
  },
};
```

## 🛣️ Routing Setup

### Basic Routing (Already Configured)

Your `App.jsx` should include:

```jsx
import LandingPage from "./components/LandingPage/LandingPage";

const AppWrapper = () => {
  const location = useLocation();
  const isLandingRoute = location.pathname === "/landing";

  return (
    <>
      {!isLandingRoute && <Navbar />}

      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        {/* Other routes */}
      </Routes>

      {!isLandingRoute && <Footer />}
    </>
  );
};
```

### Advanced Routing Configuration

```jsx
// For multiple landing page variants
<Routes>
  <Route path="/landing" element={<LandingPage />} />
  <Route path="/landing/demo" element={<LandingPage variant="demo" />} />
  <Route path="/landing/pricing" element={<LandingPage variant="pricing" />} />
</Routes>

// With parameters
<Route path="/landing/:campaign" element={<LandingPage />} />
```

### Route Guards

```jsx
// Protected landing page
const ProtectedLandingPage = () => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <LandingPage />;
};

<Route path="/landing/private" element={<ProtectedLandingPage />} />;
```

## 🌐 Environment Setup

### Development Environment

```bash
# Start development server
npm start

# Run with specific port
PORT=3001 npm start

# Run with environment variables
REACT_APP_ENV=development npm start
```

### Production Environment

```bash
# Build for production
npm run build

# Test production build locally
npm install -g serve
serve -s build -l 3000
```

### Environment-Specific Configuration

```javascript
// src/config/environments.js
const environments = {
  development: {
    apiUrl: "http://localhost:3001/api",
    debug: true,
    analytics: false,
  },
  staging: {
    apiUrl: "https://staging-api.yourcompany.com/api",
    debug: true,
    analytics: true,
  },
  production: {
    apiUrl: "https://api.yourcompany.com/api",
    debug: false,
    analytics: true,
  },
};

export const config =
  environments[process.env.NODE_ENV] || environments.development;
```

## 🔧 Development Workflow

### Local Development Setup

```bash
# 1. Clone/navigate to project
cd your-project

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env

# 4. Start development server
npm start

# 5. Open browser
open http://localhost:3000/landing
```

### Hot Reload Configuration

Ensure your `vite.config.js` includes:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    hot: true,
    port: 3000,
  },
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
});
```

### Development Tools

#### VS Code Extensions

```json
// .vscode/extensions.json
{
  "recommendations": [
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

#### VS Code Settings

```json
// .vscode/settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

### Code Quality Tools

#### ESLint Configuration

```json
// .eslintrc.json
{
  "extends": ["react-app", "react-app/jest"],
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "warn",
    "react-hooks/exhaustive-deps": "warn"
  }
}
```

#### Prettier Configuration

```json
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

## 🚢 Deployment

### Build Process

```bash
# 1. Install production dependencies
npm ci --only=production

# 2. Run tests
npm test

# 3. Build for production
npm run build

# 4. Verify build
ls -la build/
```

### Static Hosting (Netlify/Vercel)

```json
// package.json scripts for deployment
{
  "scripts": {
    "build": "vite build",
    "preview": "vite preview",
    "deploy:netlify": "npm run build && netlify deploy --prod --dir=dist",
    "deploy:vercel": "npm run build && vercel --prod"
  }
}
```

### Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Environment-Specific Builds

```bash
# Development build
NODE_ENV=development npm run build

# Staging build
NODE_ENV=staging npm run build

# Production build
NODE_ENV=production npm run build
```

## 🐛 Troubleshooting

### Common Issues

#### Component Not Rendering

```bash
# Check console for errors
# Verify import paths
# Check React version compatibility

# Debug steps:
1. Verify LandingPage.jsx exists
2. Check import statement in App.jsx
3. Verify route configuration
4. Check browser console for errors
```

#### CSS Not Loading

```bash
# Verify CSS import
import './LandingPage.css';

# Check file exists
ls -la src/components/LandingPage/LandingPage.css

# Verify Vite CSS processing
# Check vite.config.js CSS configuration
```

#### Form Validation Issues

```javascript
// Debug form validation
console.log("Form data:", formData);
console.log("Validation errors:", errors);
console.log("Form valid:", Object.keys(errors).length === 0);

// Check validation functions
const testEmail = "test@example.com";
console.log("Email valid:", validateEmail(testEmail));
```

#### Responsive Design Issues

```css
/* Debug responsive styles */
@media (max-width: 768px) {
  .debug-responsive {
    border: 2px solid red !important;
  }
}

/* Add to component temporarily */
<div className="debug-responsive">Content</div>
```

### Performance Issues

#### Bundle Size Analysis

```bash
# Analyze bundle size
npm run build
npx vite-bundle-analyzer dist

# Check for large dependencies
npm ls --depth=0
```

#### Performance Monitoring

```javascript
// Add performance monitoring
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log("Performance:", entry.name, entry.duration);
  }
});

observer.observe({ entryTypes: ["navigation", "resource"] });
```

### Browser Compatibility

#### Check Support

```javascript
// Feature detection
const supportsCSS = CSS && CSS.supports;
const supportsGrid = supportsCSS && CSS.supports("display", "grid");
const supportsFlex = supportsCSS && CSS.supports("display", "flex");

console.log("Browser support:", {
  cssSupports: supportsCSS,
  grid: supportsGrid,
  flexbox: supportsFlex,
});
```

#### Polyfills

```javascript
// Add polyfills if needed
import "core-js/stable";
import "regenerator-runtime/runtime";

// For IE11 support (if needed)
import "react-app-polyfill/ie11";
```

### Debug Mode

```javascript
// Enable debug mode
const DEBUG = process.env.NODE_ENV === "development";

if (DEBUG) {
  console.log("Landing Page Debug Mode Enabled");
  window.landingPageDebug = {
    formData: () => console.log(formData),
    errors: () => console.log(errors),
    config: landingConfig,
  };
}
```

### Getting Help

#### Check Documentation

1. Read [Component Documentation](./COMPONENTS.md)
2. Review [API Guide](./API.md)
3. Check [Customization Guide](./CUSTOMIZATION.md)

#### Debug Checklist

- [ ] Node.js version 16+
- [ ] All dependencies installed
- [ ] Environment variables set
- [ ] Routes configured correctly
- [ ] CSS files imported
- [ ] Browser console clear of errors
- [ ] Network requests successful

#### Contact Support

If issues persist:

1. Check browser console for errors
2. Verify all files are present
3. Test in different browsers
4. Create minimal reproduction case
5. Submit issue with environment details

This setup guide should help you successfully configure and deploy the Landing Page component system.

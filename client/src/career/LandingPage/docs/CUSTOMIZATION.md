# Customization & Styling Guide

Complete guide for customizing the appearance and behavior of Landing Page components.

## 📋 Table of Contents

- [CSS Variables](#css-variables)
- [Theme Customization](#theme-customization)
- [Component Styling](#component-styling)
- [Responsive Customization](#responsive-customization)
- [Form Styling](#form-styling)
- [Animation Customization](#animation-customization)
- [Brand Integration](#brand-integration)
- [Advanced Customization](#advanced-customization)

## 🎨 CSS Variables

### Core Color Palette

```css
:root {
  /* Primary Colors */
  --colors-indigo: #5856d6; /* Primary brand color */
  --neutral-white: #fff; /* Pure white */
  --neutral-black: #263238; /* Dark text/backgrounds */

  /* Text Colors */
  --neutral-d-grey: #4d4d4d; /* Primary text */
  --neutral-grey: #717171; /* Secondary text */
  --neutral-l-grey: #89939e; /* Tertiary text */
  --text-gray-900: #18191f; /* High contrast text */
  --text-gray-300: #d9dbe1; /* Light text */

  /* Background Colors */
  --neutral-silver: #f5f7fa; /* Light backgrounds */
  --tint-t5: #e8f5e9; /* Success tint */
  --brand-secondary: #263238; /* Secondary brand */
}
```

### Spacing System

```css
:root {
  /* Spacing Scale */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;

  /* Component Specific */
  --header-height: 61px;
  --mobile-nav-height: 110px;
  --button-padding: 9.745px 22.274px;
  --input-padding: 12px 16px;
}
```

### Typography System

```css
:root {
  /* Font Family */
  --font-primary: Inter, -apple-system, Roboto, Helvetica, sans-serif;

  /* Font Sizes */
  --text-xs: 12px;
  --text-sm: 14px;
  --text-base: 16px;
  --text-lg: 18px;
  --text-xl: 20px;
  --text-2xl: 24px;
  --text-3xl: 32px;
  --text-4xl: 44.548px;

  /* Line Heights */
  --leading-tight: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
}
```

## 🌈 Theme Customization

### Creating a Dark Theme

```css
/* Dark theme variables */
[data-theme="dark"] {
  --neutral-white: #1a1a1a;
  --neutral-silver: #2d2d2d;
  --neutral-d-grey: #e0e0e0;
  --neutral-grey: #b0b0b0;
  --neutral-black: #f5f5f5;
  --text-gray-900: #ffffff;
}

/* Apply theme to landing page */
.landing-page[data-theme="dark"] {
  background: var(--neutral-black);
  color: var(--neutral-white);
}
```

### Custom Brand Colors

```css
/* Your brand colors */
:root {
  --colors-indigo: #ff6b35; /* Orange primary */
  --brand-secondary: #004e89; /* Blue secondary */
  --accent-color: #ffd23f; /* Yellow accent */
  --success-color: #06d6a0; /* Green success */
  --error-color: #ef476f; /* Red error */
}

/* Apply to buttons */
.btn-primary {
  background: var(--colors-indigo);
  border-color: var(--colors-indigo);
}

.btn-primary:hover {
  background: color-mix(in srgb, var(--colors-indigo) 85%, black);
}
```

### Gradient Backgrounds

```css
/* Custom gradient backgrounds */
.hero-section {
  background: linear-gradient(
    135deg,
    var(--colors-indigo) 0%,
    var(--brand-secondary) 100%
  );
}

.contact-form-section {
  background: linear-gradient(
    45deg,
    var(--neutral-silver) 0%,
    color-mix(in srgb, var(--colors-indigo) 10%, var(--neutral-silver)) 100%
  );
}
```

## 🧩 Component Styling

### Header Customization

```css
/* Custom header styles */
.header {
  /* Transparent header */
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);

  /* Fixed header with shadow on scroll */
  position: fixed;
  top: 0;
  z-index: 100;
  transition: box-shadow 0.3s ease;
}

.header.scrolled {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

/* Custom logo sizing */
.header-logo .logo-image {
  height: 40px; /* Custom height */
  width: auto;
}

/* Custom menu styling */
.menu-item span {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.menu-item:hover span {
  color: var(--colors-indigo);
  transform: translateY(-2px);
  transition: all 0.3s ease;
}
```

### Hero Section Customization

```css
/* Full-height hero */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

/* Custom hero background */
.hero-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url("/hero-bg.jpg") center/cover;
  opacity: 0.1;
  z-index: -1;
}

/* Animated hero title */
.hero-title {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Custom title styling */
.title-accent {
  background: linear-gradient(45deg, var(--colors-indigo), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### Card Component Styling

```css
/* Enhanced feature cards */
.feature-card {
  transition: all 0.3s ease;
  border: 1px solid transparent;
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(
    90deg,
    transparent,
    var(--colors-indigo),
    transparent
  );
  transition: left 0.5s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border-color: var(--colors-indigo);
}

.feature-card:hover::before {
  left: 100%;
}

/* Icon hover effects */
.feature-icon {
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1) rotate(5deg);
}
```

## 📱 Responsive Customization

### Custom Breakpoints

```css
/* Define custom breakpoints */
:root {
  --bp-sm: 480px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1200px;
  --bp-2xl: 1400px;
}

/* Custom responsive behavior */
@media (max-width: 480px) {
  .hero-title {
    font-size: clamp(1.5rem, 8vw, 2.5rem);
    line-height: 1.2;
  }

  .feature-card {
    margin-bottom: var(--space-lg);
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .community-features {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-lg);
  }
}

@media (min-width: 1400px) {
  .main-content {
    max-width: 1200px;
  }

  .hero-section {
    padding: 100px;
  }
}
```

### Container Sizing

```css
/* Custom container sizes */
.landing-page {
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
}

.main-content {
  max-width: var(--container-lg);
  margin: 0 auto;
  padding: 0 var(--space-md);
}

@media (min-width: 768px) {
  .main-content {
    padding: 0 var(--space-lg);
  }
}
```

## 📝 Form Styling

### Custom Form Controls

```css
/* Enhanced form inputs */
.form-input {
  border-radius: var(--space-sm);
  border-width: 2px;
  transition: all 0.3s ease;
  font-size: var(--text-base);

  /* Custom focus styles */
  &:focus {
    border-color: var(--colors-indigo);
    box-shadow:
      0 0 0 3px rgba(88, 86, 214, 0.1),
      0 4px 8px rgba(0, 0, 0, 0.05);
    transform: translateY(-1px);
  }

  /* Custom placeholder styles */
  &::placeholder {
    color: var(--neutral-l-grey);
    font-style: italic;
  }
}

/* Floating label effect */
.form-group {
  position: relative;
}

.form-label {
  position: absolute;
  top: 50%;
  left: var(--space-md);
  transform: translateY(-50%);
  transition: all 0.3s ease;
  pointer-events: none;
  background: var(--neutral-white);
  padding: 0 var(--space-xs);
}

.form-input:focus + .form-label,
.form-input:not(:placeholder-shown) + .form-label {
  top: 0;
  font-size: var(--text-xs);
  color: var(--colors-indigo);
}
```

### Custom Select Styling

```css
/* Enhanced select dropdown */
.form-select {
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right var(--space-sm) center;
  background-repeat: no-repeat;
  background-size: 16px 16px;
  padding-right: calc(var(--space-md) + 20px);
}

.form-select:focus {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%235856D6' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
}
```

### Validation Styling

```css
/* Enhanced error states */
.form-input.error {
  border-color: var(--error-color);
  background-color: rgba(239, 71, 111, 0.05);
  animation: shake 0.5s ease-in-out;
}

@keyframes shake {
  0%,
  100% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  75% {
    transform: translateX(5px);
  }
}

.error-message {
  color: var(--error-color);
  font-size: var(--text-xs);
  margin-top: var(--space-xs);
  display: flex;
  align-items: center;
  gap: var(--space-xs);
}

.error-message::before {
  content: "⚠️";
  font-size: var(--text-sm);
}

/* Success states */
.form-input.success {
  border-color: var(--success-color);
  background-color: rgba(6, 214, 160, 0.05);
}

.form-input.success::after {
  content: "✓";
  position: absolute;
  right: var(--space-md);
  color: var(--success-color);
}
```

## 🎬 Animation Customization

### Loading Animations

```css
/* Custom loading spinner */
@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

@keyframes bounceIn {
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.spinner {
  animation: spin 1s linear infinite;
  border-color: var(--colors-indigo) transparent var(--colors-indigo)
    transparent;
}

/* Success animation */
.success-icon {
  animation: bounceIn 0.6s ease-out;
}
```

### Scroll Animations

```css
/* Intersection Observer animations */
@keyframes slideInFromLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-on-scroll {
  opacity: 0;
  transition: opacity 0.6s ease-out;
}

.animate-on-scroll.in-view {
  opacity: 1;
  animation: slideInFromLeft 0.8s ease-out;
}

.animate-on-scroll.from-right.in-view {
  animation: slideInFromRight 0.8s ease-out;
}
```

## 🏢 Brand Integration

### Logo Integration

```css
/* Responsive logo sizing */
.header-logo {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.logo-image {
  height: clamp(30px, 5vw, 50px);
  width: auto;
  object-fit: contain;
}

/* Dark mode logo */
[data-theme="dark"] .logo-image {
  filter: brightness(0) invert(1);
}

/* Logo with text */
.logo-text {
  font-weight: 700;
  font-size: var(--text-xl);
  color: var(--colors-indigo);
}
```

### Custom Fonts

```css
/* Import custom fonts */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

:root {
  --font-primary: "Poppins", sans-serif;
  --font-heading: "Poppins", sans-serif;
}

/* Apply to headings */
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-heading);
  font-weight: 700;
}

/* Custom font weights */
.font-light {
  font-weight: 300;
}
.font-normal {
  font-weight: 400;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.font-bold {
  font-weight: 700;
}
```

## 🔧 Advanced Customization

### CSS-in-JS Integration

```jsx
// Styled Components example
import styled from "styled-components";

const StyledLandingPage = styled.div`
  --primary-color: ${(props) => props.theme.primary};
  --secondary-color: ${(props) => props.theme.secondary};

  background: var(--primary-color);
  color: var(--secondary-color);
`;

const CustomButton = styled.button`
  background: linear-gradient(
    45deg,
    ${(props) => props.theme.primary},
    ${(props) => props.theme.secondary}
  );

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;
```

### CSS Modules

```css
/* LandingPage.module.css */
.container {
  background: var(--neutral-white);
  border-radius: var(--space-md);
}

.hero {
  composes: container;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.button {
  composes: btn-primary from "../shared/buttons.module.css";
  /* Additional custom styles */
}
```

### Custom CSS Properties

```css
/* Dynamic CSS properties with JavaScript */
.landing-page {
  --scroll-progress: 0%;
  --mouse-x: 50%;
  --mouse-y: 50%;
}

/* Use in animations */
.parallax-element {
  transform: translateY(calc(var(--scroll-progress) * -50px));
}

.cursor-follower {
  left: var(--mouse-x);
  top: var(--mouse-y);
}
```

```javascript
// Update CSS properties with JavaScript
const updateScrollProgress = () => {
  const progress =
    window.scrollY / (document.body.scrollHeight - window.innerHeight);
  document.documentElement.style.setProperty(
    "--scroll-progress",
    `${progress * 100}%`,
  );
};

const updateMousePosition = (e) => {
  document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
  document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
};

window.addEventListener("scroll", updateScrollProgress);
window.addEventListener("mousemove", updateMousePosition);
```

### Print Styles

```css
/* Print optimizations */
@media print {
  .landing-page {
    background: white !important;
    color: black !important;
  }

  .mobile-navigation,
  .header,
  .footer-section {
    display: none !important;
  }

  .contact-form-section {
    page-break-inside: avoid;
  }

  .hero-section {
    page-break-after: always;
  }
}
```

This comprehensive customization guide provides all the tools needed to adapt the Landing Page to your specific brand and design requirements.

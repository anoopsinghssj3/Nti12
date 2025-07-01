# Component Documentation

Detailed documentation for each component in the Landing Page system.

## 📋 Table of Contents

- [Core Components](#core-components)
- [Form Components](#form-components)
- [Layout Components](#layout-components)
- [Component Props](#component-props)
- [State Management](#state-management)
- [Event Handlers](#event-handlers)

## 🏗️ Core Components

### LandingPage.jsx

**Main container component that orchestrates all sections**

```jsx
import LandingPage from './LandingPage';

// Basic usage
<LandingPage />

// With props
<LandingPage
  theme="dark"
  showMobileNav={true}
  className="custom-landing"
/>
```

**Props:**

- `theme` (string): 'light' | 'dark' - Theme variant
- `showMobileNav` (boolean): Show/hide mobile navigation
- `className` (string): Additional CSS classes

**Features:**

- Responsive layout management
- Section orchestration
- Mobile navigation control
- Theme application

---

### Header.jsx

**Navigation header with logo and menu items**

```jsx
import Header from './components/Header';

// Basic usage
<Header />

// With custom menu
<Header
  logo="/custom-logo.png"
  menuItems={['Home', 'About', 'Contact']}
  onMenuClick={(item) => console.log(item)}
/>
```

**Props:**

- `logo` (string): Logo image URL
- `menuItems` (array): Menu item labels
- `onMenuClick` (function): Menu click handler

**Features:**

- Responsive menu collapse
- Logo display
- Active state management
- Smooth scrolling navigation

---

### HeroSection.jsx

**Main banner with headline and call-to-action**

```jsx
import HeroSection from './components/HeroSection';

// Basic usage
<HeroSection />

// With custom content
<HeroSection
  title="Custom Headline"
  subtitle="Custom description"
  ctaText="Get Started"
  onCtaClick={() => console.log('CTA clicked')}
/>
```

**Props:**

- `title` (string): Main headline text
- `subtitle` (string): Description text
- `ctaText` (string): Call-to-action button text
- `onCtaClick` (function): CTA button handler
- `backgroundImage` (string): Hero background image

**Features:**

- Animated text reveal
- Background image support
- CTA button with hover effects
- Mobile-optimized layout

---

### ClientsSection.jsx

**Showcase of client logos with animations**

```jsx
import ClientsSection from './components/ClientsSection';

// Basic usage
<ClientsSection />

// With custom logos
<ClientsSection
  title="Our Partners"
  logos={[
    { id: 1, src: '/logo1.png', alt: 'Client 1' },
    { id: 2, src: '/logo2.png', alt: 'Client 2' }
  ]}
/>
```

**Props:**

- `title` (string): Section title
- `description` (string): Section description
- `logos` (array): Logo objects with id, src, alt

**Features:**

- SVG and image logo support
- Responsive grid layout
- Hover animations
- Lazy loading support

---

### CommunitySection.jsx

**Feature cards for different user types**

```jsx
import CommunitySection from './components/CommunitySection';

// Basic usage
<CommunitySection />

// With custom features
<CommunitySection
  title="Our Services"
  features={[
    {
      id: 1,
      title: 'Feature 1',
      description: 'Description text',
      icon: <CustomIcon />
    }
  ]}
/>
```

**Props:**

- `title` (string): Section title
- `description` (string): Section description
- `features` (array): Feature objects with id, title, description, icon

**Features:**

- Card hover effects
- Icon support (SVG/React components)
- Responsive grid layout
- Progressive enhancement

## 📝 Form Components

### ContactForm.jsx

**Main contact form with comprehensive validation**

```jsx
import ContactForm from './components/ContactForm';

// Basic usage
<ContactForm />

// With custom configuration
<ContactForm
  fields={['firstName', 'email', 'message']}
  onSubmit={(data) => handleSubmit(data)}
  apiEndpoint="/api/contact"
  validation={{
    email: { required: true, pattern: /custom-regex/ },
    firstName: { required: true, minLength: 2 }
  }}
/>
```

**Props:**

- `fields` (array): Form fields to display
- `onSubmit` (function): Form submission handler
- `apiEndpoint` (string): API endpoint URL
- `validation` (object): Custom validation rules
- `initialValues` (object): Initial form values

**State:**

```jsx
const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  interest: "",
});

const [errors, setErrors] = useState({});
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
```

**Validation Rules:**

- **Email:** RFC 5322 compliant regex
- **Phone:** International format support
- **Names:** Minimum 2 characters
- **Required fields:** Visual indicators
- **Message:** Minimum 10 characters

**Features:**

- Real-time validation
- Error message display
- Loading states
- Success confirmation
- Form reset after submission
- Accessibility support

---

### EmailSignup.jsx

**Newsletter subscription with validation**

```jsx
import EmailSignup from './components/EmailSignup';

// Basic usage
<EmailSignup />

// With custom configuration
<EmailSignup
  placeholder="Enter your email"
  onSubmit={(email) => handleEmailSignup(email)}
  apiEndpoint="/api/newsletter"
  buttonText="Subscribe"
/>
```

**Props:**

- `placeholder` (string): Input placeholder text
- `onSubmit` (function): Email submission handler
- `apiEndpoint` (string): API endpoint URL
- `buttonText` (string): Submit button text

**State:**

```jsx
const [email, setEmail] = useState("");
const [error, setError] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSubmitted, setIsSubmitted] = useState(false);
```

**Features:**

- Email validation
- Error handling
- Loading spinner
- Success animation
- Auto-reset after success

## 🎨 Layout Components

### TestimonialsSection.jsx

**Customer testimonials with logos**

```jsx
import TestimonialsSection from './components/TestimonialsSection';

// Basic usage
<TestimonialsSection />

// With custom testimonials
<TestimonialsSection
  testimonials={[
    {
      id: 1,
      quote: "Great service!",
      author: "John Doe",
      company: "Acme Corp",
      image: "/testimonial1.jpg"
    }
  ]}
/>
```

**Props:**

- `testimonials` (array): Testimonial objects
- `autoplay` (boolean): Auto-rotate testimonials
- `interval` (number): Rotation interval in ms

**Features:**

- Image support
- Quote formatting
- Author attribution
- Responsive layout

---

### BlogSection.jsx

**Blog posts with pagination**

```jsx
import BlogSection from './components/BlogSection';

// Basic usage
<BlogSection />

// With custom posts
<BlogSection
  posts={[
    {
      id: 1,
      title: "Blog Post Title",
      excerpt: "Post description",
      image: "/blog1.jpg",
      url: "/blog/post-1"
    }
  ]}
  showPagination={true}
/>
```

**Props:**

- `posts` (array): Blog post objects
- `showPagination` (boolean): Show pagination dots
- `postsPerPage` (number): Posts to display

**Features:**

- Image lazy loading
- Read more links
- Pagination dots
- Responsive grid

---

### FooterSection.jsx

**Complete footer with links and newsletter**

```jsx
import FooterSection from './components/FooterSection';

// Basic usage
<FooterSection />

// With custom links
<FooterSection
  companyLinks={['About', 'Blog', 'Contact']}
  supportLinks={['Help', 'Terms', 'Privacy']}
  showNewsletter={true}
/>
```

**Props:**

- `companyLinks` (array): Company navigation links
- `supportLinks` (array): Support navigation links
- `showNewsletter` (boolean): Show newsletter signup
- `logo` (string): Footer logo URL

**Features:**

- Multi-column layout
- Newsletter integration
- Social media links
- Copyright information

---

### MobileNavigation.jsx

**Bottom navigation for mobile devices**

```jsx
import MobileNavigation from './components/MobileNavigation';

// Basic usage
<MobileNavigation />

// With custom items
<MobileNavigation
  items={[
    { id: 1, icon: <HomeIcon />, label: 'Home', path: '/' },
    { id: 2, icon: <SearchIcon />, label: 'Search', path: '/search' }
  ]}
  activeItem={1}
  onItemClick={(item) => navigate(item.path)}
/>
```

**Props:**

- `items` (array): Navigation item objects
- `activeItem` (number): Active item ID
- `onItemClick` (function): Item click handler

**Features:**

- Icon support
- Active state indication
- Touch-friendly design
- Badge support

## 🔧 State Management

### Form State Pattern

```jsx
// Common form state pattern used across components
const useFormState = (initialValues, validationRules) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (fieldName, value) => {
    // Validation logic
  };

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return { values, errors, isSubmitting, handleChange, validate };
};
```

### Component Communication

```jsx
// Event bubbling pattern for component communication
const LandingPage = () => {
  const handleFormSubmit = (formData) => {
    // Handle form submission at top level
    console.log("Form submitted:", formData);
  };

  return (
    <div>
      <ContactForm onSubmit={handleFormSubmit} />
      <EmailSignup onSubmit={(email) => handleFormSubmit({ email })} />
    </div>
  );
};
```

## 🎯 Event Handlers

### Common Event Patterns

```jsx
// Form submission with validation
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);
  try {
    await submitForm(formData);
    setIsSubmitted(true);
  } catch (error) {
    setError(error.message);
  } finally {
    setIsSubmitting(false);
  }
};

// Input change with validation
const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));

  // Clear error on change
  if (errors[name]) {
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }
};

// Navigation with smooth scrolling
const handleNavClick = (targetId) => {
  const element = document.getElementById(targetId);
  element?.scrollIntoView({ behavior: "smooth" });
};
```

### Error Handling

```jsx
// Centralized error handling
const handleError = (error, context) => {
  console.error(`Error in ${context}:`, error);

  // User-friendly error messages
  const userMessage =
    {
      network: "Network error. Please check your connection.",
      validation: "Please check your input and try again.",
      server: "Server error. Please try again later.",
    }[error.type] || "An unexpected error occurred.";

  setError(userMessage);
};
```

## 🔍 Performance Considerations

### Optimization Techniques

- **React.memo** for pure components
- **useMemo** for expensive calculations
- **useCallback** for event handlers
- **Lazy loading** for images
- **Code splitting** for large components

### Example Optimizations

```jsx
// Memoized component
const ClientLogo = React.memo(({ logo }) => (
  <img src={logo.src} alt={logo.alt} loading="lazy" />
));

// Memoized calculations
const filteredPosts = useMemo(
  () => posts.filter((post) => post.published),
  [posts],
);

// Stable event handlers
const handleClick = useCallback(
  (id) => {
    onItemClick(id);
  },
  [onItemClick],
);
```

This documentation provides comprehensive coverage of all components, their usage patterns, and best practices for customization and extension.

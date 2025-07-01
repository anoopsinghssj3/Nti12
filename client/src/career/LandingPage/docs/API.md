# API Integration Guide

Complete guide for integrating the Landing Page forms with your backend API.

## 📋 Table of Contents

- [Overview](#overview)
- [Contact Form API](#contact-form-api)
- [Email Signup API](#email-signup-api)
- [API Endpoints](#api-endpoints)
- [Request/Response Examples](#requestresponse-examples)
- [Error Handling](#error-handling)
- [Security Considerations](#security-considerations)
- [Implementation Examples](#implementation-examples)

## 🔍 Overview

The Landing Page includes two main forms that require API integration:

1. **Contact Form** - Lead generation and inquiries
2. **Email Signup** - Newsletter subscription

Both forms include client-side validation and are ready for backend integration.

## 📞 Contact Form API

### Form Data Structure

```javascript
{
  firstName: string,    // Required, min 2 chars
  lastName: string,     // Required, min 2 chars
  email: string,        // Required, valid email format
  phone: string,        // Required, valid phone format
  company: string,      // Required
  interest: string,     // Required, one of predefined options
  message: string       // Required, min 10 chars
}
```

### API Integration

Replace the simulation in `ContactForm.jsx`:

```javascript
// Current simulation (line ~85 in ContactForm.jsx)
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    // Replace this simulation with actual API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // YOUR API CALL HERE
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Contact form submitted:", result);

    setIsSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        interest: "",
      });
      setIsSubmitted(false);
    }, 3000);
  } catch (error) {
    console.error("Form submission error:", error);
    // Handle error - show user-friendly message
    setErrors({ submit: "Failed to send message. Please try again." });
  } finally {
    setIsSubmitting(false);
  }
};
```

## ✉️ Email Signup API

### Form Data Structure

```javascript
{
  email: string; // Required, valid email format
}
```

### API Integration

Replace the simulation in `EmailSignup.jsx`:

```javascript
// Current simulation (line ~25 in EmailSignup.jsx)
const handleSubmit = async (e) => {
  e.preventDefault();

  setError("");

  if (!email.trim()) {
    setError("Email address is required");
    return;
  }

  if (!validateEmail(email)) {
    setError("Please enter a valid email address");
    return;
  }

  setIsSubmitting(true);

  try {
    // Replace this simulation with actual API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // YOUR API CALL HERE
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Email signup:", result);

    setIsSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setEmail("");
      setIsSubmitted(false);
    }, 3000);
  } catch (error) {
    setError("Failed to subscribe. Please try again.");
    console.error("Email signup error:", error);
  } finally {
    setIsSubmitting(false);
  }
};
```

## 🛣️ API Endpoints

### Recommended Endpoint Structure

```
POST /api/contact
POST /api/newsletter
```

### Alternative Endpoint Options

```
POST /api/v1/leads/contact
POST /api/v1/marketing/newsletter
POST /api/forms/contact
POST /api/forms/newsletter
```

## 📨 Request/Response Examples

### Contact Form Request

```http
POST /api/contact
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "company": "Acme Corp",
  "interest": "membership",
  "message": "I'm interested in learning more about your membership management solutions."
}
```

### Contact Form Response (Success)

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "message": "Contact form submitted successfully",
  "id": "contact_12345",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

### Newsletter Request

```http
POST /api/newsletter
Content-Type: application/json

{
  "email": "user@example.com"
}
```

### Newsletter Response (Success)

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "success": true,
  "message": "Successfully subscribed to newsletter",
  "email": "user@example.com",
  "subscriptionId": "sub_67890"
}
```

### Error Response Examples

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json

{
  "success": false,
  "error": "validation_error",
  "message": "Invalid email format",
  "details": {
    "field": "email",
    "code": "INVALID_FORMAT"
  }
}
```

```http
HTTP/1.1 409 Conflict
Content-Type: application/json

{
  "success": false,
  "error": "duplicate_email",
  "message": "Email already subscribed"
}
```

## ⚠️ Error Handling

### Client-Side Error Handling

```javascript
// Enhanced error handling in ContactForm.jsx
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);
  setErrors({}); // Clear previous errors

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle different error types
      switch (response.status) {
        case 400:
          setErrors({ submit: data.message || "Please check your input" });
          break;
        case 429:
          setErrors({ submit: "Too many requests. Please try again later." });
          break;
        case 500:
          setErrors({ submit: "Server error. Please try again later." });
          break;
        default:
          setErrors({ submit: "An unexpected error occurred." });
      }
      return;
    }

    setIsSubmitted(true);
  } catch (error) {
    if (error.name === "TypeError") {
      setErrors({ submit: "Network error. Please check your connection." });
    } else {
      setErrors({ submit: "An unexpected error occurred." });
    }
  } finally {
    setIsSubmitting(false);
  }
};
```

### Server-Side Validation

Implement server-side validation that matches client-side rules:

```javascript
// Example Node.js/Express validation
const validateContactForm = (data) => {
  const errors = {};

  if (!data.firstName || data.firstName.length < 2) {
    errors.firstName = "First name must be at least 2 characters";
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (
    !data.phone ||
    !/^[\+]?[1-9][\d]{0,15}$/.test(data.phone.replace(/[\s\-\(\)]/g, ""))
  ) {
    errors.phone = "Please enter a valid phone number";
  }

  return errors;
};
```

## 🔒 Security Considerations

### Rate Limiting

Implement rate limiting to prevent spam:

```javascript
// Example rate limiting (Express.js)
const rateLimit = require("express-rate-limit");

const contactFormLimit = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many contact form submissions, please try again later.",
});

app.post("/api/contact", contactFormLimit, handleContactForm);
```

### Input Sanitization

Sanitize all input data:

```javascript
const DOMPurify = require("isomorphic-dompurify");

const sanitizeInput = (data) => ({
  firstName: DOMPurify.sanitize(data.firstName),
  lastName: DOMPurify.sanitize(data.lastName),
  email: data.email.toLowerCase().trim(),
  phone: data.phone.replace(/[^+\d\s\-\(\)]/g, ""),
  company: DOMPurify.sanitize(data.company),
  message: DOMPurify.sanitize(data.message),
});
```

### CORS Configuration

Configure CORS for your API:

```javascript
// Express.js CORS configuration
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:3000", "https://yourdomain.com"],
    methods: ["POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
```

## 🔧 Implementation Examples

### Node.js/Express Implementation

```javascript
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();

app.use(express.json());

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, company, interest, message } =
      req.body;

    // Validate input
    const errors = validateContactForm(req.body);
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        error: "validation_error",
        message: "Please check your input",
        details: errors,
      });
    }

    // Save to database
    const contact = await saveContact({
      firstName,
      lastName,
      email,
      phone,
      company,
      interest,
      message,
    });

    // Send notification email
    await sendNotificationEmail(contact);

    res.json({
      success: true,
      message: "Contact form submitted successfully",
      id: contact.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({
      success: false,
      error: "server_error",
      message: "Internal server error",
    });
  }
});

// Newsletter endpoint
app.post("/api/newsletter", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({
        success: false,
        error: "validation_error",
        message: "Please enter a valid email address",
      });
    }

    // Check if already subscribed
    const existing = await findSubscriber(email);
    if (existing) {
      return res.status(409).json({
        success: false,
        error: "duplicate_email",
        message: "Email already subscribed",
      });
    }

    // Subscribe to newsletter
    const subscription = await subscribeToNewsletter(email);

    res.json({
      success: true,
      message: "Successfully subscribed to newsletter",
      subscriptionId: subscription.id,
    });
  } catch (error) {
    console.error("Newsletter error:", error);
    res.status(500).json({
      success: false,
      error: "server_error",
      message: "Internal server error",
    });
  }
});
```

### Next.js API Routes Implementation

```javascript
// pages/api/contact.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const formData = req.body;

    // Process form data
    const result = await processContactForm(formData);

    res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: result
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
}

// pages/api/newsletter.js
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { email } = req.body;

    // Process newsletter subscription
    await subscribeToNewsletter(email);

    res.status(200).json({
      success: true,
      message: 'Successfully subscribed'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Subscription failed'
    });
  }
}
```

### Third-Party Service Integration

```javascript
// Example: Mailchimp integration
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX,
});

const subscribeToNewsletter = async (email) => {
  try {
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_LIST_ID,
      {
        email_address: email,
        status: "subscribed",
      },
    );
    return response;
  } catch (error) {
    throw new Error("Failed to subscribe to newsletter");
  }
};
```

## 🧪 Testing API Integration

### Unit Tests

```javascript
// Contact form submission test
test("should submit contact form successfully", async () => {
  const mockFormData = {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+1234567890",
    company: "Test Corp",
    interest: "membership",
    message: "Test message",
  };

  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(mockFormData),
  });

  expect(response.status).toBe(200);
  const data = await response.json();
  expect(data.success).toBe(true);
});
```

### Integration Tests

```javascript
// End-to-end form submission test
describe("Contact Form Integration", () => {
  test("should handle form submission flow", async () => {
    // Fill form
    await fillContactForm(validFormData);

    // Submit form
    await clickSubmitButton();

    // Verify success message
    await waitForSuccessMessage();

    // Verify API call was made
    expect(mockApiCall).toHaveBeenCalledWith(validFormData);
  });
});
```

This comprehensive API guide provides everything needed to integrate the Landing Page forms with your backend systems.

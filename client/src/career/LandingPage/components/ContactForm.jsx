import React, { useState } from "react";

const ContactForm = () => {
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

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) =>
    /^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/[\s\-\(\)]/g, ""));

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    else if (formData.firstName.length < 2) newErrors.firstName = "Must be at least 2 characters";

    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    else if (formData.lastName.length < 2) newErrors.lastName = "Must be at least 2 characters";

    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!validateEmail(formData.email)) newErrors.email = "Invalid email";

    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    else if (!validatePhone(formData.phone)) newErrors.phone = "Invalid phone number";

    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.interest) newErrors.interest = "Select an interest";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    else if (formData.message.length < 10) newErrors.message = "Minimum 10 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await new Promise((res) => setTimeout(res, 1500)); // simulate delay
      setIsSubmitted(true);
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
    } catch (err) {
      console.error("Submit error", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-5">
        <div className="mb-3">
          <svg width="60" height="60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="30" fill="#28a745" />
            <path d="M20 30L26 36L40 22" stroke="white" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        <h3 className="text-success">Thank You!</h3>
        <p>Your message has been sent successfully. We'll contact you soon.</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h2>Get Started Today</h2>
        <p className="text-muted">
          Fill out the form and our team will contact you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">
              First Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              className={`form-control ${errors.firstName && "is-invalid"}`}
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Last Name <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              className={`form-control ${errors.lastName && "is-invalid"}`}
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Email <span className="text-danger">*</span>
            </label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email && "is-invalid"}`}
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Phone <span className="text-danger">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              className={`form-control ${errors.phone && "is-invalid"}`}
              value={formData.phone}
              onChange={handleInputChange}
            />
            {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Company <span className="text-danger">*</span>
            </label>
            <input
              type="text"
              name="company"
              className={`form-control ${errors.company && "is-invalid"}`}
              value={formData.company}
              onChange={handleInputChange}
            />
            {errors.company && <div className="invalid-feedback">{errors.company}</div>}
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Area of Interest <span className="text-danger">*</span>
            </label>
            <select
              name="interest"
              className={`form-select ${errors.interest && "is-invalid"}`}
              value={formData.interest}
              onChange={handleInputChange}
            >
              <option value="">-- Select --</option>
              <option value="membership">Membership Management</option>
              <option value="events">Event Management</option>
              <option value="community">Community Building</option>
              <option value="analytics">Data & Analytics</option>
              <option value="training">Training & Development</option>
              <option value="other">Other</option>
            </select>
            {errors.interest && <div className="invalid-feedback">{errors.interest}</div>}
          </div>

          <div className="col-12">
            <label className="form-label">
              Message <span className="text-danger">*</span>
            </label>
            <textarea
              name="message"
              rows="4"
              className={`form-control ${errors.message && "is-invalid"}`}
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
          </div>
        </div>

        <div className="mt-4 text-center">
          <button
            type="submit"
            className="btn btn-primary px-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner-border spinner-border-sm me-2"></span>
                Sending...
              </>
            ) : (
              <>
                Send Message{" "}
                <svg
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="ms-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                >
                  <path d="M1 8h14M8 1l7 7-7 7" stroke="white" strokeWidth="2" />
                </svg>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

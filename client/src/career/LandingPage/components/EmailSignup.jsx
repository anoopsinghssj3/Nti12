import React, { useState } from "react";

const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

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
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Email signup:", email);
      setIsSubmitted(true);

      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 3000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (error) setError("");
  };

  if (isSubmitted) {
    return (
      <div className="email-signup-success" role="status">
        <div className="success-icon-small">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="10" cy="10" r="10" fill="#28a745" />
            <path
              d="M6 10L8 12L14 6"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="success-text">Thank you for subscribing!</span>
      </div>
    );
  }

  return (
    <div className="email-signup">
      <h3 className="email-signup-title">Stay up to date</h3>
      <form className="email-signup-form" onSubmit={handleSubmit} noValidate>
        <label htmlFor="email" className="visually-hidden">
          Email Address
        </label>
        <div className="email-input-group">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            className={`email-input ${error ? "error" : ""}`}
            placeholder="Your email address"
            disabled={isSubmitting}
            aria-label="Email address"
            required
          />
          <button
            type="submit"
            className="email-submit-btn"
            disabled={isSubmitting || !email.trim()}
            aria-label="Subscribe"
          >
            {isSubmitting ? (
              <div className="btn-spinner" aria-hidden="true"></div>
            ) : (
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 1L15 8L8 15M15 8H1"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
        {error && (
          <span className="email-error-message" role="alert">
            {error}
          </span>
        )}
      </form>
    </div>
  );
};

export default EmailSignup;

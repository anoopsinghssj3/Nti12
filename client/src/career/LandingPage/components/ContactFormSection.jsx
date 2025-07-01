import React from "react";
import ContactForm from "./ContactForm";

const ContactFormSection = () => {
  return (
    <section className="contact-form-section">
      <div className="contact-form-background">
        <div className="contact-form-pattern"></div>
      </div>
      <div className="contact-form-wrapper">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactFormSection;

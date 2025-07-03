import React from "react";
import ContactForm from "./ContactForm";

const ContactFormSection = () => {
  return (
    <section className="position-relative bg-light py-5 contact-form-section">
      {/* Background pattern / image layer */}
      <div className="position-absolute top-0 start-0 w-100 h-100 contact-form-background z-n1">
        <div className="contact-form-pattern"></div>
      </div>

      {/* Main form content */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;

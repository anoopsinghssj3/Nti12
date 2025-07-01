import React from "react";
import axios from "axios";

function EnqueryFormStk() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Send data to backend API
      const response = await axios.post("/enquiry", data);
      console.log(data);

      if (response.status === 200) {
        console.log("Thank you! Your enquiry has been submitted.");
        e.target.reset();

        // Create WhatsApp message
        const whatsappMsg = `Enquiry Details:\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nCourse: ${data.course}\nBranch: ${data.branch}\nMessage: ${data.message || "N/A"}`;

        // Format WhatsApp link
        const phoneNumber = "9174253016";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMsg)}`;

        // Open WhatsApp
        window.open(whatsappUrl, "_blank");
      } else {
        console.log("Failed to submit enquiry. Please try again.");
      }
    } catch (error) {
      console.log("Error submitting enquiry. Please check your connection.");
    }
  };

  return (
    <>
      <div
        id="enquiry-footer"
        className="fixed-bottom bg-dark border-top p-3 shadow-sm"
        style={{ zIndex: 1050 }}
      >
        <form
          id="enquiryForm"
          className="row g-2 align-items-center justify-content-center"
          onSubmit={handleSubmit}
        >
          <div className="col-auto">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="col-auto">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="col-auto">
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Phone"
              required
            />
          </div>

          <div className="col-auto">
            <select
              name="course"
              className="form-select"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select Course
              </option>
              <option value="Web Development">Web Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Python Programming">Python Programming</option>
            </select>
          </div>

          <div className="col-auto">
            <select
              name="branch"
              className="form-select"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Select Branch
              </option>
              <option value="New Delhi">New Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chennai">Chennai</option>
            </select>
          </div>

          <div className="col-auto">
            <textarea
              style={{ height: "1rem" }}
              name="message"
              className="form-control"
              placeholder="Your Message (optional)"
            ></textarea>
          </div>

          <div className="col-auto">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EnqueryFormStk;

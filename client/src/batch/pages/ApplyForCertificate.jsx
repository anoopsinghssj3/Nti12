import React from "react";
import "../styles/Certificate2.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { domainRoute } from "../../utils/domain.js";

export default function ApplyForCertificate() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(`${domainRoute}/api/v1/apply-for-certificate`, {
        name: data.name,
        email: data.email,
        phone: data.phone,
        center: data.center,
        course: data.course,
        studentId: data.studentId,
      });
      alert("Application submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    reset();
  };

  return (
    <div
      id="apply-for-certificate"
      className="
        d-flex
        flex-column
        flex-md-row
        w-75
        w-md-75
        justify-content-center
      "
    >
      {/* Left Section */}
      <div
        className="
          left-section
          p-5
          bg-danger
          w-100
          w-md-25
          mb-4
          mb-md-0
          d-flex
          align-items-center
          justify-content-center
        "
      >
        <img
          loading="lazy"
          src="./src/assets/certificate.jpeg"
          alt="Certificate"
          className="img-fluid"
          style={{ maxHeight: "55vh", objectFit: "cover" }}
        />
      </div>

      {/* Right Section */}
      <div
        className="
          right-section
          w-100
          w-md-75
          d-flex
          flex-column
          justify-content-evenly
          align-items-center
          px-4
          px-md-5
        "
      >
        <h5 className="text-primary fw-bold">Apply for Certificate</h5>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                placeholder="Enter Name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>
            <div className="col-md-6">
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                placeholder="Enter Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Invalid email",
                  },
                })}
              />
              {errors.email && (
                <div className="invalid-feedback">{errors.email.message}</div>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <input
                type="tel"
                className={`form-control ${errors.phone ? "is-invalid" : ""}`}
                placeholder="Enter Phone Number"
                {...register("phone", { required: "Phone is required" })}
              />
              {errors.phone && (
                <div className="invalid-feedback">{errors.phone.message}</div>
              )}
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className={`form-control ${
                  errors.studentId ? "is-invalid" : ""
                }`}
                placeholder="Enter NTI Student Id Number"
                {...register("studentId", {
                  required: "Student ID is required",
                })}
              />
              {errors.studentId && (
                <div className="invalid-feedback">
                  {errors.studentId.message}
                </div>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-6 mb-3 mb-md-0">
              <select
                className={`form-select ${errors.center ? "is-invalid" : ""}`}
                {...register("center", { required: "Center is required" })}
              >
                <option value="">Choose a Center</option>
                <option>Noida</option>
                <option>Pune</option>
                <option>Rewa</option>
              </select>
              {errors.center && (
                <div className="invalid-feedback">{errors.center.message}</div>
              )}
            </div>
            <div className="col-md-6">
              <select
                className={`form-select ${errors.course ? "is-invalid" : ""}`}
                {...register("course", { required: "Course is required" })}
              >
                <option value="">Select Course</option>
                <option>Web Development</option>
                <option>Digital Marketing</option>
                <option>Business Analyst</option>
                <option>Software Testing</option>
                <option>Automation Testing</option>
              </select>
              {errors.course && (
                <div className="invalid-feedback">{errors.course.message}</div>
              )}
            </div>
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-between">
            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
              Send Request
            </button>
            <button
              type="button"
              disabled={isSubmitting}
              className="btn btn-secondary"
              onClick={() => reset()}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

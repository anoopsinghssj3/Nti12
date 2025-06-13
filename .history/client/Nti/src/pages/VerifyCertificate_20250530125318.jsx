import React from 'react';
import "../styles/Certificate2.css";
import { useForm } from 'react-hook-form';

export default function VerifyCertificate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = data => {
    console.log('Form Data:', data);
    reset();
  };

  return (
    <div
      id="verify-certificate"
      className="
        d-flex
        flex-column
        flex-md-row
        w-75
        w-md-75
        justify-content-center
        mx-auto
      "
    >
      {/* Left Section */}
      <div
        className="
          left-section
          p-5
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
          src="./src/assets/certificate.jpeg"
          alt="Certificate"
          className="img-fluid"
          style={{ maxHeight: '55vh', objectFit: 'cover' }}
        />
      </div>

      {/* Right Section */}
      <div
        className="
          right-section
          w-100
          w-md-50
          d-flex
          flex-column
          justify-content-evenly
          align-items-center
          p-4
          p-md-5
          bg-light
          shadow
          rounded
        "
      >
        <h5 className="text-primary fw-bold mb-4 text-center">
          Verify Certificate
        </h5>
        <form onSubmit={handleSubmit(onSubmit)} className="w-100">
          <div className="row mb-3">
            <div className="col-12">
              <input
                type="text"
                className="form-control"
                placeholder="Enter NTI Student Id Number"
                {...register('studentId', { required: 'Student ID is required' })}
              />
              {errors.studentId && (
                <p className="text-danger small">{errors.studentId.message}</p>
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center w-100">
            <button
              type="submit"
              className="btn btn-primary w-100 w-md-25"
            >
              View
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

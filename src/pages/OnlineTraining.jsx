import React from 'react';
import "../styles/OnlineTraining.css";
import { useForm } from 'react-hook-form';

export default function OnlineTraining() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    reset();
  };

  return (
    <div className="container text-white" id="online-training">
      <div className="row justify-content-center py-5">
        <div className="col-lg-8">
          <div className="bg-light p-5 shadow-lg rounded content-div">
            <h4 className="mb-4 fw-bold text-white shadow-lg fs-3 text-decoration-underline">
              Online Registration Form
            </h4>
            <p className="mb-4">Register online today and take the first step towards success!</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row g-3">
                {/* Name */}
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter Your Name"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <p className="text-warning small">{errors.name.message}</p>}
                </div>

                {/* Phone */}
                <div className="col-md-6">
                  <label htmlFor="phone" className="form-label">Mobile Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone" maxLength="10"
                    minLength="10"

                    placeholder="Enter Mobile Number"
                    {...register('phone', { required: 'Mobile number is required' })}
                  />
                  {errors.phone && <p className="text-warning small">{errors.phone.message}</p>}
                </div>

                {/* Email */}
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter Email Address"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  {errors.email && <p className="text-warning small">{errors.email.message}</p>}
                </div>

                {/* Course */}
                <div className="col-md-6">
                  <label htmlFor="course" className="form-label">Course</label>
                  <select
                    className="form-select"
                    id="course"
                    {...register('course', { required: 'Course is required' })}
                  >
                    <option value="">Select Course</option>
                    <option>Web Development</option>
                    <option>Data Science</option>
                    <option>Python</option>
                    <option>Java</option>
                  </select>
                  {errors.course && <p className="text-warning small">{errors.course.message}</p>}
                </div>

                {/* Branch */}
                <div className="col-md-6">
                  <label htmlFor="branch" className="form-label">Branch</label>
                  <select
                    className="form-select"
                    id="branch"
                    {...register('branch', { required: 'Branch is required' })}
                  >
                    <option value="">Select Branch</option>
                    <option>Noida</option>
                    <option>Delhi</option>
                    <option>Gurgaon</option>
                  </select>
                  {errors.branch && <p className="text-warning small">{errors.branch.message}</p>}
                </div>

                {/* Address */}
                <div className="col-12">
                  <label htmlFor="address" className="form-label">Address</label>
                  <textarea
                    className="form-control"
                    id="address"
                    placeholder="Enter Address"
                    rows="2"
                    {...register('address', { required: 'Address is required' })}
                  ></textarea>
                  {errors.address && <p className="text-warning small">{errors.address.message}</p>}
                </div>

                {/* City */}
                <div className="col-md-6">
                  <label htmlFor="city" className="form-label">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    placeholder="Enter City Name"
                    {...register('city', { required: 'City is required' })}
                  />
                  {errors.city && <p className="text-warning small">{errors.city.message}</p>}
                </div>

                {/* Country */}
                <div className="col-md-6">
                  <label htmlFor="country" className="form-label">Country</label>
                  <input
                    type="text"
                    className="form-control"
                    id="country"
                    placeholder="Enter Country Name"
                    {...register('country', { required: 'Country is required' })}
                  />
                  {errors.country && <p className="text-warning small">{errors.country.message}</p>}
                </div>

                {/* Pincode */}
                <div className="col-md-6">
                  <label htmlFor="pincode" className="form-label">Pin Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pincode"
                    placeholder="Enter Pin Code"
                    {...register('pincode', { required: 'Pin Code is required' })} maxLength="6"
                    minLength="6"
                  />
                  {errors.pincode && <p className="text-warning small">{errors.pincode.message}</p>}
                </div>

                {/* Submit */}
                <div className="col-12 text-center mt-4">
                  <button type="submit" className="btn btn-primary px-5">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

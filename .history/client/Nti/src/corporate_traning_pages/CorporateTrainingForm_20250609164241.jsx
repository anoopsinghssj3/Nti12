import React from 'react';
import "../corporate_traning_styles/CorporateTrainingForm.css";
import { useForm } from 'react-hook-form';

export default function CorporateTrainingForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function PrintForm() {
    const handlePrint = (e) => {
      e.preventDefault();
      window.print();
    };


    return (
      <div id="corporate-training-form" className="container-fluid p-0">
        <div className="row">
          {/* Left Section */}
          <div className="col-lg-6 text-section d-flex flex-column justify-content-center p-5 text-white">
            <h2>
              Level Up Your <span className="highlight">Workforce</span>,<br />
              Invest In Skills For a <span className="highlight">Future-Proof Growth</span>
            </h2>
            <p>
              By investing in your team’s skills today,<br />
              you’re building a strong foundation for future success.
            </p>
            <button className="btn btn-warning fw-bold mt-3">📥 DOWNLOAD BROCHURE</button>
          </div>

          {/* Right Section */}
          <div className="col-lg-6 form-section d-flex align-items-center justify-content-center py-4">
            <form
              className="p-4 shadow rounded w-100 text-white"
              style={{ maxWidth: '500px' }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <h5 className="text-center mb-4 text-white border-bottom pb-2 fw-bold fs-3">
                ENQUIRY NOW
              </h5>

              <div className="row p-3">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    id="name"
                    className="form-control"
                    placeholder="Name"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && <p className="text-warning small">{errors.name.message}</p>}
                </div>

                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: 'Invalid email',
                      },
                    })}
                  />
                  {errors.email && <p className="text-warning small">{errors.email.message}</p>}
                </div>
              </div>

              <div className="d-flex justify-content-center gap-3 flex-wrap px-3">
                <div className="mb-3" style={{ flex: '1', minWidth: '200px', maxWidth: '300px' }}>
                  <label htmlFor="mobile" className="form-label">
                    Mobile
                  </label>
                  <input
                    id="mobile"
                    className="form-control"
                    placeholder="Phone Number"
                    {...register('mobile', { required: 'Mobile is required' })}
                    maxLength="10"
                    minLength="10"
                  />
                  {errors.mobile && <p className="text-warning small">{errors.mobile.message}</p>}
                </div>

                <div className="mb-3" style={{ flex: '1', minWidth: '200px', maxWidth: '300px' }}>
                  <label htmlFor="center" className="form-label">
                    Center
                  </label>
                  <select
                    id="center"
                    className="form-select"
                    {...register('center', { required: 'Center is required' })}
                  >
                    <option value="">Select Center</option>
                    <option>Gurugram</option>
                    <option>Delhi</option>
                  </select>
                  {errors.center && <p className="text-warning small">{errors.center.message}</p>}
                </div>
              </div>

              <div className="mb-3 px-3">
                <label htmlFor="course">Course</label>
                <select
                  id="course"
                  className="form-select"
                  {...register('course', { required: 'Course is required' })}
                >
                  <option value="">Select Course</option>
                  <option>Web Development</option>
                  <option>Data Science</option>
                </select>
                {errors.course && <p className="text-warning small">{errors.course.message}</p>}
              </div>

              <div className="mb-3 px-3">
                <label htmlFor="companyName">Company Name</label>
                <input
                  id="companyName"
                  className="form-control"
                  placeholder="Company Name"
                  {...register('companyName', { required: 'Company Name is required' })}
                />
                {errors.companyName && <p className="text-warning small">{errors.companyName.message}</p>}
              </div>

              <div className="mb-3 px-3">
                <label htmlFor="anyQuery">Any Query?</label>
                <textarea
                  id="anyQuery"
                  className="form-control"
                  rows="3"
                  placeholder="Write your query..."
                  {...register('anyQuery')}
                />
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary w-50">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
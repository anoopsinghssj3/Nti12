import React from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';

function Payment() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const courseName = state?.course || "Selected Course";
  const courseFees = state?.fees || "₹4999";

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    if (data.transactionId.trim().length < 6) {
      alert("Please enter a valid Transaction ID.");
      return;
    }

    // Navigate to receipt page (email/WhatsApp logic would go in backend)
    navigate("/receipt", {
      state: {
        ...data,
        course: courseName,
        amount: courseFees,
        date: new Date().toLocaleDateString(),
      }
    });
  };

  return (
    <div className='container py-5'>
      <h2 className="text-center mb-3">Scan & Pay for <span className="text-primary">{courseName}</span></h2>

      <div className="row justify-content-center mb-4">
        <div className="col-md-6 text-center">
          <img loading="lazy"
            src="/images/payment-qr-code.png" 
            alt="Scan to Pay"
            className="img-fluid mb-3"
            style={{ maxWidth: "240px", border: "1px solid #ddd", borderRadius: "10px", padding: "10px" }}
          />
          <p><strong>Amount:</strong> {courseFees}</p>
          <p className="text-muted">Scan this QR code using PhonePe / GPay / Paytm to pay directly.</p>
        </div>
      </div>

      {/* Bank Details */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-6 bg-light p-3 rounded border">
          <h5>Bank Transfer Details (NEFT/IMPS)</h5>
          <p><strong>Account Holder:</strong> NTI Tech Academy</p>
          <p><strong>Bank Name:</strong> HDFC Bank</p>
          <p><strong>Account Number:</strong> 123456789012</p>
          <p><strong>IFSC Code:</strong> HDFC0001234</p>
        </div>
      </div>

      {/* Form */}
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit(onSubmit)} className="needs-validation d-grid gap-3">

            <input 
              type="text" 
              placeholder="Full Name" 
              {...register("name", { required: true })} 
              className="form-control" 
            />
            {errors.name && <small className="text-danger">Name is required.</small>}

            <input 
              type="email" 
              placeholder="Email" 
              {...register("email", { required: true })} 
              className="form-control" 
            />
            {errors.email && <small className="text-danger">Valid email is required.</small>}

            <input 
              type="tel" 
              placeholder="WhatsApp Number" 
              {...register("phone", { required: true, minLength: 10 })} 
              className="form-control" 
            />
            {errors.phone && <small className="text-danger">Phone number is required.</small>}

            <input 
              type="text" 
              placeholder="Transaction ID" 
              {...register("transactionId", { required: true })} 
              className="form-control" 
            />
            {errors.transactionId && <small className="text-danger">Transaction ID is required.</small>}

            <button type="submit" className="btn btn-success w-100">Submit Payment Info</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;

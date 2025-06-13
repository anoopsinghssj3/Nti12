import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Payment() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const courseName = state?.course || "Selected Course";
  const courseFees = state?.fees || "₹4999";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    transactionId: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.transactionId.length < 6) {
      alert("Invalid Transaction ID.");
      return;
    }

    // Navigate to receipt with all info
    navigate("/receipt", {
      state: {
        ...formData,
        course: courseName,
        amount: courseFees,
        date: new Date().toLocaleDateString(),
      }
    });
  };

  return (
    <div className='container py-5 text-center'>
      <h2>Scan & Pay for <span className="text-primary">{courseName}</span></h2>

      <img loading="lazy" src="../../public\images\qr.jpg" alt="Scan QR" style={{ width: "200px" }} className="my-3" />
      <p><strong>Amount:</strong> {courseFees}</p>

      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center gap-3" style={{ maxWidth: "400px", margin: "0 auto" }}>
        <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} className="form-control" />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="form-control" />
        <input type="tel" name="phone" placeholder="WhatsApp Number" required onChange={handleChange} className="form-control" />
        <input type="text" name="transactionId" placeholder="Payment Transaction ID" required onChange={handleChange} className="form-control" />

        <button type="submit" className="btn btn-success w-100">Submit Payment</button>
      </form>
    </div>
  );
}

export default Payment;

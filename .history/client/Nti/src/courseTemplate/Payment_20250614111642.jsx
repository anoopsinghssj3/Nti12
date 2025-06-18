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

    if (formData.transactionId.trim().length < 6) {
      alert("Please enter a valid Transaction ID.");
      return;
    }

    // Navigate to receipt page with payment info
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
      <h2 className="mb-3">Scan & Pay for <span className="text-primary">{courseName}</span></h2>

      {/* QR Code Image */}
      <img 
        src="/images/payment-qr-code.png" // ← place your QR code image in public/images/
        alt="Scan to Pay" 
        style={{ width: "220px", border: "1px solid #ddd", padding: "10px", borderRadius: "12px" }} 
        className="my-3" 
      />

      <p className="mt-2"><strong>Amount:</strong> {courseFees}</p>
      <p className="text-muted mb-4">Scan the QR code above to make the payment via UPI (PhonePe / GPay / Paytm).</p>

      {/* Payment Confirmation Form */}
      <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center gap-3" style={{ maxWidth: "400px", margin: "0 auto" }}>
        <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} className="form-control" />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="form-control" />
        <input type="tel" name="phone" placeholder="WhatsApp Number" required onChange={handleChange} className="form-control" />
        <input type="text" name="transactionId" placeholder="Payment Transaction ID" required onChange={handleChange} className="form-control" />

        <button type="submit" className="btn btn-success w-100">Submit Payment Info</button>
      </form>
    </div>
  );
}

export default Payment;

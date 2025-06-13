const handleRazorpay = async () => {
  const res = await fetch("https://your-backend.com/api/create-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      course: courseName,
      amount: courseFees.replace(/[₹,]/g, "")
    })
  });

  const data = await res.json();

  const options = {
    key: "YOUR_RAZORPAY_KEY_ID",
    amount: data.amount,
    currency: "INR",
    name: "NTI Tech Academy",
    description: courseName,
    order_id: data.orderId,
    handler: function (response) {
      navigate("/receipt", {
        state: {
          ...formData,
          course: courseName,
          amount: courseFees,
          transactionId: response.razorpay_payment_id
        }
      });
    },
    prefill: {
      name: formData.name,
      email: formData.email,
      contact: formData.phone
    },
    theme: { color: "#28a745" }
  };

  const razor = new window.Razorpay(options);
  razor.open();
};

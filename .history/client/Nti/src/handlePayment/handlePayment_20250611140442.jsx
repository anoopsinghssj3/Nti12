const handlePayment = async () => {
  const res = await fetch('http://localhost:4000/create-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount: 35000 }) // ₹35000
  });
  const order = await res.json();

  const options = {
    key: 'your_key_id', // from Razorpay dashboard
    amount: order.amount,
    currency: order.currency,
    name: 'Ducat Academy',
    description: 'Course Enrollment',
    order_id: order.id,
    handler: function (response) {
      alert("Payment Success");
      sendReceiptToUser(response); // implement this below
    },
    prefill: {
      name: "Student Name",
      email: "student@example.com",
      contact: "9876543210"
    },
    theme: { color: "#3399cc" }
  };

  const rzp = new window.Razorpay(options);
  rzp.open();
};

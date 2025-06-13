import React from 'react'

function Payment() {
    const handleSubmit = () => {
        console.log("done")
    }
    return (
        <>
            <div>
                <h2>Scan & Pay</h2>
                <img src="./src/assets\qr.jpg" alt="Scan QR to Pay" style={{ width: "200px" }} />
                <p>Amount: ₹4999</p>

                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="tel" placeholder="WhatsApp Number" required />
                    <input type="text" placeholder="Payment Transaction ID" required />
                    <button type="submit">Submit Payment</button>
                </form>
            </div>

        </>

    )
}

export default Payment
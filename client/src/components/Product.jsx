import React from 'react'
import "../styles/Product.css"
import "./data.js"
import { productData } from './data.js'
import axios from "axios"

const checkoutHandler = async (amount) => {

    const { data: keyData } = await axios.get("/api/v1/getKey");
    const { key } = keyData;
    console.log(key)

    const { data: orderdata } = await axios.post("/api/v1/payment/process", { amount });
    const { order } = orderdata;
    console.log(order)

    const options = {
        key: key, // Replace with your Razorpay key_id
        amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: 'INR',
        name: 'Acme Corp',
        description: 'Test Transaction',
        order_id: order.id,
        callback_url: '/api/v1/paymentVerification', // Your success URL
        prefill: {
            name: 'Gaurav Kumar',
            email: 'gaurav.kumar@example.com',
            contact: '9999999999'
        },
        theme: {
            color: '#F37254'
        },
    };

    const rzp = new Razorpay(options);
    rzp.open();

}

function Product() {
    return (
        <div className="products-container">
            {
                productData.map((product) => (
                    < div className="product-card" key={product.id}
                    >
                        <img src={product.image} alt="bag" className='product-image' />
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-price">Price <strong>{product.price}</strong>
                        </p>
                        <button className="pay-button" onClick={() => checkoutHandler(product.price)}> pay {product.price}/-</button>
                    </div>

                ))
            }

        </div >
    )
}

export default Product
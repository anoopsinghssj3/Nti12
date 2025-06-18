import app from "./app.js";
import dotenv from "dotenv";
dotenv.config({ path: "./config/.env" });
import Razorpay from "razorpay";


export const instance = new Razorpay({
    key_id: process.env.RZR_API_KEY,
    key_secret: process.env.RZR_API_SECRET,

});


instance.orders.all().then(console.log).catch(console.error);

app.listen(process.env.PORT, () => {
    console.log(`server running port: ${process.env.PORT}`)
})

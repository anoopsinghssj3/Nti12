import dotenv from "dotenv";
import app from "./app.js";
import connectDb from "./utils/dbConnection.js";

dotenv.config({
  path: "../env",
});

const port = process.env.PORT || 8000;

connectDb()
.then(()=>{
    app.on("error", (err)=>{
        console.error("ERROR:", err);
        throw err
    });

})
.catch((e)=>{
    console.log("Mongo connection failed", e);
})

app.listen(port, () => {
  console.log("Server is running at port", port);
});

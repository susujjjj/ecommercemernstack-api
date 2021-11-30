// console.log("hello2");
const express = require("express");
const app = express();
const mongoose = require("mongoose"); //library 
const dotenv = require("dotenv");
const userRoute = require('./routes/user')

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(()=> console.log("DBConnection Successfull!"))
    .catch((err)=> {
        console.log(err);
});

// app.get("/api/test", () => { //endpoint
//     console.log("test is successfull")
// })
app.use(express.json()); //we can pass any json files

app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});


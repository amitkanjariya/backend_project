import connectDB from "./db/index.js";
import {app} from "./app.js";
import dotenv from "dotenv";
dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.on("error", (error) => {
        console.log("Error!! : ", error);
        throw error;
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at : ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("mongoDB connection failed error ", error)
})


/*
import express from "express";
const app = express();
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        app.on("error", (error) => {
            console.log("Error: " + error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`App is running on port: ${process.env.PORT}`)
        })
    }
    catch(error){
        console.error("Error:" + error);
        throw error;
    }
})()
*/
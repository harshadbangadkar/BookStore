import express from "express";
import mongoose from "mongoose";
import { PORT, mongodb} from "./config.js";
import { Book } from "./models/bookModel.js";
import booksRoute from "./routes/booksRoute.js";
import cors from "cors";

const app=express();
app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.use("/books", booksRoute);


mongoose.connect(mongodb)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((err) => console.error("MongoDB connection error:", err));
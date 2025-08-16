import mongoose from "mongoose";

export const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number, required: true }
},
{
    timestamps: true,
});

export const Book = mongoose.model("Book", BookSchema);


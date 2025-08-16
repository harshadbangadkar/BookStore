import express from 'express';
const router = express.Router();
import { Book } from '../models/bookModel.js';

router.get('/', async (req, res) => { 
    try {
        const books = await Book.find({});
        return res.status(200).json({
            count: books.length,
            data: books,
        });
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ error: "Failed to fetch books" });
    }
});

router.get('/:id', async (req, res) => { 
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }
        return res.status(200).json(book);
    } catch (error) {
        console.error("Error fetching books:", error);
        res.status(500).json({ error: "Failed to fetch books" });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updateData = {};
        const { title, author, publishedYear } = req.body;
        if (title !== undefined) updateData.title = title;
        if (author !== undefined) updateData.author = author;
        if (publishedYear !== undefined) updateData.publishedYear = publishedYear;

        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({ error: "At least one field is required" });
        }

        const book = await Book.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }
        return res.status(200).json(book);
    } catch (error) {
        console.error("Error updating book:", error);
        res.status(500).json({ error: "Failed to update book" });
    }
});

router.post('/', async (req, res) => {
    const { title, author, publishedYear } = req.body;

    try {
        if(!title || !author || !publishedYear) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newBook = new Book({
        title,
        author,
        publishedYear
        });
      const book=await Book.create(newBook);
      res.status(201).json(book);

    } catch (error) {
        console.error("Error creating book:", error);
        res.status(500).json({ error: "Failed to create book" });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ error: "Book not found" });
        }
        return res.status(204).send({ message: "Book Deleted successfully" });
    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({ error: "Failed to delete book" });
    }
});

export default router;
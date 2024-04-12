const { Book, Author } = require('../model/model')

const bookController = {
    // add a book
    addBook: async (req, res) => {
        try {
            const newBook = new Book(req.body);
            const saveBook = await newBook.save();
            if (req.body.author) {

                // if author is exist, find author of book and add that book to author
                const author = await Author.findById(req.body.author);
                await author.updateOne({ $push: { books: saveBook._id } });

            }
            res.status(200).json(saveBook);
        } catch (error) {
            res.status(500).json(error);    // http request code
        }
    },

    // get all book
    getAllAuthor: async (req, res) => {
        try {
            const book = await Book.find().populate("author");
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // get a book
    getABook: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id).populate("author");
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // update book
    updateBook: async (req, res) => {
        try {
            const book = await Book.findById(req.params.id);
            await book.updateOne({ $set: req.body });
            res.status(200).json("Update successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // delete a book
    deleteBook: async (req, res) => {
        try {

            // cause if delete book, that means the author also has to lose a book
            await Author.updateMany(
                { books: req.params.id },
                { $pull: { books: req.params.id } }
            );
            await Book.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete successfully!");

        } catch (error) {
            res.status(500).json(error);
        }
    }
};

module.exports = bookController;
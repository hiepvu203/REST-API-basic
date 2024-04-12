const { Book, Author } = require('../model/model')

const authorController = {
    // add author
    addAuthor: async (req, res) => {
        try {
            const newAuthor = new Author(req.body);
            const saveAuthor = await newAuthor.save();
            res.status(200).json(saveAuthor);
        } catch (error) {
            res.status(500).json(error);    // http request code
        }
    },

    // get all author
    getAllAuthor: async (req, res) => {
        try {
            const author = await Author.find();
            res.status(200).json(author);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // get an author
    getAnAuthor: async(req, res) => {
        try {
            const author = await Author.findById(req.params.id).populate("books");
            res.status(200).json(author);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // update author
    updateAuthor: async (req, res) => {
        try {
            const author = await Author.findById(req.params.id);
            await author.updateOne({ $set: req.body });
            res.status(200).json("Update successfully!");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // DELETE AN AUTHOR
    deleteAuthor: async (req, res) => {
        try {
            await Author.updateMany(
                { author: req.params.id },
                { author: null }
            );
            await Author.findByIdAndDelete(req.params.id);
            res.status(200).json("Delete successfully!");

        } catch (error) {
            res.status(500).json(error);
        }
    }
};

module.exports = authorController;
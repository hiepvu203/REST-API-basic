const bookController = require("../controller/BookController");

const router = require("express").Router();

// add a author

router.post("/", bookController.addBook);

// get all author

router.get("/", bookController.getAllAuthor); 

// get a book

router.get("/:id", bookController.getABook);

// update a book

router.put("/:id", bookController.updateBook);

//delete a book

router.delete("/:id", bookController.deleteBook);

module.exports = router;
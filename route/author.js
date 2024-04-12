const authorController = require("../controller/AuthorController");

const router = require("express").Router();

// add author

router.post("/", authorController.addAuthor);

// get all author

router.get("/", authorController.getAllAuthor); 

// get an author

router.get("/:id", authorController.getAnAuthor);

// update author

router.put("/:id", authorController.updateAuthor);

// delete a author

router.delete("/:id", authorController.deleteAuthor);

module.exports = router;
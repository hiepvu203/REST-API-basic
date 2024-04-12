const authorRouter = require("./author")
const bookRouter = require("./book")

function route(app) {
    app.use("/author", authorRouter);
    app.use("/book", bookRouter);
}

module.exports = route
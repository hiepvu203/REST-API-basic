const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const morgan = require("morgan");
var bodyParser = require("body-parser");
const dotenv = require("dotenv");
const route = require('./route/mainRoute');

const app = express();
const port = 3000;

dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected!'));

app.use(morgan("common"));
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" }));

app.get('/', (req, res) => {
    res.send("Hello World");
})

// routes
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
})
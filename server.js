const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to LM Policy Manager API" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`express server running on port ${PORT}.`);
});
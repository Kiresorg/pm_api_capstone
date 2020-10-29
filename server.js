const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const policyRouter = require("./routes/policyRouter");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/policymgrdb', {
    useNewUrlParser: true 
});

const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.get("/", (req, res) => {
    res.json({ message: "Welcome to LM Policy Manager API" });
});

app.use("/api/policies", policyRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`express server running on port ${PORT}.`);
});
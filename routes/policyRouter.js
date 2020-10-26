const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
    res.send("Policy home page");
})

router.post("/", function(req, res) {
    res.json({requestBody: req.body});
})

module.exports = router;
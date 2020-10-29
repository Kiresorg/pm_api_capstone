const express = require("express");
const router = express.Router();
const controller = require("../controllers/policyController");

router.get("/", function (req, res) {
    res.send("Policy home page");
})

router.post("/", controller.create_policy_post);

module.exports = router;
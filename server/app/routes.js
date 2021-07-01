const express = require("express");
const router = express.Router();
const controller = require("./controller");
router.post("/api/login", controller.userLogin);

module.exports = router;

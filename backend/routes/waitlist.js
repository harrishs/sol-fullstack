const express = require("express");

const waitlistController = require("../controllers/waitlist");

const router = express.Router();

router.post("/register", waitlistController.postRegister);

module.exports = router;

const express = require("express");

const waitlistController = require("../controllers/waitlist");

const router = express.Router();

router.post("/register", waitlistController.postRegister);
router.post("/login", waitlistController.postLogin);

module.exports = router;

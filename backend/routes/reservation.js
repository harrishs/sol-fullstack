const express = require("express");

const reservationController = require("../controllers/reservation");

const router = express.Router();

router.get("/reservations", reservationController.getReservations);
router.post("reservation", reservationController.postReservation);

module.exports = router;

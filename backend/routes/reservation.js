const express = require("express");

const reservationController = require("../controllers/reservation");

const router = express.Router();

router.get("/", reservationController.getReservations);
router.post("/", reservationController.postReservation);
router.get("/:reservationId", reservationController.getReservation);
router.post("/:reservationId", reservationController.postEditReservation);
router.delete("/:reservationId", reservationController.deleteReservation);

module.exports = router;

const express = require("express");

const certController = require("../controllers/cert");

const router = express.Router();

router.get("/", certController.getReservations);
router.post("/", certController.postReservation);
router.get("/:certId", certController.getReservation);
router.post("/:certId", certController.postEditReservation);
router.delete("/:certId", certController.deleteReservation);

module.exports = router;

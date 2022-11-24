const Reservation = require("../models/reservation");

exports.getReservations = (req, res, next) => {
  Reservation.find()
    .then((reservations) => {
      res.status(200).json({ reservations });
    })
    .catch((err) => res.status(400).json({ err }));
};

exports.postReservation = (req, res, next) => {
  const owner = req.body.owner;
  const grpSize = req.body.grpSize;
  const reservation = new Reservation({
    owner,
    grpSize,
  });
  reservation
    .save()
    .then((reservation) => {
      res.status(201).json({ reservation });
    })
    .catch((err) => res.status(400).json({ err }));
};

exports.getReservation = (req, res, next) => {
  const reservationId = req.params.reservationId;
  Reservation.findById(reservationId)
    .then((reservation) => {
      res.status(200).json({ reservation });
    })
    .catch((err) => res.status(400).json({ err }));
};

exports.postEditReservation = (req, res, next) => {
  const reservationId = req.params.reservationId;
  const grpSize = req.body.grpSize;
  const reservation = new Reservation({
    owner,
    grpSize,
  });
  Reservation.findByIdAndUpdate(reservationId, reservation)
    .then((reservation) => {
      res.status(201).json({ reservation });
    })
    .catch((err) => res.status(400).json({ err }));
};

exports.deleteReservation = (req, res, next) => {
  const reservationId = req.params.reservationId;
  Reservation.findByIdAndDelete(reservationId)
    .then(() => res.status(200).json({ status: "Reservation Deleted" }))
    .catch((err) => res.status(400).json({ err }));
};

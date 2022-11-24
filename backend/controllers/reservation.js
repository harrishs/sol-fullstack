const Reservation = require("../models/reservation");

exports.getReservations = (req, res, next) => {
  res.status(200).json({ reservations: [{ title: "first", content: "reso" }] });
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
    .then((result) => {
      res.status(201).json({ reservation: result });
    })
    .catch((err) => res.status(400).json({ err }));
};

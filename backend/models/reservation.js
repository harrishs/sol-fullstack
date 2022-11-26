const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reservationSchema = new Schema({
  owner: {
    type: String,
    required: true,
  },
  grpSize: {
    type: Number,
    required: true,
  },
  bookingTime: {
    type: Date,
    default: Date.now(),
  },
  waitlistId: {
    type: Schema.Types.ObjectId,
    ref: "Waitlist",
    required: true,
  },
});

module.exports = mongoose.model("Reservation", reservationSchema);

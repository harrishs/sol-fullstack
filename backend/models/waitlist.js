const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const waitlistSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Offline",
  },
  reservations: [
    {
      reservationId: {
        type: Schema.Types.ObjectId,
        ref: "Reservation",
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Waitlist", waitlistSchema);

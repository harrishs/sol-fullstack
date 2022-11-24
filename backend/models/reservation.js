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
    default: 1,
  },
});

module.exports = mongoose.model("Reservsation", reservationSchema);

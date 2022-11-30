const Waitlist = require("../models/waitlist");
const bcrypt = require("bcryptjs");
require("dotenv").config();
const salt = 12;
const jwt = require("jsonwebtoken");

exports.postRegister = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  bcrypt
    .hash(password, salt)
    .then((hashedPw) => {
      const waitlist = new Waitlist({
        name,
        email,
        password: hashedPw,
      });
      return waitlist.save();
    })
    .then((waitlist) => {
      token = jwt.sign(
        {
          email: waitlist.email,
          id: waitlist._id.toString(),
        },
        process.env.SECRET,
        { expiresIn: "1h" }
      );
      res.status(201).json({ waitlist, token });
    })
    .catch((err) => res.status(400).json({ err }));
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  let loadedWaitlist;
  Waitlist.findOne({ email: email })
    .then((waitlist) => {
      if (!waitlist) {
        res.status(401).json({ err: "Email not found" });
      }
      loadedWaitlist = waitlist;
      return bcrypt.compare(password, waitlist.password);
    })
    .then((isEqual) => {
      if (!isEqual) {
        res.status(401).json({ err: "Wrong password" });
      }
      const token = jwt.sign(
        {
          email: loadedWaitlist.email,
          id: loadedWaitlist._id.toString(),
        },
        process.env.SECRET,
        { expiresIn: "1h" }
      );
      res.status(200).json({ waitlist: loadedWaitlist, token });
    })
    .catch((err) => res.status(401).json({ err }));
};

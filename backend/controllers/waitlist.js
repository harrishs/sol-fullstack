const Waitlist = require("../models/waitlist");
const bcrypt = require("bcryptjs");
const salt = 12;

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
      res.status(201).json({ waitlist });
    })
    .catch((err) => {
      console.log(err);
    });
};

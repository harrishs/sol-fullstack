const User = require("../models/user");
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
			const user = new User({
				name,
				email,
				password: hashedPw,
			});
			return user.save();
		})
		.then((user) => {
			token = jwt.sign(
				{
					email: user.email,
					id: user._id.toString(),
				},
				process.env.SECRET,
				{ expiresIn: "1h" }
			);
			res.status(201).json({ user, token });
		})
		.catch((err) => res.status(400).json({ err }));
};

exports.postLogin = (req, res, next) => {
	const email = req.body.email;
	const password = req.body.password;
	let loadedUser;
	User.findOne({ email: email })
		.then((user) => {
			if (!user) {
				res.status(401).json({ err: "Email not found" });
			}
			loadedUser = user;
			return bcrypt.compare(password, user.password);
		})
		.then((isEqual) => {
			if (!isEqual) {
				res.status(401).json({ err: "Wrong password" });
			}
			const token = jwt.sign(
				{
					email: loadedUser.email,
					id: loadedUser._id.toString(),
				},
				process.env.SECRET,
				{ expiresIn: "1h" }
			);
			res.status(200).json({ waitlist: loadedUser, token });
		})
		.catch((err) => res.status(401).json({ err }));
};

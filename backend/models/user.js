const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
	wallet: {
		type: String,
		required: true,
	},
	certs: [
		{
			certId: {
				type: Schema.Types.ObjectId,
				ref: "Cert",
				required: true,
			},
		},
	],
});

module.exports = mongoose.model("User", userSchema);

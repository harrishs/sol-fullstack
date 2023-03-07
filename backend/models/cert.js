const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const certSchema = new Schema({
	owner: {
		type: String,
		required: true,
	},
	nft: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
});

module.exports = mongoose.model("Cert", certSchema);

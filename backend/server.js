const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const certRoutes = require("./routes/cert");
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);
app.use("/certs", certRoutes);

mongoose
	.connect(process.env.MONGO_URI, () => {
		app.listen(port, () => console.log("app listening on port " + port));
	})
	.catch((err) => console.log(err));

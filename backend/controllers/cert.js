const Cert = require("../models/cert");

exports.getCerts = (req, res, next) => {
	Cert.find()
		.then((certs) => {
			res.status(200).json({ certs });
		})
		.catch((err) => res.status(400).json({ err }));
};

exports.postCert = (req, res, next) => {
	const owner = req.body.owner;
	const grpSize = req.body.grpSize;
	const cert = new cert({
		owner,
		grpSize,
	});
	cert
		.save()
		.then((cert) => {
			res.status(201).json({ cert });
		})
		.catch((err) => res.status(400).json({ err }));
};

exports.getCert = (req, res, next) => {
	const certId = req.params.certId;
	Cert.findById(certId)
		.then((cert) => {
			res.status(200).json({ cert });
		})
		.catch((err) => res.status(400).json({ err }));
};

exports.postEditCert = (req, res, next) => {
	const certId = req.params.certId;
	const grpSize = req.body.grpSize;
	const cert = new Cert({
		owner,
		grpSize,
	});
	Cert.findByIdAndUpdate(certId, cert)
		.then((cert) => {
			res.status(201).json({ cert });
		})
		.catch((err) => res.status(400).json({ err }));
};

exports.deleteCert = (req, res, next) => {
	const certId = req.params.certId;
	Cert.findByIdAndDelete(certId)
		.then(() => res.status(200).json({ status: "Cert Deleted" }))
		.catch((err) => res.status(400).json({ err }));
};

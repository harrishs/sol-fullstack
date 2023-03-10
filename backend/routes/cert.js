const express = require("express");

const certController = require("../controllers/cert");

const router = express.Router();

router.get("/", certController.getCerts);
router.post("/", certController.postCert);
router.get("/:certId", certController.getCert);
router.post("/:certId", certController.postEditCert);
router.delete("/:certId", certController.deleteCert);

module.exports = router;

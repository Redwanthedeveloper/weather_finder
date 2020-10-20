const express = require("express");
const router = express.Router();

const controller = require("./controllers/controller");

router.get("/", controller.HomePage);
router.post("/", controller.getWeather);
router.get("/about", controller.AboutPage);

module.exports = router;

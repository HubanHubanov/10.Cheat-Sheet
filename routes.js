const router = require("express").Router();

const homeController = require("./controllers/homeController");

const authController = require("./controllers/authController");

// router.get("/", (req, res) => {
//     res.send("Hello world");
// })

router.use(homeController);
router.use("/auth", authController);

module.exports = router;


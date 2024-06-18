const router = require("express").Router();
const {isAuth} = require("../middlewares/authMiddleware");
const courseService = require("../services/courseService");
const userService = require("../services/userService");


// router.get("/", (req, res) => {
//     res.render("home");
// });

// //TODO Delete this
// router.get("/authorized-test", isAuth, (req, res) => {
//     console.log(req.user);
  
//     res.send("You are authorized")
// });


router.get("/", async (req, res) => {
    const lastCourses = await courseService.getLatest().lean();
    res.render("home", {lastCourses});
});

router.get("/profile", isAuth, async (req, res) => {
    const userId = req.user._id;
    const user = await userService.getUserInfo(userId).lean();

    const createdCoursesInfo = user.createdCourses;
    const signedUpCoursesInfo = user.signedUpCourses;

    const createdCoursesCount = user.createdCourses.length;
    const signedUpCoursesCount = user.signedUpCourses.length;;

    res.render("profile", {signedUpCoursesInfo, createdCoursesInfo, signedUpCoursesCount, createdCoursesCount })
});


module.exports = router;
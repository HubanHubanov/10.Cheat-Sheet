const router = require("express").Router();
const {isAuth} = require("../middlewares/authMiddleware");
const courseService = require("../services/courseService");
const userService = require("../services/userService");

router.get("/", async (req, res) => {
    // const courses = await courseService.getAll().lean();
    // const homeCourses = courses.slice(-3);

    const latestCourses = await courseService.getLatest().lean();

    res.render("home", {latestCourses});
});

// router.get("/", (req, res) => {
//     res.render("home");
// });

//TODO Delete this
// router.get("/authorized-test", isAuth, (req, res) => {
//     console.log(req.user);
  
//     res.send("You are authorized")
// });

router.get("/profile", isAuth, async (req, res) => {
    

    const user = await userService.getInfo(req.user._id).lean();
    const createdCoursesCount = user.createdCourses.length;
    const signUpCoursesCount = user.signedUpCourses.length;

    res.render("profile", {user, createdCoursesCount, signUpCoursesCount});
});


module.exports = router;
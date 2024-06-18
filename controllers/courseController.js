const router = require("express").Router();
<<<<<<< HEAD
const courseService = require("../services/courseService");
const { getErrorMessage } = require("../utils/errorUtils");
const {isAuth} = require("../middlewares/authMiddleware");
const {isCourseOwner} = require("../middlewares/courseMiddleware");

router.get("/create", isAuth, (req, res) => {
    res.render("courses/create");
});

router.post("/create", isAuth, async (req, res) => {
    const courseData = req.body
    const userId = req.user._id;

    try{
        await courseService.create(userId, courseData);
        res.redirect("/courses");

    } catch(err) {
        res.render("courses/create", {...courseData, error: getErrorMessage(err)})
    }
});
=======
const { isAuth } = require("../middlewares/authMiddleware");
const { isCourseOwner } = require("../middlewares/courseMiddlewares");
const courseService = require("../services/courseService");
const { getErrorMessage } = require("../utils/errorUtils");
>>>>>>> 5ee182e044cfd86142ecdd7fd6c7aa404e1574bc

router.get("/", async (req, res) => {
    const courses = await courseService.getAll().lean();

    res.render("courses/catalog", {courses});
});

router.get("/:courseId/details", async (req, res) => {
<<<<<<< HEAD
    const courseId = req.params.courseId;
    const course = await courseService.getOneDetailed(courseId).lean();
    const isOwner =   course.owner?._id == req.user?._id;
   const isSigned = course.signUpList.some(user => user._id == req.user._id)
    const signedUpUsers = course.signUpList.map(user => user.username).join(", ");

    res.render("courses/details", {...course, signedUpUsers, isOwner, isSigned});
});

router.get("/:courseId/sign-up", isAuth, async (req, res) => {
    const userId = req.user._id
    const courseId = req.params.courseId
 
    await courseService.signUp(userId, courseId);



    res.redirect(`/courses/${courseId}/details`)
=======
    const course = await courseService.getOneDetailed(req.params.courseId).lean();

    const signUpUsers = course.signUpList.map(user => user.username).join(", ");
    const isOwner =course.owner && course.owner._id == req.user?._id;
    const isSigned = course.signUpList.some(user => user._id == req.user?._id);

    res.render("courses/details", {...course, signUpUsers, isOwner, isSigned});
});

router.get("/:courseId/sign-up", async (req, res) => {
    await courseService.signUp(req.params.courseId, req.user._id);
   
    res.redirect(`/courses/${req.params.courseId}/details`);
});

router.get("/create", isAuth, (req, res) => {
    res.render("courses/create");
});

router.post("/create", isAuth, async (req, res) => {
    const courseData = req.body;

    try {
        await courseService.create(req.user._id, courseData);    

        res.redirect("/courses");
    } catch(err) {
        res.render("courses/create", {...courseData, error: getErrorMessage(err)})
    }   
>>>>>>> 5ee182e044cfd86142ecdd7fd6c7aa404e1574bc
});

router.get("/:courseId/delete", isCourseOwner, async (req, res) => {
    await courseService.delete(req.params.courseId);
<<<<<<< HEAD

    res.redirect("/courses");
});

router.get("/:courseId/edit", isCourseOwner, async (req, res) => {
    const courseData = await courseService.getOne(req.params.courseId).lean();
    res.render("courses/edit" , {...courseData});
});

router.post("/:courseId/edit", isCourseOwner, async (req, res) => {
    const courseId = req.params.courseId
    const courseData = req.body;

    try {
        await courseService.edit(courseId, req.body);
        res.redirect(`/courses/${courseId}/details`);
    } catch (err) {
        res.render("courses/edit", {...courseData, error: getErrorMessage(err)});
    }
});
=======
    res.redirect("/courses");
});

router.get("/:courseId/edit", isCourseOwner, (req, res) => {
    res.render("courses/edit", {...req.course});

});

router.post("/:courseId/edit", isCourseOwner, async (req, res) => {
    const courseData = req.body;
    
    try {
        await courseService.edit(req.params.courseId, courseData);
        res.redirect(`/courses/${req.params.courseId}/details`)
    } catch (err) {
        res.render("courses/edit", {...courseData, error: getErrorMessage(err)});
    }
})
>>>>>>> 5ee182e044cfd86142ecdd7fd6c7aa404e1574bc


module.exports = router;
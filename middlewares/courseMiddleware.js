const courseService = require("../services/courseService")

async function isCourseOwner(req, res, next) {
    const course = await courseService.getOne(req.params.courseId);
    if(course.owner != req.user?._id) {
        return res.redirect(`/courses/${req.params.courseId}/details`);
    }
    next();
}   

exports.isCourseOwner = isCourseOwner;
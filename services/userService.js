const User = require("../models/User");

<<<<<<< HEAD
exports.getUserInfo = (courseId) => User.findById(courseId).populate("createdCourses").populate("signedUpCourses");
=======
exports.getInfo = (userId) => User.findById(userId).populate(["createdCourses", "signedUpCourses"])

>>>>>>> 5ee182e044cfd86142ecdd7fd6c7aa404e1574bc

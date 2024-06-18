const User = require("../models/User");

exports.getUserInfo = (courseId) => User.findById(courseId).populate("createdCourses").populate("signedUpCourses");
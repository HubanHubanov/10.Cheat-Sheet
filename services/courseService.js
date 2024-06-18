const Course = require("../models/Course");
const User = require("../models/User")

exports.create =  async (userId,courseData) => {
    const createdCourse = await Course.create({
        owner: userId,
        ...courseData
    });

    await User.findByIdAndUpdate(userId, {$push: {createdCourses: createdCourse._id}});

    return createdCourse;
}

exports.getAll = () => Course.find();

exports.getOne = (courseId) => Course.findById(courseId);

exports.getOneDetailed = (courseId) => Course.findById(courseId).populate("owner").populate("signUpList");

exports.signUp = async (userId, courseId) => {
    await Course.findByIdAndUpdate(courseId, {$push: {signUpList: userId}});
    await User.findByIdAndUpdate(userId, {$push: {signedUpCourses: courseId}});
    }

exports.delete = (courseId) => Course.findByIdAndDelete(courseId);

exports.edit = (courseId, courseData) => Course.findByIdAndUpdate(courseId, courseData, {runValidators: true});

exports.getLatest = () => Course.find().sort({createdAt : -1}).limit(3);


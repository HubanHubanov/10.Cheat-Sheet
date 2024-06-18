const Course = require("../models/Course");
<<<<<<< HEAD
const User = require("../models/User")

exports.create =  async (userId,courseData) => {
=======
const User = require("../models/User");

exports.getAll = () => Course.find(); 

exports.getOne = (courseId) => Course.findById(courseId);

exports.getLatest = () => Course.find().sort({createdAt: -1}).limit(3);             

exports.getOneDetailed = (courseId) => this.getOne(courseId).populate("owner").populate("signUpList");

exports.signUp = async (courseId, userId) => {
    // await Course.findByIdAndUpdate(courseId, {$ush: {signUpList: userId}});
    // await User.findByIdAndUpdate(userId, {$push: {signedUpCourses: courseId}});

    const course = await Course.findById(courseId)
    const user = await User.findById(userId);

    course.signUpList.push(userId);
    user.signedUpCourses.push(courseId);

    await course.save();
    await user.save();

}

exports.create = async (userId, courseData) => {
   
>>>>>>> 5ee182e044cfd86142ecdd7fd6c7aa404e1574bc
    const createdCourse = await Course.create({
        owner: userId,
        ...courseData
    });

<<<<<<< HEAD
    await User.findByIdAndUpdate(userId, {$push: {createdCourses: createdCourse._id}});
=======
    await User.findByIdAndUpdate(userId, {$push: {createdCourses: createdCourse._id}})
>>>>>>> 5ee182e044cfd86142ecdd7fd6c7aa404e1574bc

    return createdCourse;
}

<<<<<<< HEAD
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

=======
exports.delete = (courseId) => Course.findByIdAndDelete(courseId);

exports.edit = (courseId, courseData) => Course.findByIdAndUpdate(courseId, courseData, {runValidators: true});
>>>>>>> 5ee182e044cfd86142ecdd7fd6c7aa404e1574bc

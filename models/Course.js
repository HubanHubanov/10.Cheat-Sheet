const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
<<<<<<< HEAD
        required: [true, "Title is required"],
        minLength: [5, "Title must be at at least 5 characters"]
    },
    type: {
        type: String,
        required: [true, "Type is required"],
        minLength: [3, "Type must be at at least 3 characters"]
    },
    certificate: {
        type: String,
        required: [true, "Certificate is required"],
        minLength: [2, "Certificate must be at at least 2 characters"]

    },
    image: {
        type: String,
        required: [true, "Image is required"],
        match: [/^https?:\/\//, "Image adress should start with 'http' or 'https'"]
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        minLength: [10, "Description must be at at least 10 characters"]

    },
    price: {
        type: Number,
        required: [true, "Price is required"],
        minLength: [5, "Price must be at a positive number"]

=======
        required: true,
        minLength: [5, "Title should be at least 5 charecters"]
    },
    type: {
        type: String,
        required: true,
        minLength: [3, "Type shoulee be at least 3 charecters"]
    },
    certificate: {
        type: String,
        required: true,
        minLength: [2, "Certificate should be at least 2 charecters"]
    },
    image: {
        type: String,
        required: true,
        match:[ /^https?:\/\//, "Image URL shoud start with 'http' or 'https'"]
    },
    description: {
        type: String,
        required: true,
        minLength: [10, "Description should be at least 10 charecters"]
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price should be a positive number"]
>>>>>>> 5ee182e044cfd86142ecdd7fd6c7aa404e1574bc
    },
    createdAt: Date,

    signUpList: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    },
    createdAt: Date
});

<<<<<<< HEAD
courseSchema.pre("save", async function() {
=======
courseSchema.pre("save", function() {
>>>>>>> 5ee182e044cfd86142ecdd7fd6c7aa404e1574bc
    if(!this.createdAt) {
        this.createdAt = Date.now();
    }
})

<<<<<<< HEAD

=======
>>>>>>> 5ee182e044cfd86142ecdd7fd6c7aa404e1574bc
const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
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
    },
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

courseSchema.pre("save", function() {
    if(!this.createdAt) {
        this.createdAt = Date.now();
    }
})

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
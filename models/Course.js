const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
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

    },
    createdAt: Date,

    signUpList: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
});

courseSchema.pre("save", async function() {
    if(!this.createdAt) {
        this.createdAt = Date.now();
    }
})


const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
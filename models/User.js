const mongoose = require("mongoose");
const bcrypt = require("bcrypt")


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        minLength: [2, "Username must be at at least 2 characters"]

    },
    email: {
        type: String,
        required: [true, "Email is required"],
        minLength: [10, "Title must be at at least 10 characters"],
        unique: true
    },
    password: {
        type: String,
        minLength: [3, "Title must be at at least 3 characters"],
        required: [true, "Password is required"]
    },
    createdCourses: [{
        type: mongoose.Types.ObjectId,
        ref: "Course"
    }],
    signedUpCourses: [{
        type: mongoose.Types.ObjectId,
        ref: "Course"
    }]
});

userSchema.pre("save", async function() {
     this.password = await bcrypt.hash(this.password, 12);
});

// userSchema.virtual("rePassword")
//    .set(function(value) {
//     if(value !== this. password) {
//         throw new Error("Passwords mismatch");
//     }
//    });

const User = mongoose.model("User", userSchema);

module.exports = User;


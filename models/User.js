const mongoose = require("mongoose");
const bcrypt = require("bcrypt")


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minLength: [2, "Username should be at least 2 characters long"],
        required: [true, "Username is required"]
    },
    email: {
        type: String,
        minLength: [10, "Email should be at least 10 characters long"],
        required: [true, "Email is required"],
        unique: true
    },
    password: {
        type: String,
        minLength: [3, "Password should be at least 3 charecters long"],
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


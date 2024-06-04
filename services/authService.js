const bcrypt = require("bcrypt");

const User = require("../models/User");

exports.register = (userData) => User.create(userData);

exports.login = async ({email, password}) => {
    const user = await User.findOne({email});

    if(!user) {
        throw new Error("Username or password is invalid");
    }

    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid) {
        throw new Error("Username or password is invalid")
    }


} 
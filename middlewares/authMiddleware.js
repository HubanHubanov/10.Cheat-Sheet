const jwt = require("../lib/jsonwebtoken");
const {SECRET} = require("../config");

exports.authMiddleware  =async (req, res, next) => {
    const token = req.cookies["auth"];
    
    if(!token) {
       return next();
    }

    try {
        const decodedToken = await jwt.verify(token, SECRET);

        req.user = decodedToken
        res.locals.isAuthenticated = true;
        res.locals.user = decodedToken;

        next();

    } catch(err) {
        res.clearCookie("auth");
        res.redirect("/auth/login")
    }
};

exports.isAuth = (req, res, next) => {
    if(!req.user) { 
       return res.redirect("/auth/login");
    }

    next();
}

exports.isGuest = (req, res, next) => {
    if(req.user) {
<<<<<<< HEAD
        return res.redirect("/")
=======
       return res.redirect("/");
>>>>>>> 5ee182e044cfd86142ecdd7fd6c7aa404e1574bc
    }
    next();
}
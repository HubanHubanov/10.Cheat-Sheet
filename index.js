const express = require("express");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");

const routes = require("./routes");
const { authMiddleware } = require("./middlewares/authMiddleware"); 

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: false}));
app.use(authMiddleware);

app.engine("hbs", handlebars.engine({
    extname: "hbs"
}));

app.set("view engine", "hbs");


app.use(routes);

//TODO Change database name
// mongoose.connect("mongodb://127.0.0.1:27017/course-book");
mongoose.connect("mongodb://localhost:27017/course-book"); 

mongoose.connection.on("connected", () => console.log("DB is connected"));
mongoose.connection.on("disconnect", () => console.log("DB is disconnected"))
mongoose.connection.on("error", (err) => console.log(err));

app.listen(5000, () => console.log("App listens on port http://localhost:5000"));




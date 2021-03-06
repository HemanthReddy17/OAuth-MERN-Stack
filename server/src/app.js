var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var errorLogger = require("./utilities/errorLogger")
var requestLogger = require("./utilities/requestLogger")

//routes
var oauth = require("./routes/oauth")



var cors = require('cors');

var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use(requestLogger)
app.use("/api", oauth)
app.use(errorLogger)


app.listen(5000)
console.log("Server is listening at 5000")
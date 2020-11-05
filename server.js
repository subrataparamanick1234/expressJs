//express package for creating server
const express = require('express');
//mongo package called
const mongoose = require('mongoose');
//storing a packge in app variable
const app = express();
//port number
var bodyParser = require('body-parser')

//morgan package for watching the server res.

const morgan = require('morgan');
const port = 9001;
//db con
require('./mongo')

app.use(bodyParser.json())
    .use(morgan());
//models
require('./model/Post');
require('./model/Studentdata')

//routers

app.use('/post', require('./routes/post'))
app.use('/student', require('./routes/studentdata'))


//server listen
app.listen(port, () => {
    console.log("server is up and running " + port);
})
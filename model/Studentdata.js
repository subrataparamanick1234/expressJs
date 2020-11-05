//mongo package called 

const mongoose = require('mongoose');

//Schema creation
const student_schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true

    },
    addressInfo: {
        addName: String,
        dist: String,
        state: String,
        pin: Number,

    },
    comments: [
        {
            comName: String,
            comment: String,

        }
    ]


})
//exports module
module.exports = mongoose.model("studentdata", student_schema);
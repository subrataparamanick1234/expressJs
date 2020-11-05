//mongo package called 

const mongoose = require('mongoose');

//Schema creation
const post_schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})
//exports module
module.exports = mongoose.model("Post", post_schema);
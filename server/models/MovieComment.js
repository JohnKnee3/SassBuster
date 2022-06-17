const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const movieCommentSchema = new Schema({
    movieCommentText: {
        type: String,
        required: "You need to leave a comment!",
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },     
    username: {
        type: String,
        required: true
    },
    productId: {
        type: String,
        // required: true
    }
})

const MovieComment = model('MovieComment', movieCommentSchema);

module.exports = MovieComment;
const mongoose = require("mongoose");

const PostsModel = mongoose.model(
    "DataBase",
    {
        numUnity: {
            type: String,
            required: true
        },

        name: {
        type: String,
        required: true
        },

        value: {
        type: String,
        required: true
        },

        message: {
            type: String,
            required: true
        },

        date: {
            type: Date,
            default: Date.now
        }

    },
    "Crypto"
);

module.exports = { PostsModel };
const mongoose = require('mongoose');
const validator = require("validator");


const userSchema = mongoose.Schema({

    name: {
        type: String,
        required: true,
        minLength: 3
    },
    phone: {
        type: Number,
        required: true,

    },

    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new error("invalid email")
            }

        }
    },

    password: {
        type: String,
        required: true,

    },




})

// creating collection
const User = mongoose.model("User", userSchema);
module.exports = User;
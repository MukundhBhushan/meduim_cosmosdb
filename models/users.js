const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {
        type:String,
        required: true
    },
    lastname:{
        type:String,
        required: true
    },
    username: {
        type:String,
        required: true
    },


})

const users = mongoose.model('users', userSchema);

module.exports = {
    users
};
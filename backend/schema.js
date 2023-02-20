const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//user schema
const userSchema = new Schema({
        name: String,
        email: String,
        password: String
    },
    {
        timestamps: true
    }
);
//user model
const User = mongoose.model('User', userSchema);
module.exports = User;




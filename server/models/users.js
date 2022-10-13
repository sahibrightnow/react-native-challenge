const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
    
        email: { type: String, maxLength: 100, unique: true },
        password: { type: String }
        
    },
    { versionKey: false }
);

const usersModel = mongoose.model('Users', userSchema);

module.exports = usersModel;
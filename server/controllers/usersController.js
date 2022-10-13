const User = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const registerUser = async (req, res) => {
    console.log(req.body);
    try {
        let user = await User.findOne({ email: req.body.email });
        if (!user) {
            // const newPassword = await bcrypt.hash(req.body.password, 10)
        const user = await  User.create({
            
            email: req.body.email,
            password: req.body.password,
            
        });
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            {
                expiresIn: 157788000,
            }
        );
        return res.status(201).json({
            status: "SUCCESS",
            message: "User successfully registered!",
            userToken: token,
            userId: user._id,
            email: user.email,
        });
        }
        
        else {
            return res.status(300).json({
                status: "Error",
                message: "User already registered!",
                userToken: token,
                userId: user._id,
                email: user.email,
            });
        }
    } catch (error) {
        console.log("ERROR", error)
        return res.status(500).json({
            status: "ERROR",
            message: 'Missing post request parameters (email, password)',
        });
    }
};

const loginUser = async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        
    })  
    
    if (!user) {
        return res.json({status: 'error', error: 'Email not registered'})
    } 
        
    const isPasswordValid = req.body.password === user.password

    if (isPasswordValid) {
        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET,
            {
                expiresIn: 157788000,
            }
        );
        return res.json({status: 'ok', user: token, email:user.email});
    }
    else {
        return res.json({status: 'error', user: false, error:'Password is incorrect'})
    }
};

module.exports = {
    registerUser,
    loginUser,
};
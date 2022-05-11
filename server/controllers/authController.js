import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken"; 
import User from "../models/userModel.js"; 

// Generate JWT (token) 
const generateToken = (id, isAdmin) => {
    return jwt.sign({ id, isAdmin }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    }); 
}; 

// @description: Register New User 
// @route: POST /api/auth/register
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body; 
   
    // error check
    if(!username || !email || !password) {
        res.status(400); 
        throw new Error("Please add all fields"); 
    }; 
   
    // check if user exists by email
    const userExists = await User.findOne({email})
    if(userExists) {
        res.status(400);
        throw new Error("User already exists");
    };

    // hash password with BCRYPTJS 
    // - generate salt with 10 rounds (max 12) 
    const salt = await bcrypt.genSalt(10); 
    // - hash password 
    const hashedPassword = await bcrypt.hash(password, salt); 

    // create user with req.body 
    // - pass hashed password
    const user = await User.create({
        username, 
        email, 
        password: hashedPassword
    }); 

    // if a user is present
    if(user) {
        res.status(201).json({
            _id: user.id, 
            username: user.username, 
            email: user.email, 
            password: user.password, 
            isAdmin: user.isAdmin, 
            createdAt: user.createdAt, 
            updatedAt: user.updatedAt, 
            token: generateToken(user._id, user.isAdmin), // JWT (token) AUTH
        }); 
        // res.status(201).json(user); // simply show all
    } else {
        res.status(400); 
        throw new Error("Invalid User data"); 
    }; 
}); 

// @description: Login/Authenticate User 
// @route: POST /api/auth/login
const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body; 
    // check user's username but NOT found 
    const user = await User.findOne({ username }); 
    if(!user) {
        res.status(400); 
        throw new Error("User not found"); 
    }

    // if it's the correct user 
    // don't show password, isAdmin 
    if(user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id, 
            username: user.username, 
            email: user.email, 
            createdAt: user.createdAt, 
            updatedAt: user.updatedAt, 
            token: generateToken(user._id, user.isAdmin), // JWT (token) AUTH
        }); 
    } else {
        res.status(400); 
        throw new Error("Invalid credentials"); 
    }; 
}); 

export {
    registerUser, 
    loginUser, 
}
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

// @description: Get User Data 
// @route: GET /api/users/:id 
const getUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id); 
    // check if no user 
    if(!user) {
        res.status(400); 
        throw new Error("User not found"); 
    }
    res.status(200).json({
        _id: user.id, 
        username: user.username, 
        email: user.email, 
        createdAt: user.createdAt, 
        updatedAt: user.updatedAt, 
        token: generateToken(user._id, user.isAdmin), // JWT (token) AUTH
    }); 
}); 

// @description: Get All Users 
// @route: GET /api/users/:id 
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find(); 
    // check if no users
    if(!users) {
        res.status(400); 
        throw new Error("Users not found"); 
    }; 
    res.status(200).json(users); 
}); 

// @description: Update User
// @route: PUT /api/users/:id 
const updateUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id); 
    if(!user) {
        res.status(400); 
        throw new Error("User not found"); 
    }
    
    // update user info 
    const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }); 
    // re-hash user password and save to database 
    updatedUser.password = await bcrypt.hash(updatedUser.password, 10); 
    updatedUser.save(); 
    res.status(200).json(updatedUser); 
}); 

// @description: Delete User 
// @route: DELETE /api/users/:id 
const deleteUser = asyncHandler(async (req, res) => {
    await User.findByIdAndDelete(req.params.id); 
    res.status(200).json({ id: req.params.id });  
}); 

export {
    getUser, 
    getAllUsers, 
    updateUser, 
    deleteUser, 
}
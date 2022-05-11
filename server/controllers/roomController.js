import asyncHandler from "express-async-handler"; 
import Room from "../models/roomModel.js"; 
import Hotel from "../models/hotelModel.js"; 

// @description: Register New Room 
// @route: POST /api/rooms
const registerRoom = asyncHandler(async (req, res) => {
    const hotelId = req.params.hotelid; 
    const newRoom = new Room(req.body); 
    const savedRoom = await newRoom.save() 
    await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id }})
    res.status(200).json(savedRoom); 
}); 

// @description: Get Room Data 
// @route: GET /api/rooms/:id 
const getRoom = asyncHandler(async (req, res) => {
    const room = await Room.findById(req.params.id); 
    if(!room) {
        res.status(400); 
        throw new Error("Room not found"); 
    }
    res.status(200).json(room); 
}); 

// // @description: Get Room Data 
// // @route: GET /api/rooms/:id 
const getAllRooms = asyncHandler(async (req, res) => {
    const rooms = await Room.find(); 
    if(!rooms) {
        res.status(400); 
        throw new Error("No Rooms found"); 
    }
    res.status(200).json(rooms); 
}); 

// @description: Update Room 
// @route: PUT /api/rooms/:id 
const updateRoom = asyncHandler(async (req, res) => {
    const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }); 
    res.status(200).json(updatedHotel); 
}); 

// @description: Delete Room
// @route: DELETE /api/rooms/:id 
const deleteRoom = asyncHandler(async (req, res) => {
    const hotelId = req.params.hotelid; 
    await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id }})
    await Room.findByIdAndDelete(req.params.id); 
    res.status(200).json({ id: req.params.id }); 
}); 

export {
    registerRoom, 
    getRoom, 
    getAllRooms, 
    updateRoom, 
    deleteRoom, 
}
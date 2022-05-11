import asyncHandler from "express-async-handler"; 
import Hotel from "../models/hotelModel.js"; 

// @description: Register New Hotel 
// @route: POST /api/hotels
const registerHotel = asyncHandler(async (req, res) => {
    const { name, type, city, address, distance, title, description, cheapestPrice } = req.body; 
    // error check
    if(!name || !type || !city || !address || !distance || !title || !description || !cheapestPrice) {
        res.status(400); 
        throw new Error("Please add all fields"); 
    }; 
    // create hotel with req.body 
    const hotel = await Hotel.create({
        name, 
        type, 
        city, 
        address,
        distance,
        title,
        description,
        cheapestPrice
    }); 
    if(hotel) {
        res.status(201).json({
            _id: hotel.id, 
            name: hotel.name, 
            type: hotel.type, 
            city: hotel.city, 
            address: hotel.address, 
            distance: hotel.distance, 
            photos: hotel.photos, 
            title: hotel.title, 
            description: hotel.description, 
            rooms: hotel.rooms, 
            cheapestPrice: hotel.cheapestPrice, 
            featured: hotel.featured
        }); 
    } else {
        res.status(400); 
        throw new Error("Invalid Hotel data"); 
    }; 
}); 

// @description: Get Hotel Data 
// @route: GET /api/hotels/:id 
const getHotel = asyncHandler(async (req, res) => {
    const hotel = await Hotel.findById(req.params.id); 
    if(!hotel) {
        res.status(400); 
        throw new Error("Hotel not found"); 
    } 
    await Hotel.findById(req.params.id); 
    res.status(200).json({
        _id: hotel.id, 
        name: hotel.name, 
        type: hotel.type, 
        city: hotel.city, 
        address: hotel.address, 
        distance: hotel.distance, 
        photos: hotel.photos, 
        title: hotel.title, 
        description: hotel.description, 
        rooms: hotel.rooms, 
        cheapestPrice: hotel.cheapestPrice, 
        featured: hotel.featured
    }); 
}); 

// @description: Get Hotel Data 
// @route: GET /api/hotels/:id 
const getAllHotels = asyncHandler(async (req, res) => {
    const hotels = await Hotel.find(); 
    if(!hotels) {
        res.status(400); 
        throw new Error("No Hotels found"); 
    } 
    await Hotel.find(); 
    res.status(200).json(hotels); 
}); 

// @description: Update Hotel 
// @route: PUT /api/hotels/:id 
const updateHotel = asyncHandler(async (req, res) => {
    const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true }); 
    res.status(200).json(updatedHotel); 
}); 

// @description: Delete Hotel
// @route: DELETE /api/hotels/:id 
const deleteHotel = asyncHandler(async (req, res) => {
    await Hotel.findByIdAndDelete(req.params.id); 
    res.status(200).json({ id: req.params.id }); 
}); 

export {
    registerHotel, 
    getHotel, 
    getAllHotels, 
    updateHotel, 
    deleteHotel, 
}
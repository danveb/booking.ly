import asyncHandler from "express-async-handler"; 
import Hotel from "../models/hotelModel.js"; 

// @description: Register New Hotel 
// @route: POST /api/hotels
const registerHotel = asyncHandler(async (req, res) => {
    const { name, type, city, address, distance, title, description, cheapestPrice, rating } = req.body; 
    // error check
    if(!name || !type || !city || !address || !distance || !title || !description || !cheapestPrice || !rating) {
        res.status(400); 
        throw new Error("Please add all fields"); 
    }; 
    // check if hotel exists by name
    const hotelExists = await Hotel.findOne({name})
    if(hotelExists) {
        res.status(400);
        throw new Error("Hotel already exists");
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
        cheapestPrice, 
        rating, 
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
            rating: hotel.rating, 
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
        rating: hotel.rating, 
        featured: hotel.featured
    }); 
}); 

// @description: Get Hotel Data 
// @route: GET /api/hotels/:id 
const getAllHotels = asyncHandler(async (req, res) => {
    const { min, max, ...others } = req.query 
    // query with limit 
    const hotels = await Hotel.find({...others, cheapestPrice: { $gt: min | 1, $lt: max || Infinity }}).limit(req.query.limit); 
    if(!hotels) {
        res.status(400); 
        throw new Error("No Hotels found"); 
    } 
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

// @description: Count by City
// @route: GET /api/hotels/countByCity?cities=Berlin,Paris,Milano
// - run query on cities
const countByCity = asyncHandler(async (req, res) => {
    const cities = req.query.cities.split(","); 
    const list = await Promise.all(cities.map(city => {
        return Hotel.countDocuments({ city: city }); 
    }))
    res.status(200).json(list); 
}); 

// @description: Count By Type
// @route: GET /api/hotels/countByType 
const countByType = asyncHandler(async (req, res) => {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" }); 
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" }); 
    const resortCount = await Hotel.countDocuments({ type: "resort" }); 
    const villaCount = await Hotel.countDocuments({ type: "villa" });     
    const cabinCount = await Hotel.countDocuments({ type: "cabin" }); 
    res.status(200).json([
        { type: "hotels", count: hotelCount }, 
        { type: "apartments", count: apartmentCount }, 
        { type: "resorts", count: resortCount }, 
        { type: "villas", count: villaCount }, 
        { type: "cabins", count: cabinCount }, 
    ]);
}); 

export {
    registerHotel, 
    getHotel, 
    getAllHotels, 
    updateHotel, 
    deleteHotel, 
    countByCity, 
    countByType, 
}
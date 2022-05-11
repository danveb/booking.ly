import express from "express"; 
import { registerHotel, getHotel, getAllHotels, updateHotel, deleteHotel } from "../controllers/hotelController.js";
const router = express.Router(); 

// CRUD - CREATE | GET && GET ALL | UPDATE | DLETE
router.post("/", registerHotel); 
router.get("/:id", getHotel); 
router.get("/", getAllHotels); 
router.put("/:id", updateHotel); 
router.delete("/:id", deleteHotel); 

export default router
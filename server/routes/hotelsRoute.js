import express from "express"; 
import { registerHotel, getHotel, getAllHotels, updateHotel, deleteHotel } from "../controllers/hotelController.js";
import { protectAdmin } from "../middleware/authMiddleware.js"; 
const router = express.Router(); 

// CRUD - CREATE | GET && GET ALL | UPDATE | DELETE
router.post("/", protectAdmin, registerHotel); 
router.get("/:id", getHotel); 
router.get("/", getAllHotels); 
router.put("/:id", protectAdmin, updateHotel); 
router.delete("/:id", protectAdmin, deleteHotel); 

export default router
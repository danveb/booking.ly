import express from "express"; 
import { registerHotel, getHotel, getAllHotels, updateHotel, deleteHotel, countByCity, countByType } from "../controllers/hotelController.js";
import { protectAdmin } from "../middleware/authMiddleware.js"; 
const router = express.Router(); 

// CRUD - CREATE | GET && GET ALL | UPDATE | DELETE
router.post("/", protectAdmin, registerHotel); 
router.get("/find/:id", getHotel); 
router.get("/", getAllHotels); 
router.put("/:id", protectAdmin, updateHotel); 
router.delete("/:id", protectAdmin, deleteHotel); 

router.get("/countByCity", countByCity); 
router.get("/countByType", countByType); 

export default router
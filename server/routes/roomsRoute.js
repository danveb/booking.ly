import express from "express"; 
import { registerRoom, getRoom, getAllRooms, updateRoom, deleteRoom } from "../controllers/roomController.js";
import { protectAdmin } from "../middleware/authMiddleware.js"; 
const router = express.Router(); 

// CRUD - CREATE | GET && GET ALL | UPDATE | DELETE
router.post("/:hotelid", protectAdmin, registerRoom); 
router.get("/:id", getRoom); 
router.get("/", getAllRooms); 
router.put("/:id", protectAdmin, updateRoom); 
router.delete("/:id/:hotelid", protectAdmin, deleteRoom); 

export default router
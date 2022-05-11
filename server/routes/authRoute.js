import express from "express"; 
import { registerUser, loginUser } from "../controllers/authController.js";
const router = express.Router(); 

// CRUD - CREATE | GET && GET ALL | UPDATE | DLETE
router.post("/register", registerUser); 
router.post("/login", loginUser); 
// router.get("/:id", getHotel); 
// router.get("/", getAllHotels); 
// router.put("/:id", updateHotel); 
// router.delete("/:id", deleteHotel); 

export default router
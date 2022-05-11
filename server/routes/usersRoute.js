import express from "express"; 
import { getUser, getAllUsers, updateUser, deleteUser } from "../controllers/userController.js";
import { protect, protectAdmin } from "../middleware/authMiddleware.js"; 
const router = express.Router(); 

// CRUD -  GET && GET ALL | UPDATE | DELETE
router.get("/:id", protect, getUser); 
router.get("/", protectAdmin, getAllUsers); 
router.put("/:id", protect, updateUser); 
router.delete("/:id", protect, deleteUser); 

export default router
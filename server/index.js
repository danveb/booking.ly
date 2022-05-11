import express from "express"; 
import colors from "colors"; 
import dotenv from "dotenv/config"; 
import connectDB from "./config/db.js"; 
import cors from "cors"; 
import authRoute from "./routes/authRoute.js"; 
import usersRoute from "./routes/usersRoute.js"; 
import hotelsRoute from "./routes/hotelsRoute.js"; 
import roomsRoute from "./routes/roomsRoute.js"; 
const port = process.env.PORT || 4000; 

connectDB(); 

const app = express(); 

// Middleware 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

// Cors 
app.use(cors()); 

// Sample Request 
app.get("/", (req, res) => {
    res.send("Hello from the World"); 
}); 

// Routes
app.use("/api/auth", authRoute); 
app.use("/api/users", usersRoute); 
app.use("/api/hotels", hotelsRoute); 
app.use("/api/rooms", roomsRoute); 

app.listen(port, () => {
    console.log(`Server started on port ${port}`); 
}); 
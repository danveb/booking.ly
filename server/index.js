import express from "express"; 
import colors from "colors"; 
import dotenv from "dotenv/config"; 
import connectDB from "./config/db.js"; 
const port = process.env.PORT || 4000; 
import cors from "cors"; 

connectDB(); 

const app = express(); 

// Middleware 
app.use(express.json()); 
app.use(express.urlencoded({ extended: false })); 

// Cors 
app.use(cors()); 

app.listen(port, () => {
    console.log(`Server started on port ${port}`); 
}); 
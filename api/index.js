import express from 'express';
import mongoose from 'mongoose';




const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://user2:jaffer@me.nelux.mongodb.net/?retryWrites=true&w=majority&appName=me')
    .then(() => {
        console.log("MongoDB is connected");

        // Start the Express server
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

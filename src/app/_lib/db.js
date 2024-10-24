import mongoose from "mongoose";

let isConnected = false;

export const connectDb = async()=>{
    if(isConnected){
        return;
    }
    if (mongoose.connection.readyState >= 1) {
        isConnected = true;
        return;
    }
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/nextjs");
        isConnected=true;
        console.log("Database connection successfully")
        
    } catch (error) {
        console.log("Something went wrong ", error)
        throw new Error('Failed to connect to the database');
        isConnected=false;
    }
    
}
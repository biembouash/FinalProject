import mongoose from "mongoose";

const connect: string = "mongodb://127.0.0.1:27017" // The DB server adress

//The DB connection function
export default async function connectDB(){
    mongoose.connect(connect);
}
import mongoose from "mongoose";

const connect: string = "mongodb://127.0.0.1:27017"


export default async function connectDB(){
    mongoose.connect(connect);
}
import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    author:String,
    title:String,
    content:String,
    created_at:Date,
    updated_at:Date,
})

export default mongoose.model('Blog', BlogSchema);
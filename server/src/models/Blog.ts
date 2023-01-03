import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    author:String,
    title:String,
    content:String,
    created_at:String,
    updated_at:String,
})

export default mongoose.model('Blog', BlogSchema);
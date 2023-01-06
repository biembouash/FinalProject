import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    author:{
        type:String,
        required: [true, "Author can't be empty"]
    },
    title:{
        type:String,
        required: [true, "Title can't be empty"]
    },
    content:{
        type:String,
        required: [true, "Content can't be empty"]
    },
    created_at:{
        type:Date,
        required: [true, "Must have a created date"]
    },
    updated_at:{
        type:Date,
        required: [true, "Must have a updated date"]
    },
})

export default mongoose.model('Blog', BlogSchema);
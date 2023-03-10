import mongoose from "mongoose";

//The model of the Database collection 'Blog'
const BlogSchema = new mongoose.Schema({
    author:{
        type:String,
        required: [true, "Author can't be empty"] //This field is require and the error mensage is "Author can't be empty"
    },
    title:{
        type:String,
        required: [true, "Title can't be empty"] //This field is require and the error mensage is "Title can't be empty"
    },
    content:{
        type:String,
        required: [true, "Content can't be empty"]//This field is require and the error mensage is "Content can't be empty"
    },
    created_at:{
        type:Date,
        required: [true, "Must have a created date"]//This field is require and the error mensage is "Must have a created date"
    },
    updated_at:{
        type:Date,
        required: [true, "Must have a updated date"]
    },
})

export default mongoose.model('Blog', BlogSchema);
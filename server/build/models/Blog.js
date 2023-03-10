"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//The model of the Database collection 'Blog'
const BlogSchema = new mongoose_1.default.Schema({
    author: {
        type: String,
        required: [true, "Author can't be empty"] //This field is require and the error mensage is "Author can't be empty"
    },
    title: {
        type: String,
        required: [true, "Title can't be empty"] //This field is require and the error mensage is "Title can't be empty"
    },
    content: {
        type: String,
        required: [true, "Content can't be empty"] //This field is require and the error mensage is "Content can't be empty"
    },
    created_at: {
        type: Date,
        required: [true, "Must have a created date"] //This field is require and the error mensage is "Must have a created date"
    },
    updated_at: {
        type: Date,
        required: [true, "Must have a updated date"]
    },
});
exports.default = mongoose_1.default.model('Blog', BlogSchema);

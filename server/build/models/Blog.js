"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BlogSchema = new mongoose_1.default.Schema({
    author: {
        type: String,
        required: [true, "Author can't be empty"]
    },
    title: {
        type: String,
        required: [true, "Title can't be empty"]
    },
    content: {
        type: String,
        required: [true, "Content can't be empty"]
    },
    created_at: {
        type: Date,
        required: [true, "Must have a created date"]
    },
    updated_at: {
        type: Date,
        required: [true, "Must have a updated date"]
    },
});
exports.default = mongoose_1.default.model('Blog', BlogSchema);

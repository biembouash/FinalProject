"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BlogSchema = new mongoose_1.default.Schema({
    author: String,
    title: String,
    content: String,
    created_at: Date,
    updated_at: Date,
});
exports.default = mongoose_1.default.model('Blog', BlogSchema);

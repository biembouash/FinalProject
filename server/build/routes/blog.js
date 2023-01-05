"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Blog_1 = __importDefault(require("../controllers/Blog"));
const blogWorker = new Blog_1.default();
const BlogRouter = express_1.default.Router();
BlogRouter.get('/', blogWorker.getBlogs);
BlogRouter.post('/', blogWorker.postBlog);
BlogRouter.patch('/:id', blogWorker.updateBlog);
BlogRouter.get('/:id', blogWorker.getBlog);
exports.default = BlogRouter;

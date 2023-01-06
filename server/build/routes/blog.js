"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Blog_1 = __importDefault(require("../controllers/Blog"));
const blogWorker = new Blog_1.default(); //Creates a blogWorker
const BlogRouter = express_1.default.Router(); //Creates a express Router
//Route the GET method to the default endpoint and call the blog worker getBlogs.
BlogRouter.get('/', blogWorker.getBlogs);
//Route the POST method to the default endpoint and call the blog worker postBlog.
BlogRouter.post('/', blogWorker.postBlog);
//Route the PATCH method to the default endpoint with a request parameter (the post id) and call the blog worker updateBlog.
BlogRouter.patch('/:id', blogWorker.updateBlog);
//Route the GET method to the default endpoint with a request parameter (the post id) and call the blog worker getBlog.
BlogRouter.get('/:id', blogWorker.getBlog);
exports.default = BlogRouter;

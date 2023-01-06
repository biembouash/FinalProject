import express,{ Request, Response, NextFunction } from "express";
import BlogWorker from "../controllers/Blog";

const blogWorker = new BlogWorker();//Creates a blogWorker
const BlogRouter = express.Router();//Creates a express Router

//Route the GET method to the default endpoint and call the blog worker getBlogs.
BlogRouter.get('/', blogWorker.getBlogs)
//Route the POST method to the default endpoint and call the blog worker postBlog.
BlogRouter.post('/',blogWorker.postBlog)
//Route the PATCH method to the default endpoint with a request parameter (the post id) and call the blog worker updateBlog.
BlogRouter.patch('/:id',blogWorker.updateBlog)
//Route the GET method to the default endpoint with a request parameter (the post id) and call the blog worker getBlog.
BlogRouter.get('/:id', blogWorker.getBlog)

export default BlogRouter;  
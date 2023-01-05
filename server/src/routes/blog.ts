import express,{ Request, Response, NextFunction } from "express";
import BlogWorker from "../controllers/Blog";

const blogWorker = new BlogWorker();
const BlogRouter = express.Router();

BlogRouter.get('/', blogWorker.getBlogs)
BlogRouter.post('/',blogWorker.postBlog)
BlogRouter.patch('/:id',blogWorker.updateBlog)
BlogRouter.get('/:id', blogWorker.getBlog)

export default BlogRouter;  
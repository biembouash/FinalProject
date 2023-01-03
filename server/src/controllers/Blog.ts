import Blog from "../models/Blog";
import {Request, Response} from 'express'

export default class BlogWorker{    
    async postBlog(req: Request, res: Response){
        const data = await Blog.create(req.body)
        res.json(data)
    }

    async getBlogs(req:Request, res: Response) {
        const data = await Blog.find({});
        res.json(data)
        
    }
}
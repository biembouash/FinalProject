import Blog from "../models/Blog";
import {Request, Response} from 'express'

export default class BlogWorker{    
    async postBlog(req: Request, res: Response){
        const data = await Blog.create(req.body)
        res.json(data)
    }

    async getBlogs(req:Request, res: Response) {
        const data = await Blog.find({}).sort({updated_at: -1});
        res.json(data)
    }

    async updateBlog(req: Request, res: Response){
        const taskID = req.params.id;
        const data = await Blog.findOneAndUpdate({_id: taskID}, req.body, {new: true})
        res.json(data)
    }

    async getBlog(req: Request, res:Response){
        const taskID = req.params.id;
        const data = await Blog.findOne({_id: taskID}, req.body)
        res.json(data)
    }
}
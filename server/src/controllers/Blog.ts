import Blog from "../models/Blog";
import {Request, Response} from 'express'
import asyncWrapper from "../middleware/AsyncWrapper";

export default class BlogWorker{    
    postBlog = asyncWrapper(async (req: Request, res: Response) => {
        const data = await Blog.create(req.body)
        res.json(data)
    })

    getBlogs = asyncWrapper(async (req:Request, res: Response) => {
        const data = await Blog.find({}).sort({updated_at: -1});
        res.json(data)
    })

    updateBlog = asyncWrapper(async(req: Request, res: Response) => {
        const taskID = req.params.id;
        const data = await Blog.findOneAndUpdate({_id: taskID}, req.body, {new: true})
        res.json(data)
    })

    getBlog = asyncWrapper(async(req: Request, res:Response) => {
        const taskID = req.params.id;
        const data = await Blog.findOne({_id: taskID}, req.body)
        res.json(data)
    })
}
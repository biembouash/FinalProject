import Blog from "../models/Blog";
import {Request, Response} from 'express'
import asyncWrapper from "../middleware/AsyncWrapper";


//The user Worker who will make all blog DB operations
export default class BlogWorker{   
    //creates a blog into the database
    postBlog = asyncWrapper(async (req: Request, res: Response) => {
        const data = await Blog.create(req.body)
        res.json(data)
    })
    //gets all the blogs from the db
    getBlogs = asyncWrapper(async (req:Request, res: Response) => {
        const data = await Blog.find({}).sort({updated_at: -1});
        res.json(data)
    })
    //updates a specific blog in the db
    updateBlog = asyncWrapper(async(req: Request, res: Response) => {
        const taskID = req.params.id;
        const data = await Blog.findOneAndUpdate({_id: taskID}, req.body, {new: true})
        res.json(data)
    })
    //gets a specific blog in the db
    getBlog = asyncWrapper(async(req: Request, res:Response) => {
        const taskID = req.params.id;
        const data = await Blog.findOne({_id: taskID}, req.body)
        res.json(data)
    })
}
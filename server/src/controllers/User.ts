import User from "../models/User";
import { Request, Response } from "express";
import asyncWrapper from "../middleware/AsyncWrapper";


export default class UserWorker{
    getUsers = asyncWrapper(async(req: Request, res: Response) => {
        const data = await User.find({})
        return res.json(data)
    })
    createUser = asyncWrapper(async(req: Request, res: Response) => {
        const data = await User.create(req.body)
        return res.json(data)
    })
}
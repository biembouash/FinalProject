import User from "../models/User";
import { Request, Response } from "express";
import asyncWrapper from "../middleware/AsyncWrapper";

//The user Worker who will make all user DB operations
export default class UserWorker{
    //get all users from database
    getUsers = asyncWrapper(async(req: Request, res: Response) => {
        const data = await User.find({})
        return res.json(data)
    })
    //crates a user in the database
    createUser = asyncWrapper(async(req: Request, res: Response) => {
        const data = await User.create(req.body)
        return res.json(data)
    })
}
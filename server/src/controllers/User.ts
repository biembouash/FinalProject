import User from "../models/User";
import { Request, Response } from "express";


export default class UserWorker{
    async getUsers(req: Request, res: Response) {
        const data = await User.find({})
        return res.json(data)
    }
    async createUser(req: Request, res: Response) {
        const data = await User.create(req.body)
        return res.json(data)
    }
}
import express,{ Request, Response, NextFunction } from "express";

const BlogRouter = express.Router();

BlogRouter.get('/', (req: Request, res: Response) =>{
    res.send("Damn?")
})

export default BlogRouter;
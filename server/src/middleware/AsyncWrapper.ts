import { Request, Response, NextFunction } from "express"
//An asyncronous Wrapper, so we dont have to use try and catch in every database operation.
const asyncWrapper = (fn: any) =>{
    return async(req: Request,res: Response,next:NextFunction) =>{
        try{
            await fn(req,res,next)
        }catch(error){
            next(error)
        }
    }
}

export default asyncWrapper;
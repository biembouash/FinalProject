import {Request, Response, NextFunction, ErrorRequestHandler } from "express";

const errorHandler = (err: ErrorRequestHandler, req: Request, res : Response, next: NextFunction) =>{
   return res.json({msg: err});
}

export default errorHandler;
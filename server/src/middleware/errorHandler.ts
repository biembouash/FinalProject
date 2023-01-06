import {Request, Response, NextFunction, ErrorRequestHandler } from "express";
//Error Handler Middleware, to make the erros appear in the response msg.
const errorHandler = (err: ErrorRequestHandler, req: Request, res : Response, next: NextFunction) =>{
   return res.json({msg: err});
}

export default errorHandler;
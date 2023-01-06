"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Error Handler Middleware, to make the erros appear in the response msg.
const errorHandler = (err, req, res, next) => {
    return res.json({ msg: err });
};
exports.default = errorHandler;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    return res.json({ msg: err });
};
exports.default = errorHandler;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../controllers/User"));
const UserRouter = express_1.default.Router();
const worker = new User_1.default();
UserRouter.get('/', worker.getUsers);
UserRouter.post('/', worker.createUser);
exports.default = UserRouter;

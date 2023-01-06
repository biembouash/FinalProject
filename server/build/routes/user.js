"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const User_1 = __importDefault(require("../controllers/User"));
const UserRouter = express_1.default.Router(); //Creates an express router
const worker = new User_1.default(); //Creates an user worker
//Route the GET method to the default endpoint and call the blog worker getBlogs.
UserRouter.get('/', worker.getUsers);
//Route the POST method to the default endpoing and call the user worker createUser.
UserRouter.post('/', worker.createUser);
exports.default = UserRouter;

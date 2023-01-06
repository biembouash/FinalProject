"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
const AsyncWrapper_1 = __importDefault(require("../middleware/AsyncWrapper"));
//The user Worker who will make all user DB operations
class UserWorker {
    constructor() {
        //get all users from database
        this.getUsers = (0, AsyncWrapper_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield User_1.default.find({});
            return res.json(data);
        }));
        //crates a user in the database
        this.createUser = (0, AsyncWrapper_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const data = yield User_1.default.create(req.body);
            return res.json(data);
        }));
    }
}
exports.default = UserWorker;

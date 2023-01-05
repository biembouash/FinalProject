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
const Blog_1 = __importDefault(require("../models/Blog"));
class BlogWorker {
    postBlog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield Blog_1.default.create(req.body);
            res.json(data);
        });
    }
    getBlogs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield Blog_1.default.find({}).sort({ updated_at: -1 });
            res.json(data);
        });
    }
    updateBlog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskID = req.params.id;
            const data = yield Blog_1.default.findOneAndUpdate({ _id: taskID }, req.body, { new: true });
            res.json(data);
        });
    }
    getBlog(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const taskID = req.params.id;
            const data = yield Blog_1.default.findOne({ _id: taskID }, req.body);
            res.json(data);
        });
    }
}
exports.default = BlogWorker;

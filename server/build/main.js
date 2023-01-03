"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blog_1 = __importDefault(require("./routes/blog"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/blog', blog_1.default);
function start() {
    app.listen(8080, () => { console.log("server is listening on port 8080..."); });
}
start();

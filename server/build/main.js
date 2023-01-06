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
const express_1 = __importDefault(require("express"));
const blog_1 = __importDefault(require("./routes/blog"));
const user_1 = __importDefault(require("./routes/user"));
const connect_1 = __importDefault(require("./db/connect"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const cors = require('cors');
const app = (0, express_1.default)();
//Allow acess from other origin, in our case its 'http://localhost:8080', the client ip.
app.use(cors({
    origin: 'http://localhost:8080',
}));
//Recognize request objects as json.
app.use(express_1.default.json());
//Use the blog router for the endpoint '/api/blog'
app.use('/api/blog', blog_1.default);
//Use the user router for the endpoint '/api/user'
app.use('/api/user', user_1.default);
//Use a custom error handler middleware
app.use(errorHandler_1.default);
//Starts the server
function start() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, connect_1.default)(); //Connects to the DB
            app.listen(8000, () => { console.log("server is listening on port 8000..."); }); //Listens on port 8000
        }
        catch (error) {
            console.log(error);
        }
    });
}
start();

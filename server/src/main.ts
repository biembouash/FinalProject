import express, {Express, Request, Response,NextFunction} from 'express'
import path from 'path';
import BlogRouter from './routes/blog';
import UserRouter from './routes/user';
import connectDB from './db/connect';
import errorHandler from './middleware/errorHandler';
const cors = require('cors')
const app: Express = express();
//Allow acess from other origin, in our case its 'http://localhost:8080', the client ip.
app.use(cors({
    origin: 'http://localhost:8080',
}))
//Recognize request objects as json.
app.use(express.json());
//Use the blog router for the endpoint '/api/blog'
app.use('/api/blog', BlogRouter)
//Use the user router for the endpoint '/api/user'
app.use('/api/user', UserRouter)
//Use a custom error handler middleware
app.use(errorHandler)

//Starts the server
async function start(){
    try{
        await connectDB();//Connects to the DB
        app.listen(8000, () => {console.log("server is listening on port 8000...")}) //Listens on port 8000
    }catch(error){
        console.log(error);
    }
}

start()
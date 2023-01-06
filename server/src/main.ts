import express, {Express, Request, Response,NextFunction} from 'express'
import path from 'path';
import BlogRouter from './routes/blog';
import UserRouter from './routes/user';
import connectDB from './db/connect';
import errorHandler from './middleware/errorHandler';
const cors = require('cors')
const app: Express = express();
app.use(cors({
    origin: 'http://localhost:8080',
}))
app.use(express.json());
app.use('/api/blog', BlogRouter)
app.use('/api/user', UserRouter)
app.use(errorHandler)


async function start(){
    try{
        await connectDB();
        app.listen(8000, () => {console.log("server is listening on port 8000...")})
    }catch(error){
        console.log(error);
    }
}

start()
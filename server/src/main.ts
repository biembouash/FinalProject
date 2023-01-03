import express, {Express, Request, Response,NextFunction} from 'express'
import path from 'path';
import BlogRouter from './routes/blog';
import connectDB from './db/connect';
const cors = require('cors')
const app: Express = express();
app.use(cors({
    origin: 'http://localhost:3000',
}))
app.use(express.json());
app.use('/api/blog', BlogRouter)


async function start(){
    try{
        await connectDB();
        app.listen(8080, () => {console.log("server is listening on port 8080...")})
    }catch(error){
        console.log(error);
    }
}

start()
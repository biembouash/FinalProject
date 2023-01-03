import express, {Express} from 'express'
import BlogRouter from './routes/blog';
import connectDB from './db/connect';
const app: Express = express();

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
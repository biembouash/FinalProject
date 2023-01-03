import express, {Express} from 'express'
import BlogRouter from './routes/blog';
const app: Express = express();

app.use(express.json());
app.use('/api/blog', BlogRouter)


function start(){
    app.listen(8080, () => {console.log("server is listening on port 8080...")})
}

start()
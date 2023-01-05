import express from 'express'
import UserWorker from '../controllers/User';
const UserRouter = express.Router();
const worker = new UserWorker();


UserRouter.get('/', worker.getUsers)
UserRouter.post('/', worker.createUser)


export default UserRouter;
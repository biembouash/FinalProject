import express from 'express'
import UserWorker from '../controllers/User';
const UserRouter = express.Router(); //Creates an express router
const worker = new UserWorker(); //Creates an user worker

//Route the GET method to the default endpoint and call the blog worker getBlogs.
UserRouter.get('/', worker.getUsers)
//Route the POST method to the default endpoing and call the user worker createUser.
UserRouter.post('/', worker.createUser)


export default UserRouter;
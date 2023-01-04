import express from 'express'

const UserRouter = express.Router();


UserRouter.get('/',(req,res) =>{
    res.send("damn?")
})


export default UserRouter;
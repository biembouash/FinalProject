import axios, {AxiosResponse} from "axios"
import { serverInfo } from "./server"

//Define interface to describe a user.Note that we'll only have an _id field when retrieving or adding, so
// it has to be optional.
export interface IUser{
    __id?: string,
    name:string,
    email:string,
    password:string
}
//The worker that will perform user opertions
export class Worker{

    /**
     * Returns a list of all users from the server.
     * 
     * @returns An aray of objects, on per user
     */
    public async listUsers(){
        try{
        const response: AxiosResponse = await axios.get(`${serverInfo.Server}/api/user`)
        return response.data;
        }catch(error){
            console.log(error)
        }

    }
    /**
     * Creates a user and returns its data
     * 
     * @param user The user to be added in the database
     * @returns The data about the user created
     */
    public async createUser(user: IUser){
        try{
        const response: AxiosResponse = await axios.post(`${serverInfo.Server}/api/user`, user)
        return response.data;
        }catch(error){
            console.log(error)
        }
    }
    /**
     * Finds a specific user and retrievies it
     * @param email The user's email
     * @returns the data of the user
     */
    public async findUser(email: string){
       try{
        const users = await this.listUsers();
        const data = users.filter((value) => {return value.email === email});
        return data[0];
       }catch(error){
        console.log(error)
        }
    }
}
import axios, {AxiosResponse} from "axios"
import { serverInfo } from "./server"

export interface IUser{
    __id?: string,
    name:string,
    email:string,
    password:string
}

export class Worker{

    public async listUsers(){
        const response: AxiosResponse = await axios.get(`${serverInfo.Server}/api/user`)
        return response.data;
    }

    public async createUser(user: IUser){
        const response: AxiosResponse = await axios.post(`${serverInfo.Server}/api/user`, user)
        return response.data;
    }

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
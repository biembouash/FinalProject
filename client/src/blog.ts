import axios, {AxiosResponse} from "axios"
import { serverInfo } from "./server"

export interface IBlog{
    author:String,
    title:String,
    content:String,
    created_at:String,
    updated_at:String
}

export class Worker{

    public async listBlogs(){
        const response: AxiosResponse = await axios.get(`${serverInfo.Server}/api/blog`)
        return response.data;
    }

    public async postBlog(blog: IBlog){
        const response: AxiosResponse = await axios.post(`${serverInfo.Server}/api/blog`, blog)
        return response.data;
    }
}
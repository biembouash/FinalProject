import axios, {AxiosResponse} from "axios"
import { serverInfo } from "./server"

export interface IBlog{
    __id?: string,
    author:string,
    title:string,
    content:string,
    created_at:string,
    updated_at:string
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
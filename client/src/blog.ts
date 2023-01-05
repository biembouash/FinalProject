import axios, {AxiosResponse} from "axios"
import { serverInfo } from "./server"

export interface IBlog{
    _id?: string,
    author:string,
    title:string,
    content:string,
    created_at:Date,
    updated_at:Date
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

    public async getBlog(id: string){
        const response: AxiosResponse = await axios.get(`${serverInfo.Server}/api/blog/${id}`)
        return response.data;
    }

    public async updateBlog(id: string, content: string){
        try{
            console.log(`${serverInfo.Server}/api/blog/${id}`)
        const response: AxiosResponse = await axios.patch(`${serverInfo.Server}/api/blog/${id}`,{content: content, updated_at: new Date()})
        return response.data;
        }catch(error){
            console.log(error)
        }
    }
}
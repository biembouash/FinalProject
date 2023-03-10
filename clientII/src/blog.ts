import axios, {AxiosResponse} from "axios"
import { serverInfo } from "./server"

//Define interface to describe a user.Note that "_id" is autmatically generated by the database, so it has to be optional
export interface IBlog{
    _id?: string,
    author:string,
    title:string,
    content:string,
    created_at:Date,
    updated_at:Date
}
//The worker that will perform blog opertions
export class Worker{
    
    /**
     * Returns a lists of objects, one per blog
     * @returns The list of blogs of the server
     */
    public async listBlogs(){
        try{
        const response: AxiosResponse = await axios.get(`${serverInfo.Server}/api/blog`)
        return response.data;
        }catch(error){
            console.log(error)
        }
    }
    /**
     * Post a blog into the database
     * @param blog the informations about the blog
     * @returns the new blog data
     */
    public async postBlog(blog: IBlog){
        try{
        const response: AxiosResponse = await axios.post(`${serverInfo.Server}/api/blog`, blog)
        return response.data;
        }catch(error){
            console.log(error)
        }
    }
    /**
     * Gets a specific blog from database
     * @param id The blogs id
     * @returns the blog data
     */
    public async getBlog(id: string){
        try{
        const response: AxiosResponse = await axios.get(`${serverInfo.Server}/api/blog/${id}`)
        return response.data;
        }catch(error){
            console.log(error)
        }
    }
    /**
     * Updates a existing blog 
     * @param id The id of the blog
     * @param content The new content of the blog
     * @returns the updated blog data
     */
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
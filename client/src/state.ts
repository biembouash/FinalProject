import * as Blog from "./blog";


export default  function createState(inParent: any){
    return{
        user : {},
        blogs: {},
        

        addBlog: async function(blog: Blog.IBlog){
            const blogWorker : Blog.Worker = new Blog.Worker()
            const post: Blog.IBlog = await blogWorker.postBlog(blog)
        }.bind(inParent)
    }
}

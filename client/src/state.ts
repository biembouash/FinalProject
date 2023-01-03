import * as Blog from "./blog";


export default function createState(inParent: any){
    return{
        user : {
            name: 'Guest',
            email: '',
            password: ''
        },
        blogs: [],
        

        addBlog: async function(blog: Blog.IBlog){
            const blogWorker : Blog.Worker = new Blog.Worker()
            const post: Blog.IBlog = await blogWorker.postBlog(blog)
        }.bind(inParent),

        listBlogs: async function() {
            const blogWorker : Blog.Worker = new Blog.Worker()
            const post: Blog.IBlog[] = await blogWorker.listBlogs()
            this.setState({blogs: post})

        }.bind(inParent),   
    }
}

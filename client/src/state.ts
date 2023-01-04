import * as Blog from "./blog";


export default function createState(inParent: any){
    return{
        user : {
            name: 'Guest',
            email: '',
            password: ''
        },
        blogs: [],
        currentview : "BlogList",
        logged: false,


        showPostBlog: function(){
            this.setState({currentview: "PostBlog"})
        }.bind(inParent),

        showBlogList: function(){
            this.setState({currentview: "BlogList"})
        }.bind(inParent),

        showLogin: function(){
            this.setState({currentview: "Login"})
        }.bind(inParent),

        showRegister: function(){
            this.setState({currentview: "Register"})
        }.bind(inParent),
        
        
        addBlog: async function(blog: Blog.IBlog){
            const blogWorker : Blog.Worker = new Blog.Worker()
            const post: Blog.IBlog = await blogWorker.postBlog(blog)
        }.bind(inParent),

        listBlogs: async function() {
            const blogWorker : Blog.Worker = new Blog.Worker()
            const post: Blog.IBlog[] = await blogWorker.listBlogs()
            this.setState({blogs: post})

        }.bind(inParent),

        postBlog: async function(title: string, content: string){
            const blogWorker : Blog.Worker = new Blog.Worker()
            const blog: Blog.IBlog = {
                author: this.state.user.name,
                title: title,
                content: content,
                created_at: "now",
                updated_at: "now",
            }
            const post: Blog.IBlog = await blogWorker.postBlog(blog)
            // const blog_posts: Blog.IBlog[] = this.state.blogs.slice(0); //copy
            // blog_posts.push(post)
            // this.setState({blogs: blog_posts})

        }.bind(inParent),
    }
}

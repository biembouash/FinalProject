import * as Blog from "./blog";
import * as User from "./user"


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
        updateID: '',
        updateContent: '',

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

        showUpdateBlog: function(id: string, content: string){
            this.setState({currentview: "UpdateBlog", updateID: id, updateContent: content})
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
            const date = new Date()
            const blog: Blog.IBlog = {
                author: this.state.user.name,
                title: title,
                content: content,
                created_at: date,
                updated_at: date,
            }
            const post: Blog.IBlog = await blogWorker.postBlog(blog)
            // const blog_posts: Blog.IBlog[] = this.state.blogs.slice(0); //copy
            // blog_posts.push(post)
            // this.setState({blogs: blog_posts})

        }.bind(inParent),

        updateBlog: async function(content: string){
            const worker: Blog.Worker = new Blog.Worker();
            const data = await worker.updateBlog(this.state.updateID,content);
            this.setState({updateID: '', updateContent: ''})
        }.bind(inParent),

        createUser: async function(name: string, email: string, password: string) {
            const userWorker: User.Worker = new User.Worker();
            const user : User.IUser = {
                name: name,
                email: email,
                password: password
            }
            const data: User.IUser = await userWorker.createUser(user);
        }.bind(inParent),

        loginUser: async function(email: string){
            const userWorker: User.Worker = new User.Worker();
            const data: User.IUser = await userWorker.findUser(email);
            this.setState({user: data, logged: true})
           
        }.bind(inParent),

        logoutUser: async function(){
            this.setState({user: {name: 'Guest', email: '', password :''}, logged: false})
        }.bind(inParent),

        listOfUsers: async function(){
            const userWorker: User.Worker = new User.Worker();
            const data: User.IUser[] = await userWorker.listUsers();
            return data
        }
    }
}

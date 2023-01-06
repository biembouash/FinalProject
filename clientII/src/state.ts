/** State.ts
 * Used to maintain the state of the app, i.e, the current view, the user logged details, the list of blogs... 
 */
import * as Blog from "./blog";
import * as User from "./user"

/**
 * This function must be called once and only once from BaseLayout.
 */
export default function createState(inParent: any){
    return{
        //The info about the user logged.
        //If there is no user logged, it will appear as 'Guest'
        user : {
            name: 'Guest',
            email: '',
            password: ''
        },
        //The list of blogs
        blogs: [],
        //The view that is currently showing("Bloglist", "Login", "Register","UpdateBlog","PostBlog")
        currentview : "BlogList",
        //Flag: is the person logged?
        logged: false,
        //The id of the blog the person wants to update
        updateID: '',
        //The content to be updated
        updateContent: '',
        
        /**
         * Show PostBlog in the view list
         */
        showPostBlog: function(){
            this.setState({currentview: "PostBlog"})
        }.bind(inParent),

        /**
         * Show BlogList in the view list
         */
        showBlogList: function(){
            this.setState({currentview: "BlogList"})
        }.bind(inParent),

        /**
         * Show Login in the view list
         */
        showLogin: function(){
            this.setState({currentview: "Login"})
        }.bind(inParent),
        
        /**
         * Show Register in the view list
         */
        showRegister: function(){
            this.setState({currentview: "Register"})
        }.bind(inParent),
        /**
         * Show UpdateBlog in the view list
         */
        showUpdateBlog: function(id: string, content: string){
            this.setState({currentview: "UpdateBlog", updateID: id, updateContent: content})
        }.bind(inParent),
        
    
        
        /**
         * Lists the blogs the exist
         */
        listBlogs: async function() {
            const blogWorker : Blog.Worker = new Blog.Worker()
            const post: Blog.IBlog[] = await blogWorker.listBlogs()
            this.setState({blogs: post})

        }.bind(inParent),

     
        /**
         * Posts a blog into the database
         * @param title Title of the blog
         * @param content Content of the blo
         */
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
        /**
         * Updates a existent blog
         * @param content The new content of the blog
         */
        updateBlog: async function(content: string){
            const worker: Blog.Worker = new Blog.Worker();
            const data = await worker.updateBlog(this.state.updateID,content);
            this.setState({updateID: '', updateContent: ''})
        }.bind(inParent),
        /**
         * Creates a user
         * @param name The user's name
         * @param email The user's email
         * @param password The user's password
         */
        createUser: async function(name: string, email: string, password: string) {
            const userWorker: User.Worker = new User.Worker();
            const user : User.IUser = {
                name: name,
                email: email,
                password: password
            }
            const data: User.IUser = await userWorker.createUser(user);
        }.bind(inParent),
        /**
         * Set the currently user of the app
         * @param email The user's email
         */
        loginUser: async function(email: string){
            const userWorker: User.Worker = new User.Worker();
            const data: User.IUser = await userWorker.findUser(email);
            this.setState({user: data, logged: true})
           
        }.bind(inParent),
        /**
         * Log out the user
         */
        logoutUser: async function(){
            this.setState({user: {name: 'Guest', email: '', password :''}, logged: false})
        }.bind(inParent),
        /**
         * Lists all the users of the app
         * @returns a list of users
         */
        listOfUsers: async function(){
            const userWorker: User.Worker = new User.Worker();
            const data: User.IUser[] = await userWorker.listUsers();
            return data
        }
    }
}

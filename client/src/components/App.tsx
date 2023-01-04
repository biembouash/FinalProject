import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header';
import createState from '../state';

import 'bootstrap/dist/css/bootstrap.min.css';

import BlogList from '../views/BlogList';
import PostBlog from '../views/PostBlog';
import Login from '../views/Login';
import Register from '../views/Register';

class App extends Component {
  state = createState(this);

  render(){
    this.state.listBlogs();
    return (
      <div className="App">
        <Header state={this.state} />
        {this.state.currentview === "BlogList" && <BlogList state={this.state} />}
        {this.state.currentview === "PostBlog" && <PostBlog state={this.state} />}
        {this.state.currentview === "Login" && <Login state={this.state} />}
        {this.state.currentview === "Register" && <Register state={this.state} />}
      </div>
    );
  }
}

export default App;

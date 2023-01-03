import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header';
import Blog from './Blog';
import createState from '../state';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IBlog } from '../blog';

class App extends Component {
  state = createState(this);

  render(){
    this.state.listBlogs();
    return (
      <div className="App">
        <Header state={this.state} />
        <ListGroup variant="flush">
        {this.state.blogs.map((value: IBlog) => {return <ListGroup.Item key={value.__id}>
        <Blog 
        author={value.author} title={value.title} content={value.author} created_at={value.created_at} updated_at={value.updated_at} />
        </ListGroup.Item>})}
        </ListGroup>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import '../css/App.css';
import Header from './Header';
import Blog from './Blog';
import createState from '../state';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = createState(this);
  render(){
    console.log("Daaaanielss dammn")
    return (
      <div className="App">
        <Header />
        <ListGroup variant="flush">
        <Blog author="Daniels" title='damn' content='Elisandra jesus' created_at='jurasick park' />
        </ListGroup>
      </div>
    );
  }
}

export default App;

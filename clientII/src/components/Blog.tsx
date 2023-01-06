import React from 'react'
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/myStyle.css'
import { IBlog } from '../blog';



export default function Blog(props: any){
    return (
        <div className="wrapper">
        <Card className="text-center">
          <Card.Header>Posted By: {props.author}</Card.Header>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
             {props.content}
            </Card.Text>
            {props.author === props.state.user.name &&<Button variant="link" onClick={() => props.state.showUpdateBlog(props._id,props.content)}>Update Blog</Button>}
          </Card.Body>
          <Card.Footer className="text-muted">Created at: {props.created_at.toLocaleString()}</Card.Footer>
          <Card.Footer className="text-muted">Last Update: {props.updated_at.toLocaleString()}</Card.Footer>
        </Card>
        </div>
      );
}
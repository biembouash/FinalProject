import React from 'react'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IBlog } from '../blog';



export default function Blog(props: IBlog){
    return (
        <Card className="text-center">
          <Card.Header>{props.author}</Card.Header>
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>
             {props.content}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">{props.created_at}</Card.Footer>
        </Card>
      );
}
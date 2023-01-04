import React from 'react'
import { ListGroup } from 'react-bootstrap';
import { IBlog } from '../blog';
import Blog from '../components/Blog';

function BlogList(props: any){
    return (
      <div className="BlogList">
        <ListGroup variant="flush">
        {props.state.blogs.map((value: IBlog) => {return <ListGroup.Item key={value.__id}>
        <Blog 
        author={value.author} title={value.title} content={value.content} created_at={value.created_at} updated_at={value.updated_at} />
        </ListGroup.Item>})}
        </ListGroup>
      </div>
    );
  }

export default BlogList;

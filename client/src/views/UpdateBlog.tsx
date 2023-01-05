import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

function UpdateBlog(props: any) {
    const [content, setContent] = useState(props.state.updateContent)
    
    const handleContent = (event) => {
        setContent(event.target.value);
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();
        await props.state.updateBlog(content)
        props.state.showBlogList();
    }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Content</Form.Label>
        <Form.Control 
        as="textarea"   
        rows={3} 
        value={content}
        onChange={handleContent}
        />
      </Form.Group>
      <Button type="submit"> Update Post </Button>
    </Form>
  );
}

export default UpdateBlog;
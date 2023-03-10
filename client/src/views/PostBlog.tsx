import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

function PostBlog(props: any) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    const handleTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleContent = (event) => {
        setContent(event.target.value);
    }

    const validSubmit = ()=> {
      if(title === '' || content == ''){
        alert("Title or content cant be empty!")
        return false;
      }
      return true
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();
        if(!validSubmit()) return
        await props.state.postBlog(title,content);
        props.state.showBlogList();
        alert("Blog Posted with Sucess")
    }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="My Love for DAW" 
        value={title}
        onChange={handleTitle}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Content</Form.Label>
        <Form.Control 
        as="textarea"   
        rows={3} 
        value={content}
        onChange={handleContent}
        />
      </Form.Group>
      <Button type="submit"> Post </Button>
    </Form>
  );
}

export default PostBlog;
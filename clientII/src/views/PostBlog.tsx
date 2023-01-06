import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

function PostBlog(props: any) {
  //creation of states variables and its setters, initilizes every state variable with ''
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
     //Handler to set the new title value
    const handleTitle = (event) => {
        setTitle(event.target.value);
    }
     //Handler to set the new content value
    const handleContent = (event) => {
        setContent(event.target.value);
    }
    //Checks if the submition is valid
    const validSubmit = ()=> {
      if(title === '' || content == ''){
        alert("Title or content cant be empty!")
        return false;
      }
      return true
    }
    //Submition handler
    const handleSubmit = async (event) =>{
        event.preventDefault();//Prevents the browser to reload on submition
        if(!validSubmit()) return
        await props.state.postBlog(title,content);
        props.state.showBlogList();
        alert("Blog Posted with Sucess")
    }
    //The view of posting a blog
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
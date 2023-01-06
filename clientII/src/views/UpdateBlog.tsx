import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
/**
 * The view for updating a blog
 */
function UpdateBlog(props: any) {
  //Creates a state variable ,and its setter, and initializes it with the value in state.updateContent
    const [content, setContent] = useState(props.state.updateContent)
    //Handler to set the new content value
    const handleContent = (event) => {
        setContent(event.target.value);
    }
    //Checks if the updated content is valid
    const validSubmit = () =>{
      if(content == ''){
        alert("Content cannot be empty")
        return false
      }
      return true
    }
    //Submition handler
    const handleSubmit = async (event) =>{
        event.preventDefault();//Prevents the browser to reload on submition
        if(!validSubmit()) return
        await props.state.updateBlog(content)
        props.state.showBlogList();
    }
  return (
      <div className="wrapper">
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
      </div>
  );
}

export default UpdateBlog;
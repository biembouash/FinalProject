import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register(props: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('')

  const handleName =  (event) =>{
    setName(event.target.value)
  }

  const handleEmail =  (event) =>{
    setEmail(event.target.value)
  }

  const handlePassword =  (event) =>{
    setPassword(event.target.value)
  }

  const handlePasswordConfirm =  (event) =>{
    setPasswordConfirm(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await props.state.createUser(name.trim(),email.trim(),password);
    props.state.showBlogList();
    alert("New user registred with sucess, you may now login.")
   

  }
  return (
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Your Name" 
        value={name}
        onChange={handleName}
        />
    </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
        type="email"
        placeholder="Enter email" 
        value={email}
        onChange={handleEmail}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={handlePassword}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control 
        type="password" 
        placeholder="Password Confirmation" 
        value={passwordConfirm}
        onChange={handlePasswordConfirm}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Register;
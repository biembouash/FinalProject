import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function Login(props: any) {
  //creation of states variables and its setters, initilizes every state variable with ''
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //Checks if the email exists
  const existedEmail = async() =>{
    const users = await props.state.listOfUsers();
    return users.filter((value) => {return email === value.email}).length === 0
  }
//Checks if the password matches the user account
  const passwordMatch = async() =>{
    const users = await props.state.listOfUsers();
    return users.filter((value) => {return email === value.email})[0].password === password
  }
  //Checks if the email is valid
  const validEmail = () => {
    const regExpr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)/
    return email.trim().match(regExpr)
 }
//Checks if the form is valid
 const validForm = async () =>{
  if(email === '' || password === ''){
    alert("Please, Fill out all the forms")
    return false
  }
  if(!validEmail()){
    alert("Invalid email format")
    return false
  }
  if((await existedEmail())){
    alert("Email does not Exist!")
    return false
  }
  if(!(await passwordMatch())){
    alert("Incorrect password!")
    return false
  }
  return true
}
//Handler to set the new email value
  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
//Handler to set the new password value
  const handlePassword = (event) =>{
    setPassword(event.target.value);
  }
  //Submition handler
  const handleSubmit = async (event) => {
    event.preventDefault();//Prevents the browser to reload on submition
    if(!(await validForm())) return
    await props.state.loginUser(email);
    props.state.showBlogList();
    alert("Logged in with Sucess")
    
  }
  
  return (
    <Form onSubmit={handleSubmit}>
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
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default Login;
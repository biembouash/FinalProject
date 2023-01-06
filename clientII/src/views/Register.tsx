import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Register(props: any) {
  //creation of states variables and its setters, initilizes every state variable with ''
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('')

  //Checks if the username already exists
  const existedUser = async()=>{
    const users = await props.state.listOfUsers();
    return users.filter((value) => {return name === value.name}).length === 0

  }
  //Checks if the email already exists
  const existedEmail = async() =>{
    const users = await props.state.listOfUsers();
    return users.filter((value) => {return email === value.email}).length === 0
  }

  //Checks if the email is valid
  const validEmail = () => {
      const regExpr = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)/
      return email.trim().match(regExpr)
   }
  //Check if the passwords match
  const validPassword = ()=>{
      return password === passwordConfirm
    }
  //Check if the form is valid
  const validForm = async () =>{
    if(name === '' || email === '' || password === '' || passwordConfirm === ''){
      alert("Please, Fill out all the forms")
      return false
    }
    if(!validEmail()){
      alert("Invalid email format")
      return false
    }
    if(!validPassword()){
      alert("Passwords dont match!")
      return false
    }
    if(!(await existedUser())){
      alert("Username already Exists!")
      return false;
    }
    if(!(await existedEmail())){
      alert("Email already existis!")
      return false
    }
    return true
  }
  //Handler to set the new name value
  const handleName =  (event) =>{
    setName(event.target.value)
  }
  //Handler to set the new email value
  const handleEmail =  (event) =>{
    setEmail(event.target.value)
  }
  //Handler to set new password value
  const handlePassword =  (event) =>{
    setPassword(event.target.value)
  }
  //Handler to set new PasswordConfim value
  const handlePasswordConfirm =  (event) =>{
    setPasswordConfirm(event.target.value)
  }
  //Submition handler 
  const handleSubmit = async (event) => {
    event.preventDefault(); //Prevents the browser to reload on submition
    if(!(await validForm())) return
    await props.state.createUser(name.trim(),email.trim(),password);
    props.state.showBlogList();
    alert("New user registred with sucess, you may now login.")
   

  }
  //Register view
  return (
      <div className="wrapper2">
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
      <Form.Group className="mb-3">
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
      <Form.Group className="mb-3" >
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
      </div>
  );
}

export default Register;
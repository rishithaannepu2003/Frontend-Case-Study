import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Login.css';
import {useNavigate} from "react-router-dom";
const Login = ({setIsLogin , isLogin}) => {
  const navigation=useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault(); 
    const username = document.getElementById('username').value;
    const password = document.getElementById('outlined-password-input').value;
    console.log('Username:', username);
    console.log('Password:', password);
    if(username==="username" && password==="password"){
      console.log("next page");
      navigation("/adminpanel")
      setIsLogin(!isLogin);
    }else{
      alert("wrong username or password");
    }
  };

  return (
    <div className="wrapper">
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <h1>Login</h1>
        <div>
          <TextField
            required
            id="username"
            label="User Name"
          />
          <br />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <br />
          <button type="submit">Submit</button>
        </div>
      </Box>
      <div className='hint'>
        <p>Note - Please enter the below username and password for successful login.</p>
        <p>User Name = username</p>
        <p>Password = password</p>
      </div>
    </div>
  );
};

export default Login;

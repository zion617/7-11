import React from 'react';
//import Box from '@mui/material/box';
import Grid from '@mui/material/Grid';
//import { styled } from '@mui/material/styles';
import {Avatar, Button, Paper, TextField, Typography, Link, FormControlLabel} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';


const Login= () => {
const paperStyle ={
padding:"20px",
height:"70vh",
width:"280",
margin: "25px auto"
}

const avatarStyle={
  backgroundColor:"green"
}

const textField ={
  margin:'10px'
}

const btnstyle = {
  margin:'8px 0'
}

return(
    <Grid>
       <Paper elevation = {18} style={paperStyle}>
        <Grid align = "center">
         <Avatar style = {avatarStyle}> </Avatar>
         <h4>Sign in</h4>
      </Grid>

      <TextField

      label = 'UserName'
      style={textField}
      placeholder='Enter Username'
      fullWidth
      required>
      </TextField>

      <TextField
      label = 'Password'
      style={textField}
      placeholder='EnterPassword'
      type='password'
      fullWidth
      required>
      </TextField>

      <FormControlLabel
      control = {
        <Checkbox
        name='Checked'
        color='primary'
      />}
    
      label = 'Remember me'
      />
      <Button
      type = "submit"
      color= "primary"
      variant = "contained"
      style= {btnstyle}
      fullWidth
      >
        Sign In
      </Button>

      <Typography
      style ={textField}
      >
        <Link href = "x">
            Forgot Password
        </Link>

      </Typography>

      <Typography
      style = {textField}
      >
     <Link href = "x"></Link>
     Dont have an account? Sign up!
     <Link/>

      </Typography>
    
      </Paper>
      
      </Grid>
      //  <Typography>
      // <p>Hello</P>

      // </Typography>
      )
}
export default Login;
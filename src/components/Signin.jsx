import React, {useState} from 'react'
import {signInWithGoogle} from '../firebase.utility/firebase.utility.js'
import {Button} from "@material-ui/core";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputFields from "./InputFields";
import {LoginUser} from "./ApiCalls";
import {userRegistration} from "./LocalStorageItems/User";
import { withRouter } from 'react-router';

const SignIn = (props) =>  {
    const [values, setValues] = useState({
        email: "",
        password: "",
        showPassword: false,
    });

    const handleOnSubmit = async(event) => {
        event.preventDefault();
        try{
            LoginUser(values).then(data => {  
                if(data.message) {
                    console.log("Error :- ", data.message);
                }else{
                    console.log(data.data.user);    
                    const user = userRegistration(data.data.user);
                    props.history.push("/");
                    window.location.reload();
                }   
            });
        }catch(error) {
            console.log(error.message)
        }
    };

    const handleOnChange = (event) => {
        setValues({...values, [event.target.name] : event.target.value})
    };

    const handleClickShowPassword = (name) => {
        name === "password" ? setValues({...values, showPassword: !values.showPassword}) :  setValues({...values, showConfirmPassword: !values.showConfirmPassword}) 
    };

        return (
            <div className='sign-in'>
                <h1><b> I already have an account </b></h1>
                <span> Signin with your email & password </span>
                <form autoComplete="off">
                    <Stack mt={5} spacing={3}>
                        <InputFields 
                            showPadding={false}
                            label = "E-mail"
                            type="text"
                            name="email"
                            value={values.email}
                            onChange={(e) => handleOnChange(e)}
                        />

                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password"> Password </InputLabel>
                        <OutlinedInput
                            id='outlined-adornment-password'
                            type={values.showPassword ? "text" : "password"}
                            name="password"
                            value={values.password}
                            onChange={(e) => handleOnChange(e)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => handleClickShowPassword("password")} >
                                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            } />
                    </FormControl>

                        <Button variant="contained" size="medium" color="primary" onClick={(e) => handleOnSubmit(e)}> SIGN IN </Button>
                        <Button variant="contained" color="success" googlestyle='true' size="medium" onClick={signInWithGoogle}> Sign in with Google </Button>
                    </Stack>
                </form>
                
            </div>
        )       
  }

export default withRouter(SignIn);
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
import AlertMessage from './AlertMessage.jsx';
import {Box} from "@material-ui/core";
import {Form_Validation} from "./FormValidations";
import _ from "lodash";

const SignIn = (props) =>  {
    const [values, setValues] = useState({
        email: "",
        password: "",
        showPassword: false,
    });
    const [error, setError] = useState({});

    const {email, password} = values;

        const handleOnSubmit = async(event) => {
        event.preventDefault();
        if(!_.isEmpty(Form_Validation(values))){
            return;
        }
        try{
            LoginUser(values).then(data => {  
                if(data.message) {
                    console.log("Error :- ", data.message);
                    setTimeout(() => {
                        setError("");
                        window.location.reload();
                      }, 2000);
                      setError(data.message);
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
        setValues({...values, [event.target.name] : event.target.value});
        setError(Form_Validation(values));
    };

    const handleClickShowPassword = (name) => {
        name === "password" ? setValues({...values, showPassword: !values.showPassword}) :  setValues({...values, showConfirmPassword: !values.showConfirmPassword}) 
    };

    return (
        <Box>
        {/* {error !== "" && <AlertMessage shouldDisplay={"dontShow"} severity="error" pinCodeInvalid={true} message={error} />} */}
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
                        onBlur={() => setError(Form_Validation(values))}
                        onChange={(e) => handleOnChange(e)}
                        error = {error.email}
                        helperText = {error.email}
                    />

                <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password" error = {error.password}> Password </InputLabel>
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
                        } 
                        onBlur={() => setError(Form_Validation(values))}
                        error = {error.password}
                        helperText = {error.password}/>
                </FormControl>

                    <Button variant="contained" disabled={email === "" || password === "" || !_.isEmpty(Form_Validation(values))} size="medium" color="primary" onClick={(e) => handleOnSubmit(e)}> SIGN IN </Button>
                    {/* <Button variant="contained" color="success" googlestyle='true' size="medium" onClick={signInWithGoogle}> Sign in with Google </Button> */}
                </Stack>
            </form>
        </Box>
        )       
  }

export default withRouter(SignIn);
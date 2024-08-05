import React, {useState} from 'react'
import {Button, Box, Typography, Container} from "@material-ui/core";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import InputFields from "./InputFields";
import { withRouter } from 'react-router';
import AlertMessage from './AlertMessage.jsx';
import {makeStyles, Card} from "@material-ui/core";
import {SigninSchema} from "./FormValidations";
import loginImg from "../assets/login.png";
import _ from "lodash";
import { Link } from 'react-router-dom';
import { LoginUser } from './ApiCalls';
import { useDispatch } from 'react-redux';
import { userRegistration } from './LocalStorageItems/User';

const useStyles = makeStyles(theme =>({
    Signin: {
        height: "50rem",
        width: "25rem",
        backgroundColor: "white",
        boxShadow: "10px 5px 10px grey",
        padding: "20px"
    },
    signup: {
        color: 'inherit',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'none',
        },
      },
    fontSize: {
        fontSize: "12px"
    },
    termsOfUse: {
        color: "#f50057",
        fontWeight: "600"
    }
}));

const SignIn = React.memo((props) =>  {
    const dispatch = useDispatch()
    const classes = useStyles();
    const [values, setValues] = useState({
        email: "",
        password: "",
        showPassword: false,
    });
    const [showsuccessalert] = useState(false);
    const [showerroralert, setShowErrorAlert] = useState(false);
    const [message, setMessage] = useState("");
    const [error] = useState("");
    const [errors, setErrors] = useState("");

    const {email, password} = values;

        const handleOnSubmit = async(event) => {
        event.preventDefault();
        if(!_.isEmpty(SigninSchema(values))){
            return;
        }
        try{
            LoginUser(values).then(async data => {  
                if(data.message) {
                    setTimeout(() => {
                        setShowErrorAlert(false);
                      }, 4000);
                    setShowErrorAlert(true);
                    setMessage(`Login Failed  ${data.message}`);
                    return;
                }else{
                    await userRegistration(data.data.user);
                    props.history.push("/");
                }   
            });
        }catch(error) {
            console.log(error.message);
            setTimeout(() => {
                setShowErrorAlert(false);
              }, 5000);
            setShowErrorAlert(true);
            setMessage(`Login Failed  ${error.message}`);
        }
    };

    const handleOnChange = (event) => {
        setValues({...values, [event.target.name] : event.target.value});
        setErrors(SigninSchema(values));
    };

    const handleClickShowPassword = (name) => {
        name === "password" ? setValues({...values, showPassword: !values.showPassword}) :  setValues({...values, showConfirmPassword: !values.showConfirmPassword}) 
    };

    const formData = () => {
        return(
            <form autoComplete="off">
                <Stack mt={5} spacing={3}>
                    <InputFields 
                        showPadding={false}
                        label = "E-mail"
                        type="text"
                        name="email"
                        value={values.email}
                        onChange={(e) => handleOnChange(e)}
                        error = {Boolean(errors.email)}
                        helperText = {errors.email}
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
                            } 
                            error = {Boolean(errors.password)}
                            helperText = {errors.password}/>
                    </FormControl>

                    <span className={classes.fontSize}> By Continuing, I agree to the <span className={classes.termsOfUse}>Terms of Use</span> & <span className={classes.termsOfUse}>Privacy Policy</span> </span>
                    
                    <Button variant="contained" disabled={email === "" || password === "" || !_.isEmpty(SigninSchema(values))} size="medium" color="primary" onClick={(e) => handleOnSubmit(e)}> SIGN IN </Button>
                
                    <span className={classes.fontSize}> Have trouble logging In ? <span className={classes.termsOfUse}> Get help </span></span>
                </Stack>
                <Box display="flex" justifyContent="flex-end">
                    <Link to="/signup" className={classes.signup}> <span className={classes.termsOfUse}> Sign Up </span> </Link>
                </Box>
            </form>
        )
    }

    return (
        <Container className={classes.Signin}>
            <img src={loginImg} alt="Login" width="100%" />

            <Box mt={5}>
                {error !== "" && <AlertMessage shouldDisplay={"dontShow"} severity="error" pinCodeInvalid={true} message={error} />}
                {showsuccessalert && <AlertMessage shouldDisplay={"dontShow"} severity="success" pinCodeInvalid={false} message={message} />}
                {showerroralert && <AlertMessage shouldDisplay={"dontShow"} severity="error" pinCodeInvalid={true} message={message} />}

                <h2><b> Login </b></h2>
                <span> Signin with your email & password </span>
                {formData()}
            </Box>      
        </Container>
        
        )       
  });

export default withRouter(SignIn);
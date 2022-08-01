import React, {useState} from 'react'
import InputField from "./InputFields";
import {Button,Box,MenuItem,Select,Card,makeStyles} from "@material-ui/core";
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AlertMessage from "./AlertMessage";
import Stack from '@mui/material/Stack';
import {RegisterUser} from "./ApiCalls";
import {Form_Validation} from "./FormValidations";
import _ from "lodash";

const useStyles = makeStyles(theme =>({
    fillBackground: {
        backgroundColor: "white",
        boxShadow: "10px 5px 10px grey",
        borderRadius: "10px",
        padding: "20px"
    }
}));

const Signup = React.memo(() =>  {
    const classes = useStyles();
    const [showsuccessalert, setShowSuccessAlert] = useState(false);
    const [showerroralert, setShowErrorAlert] = useState(false);
    const [message, setMessage] = useState("");
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: '',
        type: 'user',
        is_authorized: false,
        showPassword: false,
        showConfirmPassword: false,
    });
    const [error] = useState("");
    const [errors, setErrors] = useState("");

    const {username, email, password, confirmpassword} = values;
    const userType = ["admin", "user"];

    const handleOnSubmit = async(event) => {
        event.preventDefault();
        if(!_.isEmpty(Form_Validation(values))){
            return;
        }
        try{
            if(password !== confirmpassword) {
                setMessage("Password And ConfirmPassword Didnt Match");
            }else{
                RegisterUser(values).then(data => {  
                    if(data.message) {
                        setTimeout(() => {
                            setShowErrorAlert(false);
                          }, 5000);
                        setShowErrorAlert(true);
                        setMessage(`Registration Failed  ${data.message}`);
                        return;
                    }else{
                        setValues({username: '',email: '',password: '',confirmpassword: ''});
                        setTimeout(() => {
                            setShowSuccessAlert(false);
                        }, 3000);
                        setShowSuccessAlert(true);
                        setMessage("Registration Successfull");
                    }           
                })
            }
        }catch(error) {
            console.log(error.message);
            setTimeout(() => {
                setShowErrorAlert(false);
              }, 5000);
            setShowErrorAlert(true);
            setMessage(`Registration Failed  ${error.message}`);
        }
    }

    const handleClickShowPassword = (name) => {
        name === "password" ? setValues({...values, showPassword: !values.showPassword}) :  setValues({...values, showConfirmPassword: !values.showConfirmPassword}) 
      };

    const handleOnChange = (event) => {
        setValues({...values, [event.target.name] : event.target.value});
        setErrors(Form_Validation(values));
        }
    
    const showSignupForm = () => {
        return( 
            <form autoComplete="off">
                <Stack spacing={3}>
                    <InputField
                        label="Name"
                        name="username"
                        type="text"
                        fullWidth
                        value={values.username}
                        onChange={(e) => handleOnChange(e)} 
                        error = {Boolean(errors.username)}
                        helperText = {errors.username}
                    />

                    <InputField
                        showPadding={false}
                        label="email"
                        name="email"
                        type="text"
                        fullWidth
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

                    <FormControl variant="outlined" fullWidth>
                        <InputLabel htmlFor="outlined-adornment-password"> Confirm Password </InputLabel>
                        <OutlinedInput
                            id='outlined-adornment-password'
                            type={values.showConfirmPassword ? "text" : "password"}
                            name="confirmpassword"
                            value={values.confirmpassword}
                            onChange={(e) => handleOnChange(e)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => handleClickShowPassword("confirmpassword")} >
                                        {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            } 
                            error = {Boolean(errors.confirmpassword)}
                            helperText = {errors.confirmpassword}/>
                    </FormControl>

                    <Box sx={{ minWidth: 120, marginTop: 15}}>
                        <FormControl fullWidth>
                            <Select labelId="type" id="type" name="type" value={values.type} onChange={(e) => handleOnChange(e)}>
                                {userType && userType.map((user,i) => (
                                    <MenuItem value={user} key={i}> {user} </MenuItem>
                                ))}
                            </Select> 
                        </FormControl>
                    </Box>
                    <Button type="submit" variant="contained" color="secondary" disabled={email === "" || password === "" || username ==="" || confirmpassword === "" || !_.isEmpty(Form_Validation(values))} onClick={(e) => handleOnSubmit(e)} fullWidth> <b> Sign Up </b> </Button>
                </Stack>
            </form>
        )}

    return(
       <Card className={classes.fillBackground}>
            {error !== "" && <AlertMessage shouldDisplay={"dontShow"} severity="error" pinCodeInvalid={true} message={error} />}
            {showsuccessalert && <AlertMessage shouldDisplay={"dontShow"} severity="success" pinCodeInvalid={false} message={message} />}
            {showerroralert && <AlertMessage shouldDisplay={"dontShow"} severity="error" pinCodeInvalid={true} message={message} />}

           <h1><b> I dont have an account </b></h1>
              <span> Sign up with your email & password </span>
                {showSignupForm()}
        </Card>
        )
});

export default Signup

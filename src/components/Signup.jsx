import React, {useState} from 'react'
import InputField from "./InputFields";
import {Button,Box,MenuItem,Select} from "@material-ui/core";
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

const Signup = () =>  {
    const [showalert, setShowAlert] = useState(false);
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

    const {username, email, password, confirmpassword} = values;
    const userType = ["Admin", "user"];

    const handleOnSubmit = async(event) => {
        event.preventDefault();
        try{
            if(password !== confirmpassword) {
                setMessage("Password And ConfirmPassword Didnt Match");
            }else{
                RegisterUser(values).then(data => {  
                    if(data.message) {
                        console.log("Error :- ", data.message);
                    }else{
                        console.log("Data : " , data.user);    
                    }           
            })
                // const user  = await auth.createUserWithEmailAndPassword(email, password);
                // const signUpUser = await CreateUserProfileDocument(user, {username});
                // console.log("signUpUser : ", signUpUser);
                setValues({
                    username: '',
                    email: '',
                    password: '',
                    confirmpassword: ''
                })
                setTimeout(() => {
                    setShowAlert(false);
                }, 3000);
                setShowAlert(true);
                setMessage("Registration Successfull");
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
        console.log(event.target.name);
        setValues({...values, [event.target.name] : event.target.value })
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
                        onChange={(e) => handleOnChange(e)} />

                    <InputField
                        showPadding={false}
                        label="email"
                        name="email"
                        type="text"
                        fullWidth
                        value={values.email}
                        onChange={(e) => handleOnChange(e)}/>

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
                            } />
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
                    <Button type="submit" variant="contained" color="secondary" onClick={(e) => handleOnSubmit(e)} fullWidth> <b> Sign Up </b> </Button>
                </Stack>
            </form>
        )}

    return(
       <div className='sign-up'>
            {showalert && <AlertMessage shouldDisplay={"dontShow"} severity="success" pinCodeInvalid={false} message={message} />}
            {showerroralert && <AlertMessage shouldDisplay={"dontShow"} severity="error" pinCodeInvalid={true} message={message} />}

           <h1><b> I dont have an account </b></h1>
              <span> Sign up with your email & password </span>
                {showSignupForm()}
        </div>
        )
}

export default Signup

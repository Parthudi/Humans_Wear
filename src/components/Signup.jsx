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
        backgroundColor: `rgb(238, 199, 222)`,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='540' height='450' viewBox='0 0 1080 900'%3E%3Cg fill-opacity='.1'%3E%3Cpolygon fill='%23444' points='90 150 0 300 180 300'/%3E%3Cpolygon points='90 150 180 0 0 0'/%3E%3Cpolygon fill='%23AAA' points='270 150 360 0 180 0'/%3E%3Cpolygon fill='%23DDD' points='450 150 360 300 540 300'/%3E%3Cpolygon fill='%23999' points='450 150 540 0 360 0'/%3E%3Cpolygon points='630 150 540 300 720 300'/%3E%3Cpolygon fill='%23DDD' points='630 150 720 0 540 0'/%3E%3Cpolygon fill='%23444' points='810 150 720 300 900 300'/%3E%3Cpolygon fill='%23FFF' points='810 150 900 0 720 0'/%3E%3Cpolygon fill='%23DDD' points='990 150 900 300 1080 300'/%3E%3Cpolygon fill='%23444' points='990 150 1080 0 900 0'/%3E%3Cpolygon fill='%23DDD' points='90 450 0 600 180 600'/%3E%3Cpolygon points='90 450 180 300 0 300'/%3E%3Cpolygon fill='%23666' points='270 450 180 600 360 600'/%3E%3Cpolygon fill='%23AAA' points='270 450 360 300 180 300'/%3E%3Cpolygon fill='%23DDD' points='450 450 360 600 540 600'/%3E%3Cpolygon fill='%23999' points='450 450 540 300 360 300'/%3E%3Cpolygon fill='%23999' points='630 450 540 600 720 600'/%3E%3Cpolygon fill='%23FFF' points='630 450 720 300 540 300'/%3E%3Cpolygon points='810 450 720 600 900 600'/%3E%3Cpolygon fill='%23DDD' points='810 450 900 300 720 300'/%3E%3Cpolygon fill='%23AAA' points='990 450 900 600 1080 600'/%3E%3Cpolygon fill='%23444' points='990 450 1080 300 900 300'/%3E%3Cpolygon fill='%23222' points='90 750 0 900 180 900'/%3E%3Cpolygon points='270 750 180 900 360 900'/%3E%3Cpolygon fill='%23DDD' points='270 750 360 600 180 600'/%3E%3Cpolygon points='450 750 540 600 360 600'/%3E%3Cpolygon points='630 750 540 900 720 900'/%3E%3Cpolygon fill='%23444' points='630 750 720 600 540 600'/%3E%3Cpolygon fill='%23AAA' points='810 750 720 900 900 900'/%3E%3Cpolygon fill='%23666' points='810 750 900 600 720 600'/%3E%3Cpolygon fill='%23999' points='990 750 900 900 1080 900'/%3E%3Cpolygon fill='%23999' points='180 0 90 150 270 150'/%3E%3Cpolygon fill='%23444' points='360 0 270 150 450 150'/%3E%3Cpolygon fill='%23FFF' points='540 0 450 150 630 150'/%3E%3Cpolygon points='900 0 810 150 990 150'/%3E%3Cpolygon fill='%23222' points='0 300 -90 450 90 450'/%3E%3Cpolygon fill='%23FFF' points='0 300 90 150 -90 150'/%3E%3Cpolygon fill='%23FFF' points='180 300 90 450 270 450'/%3E%3Cpolygon fill='%23666' points='180 300 270 150 90 150'/%3E%3Cpolygon fill='%23222' points='360 300 270 450 450 450'/%3E%3Cpolygon fill='%23FFF' points='360 300 450 150 270 150'/%3E%3Cpolygon fill='%23444' points='540 300 450 450 630 450'/%3E%3Cpolygon fill='%23222' points='540 300 630 150 450 150'/%3E%3Cpolygon fill='%23AAA' points='720 300 630 450 810 450'/%3E%3Cpolygon fill='%23666' points='720 300 810 150 630 150'/%3E%3Cpolygon fill='%23FFF' points='900 300 810 450 990 450'/%3E%3Cpolygon fill='%23999' points='900 300 990 150 810 150'/%3E%3Cpolygon points='0 600 -90 750 90 750'/%3E%3Cpolygon fill='%23666' points='0 600 90 450 -90 450'/%3E%3Cpolygon fill='%23AAA' points='180 600 90 750 270 750'/%3E%3Cpolygon fill='%23444' points='180 600 270 450 90 450'/%3E%3Cpolygon fill='%23444' points='360 600 270 750 450 750'/%3E%3Cpolygon fill='%23999' points='360 600 450 450 270 450'/%3E%3Cpolygon fill='%23666' points='540 600 630 450 450 450'/%3E%3Cpolygon fill='%23222' points='720 600 630 750 810 750'/%3E%3Cpolygon fill='%23FFF' points='900 600 810 750 990 750'/%3E%3Cpolygon fill='%23222' points='900 600 990 450 810 450'/%3E%3Cpolygon fill='%23DDD' points='0 900 90 750 -90 750'/%3E%3Cpolygon fill='%23444' points='180 900 270 750 90 750'/%3E%3Cpolygon fill='%23FFF' points='360 900 450 750 270 750'/%3E%3Cpolygon fill='%23AAA' points='540 900 630 750 450 750'/%3E%3Cpolygon fill='%23FFF' points='720 900 810 750 630 750'/%3E%3Cpolygon fill='%23222' points='900 900 990 750 810 750'/%3E%3Cpolygon fill='%23222' points='1080 300 990 450 1170 450'/%3E%3Cpolygon fill='%23FFF' points='1080 300 1170 150 990 150'/%3E%3Cpolygon points='1080 600 990 750 1170 750'/%3E%3Cpolygon fill='%23666' points='1080 600 1170 450 990 450'/%3E%3Cpolygon fill='%23DDD' points='1080 900 1170 750 990 750'/%3E%3C/g%3E%3C/svg%3E")`,
        borderRadius: "10px",
        padding: "20px"
    }
}));

const Signup = () =>  {
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
    const [error, setError] = useState("");
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
                // const user  = await auth.createUserWithEmailAndPassword(email, password);
                // const signUpUser = await CreateUserProfileDocument(user, {username});
                // console.log("signUpUser : ", signUpUser);

                // setValues({
                //     username: '',
                //     email: '',
                //     password: '',
                //     confirmpassword: ''
                // })
                // setTimeout(() => {
                //     setShowSuccessAlert(false);
                // }, 3000);
                // setShowSuccessAlert(true);
                // setMessage("Registration Successfull");
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
}

export default Signup
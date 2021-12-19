import React, {useEffect,useState} from "react";
import { Typography,Box,makeStyles,Paper,Tooltip,Button} from "@material-ui/core";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import InputField from "../InputFields";
import Alert from '@mui/material/Alert';

const useStyles = makeStyles((theme) => ({
    box: {
        margin: "1vw 2vw 1vw 2vw"
    },
    captchaBox:{
        width: "15vw",
        margin: "2vw 0vw 1vw 0vw",
        border: "1px solid grey",
        borderRadius: 5,
    }
}));

const CashOnDelivery = () => {
    const [captcha, setCaptcha] = useState("");
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);
    const classes = useStyles();

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleOnChange = (e) => {
        setCaptcha(e.target.value);
    }
    
    const handleOnSubmit = (e) => {
        console.log(captcha);
        if(validateCaptcha(captcha, false)) {
            setTimeout(() => {
                setSuccess(null);
            }, 3000);
            setSuccess(" Woahooo Captcha Matched — You Can Proceed! ");

        }else {
            setTimeout(() => {
                setError(null);
            }, 3000);
            setError("Oops Captcha Invalid - You Cant Proceed Further !");
            
        }
    }

    return(
        <Box  className={classes.box} >
              <Tooltip title="COD" placement="right-start">
                <b> Pay On Delivery (Cash/Card/UPI) </b>
              </Tooltip>
            <Box className={classes.captchaBox} align="center">
                <LoadCanvasTemplate reloadText="Change Image" reloadColor="red"/>
            </Box>
            <Box>
                <form autoComplete="off">
                    <InputField
                        required 
                        fullWidth
                        variant = "outlined"
                        type = "text"
                        label = "Enter Code Shown In The Above Image"
                        name = "captcha"
                        value = {captcha}
                        onChange = {(e) => handleOnChange(e)}
                    />
                    {success ? <Alert severity="success"> {success} </Alert> : error ? <Alert severity="error"> {error} </Alert> : ""}

                    <Typography variant="caption" display="block" gutterBottom>
                        You can pay via Cash/Card or UPI enabled at the time of delivery. Ask your delivery executive for this options
                    </Typography>
                    <Button variant="contained" color="secondary" fullWidth size="large" mt={2} onClick={() => handleOnSubmit()}>
                        PLACE ORDER
                    </Button>
                </form>
            </Box>
        </Box>
    )
}

export default CashOnDelivery;
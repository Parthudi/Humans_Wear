import React, {useEffect,useState} from "react";
import { Typography,Box,makeStyles,Paper,Tooltip,Button,InputAdornment,FormControl,InputLabel,OutlinedInput,Grid} from "@material-ui/core";
import InputField from "../InputFields";
import PaymentTwoToneIcon from '@mui/icons-material/PaymentTwoTone';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import StripeCheckout from "react-stripe-checkout";
import {getUser} from "../LocalStorageItems/User";
import {useSelector} from "react-redux";

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

const CardPayment = (props) => {
    const totalPrice = useSelector((state) => state.totalAmount);

    const [values, setValues] = useState({
        card: "",
        userName: "",
        validTill: "",
        cvv: "",
    })
    const [user, setUser] = useState({});
    const [amount, setAmount] = useState(0);
    const classes = useStyles();


    useEffect(() => {
        const user = getUser();
        setUser(user);
    }, []);


    const handleOnChange = (e) => {
        // setCaptcha(e.target.value);
    }
    
    const handleOnSubmit = (e) => {
    }

    const makePayment = token => {
        let products = {};
        products["amount"] = amount;
        
        const body = {
            token,
            products,
            user
        }
        const headers = {
            "Content-Type": "application/json"
        }

        return fetch(`http://localhost:3001/v1/payment` , {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        }).then(response => {
            console.log(`RESPONSE :- ${JSON.stringify(response)}`);
        }).catch(err => {
            console.log(`ERROR :- ${err}`);
        })
    }

    return(
        <Box mt={4} ml={3} className={classes.box} >
              <Tooltip title="CARD" placement="right-start">
                <b> CREDIT/DEBIT CARD </b>
              </Tooltip>
                <form autoComplete="off">
                    <Box mt={2} mb={2}>
                        <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
                            <InputLabel htmlFor="outlined-card">Card Number</InputLabel>
                            <OutlinedInput
                                id="outlined-card"
                                type="text"
                                value={values.card}
                                name="card"
                                onChange={() => handleOnChange()}
                                endAdornment={
                                <InputAdornment position="end" style={{cursor:"default"}}>
                                    <PaymentTwoToneIcon/>
                                </InputAdornment>
                                }
                                label="Card Number"
                            />
                        </FormControl>

                        <InputField
                            required 
                            fullWidth
                            variant = "outlined"
                            type = "text"
                            label = "Name On Card"
                            name = "userName"
                            value = {values.userName}
                            onChange = {(e) => handleOnChange(e)} />

                        <Grid container spacing={4}>
                            <Grid item  xs={7} sm={7} md={8}>
                                <InputField
                                    required 
                                    fullWidth
                                    variant = "outlined"
                                    type = "text"
                                    label = "Valid Thru (MM/YY)"
                                    name = "userName"
                                    value = {values.userName}
                                    onChange = {(e) => handleOnChange(e)} />
                            </Grid>  
                            <Grid item xs={5} sm={5} md={4}>
                                <Box  height={15}/>
                                <FormControl fullWidth  variant="outlined">
                                <InputLabel htmlFor="outlined-cvv">CVV</InputLabel>
                                <OutlinedInput
                                    id="outlined-cvv"
                                    type = "text"
                                    label = "CVV"
                                    name = "cvv"
                                    value = {values.cvv}
                                    onChange={() => handleOnChange()}
                                    endAdornment={
                                    <InputAdornment position="end" style={{cursor:"default"}}>
                                        <InfoOutlinedIcon/>
                                    </InputAdornment >} />
                                </FormControl>
                            </Grid> 
                        </Grid> 
                    </Box>
                    <Typography variant="caption" display="block" gutterBottom>
                        <FormControlLabel control={<Switch check />} label="save this card for faster payments " /> <InfoOutlinedIcon style={{fontSize:"20px"}} />
                    </Typography>

                    <StripeCheckout stripeKey={process.env.REACT_APP_KEY} token={makePayment} amount={() => totalPrice * 100} name="Place Order"> 
                        <Button variant="contained" color="secondary" fullWidth size="large"  onClick={() => handleOnSubmit()}>
                            PLACE ORDER ${totalPrice}
                        </Button>
                    </StripeCheckout>
                    
                </form>
            
        </Box>
    )
}

export default CardPayment;
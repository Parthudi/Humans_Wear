import React, {useEffect,useState} from "react";
import { Typography,Box,makeStyles,Paper,Tooltip,Button,InputAdornment,FormControl,InputLabel,OutlinedInput,Grid} from "@material-ui/core";
import InputField from "../InputFields";
import PaymentTwoToneIcon from '@mui/icons-material/PaymentTwoTone';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import StripeCheckout from "react-stripe-checkout";
import {getUser} from "../LocalStorageItems/User";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

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

// const stripePayment = loadStripe("pk_test_51L2zH9SISLQJLz2v3zlp5fvErjhUMM40Tqclnob0j2e3EDcOalGoDxk8DV1QjtIVeG5MqpmvsaGVDNjLXbHN4Nwa00Z9Lm5N2d");

const CardPayment = (props) => {
    // console.log(stripePayment);
    const [values, setValues] = useState({
        card: "",
        userName: "",
        validTill: "",
        cvv: "",
    })
    const [check, setCheck] = useState(false);
    const [user, setUser] = useState({});
    const [amount, setAmount] = useState(0);
    const classes = useStyles();


    useEffect(() => {
        const user = getUser();
        getTotalAmount();
        setUser(user);
    }, []);


    const handleOnChange = (e) => {
        // setCaptcha(e.target.value);
    }
    
    const handleOnSubmit = (e) => {
    }

    const getTotalAmount = () => {
        let newAmount = 0;
        props.products && props.products.map((prod) => {
            let currentProduct = 0;
            currentProduct += prod.price;  
            currentProduct *= prod.count;
            newAmount += currentProduct;
        });
        setAmount(newAmount);
        return newAmount;
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

                    <StripeCheckout stripeKey={process.env.REACT_APP_KEY} token={makePayment} amount={() => getTotalAmount() * 100} name="Place Order"> 
                        <Button variant="contained" color="secondary" fullWidth size="large"  onClick={() => handleOnSubmit()}>
                            PLACE ORDER ${amount}
                        </Button>
                    </StripeCheckout>
                    
                </form>
            
        </Box>
    )
}

export default CardPayment;
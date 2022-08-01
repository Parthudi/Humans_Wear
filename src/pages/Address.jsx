import React, {useState, useEffect, forwardRef, useMemo} from "react";
import {makeStyles,Typography,Container,Divider,Button,Grid,Card,Box,TextField,FormControl,InputLabel,Modal} from "@material-ui/core";
import ModalCompo from "../components/Modal";
import {CloseOutlined} from "@material-ui/icons";
import InputField from "../components/InputFields";
// import {addAddress, getAddress} from "../components/LocalStorageItems/Address";
import {getUser} from "../components/LocalStorageItems/User";
import RadioOption from "../components/RadioOption";
import AddressImages from "../components/AddressImages";
import {getCart} from "../components/LocalStorageItems/Cart";
import ProductDetails from "../components/PriceDetails";
import Checkout from "../components/CheckoutLayout";
import MuiAlert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';
import {CreateAddress, getAddress} from "../components/ApiCalls";
import AlertMessage from '../components/AlertMessage';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const useStyle = makeStyles((theme) => ({
    header: {
        color: "grey", 
        fontSize: "13px"
    },
    bag:{
        color: "rgb(93, 192, 171)",
        fontWeight: "600"
    },
    cardRight: {
        width: 450,
        padding: theme.spacing(3,4)
    },
    cardLeft: {
        width: "45vw",
        padding: theme.spacing(2,2),
    },
    modeling: {
        border: "1px solid white",
        outline: "white",
        backgroundColor: "white",
        borderRadius: "2px",
        height: "33rem",
        width: "32rem",
        margin: "5rem auto",
        padding: theme.spacing(3,4),
        overflow: "hidden"
    },
    showScroll: {
        overflowY: "scroll",
        height: "400px",
        width: "470px"
    },
}));

const placeType = ["Home", "Office", "Other"];
const paymentMethod = ["Cash On Delivery", "Card Payment", "UPI Payment"];

const Address = React.memo(() => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const [address, setAddress] = useState([]);
    const [user, setUser] = useState({});
    const [cartprods, setCartProds] = useState([]);
    const [formvalues, setFormValues] = useState({
        placeType: "",
        mobile: "",
        pincode: "",
        address: "",
        town: "",
        city: "",
        state: "",
        modeOfpayment: "",
    });

    const [showsuccessalert, setShowSuccessAlert] = useState(false);
    const [showerroralert, setShowErrorAlert] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const getUserAddress = (async (id, token) => {
        const address = await getAddress(id, token);
        if(address.success == true){
            setAddress(address.data);
        }else{
            setAddress([]);
        }
    });

    useEffect(() => {
        // const fetchedAddress = getAddress();
        const cartProducts =  getCart();
        const user = getUser();
        const address = getUserAddress(user._id, user.token);
        setUser(user);
        setCartProds(cartProducts);
    }, [address.length, cartprods.length]);
    const handleOnChange = (e) => {
        setFormValues({...formvalues, [e.target.name] : e.target.value});
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
            try{
                CreateAddress({user: user._id, name:formvalues.name, mobile: formvalues.mobile, pincode: formvalues.pincode, address: formvalues.address, town: formvalues.town, city: formvalues.city, state: formvalues.state, placetype: formvalues.placeType, modeofpayment: formvalues.modeOfpayment}).then(async data => {  
                    if(data.message) {
                        setTimeout(() => {
                            setShowErrorAlert(false);
                          }, 4000);
                        setShowErrorAlert(true);
                        setMessage(`Address Failed  ${data.message}`);
                        return;
                    }else{
                        setOpen(false)  
                        setMessage(`Address Created Successful`);
                        window.location.reload();
                    }
                });
            }catch(error) {
                console.log(error.message);
                setTimeout(() => {
                    setShowErrorAlert(false);
                  }, 5000);
                setShowErrorAlert(true);
                setMessage(`Address Failed  ${error.message}`);
            }
            // addAddress({name:formvalues.name, mobile: formvalues.mobile, pincode: formvalues.pincode, address: formvalues.address, town: formvalues.town, city: formvalues.city, state: formvalues.state, placeType: formvalues.placeType, modeOfpayment: formvalues.modeOfpayment}, () => {
            // });
    }

    const addAddressForm = () => {
        return(
            <Box m={5} align="center" className={classes.modeling}>
                <Grid container direction="row" style={{marginBottom:"10px"}}>
                    <Grid item xs={6} sm={8} md={11}>
                        <Typography variant="body2" align="left" color="inherit" gutterBottom> ADD NEW ADDRESS </Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} md={1} >
                        <CloseOutlined onClick={() => setOpen(false)} style={{cursor: "pointer"}} />
                    </Grid>
                </Grid>
                <Divider width={500}/>
                <Box mt={2}>
                    <Typography variant="subtitle2" align="left" gutterBottom>
                        <b> CONTACT DETAILS </b>
                    </Typography>
                    <Box className={classes.showScroll}>
                        <form autoComplete="off">
                            <TextField
                                id="filled-select-currency"
                                select
                                label="Place Type"
                                fullWidth
                                value={formvalues.placeType}
                                name="placeType"
                                onChange= {(e) => handleOnChange(e)}
                                helperText="Please select your Place Type"
                                variant="standard">
                                {placeType.map((place) => (
                                    <MenuItem  key={place} value={place}>
                                        {place}
                                    </MenuItem >
                                ))}
                            </TextField>
                            
                            <InputField
                                required 
                                fullWidth
                                type="number"
                                variant = "outlined"
                                label = "Mobile Number"
                                name = "mobile"
                                value = {formvalues.mobile}
                                onChange = {(e) => handleOnChange(e)}
                            />
                            <InputField
                                required 
                                fullWidth
                                type="number"
                                variant = "outlined"
                                label = "PinCode"
                                name = "pincode"
                                value = {formvalues.pincode}
                                onChange = {(e) => handleOnChange(e)}
                            />
                            <InputField
                                required 
                                fullWidth
                                type="text"
                                variant = "outlined"
                                label = "Address"
                                name = "address"
                                value = {formvalues.address}
                                onChange = {(e) => handleOnChange(e)}
                            />
                            <InputField
                                required
                                fullWidth 
                                type="text"
                                variant = "outlined"
                                label = "Town"
                                name = "town"
                                value = {formvalues.town}
                                onChange = {(e) => handleOnChange(e)}
                            />
                            <InputField
                                required 
                                fullWidth
                                type="text"
                                variant = "outlined"
                                label = "City"
                                name = "city"
                                value = {formvalues.city}
                                onChange = {(e) => handleOnChange(e)}
                            />
                            <InputField
                                required 
                                fullWidth
                                type="text"
                                variant = "outlined"
                                label = "State"
                                name = "state"
                                value = {formvalues.state}
                                onChange = {(e) => handleOnChange(e)}
                            />
                            <TextField
                                id="filled-select-currency"
                                select
                                label="Mode of Payment"
                                fullWidth
                                value={formvalues.modeOfpayment}
                                name="modeOfpayment"
                                onChange= {(e) => handleOnChange(e)}
                                helperText="Please select your mode of payment"
                                variant="standard">
                                {paymentMethod.map((payment) => (
                                    <MenuItem  key={payment} value={payment}>
                                        {payment}
                                    </MenuItem >
                                ))}
                            </TextField>
                            <Box mt={2} mb={2}/>
                            <Button variant="contained" type="submit" onClick={(e) => handleOnSubmit(e)} color="secondary" fullWidth size="medium" style={{justifyContaint:"center", marginTop:"15px"}}> Save Address </Button>
                        </form>
                    </Box>
                </Box>
            </Box>      
        )
    }

    const sideCartImages = () => {
        return(cartprods && cartprods.map((product,i) => {
            return <AddressImages imag={product.image} alt={product.alt} product={product}/>
        }));
    }

    const model = () => {
        return(
            <ModalCompo showModal={open} >
                {addAddressForm()}
            </ModalCompo>)
    }

    const checkOutPage = () => {
        return(
            <Checkout showHighlight="address">
            <Grid container item xs={12} sm={11} md={8}>
                <Grid container direction="row" alignItems="center">
                    <Grid item xs={6} sm={8} md={9}>
                        <Typography variant="h6" gutterBottom> <b> Select Delivery Address </b> </Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} md={3}>
                        <Box>  
                            <Button variant="outlined" size="medium" onClick={() => setOpen(true)}> Add New Address </Button> 
                        </Box>
                    </Grid>
                </Grid>
                <Box mr={5}>
                    <Typography variant="body2" gutterBottom display="block" noWrap>
                        DEFAULT ADDRESS
                    </Typography>

                    <RadioOption options={address} name="Address" radioFor="Address" />
        
                    <Card style={{cursor: "pointer"}} onClick={() => setOpen(true)}>
                        <Typography className={classes.cardLeft} variant="subtitle1" color="secondary">
                            <b> + Add New Address </b> 
                        </Typography>
                    </Card>
                    {model()}
                </Box>
            </Grid>
            <Grid container item xs={12} sm={11} md={4}>
                <Card className={classes.cardRight}>
                    <Typography style={{fontSize:"12px"}} align="left" gutterBottom>
                        <b> DELIVERY ESTIMATES </b>
                    </Typography>
                    {sideCartImages()}
                    <Box mt={5}>
                        <ProductDetails products={cartprods} buttonText="CONTINUE" />
                    </Box>
                </Card>
            </Grid>
        </Checkout>
        )
    }

    return(
        <div>
              {error !== "" && <AlertMessage shouldDisplay={"dontShow"} severity="error" pinCodeInvalid={true} message={error} />}
            {showsuccessalert && <AlertMessage shouldDisplay={"dontShow"} severity="success" pinCodeInvalid={false} message={message} />}
            {showerroralert && <AlertMessage shouldDisplay={"dontShow"} severity="error" pinCodeInvalid={true} message={message} />}
            {cartprods.length > 0 ? 
                checkOutPage()
                :
            <Alert severity="warning">Cart Is Empty!</Alert>}
        </div>
    );
});

export default Address;
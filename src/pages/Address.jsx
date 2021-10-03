import React, {useState} from "react";
import {makeStyles,Typography,Container,Divider,Button,Grid,Card,Box,TextField,FormControl,InputLabel,OutlinedInput} from "@material-ui/core";
import CartHeader from "../components/CartHeader";
import ModalCompo from "../components/Modal";
import {CloseOutlined} from "@material-ui/icons";
import {InputAdornment} from "@mui/material";

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
        width: 790,
        padding: theme.spacing(3,4),
    },
    modeling: {
        border: "1px solid white",
        outline: "white",
        backgroundColor: "white",
        borderRadius: "2px",
        height: "auto",
        width: "40rem",
        margin: "5rem auto",
        radius: "1rem",
        padding: theme.spacing(3,4)
    }
}))

const Address = () => {
    const classes = useStyle();
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);
    const [values, setValues] = useState({
        name: "",
        mobile: "",
        pincode: "",
        address: "",
        town: "",
        city: "",
        state: ""
    });

    const handleOnChange = (e) => {
        setValues([e.target.name] = e.target.value);
    }

    const addAddressForm = () => {
        return(
            <Box m={5} align="center" className={classes.modeling}>
                <Grid container direction="row" justify="space-between" alignItems="center" gutterBottom>
                    <Grid item xs={6} sm={8} md={8}>
                        <Typography variant="body2" align="left" color="inherit" gutterBottom> ADD NEW ADDRESS </Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} md={1}>
                        <CloseOutlined onClick={() => closeModal()} />
                    </Grid>
                </Grid>
                <Divider />
                <Box mt={2}>
                    <Typography variant="subtitle2" align="left"  gutterBottom>
                        <b> CONTACT DETAILS </b>
                    </Typography>
                    <Box component="form" autoComplete="off" >
                    <div>

                        <FormControl fullWidth sx={{ m: 1 }}>
                            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                            <OutlinedInput
                            id="outlined-adornment-amount"
                            value={values.amount}
                            onChange={handleOnChange('name')}
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Name"/>
                        </FormControl>

                    <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
                        <TextField
                            required
                            value={values.name}
                            name="name"
                            onChange={(e) => handleOnChange(e)}
                            id={error ? "outlined-error": "outlined-required"}
                            label="Name"
                        />
                        <TextField
                            error
                            value={values.mobile}
                            onChange={(e) => handleOnChange(e)}
                            id="outlined-error-helper-text"
                            label="Error"
                            defaultValue="Hello World"
                            helperText="Incorrect entry."
                        />
                        <TextField
                            error
                            value={values.pincode}
                            onChange={(e) => handleOnChange(e)}
                            id="filled-error"
                            label="Error"
                            defaultValue="Hello World"
                            variant="filled"
                        />
                        <TextField
                            error
                            value={values.address}
                            onChange={(e) => handleOnChange(e)}
                            id="filled-error-helper-text"
                            label="Error"
                            defaultValue="Hello World"
                            helperText="Incorrect entry."
                            variant="filled"
                        />
                        <TextField
                            error
                            value={values.town}
                            onChange={(e) => handleOnChange(e)}
                            id="standard-error"
                            label="Error"
                            defaultValue="Hello World"
                            variant="standard"
                        />
                        <TextField
                            error
                            value={values.city}
                            onChange={(e) => handleOnChange(e)}
                            id="standard-error-helper-text"
                            label="Error"
                            defaultValue="Hello World"
                            helperText="Incorrect entry."
                            variant="standard"
                        />
                         <TextField
                            error
                            value={values.state}
                            onChange={(e) => handleOnChange(e)}
                            id="standard-error-helper-text"
                            label="Error"
                            defaultValue="Hello World"
                            helperText="Incorrect entry."
                            variant="standard"
                        />
                    </div>
                    </Box>
                </Box>
            </Box>      
        )
    }

    const closeModal = () => {
        setOpen(false)
    }

    return(
        <Container>
            <CartHeader address={true}/>
            <Divider />

            <Box mt={4}>
            <Grid direction="row" container>
                <Grid container item xs={12} sm={8} md={8}>
                    <Grid container direction="row" justify="space-between" alignItems="center">
                        <Grid item xs={6} sm={8} md={6}>
                            <Typography variant="h6" gutterBottom> <b> Select Delivery Address </b> </Typography>
                        </Grid>
                        <Grid item xs={6} sm={4} md={3}>
                            <Box>  
                                <Button variant="outlined" size="medium" onClick={() => setOpen(true)}> Add New Address </Button> 
                            </Box>
                        </Grid>
                    </Grid>
                    <div>
                        <Typography variant="body2" gutterBottom display="block" noWrap>
                            DEFAULT ADDRESS
                        </Typography>
                        <Card style={{cursor:"pointer"}} mt={3} onClick={() => setOpen(true)}>
                            <Typography className={classes.cardLeft} variant="subtitle1" color="secondary">
                                <b> + Add New Address </b> 
                            </Typography>
                            <ModalCompo showModal={open} closeModal={() => closeModal()}>
                                {addAddressForm()}
                            </ModalCompo>
                        </Card>
                    </div>
                           
                </Grid>
                <Grid container item xs={9} sm={10} md={4}>
                    <Card className={classes.cardRight}>
                        <Typography style={{fontSize:"12px"}} align="left" gutterBottom>
                           <b> DELIVERY ESTIMATES </b>
                        </Typography>
                    </Card>
                </Grid>
            </Grid>
            </Box>
        </Container>
    );
}

export default Address;
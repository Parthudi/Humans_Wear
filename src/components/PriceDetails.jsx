import React, {Fragment} from "react";
import {makeStyles,Typography,Divider,Box,Button} from  "@material-ui/core";
import {itemTotal} from "./LocalStorageItems/Cart";
import {LocalShippingOutlined} from "@material-ui/icons";
import { withRouter } from "react-router";
import {useDispatch } from "react-redux";

    const useStyles = makeStyles((theme) => ({
        textHeading: {
            color: "grey",
        },
        textContaint: {
            margin: "5px 0px 5px 0px"
        },
        free: {
            color: "green"
        },
        convinenceFee: {
            backgroundColor: "rgb(225, 243, 225)",
            borderRadius: "0.2rem",
            padding: theme.spacing(1,2)
        }
    }));

const PriceDetails = React.memo((props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const getTotalAmount = () => {
        let newAmount = 0;
        props.products && props.products.map((prod) => {
            let currentProduct = 0;
            currentProduct += prod.price;  
            currentProduct *= prod.count;
            newAmount += currentProduct;
        });
        dispatch({ type: "totalAmount" , payload: {price: newAmount}});
        return newAmount;
    }

    const getTotalAmountWithoutDiscount = () => {
        let newAmount = 0;
        props.products && props.products.map((prod) => {
            let currentProduct = 0;
            currentProduct += prod.price;  
            currentProduct *= prod.count;
            currentProduct = currentProduct + prod.count * 15; 
            newAmount += currentProduct;
        });
        return newAmount;
    }

    const onClickHandler = () => {
        if(props.unAuthenticatedUser){
            props.history.push("/login");
        }else{
            if(props.buttonText !== "CONTINUE"){
                props.history.push("/checkout/address");
            }else{
                props.history.push("/checkout/payment");
            }
        }
    }

    return(
        <Fragment>
                <Typography variant="subtitle2" align="left" className={classes.textHeading} gutterBottom>
                    <b> Price Details ({itemTotal()} Items) </b>
                </Typography>
                <Typography  variant="subtitle2" className={classes.textContaint}>
                    <span  style={{float: "left"}}>Total MRP </span> <span style={{float: "right"}}> ${(getTotalAmountWithoutDiscount())} </span>
                </Typography><br/>
                <Typography  variant="subtitle2" className={classes.textContaint}>
                    <span  style={{float: "left"}}> Discount On MRP </span> <span  style={{float: "right", color:"green"}}> -${(getTotalAmountWithoutDiscount() - getTotalAmount())} </span>
                </Typography><br/>
                <Typography  variant="subtitle2" className={classes.textContaint}>
                    <span style={{float: "left"}}> Convenience Fee </span> <span  style={{float: "right"}}> <del> $2 </del><Typography  variant="body2" className={classes.free} display="inline"> FREE </Typography> </span>
                </Typography><br/><br/>
                <Divider />
                <Typography  variant="subtitle1" className={classes.textContaint}>
                    <span  style={{float: "left"}}> <b>Total Amount</b> </span> <span style={{float: "right"}}> <b> ${getTotalAmount()} </b> </span>
                </Typography><br/><br/>
                {props.buttonText === "PLACE ORDER" && 
                <Box mb={2} className={classes.convinenceFee}>
                    <Typography variant="subtitle2">
                        <LocalShippingOutlined /> Yay! <span style={{color:"green"}}> <b> No Convenience Fee </b> </span> <del> $2 </del> on this order
                    </Typography>
                </Box>}
                {props.buttonText !== "NONE" && <Button variant="contained" color="secondary" fullWidth onClick={() => onClickHandler()}>
                    {props.buttonText}
                </Button>}
        </Fragment>
    )
});

export default withRouter(PriceDetails);
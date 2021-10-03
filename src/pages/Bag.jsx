import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import ShowProducts from "../components/ShowProducts";
import {Typography,Grid,Card,makeStyles,Divider,Container,Button,Box,Avatar,Fab} from '@material-ui/core';
import {LocalShippingOutlined} from "@material-ui/icons";
import {getCart,itemTotal} from "../components/LocalStorageItems/Cart";
import CartHeader from "../components/CartHeader";

const useStyles = makeStyles((theme) => ({
    card: {
        width: 400,
        padding: theme.spacing(2,2)
    },
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
}))

const Bag = (props) => {
    const classes = useStyles();
    const [product, setProduct] = useState([]);

    const cartProducts = () => {
        const cart = getCart();
        setProduct(cart);
    }

    useEffect(() => {
        cartProducts();
    }, []);

    const getTotalAmount = () => {
        let newAmount = 0;
        product && product.map((prod) => {
            let currentProduct = 0;
            currentProduct += prod.price;  
            currentProduct *= prod.count;
            newAmount += currentProduct;
        });
        return newAmount;
    }

    const getTotalAmountWithoutDiscount = () => {
        let newAmount = 0;
        product && product.map((prod) => {
            let currentProduct = 0;
            currentProduct += prod.price;  
            currentProduct *= prod.count;
            currentProduct = currentProduct + prod.count * 15; 
            newAmount += currentProduct;
        });
        return newAmount;
    }

    return(
        <Container>
            <CartHeader bag={true}/>
            <Divider />

            <Box mt={4}>
                <Grid direction="row" container>
                    <Grid container item xs={12} sm={8} md={9}>
                        {product && product.map((picture,i) => {
                            return (
                                <ShowProducts imag={picture.image} alt="product not found" key={i} products={picture} showQuantity={true}/>
                        )})} 
                    </Grid>
                    <Grid container item xs={12} sm={10} md={3}>
                        <Card className={classes.card}>
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
                                <span  style={{float: "left"}}> <b>Total Amount</b> </span> <span style={{float: "right"}}> <b> ${(getTotalAmount())} </b> </span>
                            </Typography><br/><br/>
                            <Box mb={2} className={classes.convinenceFee}>
                                <Typography variant="subtitle2">
                                    <LocalShippingOutlined /> Yay! <span style={{color:"green"}}> <b> No Convenience Fee </b> </span> <del> $2 </del> on this order
                                </Typography>
                            </Box>  
                            <Button variant="contained" color="secondary" fullWidth onClick={() => props.history.push("/checkout/address")}>
                                Place Order
                            </Button>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            
        </Container>
    )
}

export default withRouter(Bag);
import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import ImageItems from "../components/ShowProducts";
import {Typography,Grid,Card,makeStyles,Divider,Container,Button,Box,Avatar,Fab} from '@material-ui/core';
import {wishListGetItems} from "../components/LocalStorageItems/Wishlist";
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
    }
}))

const WishList = (props) => {
    const classes = useStyles();
    const [product, setProduct] = useState([]);

    useEffect(() => {
       const allProductsInWishList = wishListGetItems();
       setProduct(allProductsInWishList);
    }, [product.length]);

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
            <Box mt={4}>
                    <Typography variant="h4" align="left" className={classes.textHeading} gutterBottom>
                        <b> My WishList </b>
                    </Typography>
                    <Grid container item xs={12} sm={8} md={12}>
                        {product && product.map((picture,i) => {
                            return (
                                <ImageItems imag={picture.image} alt="product not available" key={i} products={picture} showBag={true} showCard={true}/>
                        )})} 
                    </Grid>
            </Box>
    )
}

export default withRouter(WishList);
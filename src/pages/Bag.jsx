import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import ShowProducts from "../components/ShowProducts";
import {Grid,Card,makeStyles} from '@material-ui/core';
import {getCart} from "../components/LocalStorageItems/Cart";
import CartHeader from "../components/CartHeader";
import PriceDetails from "../components/PriceDetails";
import Checkout from "../components/CheckoutLayout";

const useStyles = makeStyles((theme) => ({
    card: {
        width: 400,
        padding: theme.spacing(2,2)
    }
}));

const Bag = (props) => {
    const [product, setProduct] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        const cart = getCart();
        setProduct(cart);
    }, [product.length]);

    return(
        <Checkout showHighlight="bag">
            <Grid container item xs={12} sm={11} md={9}>
                {product && product.map((picture,i) => {
                    return (
                        <ShowProducts imag={picture.image} alt="product not found" key={i} products={picture} showQuantity={true}/>
                )})} 
            </Grid>
            <Grid container item xs={12} sm={11} md={3}>
                <Card className={classes.card}>
                    <PriceDetails products={product} buttonText="PLACE ORDER" />
                </Card>
            </Grid>
        </Checkout>
    )
}

export default withRouter(Bag);
import React, {useEffect, useState} from "react";
import {withRouter} from "react-router-dom";
import ShowProducts from "../components/ShowProducts";
import {Grid,Card,makeStyles} from '@material-ui/core';
import {getCart} from "../components/LocalStorageItems/Cart";
import PriceDetails from "../components/PriceDetails";
import Checkout from "../components/CheckoutLayout";
import {getUser} from "../components/LocalStorageItems/User";
import _ from "lodash";

const useStyles = makeStyles((theme) => ({
    card: {
        width: 400,
        padding: theme.spacing(2,2)
    }
}));

const Bag = (props) => {
    const [product, setProduct] = useState([]);
    const [user, setUser] = useState({});
    const classes = useStyles();

    useEffect(() => {
        const user = getUser();
        const cart = getCart();
        setUser(user);
        setProduct(cart);
    }, [product.length, user.is_authorized]);

    return(
        <Checkout showHighlight="bag">
            <Grid container item xs={12} sm={12} md={9}>
                {product && product.map((picture,i) => {
                    return (
                        <ShowProducts imag={picture.image} alt="product not found" key={i} products={picture} showQuantity={true}/>
                )})} 
            </Grid>
            <Grid container item xs={12} sm={12} md={3}>
                <Card className={classes.card}>
                    <PriceDetails products={product} unAuthenticatedUser={_.isEmpty(user) ? true: false} buttonText="PLACE ORDER" />
                </Card>
            </Grid>
        </Checkout>
    )
}

export default withRouter(Bag);
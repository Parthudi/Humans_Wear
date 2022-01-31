import React, {useEffect, useState, forwardRef} from "react";
import {withRouter} from "react-router-dom";
import ShowProducts from "../components/ShowProducts";
import {Grid, Card, makeStyles, Box} from '@material-ui/core';
import {getCart} from "../components/LocalStorageItems/Cart";
import PriceDetails from "../components/PriceDetails";
import Checkout from "../components/CheckoutLayout";
import {getUser} from "../components/LocalStorageItems/User";
import _ from "lodash";
import MuiAlert from '@mui/material/Alert';


const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const useStyles = makeStyles((theme) => ({
    card: {
        width: 400,
        padding: theme.spacing(2,2),
    },
    [theme.breakpoints.down("sm")]: {
        card: {
            width: 500,
            padding: theme.spacing(1,1),
        }
    }
}));

const Bag = () => {
    const [product, setProduct] = useState([]);
    const [user, setUser] = useState({});
    const classes = useStyles();

    useEffect(() => {
        const user = getUser();
        const cart = getCart();
        setUser(user);
        setProduct(cart);
    }, [product.length, user.is_authorized]);

    const showAllSelectedProducts = () => {
        return(
            <Grid container item xs={12} sm={12} md={9} >
                    {product && product.length > 0 && product.map((picture,i) => {
                        return (
                            <ShowProducts imag={picture.image} sizing="flex" alt="product not found" key={i} products={picture} showQuantity={true}/>
                    )})} 
                </Grid>
        )
    }

    const showPriceTags = () => {
        return(
                <Grid container item xs={12} sm={12} md={3}>
                    <Card className={classes.card}>
                        <PriceDetails products={product} unAuthenticatedUser={_.isEmpty(user) ? true: false} buttonText="PLACE ORDER" />
                    </Card>
                </Grid>
        )
    }
    return(
        <div>
            {product.length > 0 ? 
                <Checkout showHighlight="bag">
                    {showAllSelectedProducts()}
                    {showPriceTags()}
                </Checkout>
            :
            <Alert severity="warning">Cart Is Empty!</Alert>}
        </div>
    )
}

export default withRouter(Bag);
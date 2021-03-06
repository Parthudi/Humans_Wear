import React, {useEffect, useState, forwardRef} from "react";
import {withRouter} from "react-router-dom";
import ShowProduct from "../components/ShowProducts";
import {Typography,Grid,makeStyles,Box} from '@material-ui/core';
import {wishListGetItems} from "../components/LocalStorageItems/Wishlist";

import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const useStyles = makeStyles((theme) => ({
    AdjustSizing: {
        padding: "30px 40px"
    },
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
    [theme.breakpoints.down("sm")]: {
        AdjustSizing: {
            width: "520px",
        }
    }
}))

const WishList = React.memo(() => {
    const classes = useStyles();
    const [product, setProduct] = useState([]);

    useEffect(() => {
       const allProductsInWishList = wishListGetItems();
       setProduct(allProductsInWishList);
    }, [product.length]);

    return(
        <div>
            {product.length > 0 ?
                (<Box className = {classes.AdjustSizing} mt={4}>
                    <Typography variant="h4" align="left" className={classes.textHeading} gutterBottom>
                        <b> My WishList </b>
                    </Typography>
                    <Grid container item xs={12} sm={8} md={12}>
                        {product && product.map((picture,i) => {
                            return (
                                <ShowProduct imag={picture.image} sizing="flex" alt="product not available" key={i} products={picture} showBag={true} showCard={true}/>
                        )})} 
                    </Grid>
                </Box>)
                :
            <Alert severity="warning">Cart Is Empty!</Alert>
        }

        </div>
    )
});

export default withRouter(WishList);
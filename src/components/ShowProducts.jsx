import React, {useState} from 'react'
import { Card,CardActions,CardContent,Typography,Button,CardMedia, Grid} from '@material-ui/core';
import {makeStyles,TextField,Box} from '@material-ui/core';
import {updateCart,removeItemCart} from "./LocalStorageItems/Cart";
import {wishListAddItems,wishListRemoveItem} from "./LocalStorageItems/Wishlist";
import {addItem} from "./LocalStorageItems/Cart";
import {Link} from "react-router-dom";
import {FavoriteBorderOutlined, CancelOutlined} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    card: {
        padding: theme.spacing(1),
        margin: theme.spacing(2,2),
    },
    delete: {
        color: "grey"
    },
    off: {
        color: "rgb(230, 25, 110)"
    },
    success: {
        backgroundColor: "green",
        color: "white",
        justifyContent: "center",
        "&:hover": {
            backgroundColor: "green",
            color: "white"
        }
    },
    fail: {
        backgroundColor: "red",
        color: "white",
        justifyContent: "center",
        "&:hover": {
            backgroundColor: "red",
            color: "white"
        }
    },
    wishList: {
        backgroundColor: "rgb(230, 25, 110)",
        color: "white",
        "&:hover": {
            backgroundColor: "rgb(230, 25, 110)",
        }
    },
    showButtonCenter: {
        justifyContent: "center"
    },
    cancelIcon: {
        float:"right",
        cursor: "pointer",
        color: "grey"
    },
    removeLinkColors: {
        textDecoration: "none",
        color: "black",
        "&:hover": {
            textDecoration: "none",
            color: "black",
        }
    },
    setPerfectImage: {
        height: "224px",
        width: "250px"
    }
}))

const CartItem = ({showQuantity = false, showBag = false, whishlist = false, ...props}) => {
    const classes = useStyles();
    const [quantity, setQuantity] = useState(props.products.count);
    const [show, setShow] = useState();

    const handleOnChange = (e) => {
        const value = e.target.value;
        updateCart(props.products.id, value);
        setQuantity(value);
        if(value == null || value == undefined || value == 0){
            removeItemCart(props.products.id);
        }
        return;
    }

    const addToWishList = () => {
        return(
            wishListAddItems({id: props.products.id, image: props.imag, name: props.products.name, price: props.products.price} , () => {
                console.log("Item Pushed To WishList");
                window.location.reload();
            })
        )
    }

    const addItemsFromWhishListToBag = () => {
        return(
            addItem({id: props.products.id, image: props.imag, name: props.products.name, price: props.products.price} , () => {
                wishListRemoveItem(props.products.id);
                window.location.reload();
            })
        )
    }

    const showFullProuct = () => {
        return `/shop/product/${props.products.name}/${props.products.id}`;
    }

    return(
        <Card className={classes.card} m={2} pt={3} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <Link to={() => showFullProuct()} className={classes.removeLinkColors}>
                {showBag && <CancelOutlined className={classes.cancelIcon} onClick={() => wishListRemoveItem(props.products.id)}/>}
                <CardMedia
                    component="img"
                    image={props.imag}
                    alt={props.alt}
                    className={classes.setPerfectImage}
                />
            </Link>
                <CardContent>
                    <Typography variant="h5" >
                        {props.products.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} varient="body1">
                        ${props.products.price} <del className={classes.delete}> ${props.products.price-15} </del> <span className={classes.off}> $15 OFF </span>
                    </Typography>
                    <Box style={{display: showQuantity ? "inherit" : "none"}}>
                        <TextField fullWidth label="Quantity" type="number" value={quantity} onChange={(e) => handleOnChange(e)} id="outlined-number" />
                    </Box>
                </CardContent>
                <CardActions className={classes.showButtonCenter}>
                   {whishlist && <Button size="medium" className={classes.wishList} style={{visibility: show ? "visible" : "hidden"}} fullWidth={true} onClick={() => addToWishList()} startIcon={<FavoriteBorderOutlined />}> Move To WishList </Button>} 
                   {showBag && <Button size="medium" style={{display: showBag ? "inherit" : "none"}} className={classes.success} fullWidth={true} onClick={() => addItemsFromWhishListToBag()}> Move To Bag </Button>}
                   {showQuantity && <Button size="medium" style={{display: showQuantity ? "inherit" : "none"}} className={classes.fail} fullWidth={true} onClick={() =>  removeItemCart(props.products.id)}> Remove From Bag </Button>}
                </CardActions>
        </Card> 
    )}

export default CartItem


import React, {useEffect, useState} from 'react';
import {Badge, Box, Grid, Typography, makeStyles,BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import {NavLink, withRouter} from 'react-router-dom';
import ReactLogo from '../../assets/Crown.js';
import {itemTotal} from "../LocalStorageItems/Cart";
import {wishListItemTotal} from "../LocalStorageItems/Wishlist";
import {AddShoppingCartOutlined, FavoriteBorderOutlined, StorefrontOutlined,InfoOutlined} from "@material-ui/icons";
import './header.css'

const useStyle = makeStyles((theme) => ({
        logoContainer: {
            "&:hover": {
                transform: "scale(1.1)",
            }
        },
        title: {
            fontFamily: "Henny Penny , cursive",
        },
        headerText: {
            color: "black",
            fontWeight: "bold",
            "&:hover": {
                color: "green"
            }
        },
        headerIcons: {
            color: "grey",
            "&:hover": {
                color: "green"
            }
        }
    }));


const HeaderCompo = () => {
    const classes = useStyle();
    const [cartitems, setCartItems] = useState("0");
    const [wishlistitems, setWishListItems] = useState("0"); 

    useEffect(() => {
        const itemsFromCart = itemTotal();
        const itemssFromWishList = wishListItemTotal();
        setCartItems(itemsFromCart);
        setWishListItems(itemssFromWishList);
    } , [cartitems,wishlistitems]);

    return(
        <Box mb={3}>
            <Grid direction="row" container>
                <Grid container item xs={3} sm={4} md={5}>
                    <NavLink className={classes.logoContainer} to="/">
                        <ReactLogo className='logo' />
                    </NavLink>
                </Grid>
                <Grid container item xs={9} sm={8} md={7}>
                    <Grid container item xs={7} sm={6} md={5}>
                        <Typography className={classes.title}  variant="h4" color="secondary">
                            HUMANS WEAR
                        </Typography>
                    </Grid>
                    <Grid container item xs={2} sm={2} md={2}>
                        <Box ml={5} sx={{width: 500}}>
                            <BottomNavigation showLabels>
                                <BottomNavigationAction label="Bag" className={classes.headerText} icon={<Badge badgeContent={cartitems} color="error">
                                    <NavLink to="/checkout/cart" className={classes.headerIcons}>  <AddShoppingCartOutlined /> </NavLink>
                                </Badge>} />
                                <BottomNavigationAction label="Whishlist" className={classes.headerText} icon={<Badge badgeContent={wishlistitems} color="error">
                                    <NavLink to="/whistlist" className={classes.headerIcons}> <FavoriteBorderOutlined /> </NavLink>
                                </Badge>} />
                                <BottomNavigationAction label="Shop" className={classes.headerText} icon={ <NavLink to="/shop" className={classes.headerIcons}> <StorefrontOutlined /> </NavLink>} />
                                <BottomNavigationAction label="Login" className={classes.headerText} icon={ <NavLink to="/login" className={classes.headerIcons}> <InfoOutlined /> </NavLink>} />
                            </BottomNavigation>
                        </Box>  
                    </Grid>
                </Grid>
            </Grid>
        </Box>
            // <Link className='logo-container' to='/'>
            //     <ReactLogo className='logo' />
            // </Link>
            
            // <div className='tit'>
            //         <h1> HUMANS WEAR </h1>
            // </div>

            // <div className='options'>
            //     <Link className='option'  to='/shop'>
            //         Shop
            //     </Link>
                
                // <Link to='/checkout/cart'>
                //     <Badge badgeContent={items.length} color="error">
                //         <AddShoppingCartOutlined />   
                //     </Badge>
                //     {/* <div> Bag </div> */}
                // </Link>

            //     <Link className='option' to='/cart'>
            //             Wishlist  
            //     </Link>
            //     {
            //         props.currentSignOut ? (
            //             <div className='option' onClick={() => auth.signOut()}> 
            //                 Sign Out
            //             </div>
            //       )   :   (
            //     <Link className='option' to='/login'>
            //         Sign In
            //     </Link>
            //         )
            //     }
            // </div>

        // </Box>
    )
}    

export default withRouter(HeaderCompo);
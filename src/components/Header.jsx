import React, {useEffect, useState} from 'react';
import {Badge, Box, Grid, Typography, makeStyles,BottomNavigation, BottomNavigationAction} from "@material-ui/core";
import {NavLink, withRouter} from 'react-router-dom';
import ReactLogo from '../assets/Crown.js';
import {itemTotal} from "./LocalStorageItems/Cart";
import {wishListItemTotal} from "./LocalStorageItems/Wishlist";
import {AddShoppingCartOutlined, FavoriteBorderOutlined, StorefrontOutlined} from "@material-ui/icons";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {getUser,removeUser} from "./LocalStorageItems/User"; 
import _ from "lodash";

const useStyle = makeStyles((theme) => ({
        logoContainer: {
            "&:hover": {
                transform: "scale(1.1)",
            }
        },
        title: {
            fontFamily: "Henny Penny , cursive",
            fontSize: "33px"
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
        },
        adjustMargin: {
            marginLeft: "20rem"
        },
        [theme.breakpoints.up("md")]: {
            marginLeft: "5rem"
        },
        [theme.breakpoints.down("sm")]: {
            title: {
                fontSize: "21px",
                marginLeft: "75px",
                letterSpacing: "3px"
            }
        }
    }));


const HeaderCompo = () => {
    const classes = useStyle();
    const [cartitems, setCartItems] = useState("0");
    const [wishlistitems, setWishListItems] = useState("0"); 
    const [user, setUser] = useState({});
    // const [anchorEl, setAnchorEl] = useState(null);
    // const open = Boolean(anchorEl);

    useEffect(() => {
        const user = getUser();
        const itemsFromCart = itemTotal();
        const itemssFromWishList = wishListItemTotal();
        setUser(user);
        setCartItems(itemsFromCart);
        setWishListItems(itemssFromWishList);
    } , [cartitems,wishlistitems,user.is_authorized]);

    // const handleOnClick = (e) => {
    //     setAnchorEl(e.currentTarget);
    // }

    // const handleClose = () => {
    //     setAnchorEl(null);
    //   };

    return(
        <Box className={classes.adjustSizing} mb={3} style={{zIndex:"-1"}} md={10} sm={6}>
            <Grid direction="row" container>
                <Grid item xs={2} sm={4} md={5}>
                    <NavLink className={classes.logoContainer} to="/">
                        <ReactLogo className='logo' />
                    </NavLink>
                </Grid>
                <Grid container item xs={10} sm={8} md={7}>
                    <Grid item xs={7} sm={6} md={5}>
                        <Typography className={classes.title} color="secondary">
                             HUMANS WEAR
                        </Typography>
                    </Grid>
                    <Grid item xs={3} sm={2} md={2}>
                        <Box className={classes.adjustMargin}>
                            <BottomNavigation showLabels>
                                <BottomNavigationAction label="Bag" className={classes.headerText} icon={<Badge badgeContent={cartitems} color="error">
                                    <NavLink to="/checkout/cart" className={classes.headerIcons}>  <AddShoppingCartOutlined /> </NavLink>
                                </Badge>} />
                                <BottomNavigationAction label="Whishlist" className={classes.headerText} icon={<Badge badgeContent={wishlistitems} color="error">
                                    <NavLink to="/whistlist" className={classes.headerIcons}> <FavoriteBorderOutlined /> </NavLink>
                                </Badge>} />
                                <BottomNavigationAction label="Shop" className={classes.headerText} icon={ <NavLink to="/shop" className={classes.headerIcons}> <StorefrontOutlined /> </NavLink>} />
                                {!_.isEmpty(user) && user.is_authorized ? 
                                    <BottomNavigationAction label="Logout" className={classes.headerText} icon={<LogoutOutlinedIcon onClick={() => removeUser()} />} /> 
                                    :
                                <BottomNavigationAction label="Login" className={classes.headerText} icon={ <NavLink to="/login" className={classes.headerIcons}> <LoginOutlinedIcon /> </NavLink>} /> }
                                {/* <Tooltip title="Account settings">
                                <IconButton onClick={(e) => handleOnClick(e)} size="small" sx={{ ml: 2 }}>
                                    <Avatar sx={{ width: 32, height: 32 }}>P</Avatar>
                                </IconButton>
                                </Tooltip> */}
                            </BottomNavigation>
                        </Box> 
                    </Grid>
                </Grid>
            </Grid>
        </Box> 
    )
}    

export default withRouter(HeaderCompo);
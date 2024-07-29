import React, {useEffect, useState} from 'react';
import {Badge, Box, Typography, makeStyles,BottomNavigation, BottomNavigationAction,Paper} from "@material-ui/core";
import {NavLink, withRouter} from 'react-router-dom';
import {itemTotal} from "./LocalStorageItems/Cart";
import {wishListItemTotal} from "./LocalStorageItems/Wishlist";
import {AddShoppingCartOutlined, FavoriteBorderOutlined, StorefrontOutlined} from "@material-ui/icons";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {getUser,removeUser} from "./LocalStorageItems/User"; 
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import _ from "lodash";
import HumansWear from "../assets/HumansWear.png"
import NavigationLink from "./NavLink";

const useStyle = makeStyles((theme) => ({
        adjustSizing: {
            padding: "30px 40px",
        },
        logoContainer: {
            "&:hover": {
                transform: "scale(1.1)",
            }
        },
        title: {
            fontFamily: "Henny Penny , cursive",
            fontSize: "3rem",
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
                fontSize: "25px",
                letterSpacing: "3px"
            }
        }
    })); 
    
const pages = [{name: 'Mens', to:"/shop/mens"},{name:'Womens', to:"/shop/womens"}];

const HeaderCompo = () => {
    const classes = useStyle();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [cartitems, setCartItems] = useState("0");
    const [wishlistitems, setWishListItems] = useState("0"); 
    const [user, setUser] = useState({});

    useEffect(() => {
        const user = getUser();
        const itemsFromCart = itemTotal();
        const itemssFromWishList = wishListItemTotal();
        setUser(user);
        setCartItems(itemsFromCart);
        setWishListItems(itemssFromWishList);
    } , [cartitems,wishlistitems,user.is_authorized]);

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    return (
        <Paper elevation={0} style={{position:"fixed", top:"0px", width:"100%", zIndex:"1"}}>
            <Toolbar disableGutters>
                <Box sx={{display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>

                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                        display: { xs: 'block', md: 'none' },
                        }}
                    >
                    {pages.map((page) => (
                        <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                            <Typography textAlign="center">{page.name}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>

                <Box sx={{flexGrow: {xs: '1', md:'0.2'} , display: { xs: 'flex'} }}>
                    <NavigationLink size={"small"} to={"/"} 
                        sx={{display: { xs: 'none', md: 'flex' }}} 
                        src={HumansWear} 
                        alt={"HumansWear"} 
                        width={"90px"}
                        img={"yes"}/>
                </Box> 

                <Box sx={{ flexGrow: {xs: '1', md:'1.5'}, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <NavigationLink size={"large"} to={`${page.to}`} name={`${page.name}`} variant={"body1"} style={{color: "black", fontWeight:"bold", letterSpacing:"1px"}} sx={{textDecoration: 'none'}} />
                    ))} 
                </Box>

                <center>
                    <Box sx={{flexGrow: {xs: '1', md:'1.0'} , display: { xs: 'flex'} }}>
                        <Typography
                            variant="h4"
                            color= "secondary"
                            noWrap
                            style={{fontFamily: "Henny Penny , cursive"}} >
                            The Humans Wear
                        </Typography>
                    </Box> 
                </center>
                <Box sx={{display: { xs: 'none', md: 'flex' }}}>
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
                        </BottomNavigation>
                    </Box>
                </Box>
            </Toolbar>
        </Paper>
        );
    };

export default withRouter(HeaderCompo);

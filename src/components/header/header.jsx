import React, {useEffect, useState} from 'react';
import {Badge, Box, Grid, Typography, makeStyles,BottomNavigation, BottomNavigationAction,Menu,MenuItem,Divider, Avatar,Tooltip,IconButton } from "@material-ui/core";
import {NavLink, withRouter} from 'react-router-dom';
import ReactLogo from '../../assets/Crown.js';
import {itemTotal} from "../LocalStorageItems/Cart";
import {wishListItemTotal} from "../LocalStorageItems/Wishlist";
import {AddShoppingCartOutlined, FavoriteBorderOutlined, StorefrontOutlined,InfoOutlined} from "@material-ui/icons";
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
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
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    useEffect(() => {
        const itemsFromCart = itemTotal();
        const itemssFromWishList = wishListItemTotal();
        setCartItems(itemsFromCart);
        setWishListItems(itemssFromWishList);
    } , [cartitems,wishlistitems]);

    const handleOnClick = (e) => {
        setAnchorEl(e.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
      };

    return(
        <Box mb={3} style={{zIndex:"-1"}}>
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
                        <Box ml={10} sx={{width: 500}}>
                            <BottomNavigation showLabels>
                                <BottomNavigationAction label="Bag" className={classes.headerText} icon={<Badge badgeContent={cartitems} color="error">
                                    <NavLink to="/checkout/cart" className={classes.headerIcons}>  <AddShoppingCartOutlined /> </NavLink>
                                </Badge>} />
                                <BottomNavigationAction label="Whishlist" className={classes.headerText} icon={<Badge badgeContent={wishlistitems} color="error">
                                    <NavLink to="/whistlist" className={classes.headerIcons}> <FavoriteBorderOutlined /> </NavLink>
                                </Badge>} />
                                <BottomNavigationAction label="Shop" className={classes.headerText} icon={ <NavLink to="/shop" className={classes.headerIcons}> <StorefrontOutlined /> </NavLink>} />
                                <BottomNavigationAction label="Login" className={classes.headerText} icon={ <NavLink to="/login" className={classes.headerIcons}> <LoginOutlinedIcon /> </NavLink>} />
                                <Tooltip title="Account settings">
                                <IconButton onClick={(e) => handleOnClick(e)} size="small" sx={{ ml: 2 }}>
                                    <Avatar sx={{ width: 32, height: 32 }}>P</Avatar>
                                </IconButton>
                                </Tooltip>
                            </BottomNavigation>
                        </Box> 
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                                },
                                '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                                },
                            },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem>
                            <Avatar /> Profile
                            </MenuItem>
                            <MenuItem>
                            <Avatar /> My account
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                            <ListItemIcon>
                                <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            Add another account
                            </MenuItem>
                            <MenuItem>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                            </MenuItem>
                            <MenuItem>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                            </MenuItem>
                        </Menu> 
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
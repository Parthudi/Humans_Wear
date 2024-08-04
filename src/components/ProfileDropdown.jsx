import React, { useEffect, useState } from 'react';
import {makeStyles, Divider, Typography, Button} from "@material-ui/core";
import {NavLink, withRouter} from 'react-router-dom';
import {getUser} from "./LocalStorageItems/User"; 
import {removeUser} from "./LocalStorageItems/User"; 
import _ from "lodash";

const useStyle = makeStyles((theme) => ({
    menuItems: {
        minWidth: "17.4rem",
        padding: "0.5rem 1rem",
    },
    link: {
        "&:hover": {
            textDecoration: "none",
            color: "black"
        }
    },
    manageOrder:{
        marginBottom: "0.3rem",
        "&:hover": {
            color: "black",
            textDecoration: "none",
            fontWeight: "700",
            cursor: "pointer"
        }
    },
    manageOrders: {
        margin: "0.5rem 0",
    },
    })); 
    
const ProfileDropdown = ({ clickEvent }) => {
    const classes = useStyle();
    const [user, setUser] = useState({});

    useEffect(() => {
        const user = getUser();
        setUser(user);
    } , [user.is_authorized]);

    const loginPending = () => {
        return(
            !_.isEmpty(user) && user.is_authorized ? 
                <div className={classes.manageOrders}>
                    <Typography variant="body2"> <b> Hello {user.username} </b> </Typography>
                </div>
                : 
                <div className={classes.manageOrders}>
                <Typography variant="body2"> <b> Welcome </b> </Typography>
                <Typography variant="body2"> To access account and manage orders </Typography>
                <NavLink to="/login" onClick={clickEvent}> <Button color='secondary' variant="outlined"> <b> LOGIN / SIGNUP </b> </Button> </NavLink>
            </div>
        )
    }

    const commanFeatures = () => {
        return(
            <div onClick={clickEvent}>
                <div className={classes.manageOrders}>
                    <NavLink to="/my/orders" className={classes.link}><Typography variant="body2" className={classes.manageOrder}> Orders </Typography> </NavLink>
                    <NavLink to="/whistlist" className={classes.link}> <Typography variant="body2" className={classes.manageOrder}> Wishlist </Typography> </NavLink>
                    <Typography variant="body2" className={classes.manageOrder}> Saved Addresses </Typography>
                </div>
                {!_.isEmpty(user) && user.is_authorized ? 
                    <div className={classes.manageOrders}>
                        <Divider className={classes.manageOrder}/>
                        <NavLink to="/my/profile/edit" className={classes.link}> <Typography variant="body2" className={classes.manageOrder}> Edit Profile </Typography> </NavLink>
                        <NavLink to="/" className={classes.link}> <Typography variant="body2" className={classes.manageOrder} onClick={() => removeUser()}> Logout </Typography> </NavLink>
                    </div> : null
                }
            
            </div>
        )
    }

    return (
        <div className={classes.menuItems}>
            {loginPending()}
            <Divider />
            {commanFeatures()}
        </div>
        );
    };

export default withRouter(ProfileDropdown);

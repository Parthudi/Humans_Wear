import React, {useEffect, useState} from "react";
import { makeStyles, Container, Box, Typography, Divider } from "@material-ui/core"; 
import Grid from '@mui/material/Grid';
import {getUser} from "../components/LocalStorageItems/User"; 
import { NavLink, useLocation } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
    accountTitle: {
        margin: "1.5rem 0"
    },
    nonActiveLink: {
        textDecoration: "none",

        "&:hover": {
            color: "black",
            textDecoration: "none"
        }
        
    },
    activeLink: {
        fontWeight: "600",
        color: "red",
        "&:hover": {
            color: "red",
            textDecoration: "none"
        }
    },
    smallFont: {
        fontSize: '0.740rem', 
        marginBottom: "0.5rem"
    },
    divider: {
        marginRight: "1rem"
    },
    addCoursor: {
        cursor: "pointer"
    }
})); 

const UserDashboard = React.memo((props) => {
    const location = useLocation()
    const classes = useStyle()
    const [user, setUser] = useState({});

    console.log(location.pathname)

    useEffect(() => {
        const user = getUser();
        setUser(user);
    } , [user.is_authorized]);

    const accountTitle = () => {
        return(
            <div>
                <Typography variant="body2" className={`${classes.accountTitle} ${classes.addCoursor}`}> 
                    <NavLink to="/my/dashboard" className={classes.nonActiveLink} activeClassName={classes.activeLink}>Overview </NavLink>
                 </Typography> 
                <Divider className={classes.divider}/>
                <div className={classes.accountTitle}>
                    <Typography className={classes.smallFont}> ORDERS </Typography>
                    <Typography variant="body2" className={classes.addCoursor}> 
                        <NavLink to="/my/orders" className={classes.nonActiveLink} activeClassName={classes.activeLink}> Orders & Returns </NavLink>
                    </Typography>
                </div>
                <Divider className={classes.divider} />
                <div className={classes.accountTitle}>
                    <Typography className={classes.smallFont}> ACCOUNT </Typography>
                    <Typography variant="body2" className={classes.addCoursor}> 
                        <NavLink to="/my/profile" className={classes.nonActiveLink} activeClassName={classes.activeLink}> Profile </NavLink>
                    </Typography>
                    <Typography variant="body2" className={classes.addCoursor}> 
                        <NavLink to="/my/address" className={classes.nonActiveLink} activeClassName={classes.activeLink}> Addresses </NavLink>
                    </Typography>
                    <Typography variant="body2" className={classes.addCoursor}> Delete Account </Typography>
                </div>
                <Divider className={classes.divider} />
                <div className={classes.accountTitle}>
                    <Typography className={classes.smallFont}> LEGAL </Typography>
                    <Typography variant="body2" className={classes.addCoursor}> Terms of Use </Typography>
                    <Typography variant="body2" className={classes.addCoursor}> Privacy Policy </Typography>
                </div>
            </div>
        )
    }

    return(
        <Container>
            <Box mt={20} ml={10} mr={10}>
                <Typography variant="h6"> <b>Account</b> </Typography>
                <Typography className={classes.smallFont}>{user.username}</Typography>
                <Divider />

                <Grid container>
                    <Grid item xs={2}>
                        {accountTitle()}
                    </Grid>
            
                    <Grid item xs={1}>
                        <Divider orientation="vertical" />
                    </Grid>
            
                    <Grid item xs={9}>
                        {props.children}
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
});

export default UserDashboard;
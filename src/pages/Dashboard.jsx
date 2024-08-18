import React from 'react'
import {Box, Button, makeStyles} from "@material-ui/core";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import UserDashboard from '../components/UserDashboard'
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles(({
    editProfileButton: {
        position: "absolute",
        right: "0",
        marginRight: "25px",
        marginTop: "25px", 
        fontSize: "9px"
    },
    logoutButton: {
        backgroundColor: "rgb(230, 25, 110)",
        color: "white",
        margin: "5rem 1rem",
        width: "15rem",

        "&:hover": {
            backgroundColor: "rgb(230, 25, 110)",
            textDecoration: "none"
        }
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
}))

const Dashboard = () => {
    const classes = useStyles()
    return(
        <UserDashboard>
            <Box mr={15} pt={2} pl={1} pr={15}>
                <Box sx={{ backgroundColor: "lightGrey", position: "relative" }}>
                    <AccountBoxIcon sx={{ fontSize: 200, paddingLeft: "1px" }}/>
            
                    <NavLink to="/my/profile/edit" className={classes.nonActiveLink} activeClassName={classes.activeLink}> 
                        <Button variant="outlined" className={classes.editProfileButton}> EDIT PROFILE </Button>
                    </NavLink>
                </Box>
            </Box>

            <Button className={classes.logoutButton} size="large" variant="contained"> LOGOUT </Button>

        </UserDashboard>
    )
}

export default Dashboard
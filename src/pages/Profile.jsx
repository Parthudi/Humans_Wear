import React, { useEffect, useState} from "react";
import {Box, Grid, makeStyles, Divider, Typography, Button} from "@material-ui/core";
import { getUser } from "../components/LocalStorageItems/User";
import UserDashboard from "../components/UserDashboard";
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles(({
    editProfileButton: {
        backgroundColor: "rgb(230, 25, 110)",
        color: "white",
        marginBottom: "5rem",

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

const Profile = React.memo(() => {
    const classes = useStyles()
    const [user, setUser] = useState({});

    useEffect(() => {
        const user = getUser();
        setUser(user);
    }, []);

    const userDetails = () => {
        return(
        <Box>
            <Grid container>
                <Grid item xs={6} spacing={2}>
                    <Box mt={2}>
                        Full Name 
                    </Box>
                    <Box mt={2}>
                        Email 
                    </Box>
                    <Box mt={2}>
                        User Type 
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box mt={2}>
                        {user.username}
                    </Box>

                    <Box mt={2}>
                        {user.email}
                    </Box>

                    <Box mt={2} mb={4}>
                        {user.type}
                    </Box>
                </Grid>
            </Grid>
            
            <NavLink to="/my/profile/edit" className={classes.nonActiveLink} activeClassName={classes.activeLink}> 
                <Button className={classes.editProfileButton} fullWidth="true" variant="contained"> EDIT </Button>
            </NavLink>
        </Box>
        )
    }

    return(
        <UserDashboard>
            <Box mt={2} mr={4} pt={5} pl={18} pr={20} sx={{ border: '1px solid lightGrey' }}>
                <Typography ml={2} mb={1}> <b> Profile Details </b> </Typography>
                <Divider />

                <Box ml={2}>
                    {userDetails()}
                </Box>

            </Box>
        </UserDashboard>
    )
});

export default Profile;
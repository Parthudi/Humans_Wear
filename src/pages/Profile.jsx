// import { Box, Divider, Grid, Typography, Button, makeStyles } from "@mui/material";
import {Box,Grid, makeStyles, Divider, Typography, Button} from "@material-ui/core";
import React, { useEffect, useState} from "react";
import { getUser } from "../components/LocalStorageItems/User";
import UserDashboard from "../components/UserDashboard";

const useStyles = makeStyles(({
    editProfileButton: {
        backgroundColor: "rgb(230, 25, 110)",
        color: "white",
        marginBottom: "5rem"
    }
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
            
            <Button className={classes.editProfileButton} fullWidth="true" variant="contained"> Edit </Button>
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
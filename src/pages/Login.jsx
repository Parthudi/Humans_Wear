import React from 'react'
import SignIn from '../components/Signin'
import SignUp from '../components/Signup'
import {Box,Container,Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    adjustSizing: {
        display: "flex",
    },
    [theme.breakpoints.down("sm")]: {
        adjustSizing: {
            display: "block",
            width: "500px"
        }
    }
}));

const SignInAndSignUp = () => {
    const classes = useStyles();

    return(
            <Container>
                <Box mt={10} className={classes.adjustSizing}>
                    <Grid container spacing={10}>
                        <Grid item xs={12} sm={6} md={6}>
                            <SignIn />
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <SignUp />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
    )
}

export default SignInAndSignUp
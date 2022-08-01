import React, {useEffect} from 'react'
import SignIn from '../components/Signin'
import SignUp from '../components/Signup'
import {Box,Container,Grid, makeStyles} from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles(theme => ({
    adjustSizing: {
        opacity: "0.8",
        display: "flex",
    },
    [theme.breakpoints.down("sm")]: {
        adjustSizing: {
            display: "block",
            width: "500px"
        }
    }
}));

const SignInAndSignUp = React.memo(() => {
    const classes = useStyles();

    useEffect(() => {
        Aos.init({duration: 1000});
      }, []);

    return(
            <Container>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="500">
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
                </div>
            </Container>
    )
});

export default SignInAndSignUp
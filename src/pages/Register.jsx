import React, {useEffect} from 'react'
import SignIn from '../components/Signin'
import SignUp from '../components/Signup'
import {Box,Container,Grid, makeStyles} from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles(theme => ({
    adjustSizing: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        opacity: "0.8",
        display: "flex",
    },
    [theme.breakpoints.down("sm")]: {
        adjustSizing: {
            display: "block",
        }
    }
}));

const Register = React.memo(() => {
    const classes = useStyles();

    useEffect(() => {
        Aos.init({duration: 1000});
      }, []);

    return(
            <Container className={classes.adjustSizing} mt={10}>
                <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="500">
                    <SignUp />
                </div>
            </Container>
    )
});

export default Register
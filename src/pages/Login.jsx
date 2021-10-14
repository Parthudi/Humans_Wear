import React from 'react'
import SignIn from '../components/Signin'
import SignUp from '../components/Signup'
import {Box,Container,Grid} from "@material-ui/core";

const SignInAndSignUp = () => {
    return(
            <Container>
                <Box mt={10}>
                    <Grid container spacing={10}>
                        <Grid item xs={6} sm={6} md={6}>
                            <SignIn />
                        </Grid>
                        <Grid item xs={6} sm={6} md={6}>
                            <SignUp />
                        </Grid>
                    </Grid>
                </Box>
            </Container>
    )
}

export default SignInAndSignUp
import React from "react";
import {Container, Divider,Box,Grid, makeStyles} from "@material-ui/core";
import CartHeader from "./CartHeader";

const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.down("sm")]: {
        adjustBag: {
            width: "550px"
        },
    }
}));

const Checkout = (props) => {
    const classes = useStyles();

    return(
        <Container className={classes.adjustBag}>
            <Box>
                <CartHeader bag={props.showHighlight}/>
            </Box>
            <Divider />

            <Box mt={4}>
                <Grid direction="row" container>
                    {props.children}
                </Grid>
            </Box>    
        </Container>
    )
}

export default Checkout;
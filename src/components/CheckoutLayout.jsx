import React from "react";
import {Container, Divider,Box,Grid} from "@material-ui/core";
import CartHeader from "./CartHeader";

const Checkout = (props) => {
    return(
        <Container>
            <CartHeader bag={props.showHighlight}/>
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
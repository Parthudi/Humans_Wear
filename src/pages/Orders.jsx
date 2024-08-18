import React from 'react';
import {Box, Grid, makeStyles, Divider, Typography, Button} from "@material-ui/core";
import UserDashboard from '../components/UserDashboard';
import noOrder from "../assets/noOrder.png"

const useStyles = makeStyles(({
    image: {
        height: "18rem",
        marginBottom: "1rem",
        marginLeft: "5rem"
    }
}))

const Orders = () => {
    const classes = useStyles()

    return(
        <UserDashboard>
            <Box ml={27} mr={30} mt={5} mb={5}>
                <img src={noOrder} alt="No Order" className={classes.image} />

                <Box sx={{textAlign: "center"}}>
                    <Typography gutterBottom>
                        <b> You haven't placed any order yet! </b>
                    </Typography>
                </Box>
                <Typography variant="caption" display="block" gutterBottom>
                    Order section is empty. After placing order, You can track them from here!
                </Typography>
            </Box>
                
        </UserDashboard>
    )
}

export default Orders
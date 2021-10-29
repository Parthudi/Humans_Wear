import React from 'react'
import SHOP_DATA from "./Shop/ShopData"
import ShowProduct from "../components/ShowProducts";
import {Typography, Grid, Box} from '@material-ui/core';
import {withRouter } from 'react-router-dom'
import {useStyles} from "../components/styles";

const Hats = () => {
    const classes = useStyles();
    return(
        <Box className={classes.AdjustSizing} mt={4}>
            <Typography variant="h4" color="inherit" gutterBottom>
                Show Hats 
            </Typography> 
            <Grid container item xs={12} sm={8} md={12} style={{justifyContent:"space-evenly"}}>
                {SHOP_DATA[0].items.map((elem, i) => (
                    <ShowProduct imag={elem.imageUrl}  sizing="flex" key={i} id={elem.id} alt="product not available" products={elem}  whishlist={true}/>
                ))}
            </Grid>
        </Box>
    )
}

export default withRouter(Hats)
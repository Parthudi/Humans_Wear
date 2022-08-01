import React, { Component } from 'react'
import SHOP_DATA from "./Shop/ShopData"
import ShowProduct from "../components/ShowProducts";
import {Typography,Grid,Box} from '@material-ui/core';
import {withRouter } from 'react-router-dom'
import {useStyles} from "../components/styles";

const Womens = React.memo(() => {
    const classes = useStyles();

    return(
        <Box className= {classes.AdjustSizing} mt={4}>
            <Typography variant="h4" color="inherit" gutterBottom>
                Show Womens 
            </Typography> 
            <Grid container item xs={12} sm={8} md={12} style={{justifyContent:"center"}}>
                {SHOP_DATA[3].items.map((elem, i) => (
                    <ShowProduct imag={elem.imageUrl} sizing="flex" key={i} id={elem.id} alt="product not available" products={elem}  whishlist={true} />
                ))}
            </Grid>
        </Box>
        )
});

export default withRouter(Womens)
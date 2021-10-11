import React from 'react'
import SHOP_DATA from "./Shop/ShopData"
import {Box,Typography,Grid} from '@material-ui/core';
import ImageItems from "../components/ShowProducts";
import {withRouter } from 'react-router-dom'

const Jackets = () => {
        return(
            <Box mt={4}>
                <div>
                    <Typography variant="h4" color="inherit" gutterBottom>
                        Show Jackets 
                    </Typography> 
                    <Grid container item xs={12} sm={8} md={12} style={{justifyContent:"center"}}>
                        {SHOP_DATA[2].items.map((elem, i) => (
                            <ImageItems imag={elem.imageUrl} key={i} id={elem.id} alt="product not available" products={elem}  whishlist={true}/>
                        ))}
                    </Grid>
                </div>
            </Box>
        )
}

export default withRouter(Jackets)
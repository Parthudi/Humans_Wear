import React from 'react'
import SHOP_DATA from "./Shop/ShopData"
import ImageItems from "../components/ShowProducts";
import {Typography,Grid,Box} from '@material-ui/core';
import {withRouter} from 'react-router-dom'

const Mens = () => {
        return(
            <Box mt={4}>
                <div>
                    <Typography variant="h4" color="inherit" gutterBottom>
                        Show Mens 
                    </Typography> 
                    <Grid container item xs={12} sm={8} md={12}  style={{justifyContent:"space-evenly"}}>
                        {SHOP_DATA[4].items.map((elem, i) => (
                            <ImageItems imag={elem.imageUrl} key={i} id={elem.id} alt="product not available" products={elem}  whishlist={true} />
                        ))}
                    </Grid>
                </div>
            </Box>
        )
}

export default withRouter(Mens)
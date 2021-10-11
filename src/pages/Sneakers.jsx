import React from 'react'
import SHOP_DATA from "./Shop/ShopData"
import ImageItems from "../components/ShowProducts";
import {Typography,Grid,Box} from '@material-ui/core';
import {withRouter } from 'react-router-dom'

const Sneakers = () => {
        return(
            <Box mt={4}>
                    <div>
                        <Typography variant="h4" color="inherit" gutterBottom>
                            Show Sneakers 
                        </Typography> 
                        <Grid container item xs={12} sm={8} md={12}  style={{justifyContent:"center"}}>
                            {SHOP_DATA[1].items.map((elem, i) => (
                                <ImageItems imag={elem.imageUrl} key={i} id={elem.id} alt="product not available" products={elem}  whishlist={true} />
                            ))}
                        </Grid>
                    </div>
            </Box>
        )
}

export default withRouter(Sneakers);
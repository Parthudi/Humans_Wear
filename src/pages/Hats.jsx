import React, { Component } from 'react'
import SHOP_DATA from "./Shop/ShopData"
import ShowSingleImage from "./showSingleImage/singleImage"
import ImageItems from "../components/ShowProducts";
import {Typography,Grid,Container,Box} from '@material-ui/core';
import {withRouter } from 'react-router-dom'

class Hats extends Component {
    state = {
        collections: SHOP_DATA,
        key: null,
        name: "",
        price: "",
        imageUrl: ""
        }

     handleOnClick = (id, name, price, imageUrl) => {
        this.setState({key:id, name, price, imageUrl });
        }

    render() {
        return(
                <Box mt={4}>
                    {this.state.imageUrl.length < 1 ?
                        <div>
                            <Typography variant="h4" color="inherit" gutterBottom>
                                Show Hats 
                            </Typography> 
                            <Grid container item xs={12} sm={8} md={12}>
                                {this.state.collections[0].items.map((elem, i) => (
                                    <ImageItems imag={elem.imageUrl} key={i} id={elem.id} alt="product not available" products={elem}  whishlist={true}/>
                                ))}
                            </Grid>
                        </div>
                        :
                        <div>
                            <ShowSingleImage imag={this.state.imageUrl} namee={this.state.name} pricee={this.state.price}  id={this.state.key} /> 
                        </div>
                    }
                </Box>
        )
    }
}

export default withRouter(Hats)
import React, { Component } from 'react'
import SHOP_DATA from "./Shop/ShopData"
import ShowSingleImage from "./showSingleImage/singleImage"
import ImageItems from "../components/ShowProducts";
import {Typography,Grid,Box} from '@material-ui/core';
import {withRouter } from 'react-router-dom'

class Jackets extends Component {
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
                                Show Jackets 
                            </Typography> 
                            <Grid container item xs={12} sm={8} md={12}>
                                {this.state.collections[2].items.map((elem, i) => (
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

            // this.state.imageUrl.length < 1 ? 
            // (
            // <div>
            //     <h1 style={{margin:"50px auto", cursor:"pointer"}} className="select"> <hr className="onHovering" />  show jackets <hr className="onHovering" /></h1>
            //     <div className="preview1">
            //         {this.state.collections[2].items.slice(0,4).map((elem, i) => (
            //             <CollectionItem key={elem.id} namee={elem.name} pricee={elem.price} imag={elem.imageUrl} clicked={() => this.handleOnClick(elem.id, elem.name,elem.price, elem.imageUrl)}/>
            //         ))}
            //     </div>
            //     <div className="preview1">
            //         {this.state.collections[2].items.slice(4,7).map((elem, i) => (
            //             <CollectionItem key={elem.id} namee={elem.name} pricee={elem.price} imag={elem.imageUrl} clicked={() => this.handleOnClick(elem.id, elem.name,elem.price, elem.imageUrl)}/>
            //         ))}
            //     </div>
            //     <div className="preview1">
            //         {this.state.collections[2].items.slice(7,10).map((elem, i) => (
            //             <CollectionItem key={elem.id} namee={elem.name} pricee={elem.price} imag={elem.imageUrl} clicked={() => this.handleOnClick(elem.id, elem.name,elem.price, elem.imageUrl)}/>
            //         ))}
            //     </div>  
            // </div>)
            //     :
            // (<div>
            //     <ShowSingleImage imag={this.state.imageUrl}  namee={this.state.name} pricee={this.state.price}  id={this.state.key}  /> 
            // </div>) 
        )
    }
}

export default withRouter(Jackets)
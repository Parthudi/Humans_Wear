import React, { Component } from 'react'
import SHOP_DATA from './ShopData'
import CollectionPreview from '../../components/collectionpreview/collectionpreview'
import "./shop.css"
import {withRouter } from 'react-router-dom'

class ShopPage extends Component {
    state = {
        collections: SHOP_DATA
        }

    clickHandler = (i) => {
        if(i === 0) {
            this.props.history.push("/shop/hats")
        }
        if(i === 1) {
            this.props.history.push("/shop/sneakers")
        }
        if(i === 2) {
            this.props.history.push("/shop/jackets")
        }
        if(i === 3) {
            this.props.history.push("/shop/womens")
        }
        if(i === 4){
            this.props.history.push("/shop/mens")
        }
    }

    render() {
       let shopitem = this.state.collections.map((collection, i) => {
            return(
                <div key={collection.id}>
                    <button className="butt" onClick={() => this.clickHandler(i)}> Load More </button> 
                    <CollectionPreview key={i}  title={collection.title} items={collection.items} clicked={() => this.props.history.push("/shop/product")}/>             
                </div>
            )
        })
        return(
            <div>
                {shopitem}
            </div>
        )
    }
}

export default withRouter(ShopPage)
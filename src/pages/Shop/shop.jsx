import React, { Component } from 'react'
import SHOP_DATA from './ShopData'
import CollectionPreview from '../../components/collectionpreview/collectionpreview'
import {Container, makeStyles} from "@material-ui/core";
import {withRouter } from 'react-router-dom'

const useStyle = makeStyles((theme) => ({
    butt: {
        fontFamily:"cursive",
        transform: "rotate(-90deg)",
        borderRadius: "10px",
        width: "240px",
        height: "35px",
        border: "none",
        backgroundColor: "rgb(168, 168, 124)",
        position: "relative",
        right: "-1210px",
        top: "255px",
        "&:hover":{
            transform: "rotate(-90deg) scale(1.088)"
        }
    },
    [theme.breakpoints.down("sm")]: {
        adjustView: {
            width: 500,
            padding: theme.spacing(1,1),
        },
        butt: {
            right: "-410px",
        }
    }
}));

const ShopPage = (props) =>  {
    const collections = SHOP_DATA;
    const classes = useStyle();

    const clickHandler = (i) => {
        if(i === 0) {
            props.history.push("/shop/hats")
        }
        if(i === 1) {
            props.history.push("/shop/sneakers")
        }
        if(i === 2) {
            props.history.push("/shop/jackets")
        }
        if(i === 3) {
            props.history.push("/shop/womens")
        }
        if(i === 4){
            props.history.push("/shop/mens")
        }
    }

    const shopItem = () => {
        return(collections.map((collection, i) => {
            return(
                <div key={collection.id}>
                    <button className={classes.butt} onClick={() => clickHandler(i)}> Load More </button> 
                    <CollectionPreview key={i}  title={collection.title} items={collection.items} clicked={() => this.props.history.push("/shop/product")}/>             
                </div>
            )
        }))
    }

    return(
        <Container className={classes.adjustView}>
            {shopItem()};
        </Container>
    )
}

export default withRouter(ShopPage)
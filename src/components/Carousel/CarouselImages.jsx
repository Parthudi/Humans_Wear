import React, {useState} from "react";
import {makeStyles, Card, Button} from '@material-ui/core'
import "react-alice-carousel/lib/alice-carousel.css";

const useStyles = makeStyles(() => ({
    // sliderimg: {
    //     width: "100rem",
    //     height: "40rem",
    //     objectFit: "cover"
    //   }
}));

const ShowItemsCarousol = (props) => {
    const classes = useStyles();
    return(
        <Card key={props.identifier}>
            <img src={props.imag} alt={props.alt} key={props.identifier} className={classes.sliderimg} width="923" height="690"/> 
        </Card>
    )
}

export default ShowItemsCarousol;
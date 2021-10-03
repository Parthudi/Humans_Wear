import React from "react";
import {makeStyles, Card} from '@material-ui/core'
import "react-alice-carousel/lib/alice-carousel.css";

const useStyles = makeStyles(() => ({
    sliderimg: {
        width: "100%",
        height: "500px",
        objectFit: "cover"
      }
}));

const ShowItemsCarousol = (props) => {
    const classes = useStyles();

    return(
        <Card key={props.identifier}>
            <img src={props.imag} alt={props.alt} key={props.identifier} className={classes.sliderimg}/> 
        </Card>
    )
}

export default ShowItemsCarousol;
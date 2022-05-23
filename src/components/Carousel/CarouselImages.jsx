import React from "react";
import {Card} from '@material-ui/core'


const ShowItemsCarousol = (props) => {
    return(
        <Card key={props.identifier}>
            <img src={props.imag} alt={props.alt} key={props.identifier} width="100%" height="640"/> 
        </Card>
    )
}

export default ShowItemsCarousol;
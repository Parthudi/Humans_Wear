import React from "react";
import {Card} from '@material-ui/core'


const ShowItemsCarousol = (props) => {
    return(
        <Card key={props.identifier}>
            <img src={props.imag} alt={props.alt} key={props.identifier} width="913" height="690"/> 
        </Card>
    )
}

export default ShowItemsCarousol;
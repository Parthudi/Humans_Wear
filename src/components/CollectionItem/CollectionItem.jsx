import React, {memo} from 'react';
import './CollectionItem.css';
import { useHistory } from "react-router";
import {Link} from "react-router-dom";

const CollectionItem = (props) => {
    const history = useHistory();
    const showFullProuct = (id) => {
        return history.push({pathname:  `/shop/product/${props.namee}/${id}`});
    }

    return(
        <div className='collection-item'>
                <div className='image' style={{backgroundImage : `url(${props.imag})` }} onClick={() => showFullProuct(props.onClick)} /> 

                <div className='collection-footer'>
                    <span className='name'> {props.namee} </span>
                    <Link to="/shop">
                        <span className='price'> <strong> ${props.pricee} </strong> </span>
                    </Link>
                </div>
        </div> 

    )
}

export default CollectionItem


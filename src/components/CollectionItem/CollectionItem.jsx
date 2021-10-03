import React from 'react';
import './CollectionItem.css';

const CollectionItem = (props) => {
    return(
       <div className='collection-item' >
            <div className='image' style={{backgroundImage : `url(${props.imag})` }} onClick={props.clicked} /> 

            <div className='collection-footer'>
                <span className='name'> {props.namee} </span>
                <span className='price'> <strong> ${props.pricee} </strong> </span>
            </div>
        </div>   
    )
}

export default CollectionItem


import React from 'react'
import CollectionItem from '../CollectionItem/CollectionItem'
import './collectionpreview.css'

const CollectionPreview = (props) => {
        return(
            <div className='collection-preview'>

                <h1 className='title'> {props.title.toUpperCase()} </h1>
                
                <div className='preview'>
                    {props.items.slice(0,4).map((item) => {
                        return <CollectionItem key={item.id} namee={item.name} pricee={item.price} imag={item.imageUrl} onClick={item.id} />
                    })}

                </div>
            </div>
        )
}

export default CollectionPreview
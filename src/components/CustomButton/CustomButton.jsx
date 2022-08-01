import React, {memo} from 'react'
import './CustomButton.css'

const CustomButton = memo((props) => {
    return(
        <button className={`${props.googlestyle ? 'googleButton' : ' '} custom-button`} {...props} >
                {props.children}
        </button>
    )
})

export default CustomButton
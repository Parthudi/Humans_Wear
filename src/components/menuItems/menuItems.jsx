import React from 'react'
import {withRouter} from 'react-router-dom'
import './menuItems.css'

const MenuItems = (props) => {

  return(
         <div className={props.siz +' menu-item'}
                 onClick={() => props.history.push(`${props.match.url}${props.linku}`)}>

            <div className='background-image'  style={{backgroundImage : `url(${props.image})`}} >
                    <div className='content'>
                        <h1 className='title'> {props.title.toUpperCase()} </h1>
                        <span className='subtitle'> SHOP NOW </span>
                    </div>
                </div>
            </div>
        )
    }

export default withRouter(MenuItems)
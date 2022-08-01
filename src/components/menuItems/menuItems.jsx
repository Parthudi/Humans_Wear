import React, {useEffect, memo} from 'react'
import {withRouter} from 'react-router-dom'
import {Box} from '@material-ui/core'; 
import './menuItems.css'
import Aos from "aos";
import "aos/dist/aos.css";

const MenuItems = memo((props) => {
    useEffect(() => {
        Aos.init({duration: 3000});
      }, []);

  return(
        <Box className={props.siz +` menu-item `} onClick={() => props.history.push(`${props.match.url}${props.linku}`)}>
            <div className="background-image"  style={{backgroundImage : `url(${props.image})`}} >
                <div className="content">
                    <h1 className="title"> {props.title.toUpperCase()} </h1>
                    <span className="subtitle"> SHOP NOW </span>
                </div>
            </div>
        </Box>
        )
    });

export default withRouter(MenuItems)
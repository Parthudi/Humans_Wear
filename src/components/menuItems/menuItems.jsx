import React from 'react'
import {withRouter} from 'react-router-dom'
import {Box, makeStyles} from '@material-ui/core'; 
import './menuItems.css'

// const useStyles = makeStyles((theme) => ({
//     [theme.breakpoints.down("sm")]: {
//         adjustSizing: {
//             width: "30rem"
//         }
//     }
   
// }));

const MenuItems = (props) => {
    // const classes = useStyles();

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
    }

export default withRouter(MenuItems)
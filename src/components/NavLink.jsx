import React from "react";
import IconButton from '@mui/material/IconButton';
import {Typography} from "@material-ui/core";
import {NavLink} from 'react-router-dom';

const NavigationLink = (props) => {
    return(
        <IconButton size={props.size}>
            <NavLink to={props.to} sx={props.sx} style={{textDecoration: 'none'}}>
                {props.img === "yes" ? 
                    <img src={props.src}  alt={props.alt} width={props.width}/>
                :
                    <Typography
                        variant={props.variant}
                        color= {props.color}
                        sx={props.textSx}
                        style={props.style}>
                            {props.name} 
                    </Typography>
                    
                }
            </NavLink>
        </IconButton>
    )
}

export default NavigationLink;
import React, {memo} from 'react'
import {withRouter} from 'react-router-dom'
import {Box,Grid, Typography} from '@material-ui/core'; 
import './menuItems.css'

const MenuItems = memo((props) => {

    const images = (props) => (
        <div className={`${props.siz}` +` menu-item1`} onClick={() => props.history.push(`${props.match.url}${props.linku}`)}>
            <div className="background-image1" style={{backgroundImage : `url(${props.image})`}} >
                <div className="content1">
                    <h1 className="title1"> {props.title.toUpperCase()} </h1>
                    <div className="subtitle1"> SHOP NOW </div>
                </div>
            </div>
        </div>
    )

    return(
        <div>
            <Grid container spacing={8}>
                <Grid item xs={4} sm={6} md={6}>
                    {images(props)}
                </Grid>

                <Grid item xs={8} sm={6} md={6}>
                    <Typography>
                       <span className="title2"> “{props.thought}” </span> 
                    </Typography>
                </Grid>
            </Grid>
        </div>
        
        )
    });

export default withRouter(MenuItems)
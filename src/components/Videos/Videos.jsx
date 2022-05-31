import React from "react";
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles(() => ({
    video: {
        fontFamily: 'Macondo, cursive'
      }

      
}));


const Videos = () => {
    const classes = useStyles();
    return(
        <div className={classes.video}>
            <center>
                <div style={{fontSize: "1.2rem"}}>
                   <p> Now Premiering </p>
                </div>

                <div style={{fontSize: "1.7rem"}}>
                   <p> Watch Style In Motion </p>
                </div>

                <video width="80%" height="40%" controls>
                    <source src="/Videos/clothes.mp4" type="video/mp4"/>
                </video>
            </center>
       </div>
    )
}

export default Videos;
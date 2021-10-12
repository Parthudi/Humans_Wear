import React, {useState} from "react";
import {makeStyles, Card, Button} from '@material-ui/core'
import "react-alice-carousel/lib/alice-carousel.css";

const useStyles = makeStyles(() => ({
    sliderimg: {
        width: "100%",
        height: "500px",
        objectFit: "cover"
      },
    //   but: {
    //     position: "fixed",
    //     left: "39rem",
    //     zIndex: 1,
    //     top: "3rem",
    //     borderRadius: "5px",
    //     padding: "0.7rem",
    //     fontSize: "15px",
    //     fontWeight: 600,
    //     // width: "22rem",
    //     textAlign: "center",
    //     // animation: "pincode 0.5s ease-in-out",
    //   }
}));

const ShowItemsCarousol = (props) => {
    const [showbutton, setShowButton] = useState(false);
    const classes = useStyles();
    // console.log(showbutton);
    return(
        <Card key={props.identifier}>
            <img src={props.imag} alt={props.alt} key={props.identifier} className={classes.sliderimg} /> 
            {/* {showbutton && 
                <div className={classes.but}>
                    <Button  color="secondary"> {props.name} </Button>
                </div>
            } */}
        </Card>
    )
}

export default ShowItemsCarousol;
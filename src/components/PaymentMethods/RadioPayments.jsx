import React, {memo} from "react";
import {Box,makeStyles,Tooltip} from "@material-ui/core";
import RadioOption from "../RadioOption";

const useStyles = makeStyles((theme) => ({
    box: {
        margin: "1vw 2vw 1vw 2vw"
    },
    captchaBox:{
        width: "15vw",
        margin: "2vw 0vw 1vw 0vw",
        border: "1px solid grey",
        borderRadius: 5,
    }
}));

const RadioPayments = memo((props) => {
    const classes = useStyles();

    return(
        <Box mt={4} ml={3} className={classes.box} >
            <Tooltip title="UPI" placement="right-start">
                <b> {props.paymentMethodName} </b>
            </Tooltip>
            <RadioOption options={props.options} name={props.name} radioFor={props.radioFor} />
        </Box>
    )
});

export default RadioPayments;
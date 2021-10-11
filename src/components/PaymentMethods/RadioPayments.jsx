import React, {useState} from "react";
import {Box,makeStyles,Tooltip} from "@material-ui/core";
import phonepay from "../../assets/phonepay.png";
import gpay from "../../assets/gpay.png";
import upi from "../../assets/upi.png";
import RadioOption from "../RadioOption";
import axis from "../../assets/axis.png"
import hdfc from "../../assets/hdfc.png"
import icici from "../../assets/icici.png"
import kotak from "../../assets/kotak.png"
import sbi from "../../assets/sbi.png"

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

const RadioPayments = (props) => {
    const classes = useStyles();

    return(
        <Box mt={4} ml={3} className={classes.box} >
            <Tooltip title="UPI" placement="right-start">
                <b> {props.paymentMethodName} </b>
            </Tooltip>
            <RadioOption options={props.options} name={props.name} radioFor={props.radioFor} />
        </Box>
    )
}

export default RadioPayments;
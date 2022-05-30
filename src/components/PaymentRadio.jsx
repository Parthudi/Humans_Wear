import React from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import {Typography,makeStyles,Box,Avatar} from "@material-ui/core";
import Radio from '@mui/material/Radio';
import {removeAddress} from "./LocalStorageItems/Address";
import Stack from '@mui/material/Stack';

const useStyles = makeStyles((theme) => ({
    card: {
        margin: "1vw 2vw 1vw 2vw"
    },
    icons: {
        border: "1px solid grey",
        borderRadius: "50%"
    }
}));

const PaymentRadio = (props) => {
  const classes = useStyles();

  const payment = () => {
      return(
          <Box>
                    <Stack direction="row" spacing={1}> 
                        <Avatar alt="payment method not available" src={props.icon} />
                        <Typography variant="subtitle2">
                            {props.paymentBy}
                        </Typography>
                    </Stack>
          </Box>
          )
      }

  return(
        <Box className={classes.card}>
            <FormControlLabel value={props.index} control={<Radio />} label={payment()} />
        </Box>
    )
}

export default PaymentRadio;
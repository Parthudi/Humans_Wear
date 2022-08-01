import React from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import {Card,Typography,makeStyles,Button,Box} from "@material-ui/core";
import Radio from '@mui/material/Radio';
import {deleteAddress} from "./ApiCalls";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const useStyles = makeStyles((theme) => ({
    buttonstyle: {
        border: "1px solid rgb(18, 175, 18)",
        borderRadius: "8rem",
        color: "rgb(18, 175, 18)",
        fontSize: "0.6rem",
        marginLeft: "1rem"
    },
    card: {
      cursor: "pointer",
      margin: theme.spacing(3,0,3,0),
      padding: theme.spacing(2,1,1,1),
      width: "45vw",
  },
  adjustViewForSmall: {
      display: "block",
      padding: "2px 20px"
  },
  [theme.breakpoints.down("md")]: {
    card: {
        width: "35rem",
    }
    },
    [theme.breakpoints.down("sm")]: {
        card: {
            width: "25rem",
        }
    }
}));

const CardContaint = React.memo((props) => {
  const classes = useStyles();

  const handleRemoveChange = async(id) => {
    await deleteAddress(id);
    window.location.reload();
  }
  
  const address = () => {
      return(
          <Box className={classes.adjustViewForSmall}>
              <Typography variant="subtitle1">
                <Stack direction="row" spacing={1}> <Chip label={props.placeType} color="success" size="small" variant="outlined" /> </Stack>
              </Typography>
              <Box mt={2}>
                  <h6> ADDRESS </h6>
                  <Typography variant="subtitle2">
                      {props.address}, {props.town}, {props.city}, {props.state}
                  </Typography>
                  <Typography variant="subtitle2">
                      {props.city}, {props.state} - {props.pincode}
                  </Typography>
              </Box>
              <Box mt={1} mb={1}>
                  <Typography variant="subtitle2">
                      Mobile :- <b> {props.mobile} </b>
                  </Typography>
                  <Typography variant="subtitle2">
                      <ListItemButton>
                          <ListItemIcon>
                              <StarIcon />
                          </ListItemIcon>
                          <ListItemText primary={props.modeOfpayment} />
                      </ListItemButton>
                  </Typography>
              </Box>
              <Button variant="outlined" fullWidth color="secondary" onClick={() => handleRemoveChange(props.id)}> Remove </Button>
          </Box>
          )
      }

  return(
      <Card className={classes.card}>
        <FormControlLabel value={props.index} control={<Radio />} label={address()} />
      </Card>
    )
});

export default CardContaint;
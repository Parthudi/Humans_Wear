import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import moment from "moment";
// import { makeStyles } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//     setPerfectImage: {
//         height: 100, 
//         width: 50,
//     }
// }));

const AddressImages = (props) => {
    // const classes = useStyles();

    const getRandomNumbers = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return(
        <Card sx={{ display: 'flex', marginTop: 2}}>
             <CardMedia
                    component="img"
                    height= "100"
                    image={props.imag}
                    alt={props.alt}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="body2">
                            Estimated delivery by <b>{moment().add(getRandomNumbers(2,8), 'days').format("Do MMM YYYY")}</b>
                        </Typography>
                    </CardContent>
                </Box>
        </Card>
    )
}

export default AddressImages;
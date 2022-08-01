import React, {memo} from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import moment from "moment";
import {NavLink, withRouter} from "react-router-dom";

const AddressImages = memo((props) => {

    const getRandomNumbers = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const showImage = () => {
       return `/shop/product/${props.product.name}/${props.product.id}` ;
    }

    return(
        <Card sx={{ display: 'flex', marginTop: 2}}>
            <NavLink to={() => showImage()}>
             <CardMedia
                    component="img"
                    sx={{width: 150}}
                    height= "90"
                    image={props.imag}
                    alt={props.alt}
                />
            </NavLink>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="body2">
                            Estimated delivery by <b>{moment().add(getRandomNumbers(2,8), 'days').format("Do MMM YYYY")}</b>
                        </Typography>
                    </CardContent>
                </Box>
        </Card>
    )
});

export default withRouter(AddressImages);
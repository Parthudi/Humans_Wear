import React, {useState} from "react";
import hats1 from "../../assets/hats1.jpg";
import hats2 from "../../assets/hats2.jpg"
import hats3 from "../../assets/hats3.jpg"
import jackets1 from "../../assets/jackets1.jpg"
import jackets2 from "../../assets/jackets2.jpg"
import jackets3 from "../../assets/jackets3.jpg"
import mens1 from "../../assets/mens1.jpg"
import mens2 from "../../assets/mens2.jpg"
import mens3 from "../../assets/mens3.jpg"
import sneakers1 from "../../assets/sneakers1.jpg"
import sneakers2 from "../../assets/sneakers2.jpg"
import sneakers3 from "../../assets/sneakers3.jpg"
import womens1 from "../../assets/womens1.jpg"
import womens2 from "../../assets/womens2.jpg"
import womens3 from "../../assets/womens3.jpg"
import ShowItemsCarousol from "./CarouselImages";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {Container, Box, Grid, Button, Slide} from "@material-ui/core";
import Skeleton from '@mui/material/Skeleton';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.down('md')]: {
        containerSize: {
            width: "50rem"
        }
    }, 
    [theme.breakpoints.down('sm')]: {
        containerSize: {
            width: "30rem"
        }
    },
}));

const ShowCarousel = () => {
    const classes = useStyles();
    // const [checked, setChecked] = useState(false);
    const imageUrls = [{name: "Brown Black Strip Hat",imageurl: hats1},{name:"Shaddy Green Hat", imageurl: hats2} ,{name: "Stylish Blues Hat" , imageurl: hats3},
            {name: "Awesome Jackets", imageurl: jackets1},{name: "Brown hams Jackets", imageurl: jackets2},{name: "Chexi Black Jackets", imageurl: jackets3},
            {name: "Casual Tees", imageurl: mens1}, {name: "Full Sleeves Pink Tees", imageurl: mens2},{name: "Rowing Browni Coat", imageurl: mens3},
            {name: "Brown Cherry Shoes", imageurl: sneakers1},{name: "Colorous Sneakers", imageurl: sneakers2},{name: "Casual Loafers", imageurl: sneakers3},
            {name: "All Time Wears", imageurl: womens1},{name: "Casual Wedding Skirt", imageurl: womens2},{name: "Stripper Blowsom Pants", imageurl: womens3}];

    // const showTransition = () => {
    //     <Box sx={{ width: `calc(100px + 16px)` }}>
    //         <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
    //             <Button variant="outlined" color="secondary">
    //                 images
    //             </Button>
    //         </Slide>
    //     </Box>
    // }
    // onMouseEnter={() => setChecked(true)} onMouseLeave={() => setChecked(false)} 

    return(
        <Container className={classes.containerSize}>
            <Box mt={4}>
                <Grid container item xs={12} sm={12} md={12}>
                    {imageUrls.length == 15 ?
                        <AliceCarousel autoPlay playButtonEnabled={"keyup" ? true: false} fadeOutAnimation={true} infinite autoPlayInterval="6000">
                            {imageUrls && imageUrls.map((image,i) => (
                                <ShowItemsCarousol imag={image.imageurl} name={image.name} identifier={i} key={i} alt="Procuct Not Available"/>
                            ))}
                        </AliceCarousel> : 
                    <Skeleton variant="rectangular" width={1310} height={428} style={{marginBottom: "50px"}} /> }
                </Grid>
            </Box>
        </Container>
    )
}

export default ShowCarousel;
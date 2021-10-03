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

const ShowCarousel = () => {
    const [checked, setChecked] = useState(false);
    const imageUrls = [hats1,hats2,hats3,jackets1,jackets2,jackets3,mens1,mens2,mens3,sneakers1,sneakers2,sneakers3,womens1,womens2,womens3]

    const showTransition = () => {
        <Box sx={{ width: `calc(100px + 16px)` }}>
            <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                <Button variant="outlined">
                    images
                </Button>
            </Slide>
        </Box>
    }

    return(
        <Container>
            <Box mt={4}>
                <Grid container item xs={12} sm={8} md={12} >
                    <AliceCarousel autoPlay playButtonEnabled={"keyup" ? true: false} onKeyUp={() => showTransition()} fadeOutAnimation={true} infinite autoPlayInterval="6000">
                        {imageUrls && imageUrls.map((image,i) => (
                            <ShowItemsCarousol imag={image} identifier={i} key={i} alt="Procuct Not Available"/>
                        ))}
                    </AliceCarousel>
                </Grid>
            </Box>
        </Container>
    )
}

export default ShowCarousel;
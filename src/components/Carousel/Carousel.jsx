import React, {useState, useEffect,memo} from "react";
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
import {Container, Box, Grid} from "@material-ui/core";
import Skeleton from '@mui/material/Skeleton';
import { makeStyles } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
    boxSize: {
        margin: "auto",
        border: "3px 2px solid grey",
        opacity: "0.7",
        padding: "12px",
        width: "13rem",
        position: "fixed",
        top: "20%",
        color: "black"
    }
}));


const ShowCarousel = memo(() => {
    const classes = useStyles();
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        Aos.init({duration: 1000});
      }, [showMenu]);

    const imageUrls = [{name: "Tomato Shady Tee",imageurl: hats1},{name:"Shaddy Hats", imageurl: hats2} ,{name: "Stylish Blues Hat" , imageurl: hats3},
            {name: "Awesome Jackets", imageurl: jackets1},{name: "Brown Hams Jackets", imageurl: jackets2},{name: "Chexi Black Jackets", imageurl: jackets3},
            {name: "Casual Tees", imageurl: mens1}, {name: "Stylish Cool Tees", imageurl: mens2},{name: "Romanio Round Neck Tee", imageurl: mens3},
            {name: "Blue Cherry Shoes", imageurl: sneakers1},{name: "Colorous Sneakers", imageurl: sneakers2},{name: "Casual Loafers", imageurl: sneakers3},
            {name: "All Time Wears", imageurl: womens1},{name: "Casual Wedding Skirt", imageurl: womens2},{name: "Brown Stripper Coated Jackets", imageurl: womens3}];
      
    const showModal = (name) => {
         return(
             <div data-aos="flip-right">
                <Box className={classes.boxSize} style={{ background: "linear-gradient(#ee9ca7, #ffdde1)" }}>
                    <h6> {name} </h6> 
                </Box>
             </div>
         )}

    return(
            <Container maxWidth="md" onMouseEnter={() => setShowMenu(true)}  onMouseLeave={() => setShowMenu(false)}>
                {imageUrls.length == 15 ?
                    <Box mt={4}>
                        <Grid container item xs={12} sm={12} md={12}>
                            <AliceCarousel autoPlay playButtonEnabled={"keyup" ? true: false} fadeOutAnimation={true} infinite autoPlayInterval="4000">
                                {imageUrls && imageUrls.map((image,i) => (
                                    showMenu == true ?
                                    <div>
                                        {showModal(image.name)}
                                        <ShowItemsCarousol imag={image.imageurl} name={image.name} identifier={i} key={i} alt="Procuct Not Available"/>
                                    </div>
                                      :
                                    <ShowItemsCarousol imag={image.imageurl} name={image.name} identifier={i} key={i} alt="Procuct Not Available"/>
                                ))}
                            </AliceCarousel> 
                        </Grid>
                    </Box>
                : 
                <Skeleton variant="rect" width={1310} height={428} style={{marginBottom: "50px"}} /> }
            </Container>
    )
});

export default ShowCarousel;
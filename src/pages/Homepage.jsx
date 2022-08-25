import React, {useEffect} from 'react'
import Directory from '../components/directory/directory';
import ShowCarousel from "../components/Carousel/Carousel";
import {Box, Container} from "@material-ui/core";
import Videos from "../components/Videos/Videos";
import footware from "../assets/footware.png";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
    
    useEffect(() => {
        Aos.init({duration: 2000});
      }, []);

    return(
        <Box mt={10}>
                <ShowCarousel />
                <Box mt={15} />
                {/* <div data-aos="zoom-in-up"> */}
                <Directory />
                
                {/* </div>  */}
                <Box mt={20}/>
                <div>
                    <Videos />
                </div>
                <Box mt={10}/>
            <img src={footware} alt="Footware" width="100%" />

            <Box mt={10}/>
            <div style={{textAlign:"center", padding:"0% 20%"}} data-aos="zoom-in-up">
                    <h2 style={{color:"darkgrey"}}><b>Make your mark</b></h2>
                    <p>Humans Wear has one of the finest and best clothing application with all genuine and ultra classy brands which advances the way people live and look. What sets us apart? Our easy to understand UI, easy to return and exchange products, all branded products are available with least prices.</p>

                    <Box mt={5}/>
                    <h2 style={{color:"darkgrey"}}><b>COVID Policy</b></h2>
                    <p> Due to Covid Policies, for any kind of return or exchange on under garments/shorts/masks this products won't be taken care by us or exchanged once buyed, for other poducts the return and exchange policies will remain the same.</p>

                    <Box mt={5}/>
                    <h2 style={{color:"darkgrey"}}> <b> Follow Humans Wear </b></h2>
            </div>
        </Box>
    )
}

export default HomePage
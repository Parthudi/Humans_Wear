import React, {useEffect} from 'react'
import Directory from '../components/directory/directory'
import ShowCarousel from "../components/Carousel/Carousel";
import {Box} from "@material-ui/core";
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
            <div data-aos="zoom-in-up">
                <Directory />
            </div> 
            <Box mt={20}/>
            <div>
                <Videos />
            </div>
            <Box mt={10}/>
          <img src={footware} alt="Footware" width="100%" />
        </Box>
    )
}

export default HomePage
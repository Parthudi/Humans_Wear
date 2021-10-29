import React from 'react'
import Directory from '../components/directory/directory'
import ShowCarousel from "../components/Carousel/Carousel";
import {Box} from "@material-ui/core";

const HomePage = () => {
    
    return(
        <Box mt={10}>
            <ShowCarousel />
            <Box height={40}/> 
            <Directory />
        </Box>
    )
}

export default HomePage
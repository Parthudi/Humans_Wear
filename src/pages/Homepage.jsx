import React from 'react'
import Directory from '../components/directory/directory'
import ShowCarousel from "../components/Carousel/Carousel";
import {Box} from "@material-ui/core";

const HomePage = (props) => {
    
    return(
        <div>
            <ShowCarousel />
            <Box height={30}/> 
            <Directory />
        </div>
    )
}

export default HomePage
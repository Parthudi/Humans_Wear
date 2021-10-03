import React from 'react'
import Directory from '../components/directory/directory'
import ShowCarousel from "../components/Carousel/Carousel";

const HomePage = (props) => {
    
    return(
        <div>
            <ShowCarousel />
            <Directory />
        </div>
    )
}

export default HomePage
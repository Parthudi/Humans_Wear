import React,{useState} from "react";
import useSound from 'use-sound';
import cartoon from './audio/cartoon.mp3';
import {Box, Typography} from "@material-ui/core";
import './footer.css'

const Boot = () => {
    const [play, { stop }] = useSound(
        cartoon,
        { volume: 0.5 }
      );
    
      const [ , setIsHovering] = useState(false);
    
        return (
            <Box>
                <Box style={{left: "10px"}} className="multicolortext">
                    <Typography variant="h6" style={{fontFamily: "Henny Penny , cursive"}}>
                        <light> Creator </light> : <strong> Parth Parmar </strong>
                    </Typography>
                    <Typography variant="h6" style={{fontFamily: "Henny Penny , cursive"}}>
                    <light> Email </light> : <strong> parmarparth597@gmail.com </strong>
                    </Typography>
                    <Typography variant="h6" style={{fontFamily: "Henny Penny , cursive"}}>
                    <light> Mobile Number </light> :  <strong> 8320416824 </strong>
                    </Typography>
                </Box>
            <div className= "text-center center-block adjustSizing" style={{marginTop: "3rem"}}>
                <a onMouseEnter={() => {
                         setIsHovering(true);
                         play();
                    }} onMouseLeave={() => {
                        setIsHovering(false);
                        stop();
                    }} href="https://www.facebook.com/parth.parmar.3745496" className="fa fa-facebook"> </a> 

                                <a  onMouseEnter={() => {
                                        setIsHovering(true);
                                        play();
                    }} onMouseLeave={() => {
                        setIsHovering(false);
                        stop();
                    }} href="https://twitter.com"  className="fa fa-twitter"> </a>

                                <a  onMouseEnter={() => {
                                        setIsHovering(true);
                                        play();
                    }} onMouseLeave={() => {
                        setIsHovering(false);
                        stop();
                    }} href="https://www.google.com/search/contributions"  className="fa fa-google"> </a>
                                <a  onMouseEnter={() => {
                                        setIsHovering(true);
                                        play();
                    }} onMouseLeave={() => {
                        setIsHovering(false);
                        stop();
                    }} href="https://www.linkedin.com/in/parth-parmar-903136177"  className="fa fa-linkedin"> </a>
                                <a  onMouseEnter={() => {
                                        setIsHovering(true);
                                        play();
                    }} onMouseLeave={() => {
                        setIsHovering(false);
                        stop();
                    }} href="https://www.instagram.com/parth__thehuman"  className="fa fa-instagram"> </a>
                                <a  onMouseEnter={() => {
                                        setIsHovering(true);
                                        play();
                    }} onMouseLeave={() => {
                        setIsHovering(false);
                        stop();
                    }} href="https://www.snapchat.com" className="fa fa-snapchat-ghost"> </a>
                                <a  onMouseEnter={() => {
                                        setIsHovering(true);
                                        play();
                    }} onMouseLeave={() => {
                        setIsHovering(false);
                        stop();
                    }} href="https://secure.skype.com/portal/overview" className="fa fa-skype"> </a>
                </div>
             
            </Box>
        )
    }

  
export default Boot
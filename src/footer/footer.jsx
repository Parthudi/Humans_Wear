import React,{useState} from "react"
import useSound from 'use-sound';
import cartoon from './audio/cartoon.mp3'
import './footer.css'

const Boot = () => {
    const [play, { stop }] = useSound(
        cartoon,
        { volume: 0.5 }
      );
    
      const [ , setIsHovering] = useState(false);
    
        return (
            <div className= "text-center center-block" style={{marginTop: "10rem"}}>

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
                    }} href="https://www.instagram.com/parth___thehuman"  className="fa fa-instagram"> </a>
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
            )
    }

  
export default Boot
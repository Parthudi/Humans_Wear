import React,{useState} from "react";
import useSound from 'use-sound';
import cartoon from '../audio/cartoon.mp3';
import {Box, Typography,Container} from "@material-ui/core";
import Marquee from "react-fast-marquee";
import '../components/styles.css';

const linkNameButton = [{link: "https://www.facebook.com/parth.parmar.3745496",className: "fa fa-facebook"},
    {link: "https://twitter.com",className: "fa fa-twitter"},
    {link: "https://www.google.com/search/contributions",className: "fa fa-google"},
    {link: "https://www.linkedin.com/in/parth-parmar-903136177",className: "fa fa-linkedin"},
    {link: "https://www.instagram.com/parth__thehuman",className: "fa fa-instagram"},
    {link: "https://www.snapchat.com",className: "fa fa-snapchat-ghost"},
    {link: "https://secure.skype.com/portal/overview",className: "fa fa-skype"}]

const NameValue = [{name: "Creator", value: "Parth Parmar"}, 
            {name: "Email", value: "parmarparth597@gmail.com"},
            {name: "Mobile Number", value: "8320416824"}];


const Boot = React.memo(() => {
    const [play, { stop }] = useSound(
        cartoon,
        { volume: 0.5 }
      );
    const [ , setIsHovering] = useState(false);
    return (
        <Container maxWidth="l" style={{backgroundColor: "rgb(218, 223, 227)"}}>
            <Box style={{left: "10px"}} className="multicolortext">
                {NameValue && NameValue.map(nameVal => (
                    <Typography variant="h6" style={{fontFamily: "Henny Penny , cursive"}}>
                        <light> {nameVal.name} </light> : <strong> {nameVal.value} </strong>
                    </Typography>
                ))}
            </Box>

            <Box className="text-center center-block adjustSizing" style={{marginTop: "3rem"}}>
                {linkNameButton && linkNameButton.map((linkButton) => (
                    <a  onMouseEnter={() => {setIsHovering(true); play()}} 
                        onMouseLeave={() => { setIsHovering(false); stop()}} 
                        href={`${linkButton.link}`} 
                        className={`${linkButton.className}`} /> ))}
            </Box>
         
            <Box mt={5}/>
            <Marquee>
                <p> Download the <b> Humans Wear App </b> and get extra ₹300 off. Use code: HWAPP300 </p>
            </Marquee>
        </Container>
    )
});

  
export default Boot
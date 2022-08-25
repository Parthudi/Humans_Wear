import React, {useEffect, memo} from "react";
import Header from "./Header";
import Footer from "../components/footer";
import {Divider,Box,makeStyles, Container} from "@material-ui/core"; 
import Aos from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.down("sm")]: {
        adjustSizing: {
            width: "520px"
          }
        }
    }));

const Layout = memo((props) => {
    const classes = useStyles();

    useEffect(() => {
        Aos.init({duration: 1000});
      }, []);
    
    return(
        <React.Fragment>
            <Header />
            <Box mb={15}/>
            {/* <Container maxWidth="xl"> */}
                <Box mt={5} mb={20}>
                    {props.children}
                </Box>
            {/* </Container> */}
            <Box className={classes.adjustSizing}>
                <Divider />
                <Footer />
            </Box>
        </React.Fragment>
    )
});

export default Layout;
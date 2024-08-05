import React, {useEffect, memo} from "react";
import Header from "./Header";
import Footer from "../components/footer";
import {Divider,Box,makeStyles} from "@material-ui/core"; 
import Aos from "aos";
import "aos/dist/aos.css";
import { getUser } from "./ApiCalls";

const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.down("sm")]: {
        adjustSizing: {
            width: "10rem"
          }
        }
    }));

const Layout = memo((props) => {
    const classes = useStyles();
    // const totalPrice = useSelector((state) => state.totalAmount);

    useEffect(() => {
        Aos.init({duration: 1000});        
      }, []);
    
    return(
        <React.Fragment>
            <Header />
            <Box mt={15} sx={{ minHeight: '100vh' }}>
                {props.children}
            </Box>
            <Box className={classes.adjustSizing}>
                <Divider />
                <Footer />
                </Box>
        </React.Fragment>
    )
});

export default Layout;
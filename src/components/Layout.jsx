import React from "react";
import Header from "./header/header";
import Footer from "../footer/footer";
import {Divider,Box} from "@material-ui/core"; 

const Layout = (props) => {
    return(
        <React.Fragment>
            <Header />
                <Box mt={5} mb={20}>
                    {props.children}
                </Box>
            <Divider />
            <Footer />
        </React.Fragment>
    )
}

export default Layout;
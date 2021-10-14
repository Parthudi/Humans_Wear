import React from "react";
import { makeStyles } from "@material-ui/core";
import {Typography,Fab,Box} from '@material-ui/core';
import {ShoppingCartOutlined, HomeOutlined} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    none: {
        color: "grey", 
        fontSize: "15px"
    },
    currentSlide:{
        color: "rgb(93, 192, 171)",
        fontWeight: "600"
    }
}));

const CartHeader = (props) => {
    const classes = useStyles();
    
    return(
        <Box mb={5} mt={5}>
            <Typography variant="body1" align="center" gutterBottom>
                <span className={props.bag === "bag" ? classes.currentSlide : classes.none}> 
                    <Fab size="small" disableRipple color={`${props.bag === "bag" ? "secondary" : "default"}`}>
                        <ShoppingCartOutlined fontSize="small"/>
                    </Fab> 
                    BAG 
                </span> 
                    ----------------- 
                <span className={props.bag === "address" ? classes.currentSlide : classes.none}> 
                    <Fab size="small" disableRipple color={`${props.bag === "address" ? "secondary" : "default"}`}>
                        <HomeOutlined fontSize="small"/>
                    </Fab> 
                    ADDRESS 
                </span>
                    ---------------- 
                <span className={props.bag === "payment" ? classes.currentSlide : classes.none}> 
                    <Fab size="small" disableRipple color={`${props.bag === "payment" ? "secondary" : "default"}`}>
                        <ShoppingCartOutlined fontSize="small"/>
                    </Fab> 
                    PAYMENT 
                </span>
            </Typography>
        </Box>
        
    )
}

export default CartHeader;
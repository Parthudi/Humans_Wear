import React from "react";
import { makeStyles } from "@material-ui/core";
import BgImage from "../assets/abstractBackground.jpg"

const useStyles = makeStyles((theme) => ({
    bg: {
        backgroundImage: `url(${BgImage})`,
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    }
}));

const Profile = React.memo(() => {
    const classes = useStyles();

    return(
        <div style={classes.bg}>
            <h1> PROFILE </h1>
        </div>
    )
});

export default Profile;
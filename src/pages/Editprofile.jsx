import React, {useEffect, useState} from "react";
import { makeStyles, Container, Box, Typography, Divider } from "@material-ui/core"; 
import Grid from '@mui/material/Grid';
import {getUser} from "../components/LocalStorageItems/User"; 
import UserDashboard from "../components/UserDashboard";

const useStyle = makeStyles((theme) => ({
    accountTitle: {
        margin: "1.5rem 0"
    },
    smallFont: {
        fontSize: '0.740rem', 
        marginBottom: "0.5rem"
    },
    divider: {
        marginRight: "1rem"
    },
    addCoursor: {
        cursor: "pointer"
    }
})); 

const EditProfile = React.memo(() => {
    const classes = useStyle()
    const [user, setUser] = useState({});

    useEffect(() => {
        const user = getUser();
        setUser(user);
    } , [user.is_authorized]);

    // const accountTitle = () => {
    //     return(
    //         <div>
    //             <Typography variant="body2" className={`${classes.accountTitle} ${classes.addCoursor}`}> Overview </Typography>
    //             <Divider className={classes.divider}/>
    //             <div className={classes.accountTitle}>
    //                 <Typography className={classes.smallFont}> ORDERS </Typography>
    //                 <Typography variant="body2" className={classes.addCoursor}> Orders & Returns </Typography>
    //             </div>
    //             <Divider className={classes.divider} />
    //             <div className={classes.accountTitle}>
    //                 <Typography className={classes.smallFont}> Account </Typography>
    //                 <Typography variant="body2" className={classes.addCoursor}> Profile </Typography>
    //                 <Typography variant="body2" className={classes.addCoursor}> Addresses </Typography>
    //                 <Typography variant="body2" className={classes.addCoursor}> Delete Account </Typography>
    //             </div>
    //             <Divider className={classes.divider} />
    //             <div className={classes.accountTitle}>
    //                 <Typography className={classes.smallFont}> LEGAL </Typography>
    //                 <Typography variant="body2" className={classes.addCoursor}> Terms of Use </Typography>
    //                 <Typography variant="body2" className={classes.addCoursor}> Privacy Policy </Typography>
    //             </div>
    //         </div>
    //     )
    // }

    return(
        <UserDashboard>
            <h6> HEY EDIT PROFILE </h6>
        </UserDashboard>
    )
});

export default EditProfile;
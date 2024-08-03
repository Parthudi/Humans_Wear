import React from 'react';
import {makeStyles, Avatar, Divider, ListItemIcon, Typography, Button} from "@material-ui/core";
import {withRouter} from 'react-router-dom';
import _ from "lodash";
import MenuItem from '@mui/material/MenuItem';
import LogoutOutlined from '@mui/icons-material/LogoutOutlined';

const useStyle = makeStyles((theme) => ({
       
    })); 
    
const ProfileDropdown = () => {
    const classes = useStyle();

    const loginPending = () => {
        return(
            <React.Fragment>
                <MenuItem>
                    <Typography> <b> Welcome </b> </Typography>
                </MenuItem>
                <MenuItem>
                    <Typography> To access account and manage orders </Typography>
                </MenuItem>
                <MenuItem>
                    <Button color='secondary' variant="outlined"> <b> LOGIN / SIGNUP </b> </Button>
                </MenuItem>
            </React.Fragment>
        )
    }

    const commanFeatures = () => {
        return(
            <React.Fragment>
                <MenuItem>
                    <Typography> Orders </Typography>
                </MenuItem>
                <MenuItem>
                    <Typography> Wishlist </Typography>
                </MenuItem>
                <MenuItem>
                    <Typography> Gift Cards </Typography>
                </MenuItem>
                <MenuItem>
                    <Typography> Contact Us </Typography>
                </MenuItem>
                <MenuItem>
                    <Typography> The Humans Wear Insider </Typography>
                </MenuItem>
            </React.Fragment>
        )
    }

    return (
        <React.Fragment>
                {loginPending()}
                {commanFeatures()}
            <MenuItem>
                <Avatar /> Profilesss
            </MenuItem>
            <MenuItem>
                <Avatar /> My account
            </MenuItem>
            <Divider />
            <MenuItem>
                <ListItemIcon>
                <LogoutOutlined fontSize="small" />
                </ListItemIcon>
                    Logout
            </MenuItem>
        </React.Fragment>
        );
    };

export default withRouter(ProfileDropdown);

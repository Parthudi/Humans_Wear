import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    [theme.breakpoints.down("sm")]: {
        AdjustSizing: {
            width: "520px",
        },
        dontFlex: {
            display: "block",
        }
    }
}));
import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    AdjustSizing: {
        padding: "30px 40px"
    },
    [theme.breakpoints.down("sm")]: {
        AdjustSizing: {
            width: "520px",
        },
        dontFlex: {
            display: "block",
        }
    }
}));
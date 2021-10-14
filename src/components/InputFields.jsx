import React, {Fragment} from "react";
import {TextField, makeStyles, Box} from "@material-ui/core";
import {at} from "lodash";
import {useField} from "formik";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';

const useStyles = makeStyles((theme) => ({
    inputField: {
        marginTop : theme.spacing(2)
    }
}));
const InputFieldAndValidations = ({showPadding = true, ...props}) => {
    // const [field, meta] = useField(props.name);
    const classes = useStyles();

    // const helperTextField = (showText = false) => {
    //     const [touched, error] = at(meta, "touched", "error");
    //     if(showText && touched && error){
    //         return error;
    //     }else{
    //         return Boolean(touched) && Boolean(error);
    //     }
    // }

    return(
        <Fragment>
                    {showPadding && <Box height={15}/>}
                    <TextField
                        variant = "outlined"
                        label = {props.label}
                        name = {props.name}
                        value = {props.value}
                        onChange = {props.onChange}
                        required = {props.required}
                        type= {props.type}
                        fullWidth = {props.fullWidth}
                        onBlur = {props.onBlur}
                        error = {props.error}
                        helperText={props.helperText}
                    />
        </Fragment>
    )
}

export default InputFieldAndValidations;
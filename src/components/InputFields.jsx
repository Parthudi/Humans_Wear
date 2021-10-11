import React, {Fragment} from "react";
import {TextField, makeStyles, Box} from "@material-ui/core";
import {at} from "lodash";
import {useField} from "formik";

const useStyles = makeStyles((theme) => ({
    inputField: {
        marginTop : theme.spacing(2)
    }
}));
const InputFieldAndValidations = ({showPadding= true, ...props}) => {
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
                        endAdornment = {props.endAdornment}
                        // {...field}
                        // error = {helperTextField()}
                        // helperText={helperTextField(true)}
                    />
        </Fragment>
    )
}

export default InputFieldAndValidations;
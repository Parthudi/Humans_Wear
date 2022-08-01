import React from "react";
import {Box, FormControl, InputLabel, OutlinedInput} from "@material-ui/core";

const FormControlComponent = React.memo((props) => {
    return(
        <div>
            <Box height={20} />
            <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor={props.htmlFor}> {props.inputLabel} </InputLabel>
                <OutlinedInput
                    id={props.htmlFor}
                    type={props.type}
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                    endAdornment={props.endAdornment}
                />
            </FormControl>
        </div>
        )
    });

export default FormControlComponent;
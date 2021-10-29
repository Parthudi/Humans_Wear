import React, {useState} from "react";
import {Container} from "@material-ui/core";
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import CardContaint from "./CardContains";
import PaymentRadio from "./PaymentRadio";


const RadioOption = (props) => {
    const [value, setValue] = useState(0);
  
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return(
            <Container>
                {props.options && props.options.length > 0 && props.options.map((option, i) => (
                    <FormControl component="fieldset" key={i} >
                        <RadioGroup
                            name={props.name}
                            value={value}
                            onChange={(e) => handleChange(e)}
                            labelPlacement="top">
                                {props.radioFor === "Address" && <CardContaint key={i} index={i} town={option.town} name={option.name} pincode={option.pincode} state={option.state} address={option.address} city={option.city} mobile={option.mobile} />}
                                {props.radioFor === "Payment" && <PaymentRadio key={i} index={i} icon={option.icon} paymentBy={option.paymentBy} name={props.name} />}
                        </RadioGroup>
                    </FormControl>
                ))}
            </Container>
        )
    }

export default RadioOption;
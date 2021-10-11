import {object, string,number} from "yup";

export const Form_Validation = {
    name: string().required("Please Enter Name").min(3, "Name To Short").max(25, "Name To Big"),
    mobile: string().required("Please Enter Mobile Number").min(10,"Please Enter 10 digits Mobile Number").max(10, "Please Enter 10 digits Mobile Number"),
    pincode: string().required("Please Enter Pincode").min(6, "PinCode To Short").max(6, "PinCode To Big"),
    address: string().required("Please Enter Address"),
    town: string().required("Please Enter Town"),
    city: string().required("Please Enter City"),
    state: string().required("Please Enter State") 
}



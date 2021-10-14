import {object, string,number} from "yup";
import * as Yup from "yup";

export const Form_Validation = {
    name: string().required("Please Enter Name").min(3, "Name To Short").max(25, "Name To Big"),
    mobile: string().required("Please Enter Mobile Number").min(10,"Please Enter 10 digits Mobile Number").max(10, "Please Enter 10 digits Mobile Number"),
    pincode: string().required("Please Enter Pincode").min(6, "PinCode To Short").max(6, "PinCode To Big"),
    address: string().required("Please Enter Address"),
    town: string().required("Please Enter Town"),
    city: string().required("Please Enter City"),
    state: string().required("Please Enter State") 
}

export const SignupSchema = Yup.object().shape({
    displayName: Yup.string().required("Please Enter Name").min(3, "Name To Short").max(25, "Name To Big"),
    email: Yup.string().email('Invalid email').required('Email Is Required'),
    password: Yup.string().required("Password is required").min(5, "Name To Short").max(25, "Name To Big"),
    confirmpassword: Yup.string().required("Confirm Password is required").min(5, "Name To Short").max(25, "Name To Big"),
  });
    // if(nameField === "name") {
    //     if(typeof(value) !== string){
    //         return "Please Enter Valid Name";
    //     }
    //     if(value === ""){
    //         return "Please Enter Name";
    //     }
    //     if(value.length <= 3){
    //         return "Name To Short";
    //     }
    //     if(value.length >= 25){
    //         return "Name To Big";
    //     }
    //     return false;
    // }

    // if(nameField === "mobile") {
    //     if(typeof(value) !== number){
    //         return "Please Enter Valid Number";
    //     }
    //     if(value === ""){
    //         return "Please Enter Mobile Number";
    //     }
    //     if((value).toString().length !== 10){
    //         return "Mobile Number Must Be Of 10 Digits";
    //     }
    //     return false;
    // }

    // if(nameField === "pincode") {
    //     if(typeof(value) !== string){
    //         return "Please Enter Valid PinCode";
    //     }
    //     if(value === ""){
    //         return "Please Enter PinCode";
    //     }
    //     if((value).toString().length !== 6){
    //         return "PinCode Must Be Of 6 Digits";
    //     }
    //     return false;
    // }
        
    // if(nameField === "address") {
    //     if(typeof(value) !== string){
    //         return "Please Enter Valid Address";
    //     }
    //     if(value === ""){
    //         return "Please Enter Address";
    //     }
    //     return false;
    // }
            
    // if(nameField === "town") {
    //     if(typeof(value) !== string){
    //         return "Please Enter Valid town";
    //     }
    //     if(value === ""){
    //         return "Please Enter town";
    //     }
    // }

    // if(nameField === "city") {
    //     if(typeof(value) !== string){
    //         return "Please Enter Valid City";
    //     }
    //     if(value === ""){
    //         return "Please Enter City";
    //     }
    // }

    // if(nameField === "state") {
    //     if(typeof(value) !== string){
    //         return "Please Enter Valid State";
    //     }
    //     if(value === ""){
    //         return "Please Enter State";
    //     }
    // }   
// }

// export const name = (value) => {
//     if(typeof(value) !== string){
//         return {error: true, message: "Please Enter Valid Name"};
//     }
//     if(value === ""){
//         return {error: true, message: "Please Enter Name"};
//     }
//     if(value.length <= 3){
//         return {error: true, message: "Name To Short"};
//     }
//     if(value.length >= 25){
//         return {error: true, message: "Name To Big"};
//     }
//     return false;
// }

// export const mobile = (value) => {
//     if(typeof(value) !== number){
//         return {error: true, message: "Please Enter Valid Number"};
//     }
//     if(value === ""){
//         return {error: true, message: "Please Enter Mobile Number"};
//     }
//     if((value).toString().length !== 10){
//         return {error: true, message: "Mobile Number Must Be Of 10 Digits"};
//     }
//     return false;
// }

// export const pincode = (value) => {
//     if(typeof(value) !== string){
//         return {error: true, message: "Please Enter Valid PinCode"};
//     }
//     if(value === ""){
//         return {error: true, message: "Please Enter PinCode"};
//     }
//     if((value).toString().length !== 6){
//         return {error: true, message: "PinCode Must Be Of 6 Digits"};
//     }
//     return false;
// }

// export const address = (value) => {
//     if(typeof(value) !== string){
//         return {error: true, message: "Please Enter Valid Address"};
//     }
//     if(value === ""){
//         return {error: true, message: "Please Enter Address"};
//     }
//     return false;
// }

// export const town = (value) => {
//     if(typeof(value) !== string){
//         return {error: true, message: "Please Enter Valid Address"};
//     }
//     if(value === ""){
//         return {error: true, message: "Please Enter Address"};
//     }
// }

// export const city = (value) => {
//     if(typeof(value) !== string){
//         return {error: true, message: "Please Enter Valid City"};
//     }
//     if(value === ""){
//         return {error: true, message: "Please Enter City"};
//     }
// }

// export const state = (value) => {
//     if(typeof(value) !== string){
//         return {error: true, message: "Please Enter Valid State"};
//     }
//     if(value === ""){
//         return {error: true, message: "Please Enter State"};
// }

import React from "react";

export const Form_Validation = React.memo((values) => {
    let error = {};

    if(values.username) {
      if(!values.username){
        error.username = "Name Is Required";
      }else if(values.username.length < 4){
        error.username = "Name To Short"
      }else if(values.username.length > 25){
        error.username = "Name To Big"
      }
    }

    if(values.email) {
      if(!values.email){
        error.email = "Email Is Required";
      }else if(!/\S+@\S+\.\S+/.test(values.email)){
        error.email = "Email Is Invalid"
      }
    }
    
    if(values.password){
      if(!values.password){
        error.password = "Password Is Required";
      }else if(values.password.length < 5){
        error.password = "Password Must Be 5 Characters Long"
      }
    }

    if(values.confirmpassword){
      if(!values.confirmpassword){
        error.confirmpassword = "Confirm Password Is Required";
      }else if(values.confirmpassword.length < 5){
        error.confirmpassword = "Confirm Password Must Be 5 Characters Long"
      }else if(values.password !== values.confirmpassword){
        error.confirmpassword = "Password And ConfirmPassword Didnot Match"
        error.password = "Password And ConfirmPassword Didnot Match"
      }
    }

    return error;
});

export const SigninSchema = React.memo((values) => {
  let error = {};

  if(values.email) {
    if(!values.email){
      error.email = "Email Is Required";
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
      error.email = "Email Is Invalid"
    }
  }
  
  if(values.password){
    if(!values.password){
      error.password = "Password Is Required";
    }else if(values.password.length < 5){
      error.password = "Password Must Be 5 Characters Long"
    }
  }

  return error;
});
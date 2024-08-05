import {USERAPI} from "../config";

export const RegisterUser = (data) => {
    try{
        return fetch(`${USERAPI}/register`, {
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
                },   
            body: JSON.stringify(data)
        }).then(response => response.json())
    }catch(error) {               
        console.log(error)
        return {message: error};
    }  
};

export const LoginUser = (data) => {
    try{
        return fetch(`${USERAPI}/login`, {
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
                },   
            body: JSON.stringify(data)
        }).then(response => response.json());
    }catch(error) {               
        console.log(error);
        return {message: error};
    }  
};

export const getUser = (userId, token) => {
    try{
        return fetch(`${USERAPI}/${userId}`, {
            method: "GET",
            headers: {
                    "Content-Type": "application/json",
                    "Authorization" :  `Bearer ${token}`,
                }
        }).then(response => response.json());
    }catch(error) {               
        console.log(error);
        return {message: error};
    }  
};

export const CreateAddress = (data) => {
    try{
        return fetch(`${USERAPI}/address`, {
            method: "POST",
            headers: {
                    "Content-Type": "application/json",
                },   
            body: JSON.stringify(data)
        }).then(response => response.json());
    }catch(error) {               
        console.log(error);
        return {message: error};
    }  
};

export const getAddress = (userId, token) => {
    try{
        return fetch(`${USERAPI}/address/${userId}`, {
            method: "GET",
            headers: {
                    "Content-Type": "application/json",
                    "Authorization" :  `Bearer ${token}`,
                }
        }).then(response => response.json());
    }catch(error) {               
        console.log(error);
        return {message: error};
    }  
};

export const deleteAddress = (addressId) => {
    try{
        return fetch(`${USERAPI}/address/${addressId}`, {
            method: "DELETE",
            headers: {
                    "Content-Type": "application/json",
                }
        }).then(response => response.json());
    }catch(error) {               
        console.log(error);
        return {message: error};
    }  
};
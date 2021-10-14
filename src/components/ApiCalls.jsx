export const RegisterUser = (data) => {
    try{
        return fetch(`http://localhost:3001/v1/users/register`, {
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
}

export const LoginUser = (data) => {
    try{
        return fetch(`http://localhost:3001/v1/users/login`, {
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
}
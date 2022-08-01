import validator from "jsonschema";

export default class RequestValidator {

    static RegisterUser(body:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: {
                    username: {type: "string"},
                    email: {type: "string"},
                    password: {type: "string"},
                    confirmpassword: {type: "string"}
                },
                required: ["username","email","password","confirmpassword"]
            };
            const result = validator.validate(body,schema);
            result.valid ? resolve(body) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    }
    
    static LoginUser(body:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: {
                    email: {type: "string"},
                    password: {type: "string"}
                },
                required: ["email","password"]
            };
            const result = validator.validate(body,schema);
            result.valid ? resolve(body) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    }

    static LogoutUser(body:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: {
                    id: {type: "string"},
                },
                required: ["id"]
            };
            const result = validator.validate(body, schema);
            result.valid ? resolve(body) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    }

    static address(body:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: {
                    placetype: {type: "string"},
                    mobile: {type: "string"},
                    pincode: {type: "string"},
                    address: {type: "string"},
                    town: {type: "string"},
                    city: {type: "string"},
                    state: {type: "string"},
                    modeofpayment: {type: "string"}
                },
                required: ["placetype","mobile","pincode","address","town","city","state","modeofpayment"]
            };
            const result = validator.validate(body, schema);
            result.valid ? resolve(body) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    }

    static getaddress(body:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: {
                    id: {type: "string"}
                },
                required: ["id"]
            };
            const result = validator.validate(body, schema);
            result.valid ? resolve(body) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    }

}


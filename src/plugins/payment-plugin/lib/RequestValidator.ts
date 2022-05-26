import validator from "jsonschema";

export default class RequestValidator {

    static payment(body:any) {
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
}


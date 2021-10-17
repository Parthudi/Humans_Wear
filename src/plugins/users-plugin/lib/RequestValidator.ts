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

    static productSearch(query:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: {
                    fulfillmentpartnerId: {type: "string"},
                    storeId : {type: "string"},
                    q : {type: "string"},
                    limit : {type: "sring"},
                    userId : {type: "string"}
                },
                required: ["userId"]
            };
            const result = validator.validate(query, schema);
            result.valid ? resolve(query) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    }

    static storesconfig(query:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: { 
                    fulfillmentpartnerId : {type: "string"},
                },
                required: ["fulfillmentpartnerId"]

            };
            const result = validator.validate(query,schema);
            result.valid ? resolve(query) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    } 
    
    static storeOrders(body:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: { 
                    storeId : {type: "number"},
                    partyCode : {type: "string"},
                    userId : {type: "number"},
                    fulfillmentpartnerId : {type: "number"},
                    quantity : {type: "string"},
                    productCode : {type: "string"},
                    PTR : {type: "number"}
                },
                required: ["retailerId", "userId", "fulfillmentpartnerId"]

            };
            const result = validator.validate(body,schema);
            result.valid ? resolve(body) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    } 

    static orders(query:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: { 
                    userId: {type: "string"},
                    storeId : {type: "string"},
                    fulfillmentpartnerId : {type: "string"},
                    retailerId : {type: "string"},
                    partycode : {type: "string"},
                    orderNo : {type: "string"},
                    from : {type: "string"},
                    to : {type: "string"}
                },
                required: ["userId"]

            };
            const result = validator.validate(query,schema);
            result.valid ? resolve(query) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    }   

    static orderDetails(query:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: { 
                    orderId: {type: "string"},
                },
                required: ["orderId"]

            };
            const result = validator.validate(query,schema);
            result.valid ? resolve(query) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    } 

    static orderNotification(query:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: {
                    userId: {type: "string"},
                    storeId: {type: "string"},
                    distributorId: {type: "string"},
                    from: {type: "string"},
                    to: {type: "string"}
                },
                required: ["userId"]
            };
            const result = validator.validate(query,schema);
            result.valid ? resolve(query) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    }
 
     static saveDraft(body:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: { 
                    storeId : {type: "number"},
                    userId : {type: "number"},
                    partyCode : {type: "string"},
                    remarks : {type: "string"},
                    modifieddate : {type: "string"},
                    orderTimeStamp : {type: "string"},
                    deliveryOption : {type: "string"},
                    productCode : {type: "string"},
                    quantity : {type: "string"},
                    isConfirmed : {type : "boolean"},
                    orderGUID : {type: "string"}
                },
                required: [ "userId" ]

            };
            const result = validator.validate(body,schema);
            result.valid ? resolve(body) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    } 
    
    static updateDraftOrders(body:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: { 
                    storeId : {type: "number"},
                    userId : {type: "number"},
                    partyCode : {type: "string"},
                    remarks : {type: "string"},
                    modifieddate : {type: "string"},
                    orderTimeStamp : {type: "string"},
                    deliveryOption : {type: "string"},
                    productCode : {type: "string"},
                    quantity : {type: "string"},
                    isConfirmed : {type : "boolean"},
                    orderGUID : {type: "string"}
                },
                required: [ "userId" ]

            };
            const result = validator.validate(body,schema);
            result.valid ? resolve(body) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    } 

    static drafts(query:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: { 
                    userId: {type: "string"},
                    storeId : {type: "string"},
                    fulfillmentpartnerId : {type: "string"},
                    retailerId : {type: "string"},
                    partycode : {type: "string"},
                    orderNo : {type: "string"},
                    from : {type: "string"},
                    to : {type: "string"},
                },
                required: ["userId"]

            };
            const result = validator.validate(query,schema);
            result.valid ? resolve(query) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    }  
    
    static draftOrderDetails(query:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: { 
                    draftOrderId: {type: "string"},
                },
                required: ["draftOrderId"]

            };
            const result = validator.validate(query,schema);
            result.valid ? resolve(query) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    } 
    
    static mappedResult(query:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: { 
                    userId: {type: "string"},
                },
                required: ["userId"]

            };
            const result = validator.validate(query,schema);
            result.valid ? resolve(query) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    } 
    
    static getRetailerId(query:any) {
        return new Promise((resolve,reject) => {
            const schema = {
                type:"object",
                properties: { 
                    storeId: {type: "string"},
                    partyCode: {type: "string"}
                },
                required: ["storeId", "partyCode"]

            };
            const result = validator.validate(query,schema);
            result.valid ? resolve(query) : reject({message: `Required fields${result.errors.map((err) => { return ` ${err.argument}`;})}`, code: 400});
        });
    } 

}


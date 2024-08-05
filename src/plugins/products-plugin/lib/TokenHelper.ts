import { NextFunction } from "express";
import * as JWT from "jsonwebtoken";
import appConfig from "../config/index";

export default class TokenHelper {
    
    static generateToken() : Promise<any> {
        return new Promise(async (resolve,reject) => {
            try {
                const token = await JWT.sign({},appConfig.get("auth:private_key"), {expiresIn: "1h"});
                resolve(token);
            } catch(error) {
                reject(error);
            }
        });
    }

    static validateToken(req: Request, res: Response, next:NextFunction) : Promise<any> {
        return new Promise(async (resolve,reject) => {
            try {
                // console.log(req.headers["Authorization"].replace("Bearer ", ""), "------------");
                const authToken = await req.headers["Authorization"].replace("Bearer ", "");
                // const token = await Token.validateToken(authToken) ;
                // let result;
                // if(!_.isEmpty(token)){
                //     result = await UserOperator.getAddress(data);
                // }
                // const sessionDetails = await JWT.verify(token, appConfig.get("auth:private_key"));
                console.log(`SESSION :- ${JSON.stringify(authToken)}`);
                // resolve(sessionDetails);
                next();
            } catch(error) {
                reject(error);
            }
        });
    }

}
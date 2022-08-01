import  {Request, Response} from "express";
import UserOperator from "../operator/UserOperator";
import RequestValidator from "../lib/RequestValidator";
import ResponseHandler from "../lib/ResponseHandler";
import config from "../config/index";
import Token from "../lib/TokenHelper";
import _ from "lodash";

export default class UserController {

  static async RegisterUser(req: Request, res: Response) {
    try{
      const data = req.body || {};
      await RequestValidator.RegisterUser(data);
      const result = await UserOperator.createUser(data);
      return ResponseHandler.sendSuccess(res, result, 201);
    }catch(error){
      console.log(error);
      return ResponseHandler.sendError(res, error);
    }
  }

  static async LoginUser(req: Request, res: Response) {
    try{
      const data = req.body || {};
      await RequestValidator.LoginUser(data);
      const result = await UserOperator.loginUser(data);
      return ResponseHandler.sendSuccess(res, result, 201);
    }catch(error){
      console.log(error);
      return ResponseHandler.sendError(res, error);
    }
  }
  
  static async LogoutUser(req: Request, res: Response) {
    try{
      const data = req.params || {};
      // const token = await token.validateToken(req.header('Authorization')) ;
      // const token  = req.header('Authorization').replace('Bearer ', '');
      await RequestValidator.LogoutUser(data);
      const result = await UserOperator.LogoutUser(data);
      return ResponseHandler.sendSuccess(res, result, 201);
    }catch(error){
      console.log(error);
      return ResponseHandler.sendError(res, error);
    }
  }
  
  static async AddAddress(req: Request, res: Response) {
    try{
      const data = req.body || {};
      await RequestValidator.address(data);
      const result = await UserOperator.addAddress(data);
      return ResponseHandler.sendSuccess(res, result, 201);
    }catch(error){
      console.log(error);
      return ResponseHandler.sendError(res, error);
    }
  }
  
  static async getAddress(req: Request, res: Response) {
    try{
      const data = req.params || {};
      await RequestValidator.getaddress(data);
      // const authToken = req.header("Authorization").replace("Bearer ", "");
      // const token = await Token.validateToken(authToken) ;
      let result;
      // if(!_.isEmpty(token)){
        result = await UserOperator.getAddress(data);
      // }
      return ResponseHandler.sendSuccess(res, result, 201);
    }catch(error){
      console.log(error);
      return ResponseHandler.sendError(res, error);
    }
  }

  static async deleteAddress(req: Request, res: Response) {
    try{
      const data = req.params || {};
      await RequestValidator.getaddress(data);
      const result = await UserOperator.removeAddress(data);
      return ResponseHandler.sendSuccess(res, result, 201);
    }catch(error){
      console.log(error);
      return ResponseHandler.sendError(res, error);
    }
  }
}
